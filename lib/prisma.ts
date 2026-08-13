import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

// Runtime queries use the pooled connection (DATABASE_URL, PgBouncer
// transaction mode) via an explicit driver adapter — Prisma 7's
// prisma-client generator no longer resolves a datasource URL implicitly.
// Migrations (prisma.config.ts) use the separate direct connection instead.
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
