"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { createClient as createServerSupabase } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { findModel, type FieldGroup, type ModelConfig } from "./admin-schema";

// Prisma's delegate methods aren't easily indexable by a dynamic string in a
// type-safe way, so the unsafe cast is isolated to this one accessor rather
// than scattered across every action below.
function delegate(modelName: string) {
  const client = prisma as unknown as Record<string, PrismaModelDelegate>;
  const d = client[modelName];
  if (!d) throw new Error(`Unknown model: ${modelName}`);
  return d;
}

interface PrismaModelDelegate {
  findUnique: (args: { where: { id: number | string } }) => Promise<Record<string, unknown> | null>;
  findMany: (args?: { orderBy?: { order: "asc" } }) => Promise<Record<string, unknown>[]>;
  update: (args: { where: { id: number | string }; data: Record<string, unknown> }) => Promise<unknown>;
  upsert: (args: {
    where: { id: number | string };
    create: Record<string, unknown>;
    update: Record<string, unknown>;
  }) => Promise<unknown>;
  create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
  delete: (args: { where: { id: number | string } }) => Promise<unknown>;
}

async function requireAdmin() {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
}

/** Parses one field group's submitted value(s) out of a FormData payload. */
function parseFieldValue(field: FieldGroup, formData: FormData): Record<string, unknown> {
  if (field.enKey || field.arKey) {
    const out: Record<string, unknown> = {};
    if (field.enKey) out[field.enKey] = readScalar(field, formData, field.enKey);
    if (field.arKey) out[field.arKey] = readScalar(field, formData, field.arKey);
    return out;
  }
  if (!field.key) return {};
  return { [field.key]: readScalar(field, formData, field.key) };
}

function readScalar(field: FieldGroup, formData: FormData, name: string): unknown {
  const raw = formData.get(name);
  switch (field.type) {
    case "number":
      return raw ? Number(raw) : 0;
    case "boolean":
      return raw === "on" || raw === "true";
    case "list":
      return String(raw ?? "")
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
    default:
      return String(raw ?? "");
  }
}

function buildData(model: ModelConfig, formData: FormData) {
  let data: Record<string, unknown> = {};
  for (const field of model.fields) {
    data = { ...data, ...parseFieldValue(field, formData) };
  }
  return data;
}

// ---------------------------------------------------------------------------
// Singleton records (Doctor, Contact, GlobalSettings, IntroVideo)
// ---------------------------------------------------------------------------
export async function updateSingleton(modelName: string, formData: FormData) {
  await requireAdmin();
  const model = findModel(modelName);
  if (!model || model.kind !== "singleton") throw new Error(`Not a singleton model: ${modelName}`);

  const data = buildData(model, formData);
  await delegate(modelName).upsert({ where: { id: 1 }, create: { id: 1, ...data }, update: data });

  revalidatePath("/", "layout");
}

// ---------------------------------------------------------------------------
// Collection records (Condition, Service, Article, ...)
// ---------------------------------------------------------------------------
export async function updateCollectionItem(
  modelName: string,
  id: string,
  redirectTo: string | null,
  formData: FormData,
) {
  await requireAdmin();
  const model = findModel(modelName);
  if (!model || model.kind !== "collection") throw new Error(`Not a collection model: ${modelName}`);

  const data = buildData(model, formData);
  await delegate(modelName).update({ where: { id }, data });

  revalidatePath("/", "layout");
  if (redirectTo) redirect(redirectTo);
}

export async function createCollectionItem(modelName: string, redirectTo: string | null, formData: FormData) {
  await requireAdmin();
  const model = findModel(modelName);
  if (!model || model.kind !== "collection") throw new Error(`Not a collection model: ${modelName}`);

  const rows = await delegate(modelName).findMany();
  const nextOrder = rows.reduce((max, r) => Math.max(max, Number(r.order ?? 0)), 0) + 1;

  const data = buildData(model, formData);
  await delegate(modelName).create({ data: { ...data, order: nextOrder } });

  revalidatePath("/", "layout");
  if (redirectTo) redirect(redirectTo);
}

export async function deleteCollectionItem(modelName: string, id: string) {
  await requireAdmin();
  const model = findModel(modelName);
  if (!model || model.kind !== "collection") throw new Error(`Not a collection model: ${modelName}`);

  await delegate(modelName).delete({ where: { id } });

  revalidatePath("/", "layout");
}

// ---------------------------------------------------------------------------
// ContentField (Hero/CTA/heading copy, nav labels, etc.)
// ---------------------------------------------------------------------------
export async function updateContentField(namespace: string, key: string, formData: FormData) {
  await requireAdmin();
  const valueEn = String(formData.get("valueEn") ?? "");
  const valueAr = String(formData.get("valueAr") ?? "");

  await prisma.contentField.upsert({
    where: { namespace_key: { namespace, key } },
    create: { namespace, key, valueEn, valueAr },
    update: { valueEn, valueAr },
  });

  revalidatePath("/", "layout");
}

// ---------------------------------------------------------------------------
// Image upload — Supabase Storage, "site-images" bucket
// ---------------------------------------------------------------------------
export async function uploadImage(formData: FormData): Promise<{ url?: string; error?: string }> {
  await requireAdmin();
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) return { error: "No file provided." };
  if (!file.type.startsWith("image/")) return { error: "File must be an image." };
  if (file.size > 8 * 1024 * 1024) return { error: "Image must be under 8MB." };

  const admin = createAdminClient();
  const ext = file.name.split(".").pop() || "jpg";
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await admin.storage.from("site-images").upload(path, file, {
    contentType: file.type,
    upsert: false,
  });
  if (error) return { error: error.message };

  const { data } = admin.storage.from("site-images").getPublicUrl(path);
  return { url: data.publicUrl };
}
