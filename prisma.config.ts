import { config } from "dotenv";
import { defineConfig } from "prisma/config";

// Prisma's CLI (migrate/db push/studio) doesn't auto-load .env.local, so we
// point dotenv at it explicitly — this keeps one env file for both the CLI
// and the Next.js app instead of duplicating values across .env/.env.local.
config({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    // Migrations need the direct (non-pooled) connection — Supabase's
    // pgbouncer transaction-mode pooler doesn't support the multi-statement
    // transactions/advisory locks migrate uses. The app's runtime
    // PrismaClient (lib/prisma.ts) connects with the pooled DATABASE_URL
    // instead, passed explicitly at instantiation.
    // process.env, not the strict env() helper — lets `prisma generate`
    // (pure codegen, no DB connection needed) work before .env.local exists.
    // Commands that actually connect (migrate/db push/studio) will fail with
    // a clear connection error if DIRECT_URL is still unset at that point.
    url: process.env.DIRECT_URL,
  },
});
