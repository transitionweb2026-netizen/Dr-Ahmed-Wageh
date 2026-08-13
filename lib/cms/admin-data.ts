import { prisma } from "@/lib/prisma";
import type { PageConfig, TextGroup } from "./admin-schema";

interface PrismaReadDelegate {
  findMany: (args?: { orderBy?: { order: "asc" } }) => Promise<Record<string, unknown>[]>;
  findUnique: (args: { where: { id: number | string } }) => Promise<Record<string, unknown> | null>;
}

function delegate(modelName: string) {
  const client = prisma as unknown as Record<string, PrismaReadDelegate>;
  const d = client[modelName];
  if (!d) throw new Error(`Unknown model: ${modelName}`);
  return d;
}

export async function getCollectionRows(modelName: string) {
  const rows = await delegate(modelName).findMany({ orderBy: { order: "asc" } });
  return rows;
}

export async function getSingletonRow(modelName: string) {
  const row = await delegate(modelName).findUnique({ where: { id: 1 } });
  return row ?? {};
}

export async function getCollectionRow(modelName: string, id: string) {
  return delegate(modelName).findUnique({ where: { id } });
}

/** Fetches every ContentField row belonging to a TextGroup, sorted by key. */
export async function getTextGroupFields(group: TextGroup) {
  const rows = await prisma.contentField.findMany({
    where: {
      namespace: group.namespace,
      ...(group.keyPrefix ? { key: { startsWith: `${group.keyPrefix}.` } } : {}),
    },
    orderBy: { key: "asc" },
  });
  return rows;
}

export function findPage(slug: string, pages: PageConfig[]): PageConfig | undefined {
  return pages.find((p) => p.slug === slug);
}
