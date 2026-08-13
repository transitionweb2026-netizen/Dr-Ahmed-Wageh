import Link from "next/link";
import { redirect } from "next/navigation";
import { LayoutDashboard, LogOut, Settings2 } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { PAGES } from "@/lib/cms/admin-schema";
import { signOut } from "./actions";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  return (
    <div className="flex min-h-full">
      <aside className="flex w-64 shrink-0 flex-col border-r border-slate-200 bg-white">
        <div className="flex items-center gap-2 border-b border-slate-100 px-6 py-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <LayoutDashboard className="h-4 w-4" strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-sm font-semibold text-brand-950">Content Admin</p>
            <p className="text-xs text-slate-400">Dr. Ahmed Wagih</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <Link
            href="/admin"
            className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand-700"
          >
            Dashboard
          </Link>

          <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Pages</p>
          <div className="mt-1 flex flex-col gap-0.5">
            {PAGES.map((page) => (
              <Link
                key={page.slug}
                href={`/admin/pages/${page.slug}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand-700"
              >
                {page.label}
              </Link>
            ))}
          </div>

          <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Site-wide</p>
          <Link
            href="/admin/global"
            className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand-700"
          >
            <Settings2 className="h-4 w-4" strokeWidth={1.8} />
            Global Settings
          </Link>
        </nav>

        <div className="border-t border-slate-100 px-3 py-4">
          <p className="truncate px-3 text-xs text-slate-400">{user.email}</p>
          <form action={signOut}>
            <button
              type="submit"
              className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" strokeWidth={1.8} />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto px-8 py-8">{children}</main>
    </div>
  );
}
