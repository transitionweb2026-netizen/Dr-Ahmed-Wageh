import { createBrowserClient } from "@supabase/ssr";

// Browser client — used only by the login form's client-side sign-in call.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
