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
    case "date":
      // Falls back to now() rather than an invalid Date when left blank —
      // matches the DB-level default so this can never fail validation.
      return raw ? new Date(String(raw)) : new Date();
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
// Image/video upload — Supabase Storage, via signed upload URLs.
//
// Vercel's Serverless Functions enforce their own hard request-body limit
// (~4.5MB) beneath whatever Next.js's own serverActions.bodySizeLimit
// allows — a Server Action that receives the raw file bytes (the previous
// approach here) works in `next dev` but fails in production for any real
// video and many images. Instead, this action only issues a short-lived
// signed upload URL/token; the browser then uploads the file bytes
// directly to Supabase Storage (see ImageField/VideoField), never routing
// them through a Vercel function at all.
// ---------------------------------------------------------------------------
const UPLOAD_RULES = {
  "site-images": { prefix: "image/", maxBytes: 8 * 1024 * 1024, label: "Image", maxLabel: "8MB", fallbackExt: "jpg" },
  "site-videos": { prefix: "video/", maxBytes: 50 * 1024 * 1024, label: "Video", maxLabel: "50MB", fallbackExt: "mp4" },
} as const;

export async function createUploadTicket(
  bucket: keyof typeof UPLOAD_RULES,
  fileName: string,
  contentType: string,
  fileSize: number
): Promise<{ path: string; token: string; publicUrl: string } | { error: string }> {
  await requireAdmin();
  const rules = UPLOAD_RULES[bucket];
  if (!rules) return { error: "Unknown upload target." };
  if (fileSize === 0) return { error: "No file provided." };
  if (!contentType.startsWith(rules.prefix)) return { error: `File must be a ${rules.label.toLowerCase()}.` };
  if (fileSize > rules.maxBytes) return { error: `${rules.label} must be under ${rules.maxLabel}.` };

  const admin = createAdminClient();
  const ext = fileName.split(".").pop() || rules.fallbackExt;
  const path = `${crypto.randomUUID()}.${ext}`;

  const { data, error } = await admin.storage.from(bucket).createSignedUploadUrl(path);
  if (error || !data) return { error: error?.message ?? "Could not prepare the upload." };

  const { data: pub } = admin.storage.from(bucket).getPublicUrl(path);
  return { path: data.path, token: data.token, publicUrl: pub.publicUrl };
}
