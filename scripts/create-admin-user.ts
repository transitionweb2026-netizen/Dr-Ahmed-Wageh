/**
 * One-off script to create the single /admin account via Supabase Auth's
 * admin API — no public signup route exists. Run once:
 *
 *   npx tsx scripts/create-admin-user.ts
 *
 * Reads ADMIN_EMAIL / ADMIN_PASSWORD from .env.local. Re-running with the
 * same email is safe (updates the password instead of erroring).
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { createAdminClient } from "../lib/supabase/admin";

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) {
    throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD in .env.local first.");
  }

  const supabase = createAdminClient();

  const { data: existing } = await supabase.auth.admin.listUsers();
  const existingUser = existing?.users.find((u) => u.email === email);

  if (existingUser) {
    const { error } = await supabase.auth.admin.updateUserById(existingUser.id, { password });
    if (error) throw error;
    console.log(`Updated password for existing admin user: ${email}`);
    return;
  }

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });
  if (error) throw error;
  console.log(`Created admin user: ${email} (id: ${data.user?.id})`);
  console.log("You can now log in at /admin/login. Consider rotating this password afterwards.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
