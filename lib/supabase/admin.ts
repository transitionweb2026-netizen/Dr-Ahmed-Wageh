import { createClient } from "@supabase/supabase-js";

/**
 * Service-role client — bypasses RLS, can manage auth users and write to
 * Storage. Used from Server Actions and one-off scripts only — never import
 * this from a "use client" file. SUPABASE_SERVICE_ROLE_KEY is never
 * NEXT_PUBLIC_-prefixed, so it can't be inlined into a client bundle even
 * by accident, but keep the import server-side by convention regardless.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }
  return createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
