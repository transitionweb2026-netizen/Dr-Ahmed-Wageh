import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

// SSR client for Server Components/Actions — respects the current admin's
// session (subject to Supabase Auth rules), unlike lib/supabase/admin.ts's
// service-role client which bypasses everything.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {
            // Called from a Server Component render, where cookies can't be
            // set — harmless as long as proxy.ts is refreshing the session.
          }
        },
      },
    }
  );
}
