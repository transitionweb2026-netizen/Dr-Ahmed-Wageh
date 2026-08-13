import Link from "next/link";
import { PAGES } from "@/lib/cms/admin-schema";

export default function AdminHomePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-brand-950">Content Management</h1>
        <p className="mt-1 text-sm text-slate-500">
          Every visible piece of content on the website, organized by page.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PAGES.map((page) => (
          <Link
            key={page.slug}
            href={`/admin/pages/${page.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-200 hover:bg-brand-50/40"
          >
            <p className="font-display text-base font-semibold text-brand-950">{page.label}</p>
            <p className="mt-1 text-xs text-slate-400">
              {page.textGroups.length} text groups · {page.sections.length} sections
            </p>
          </Link>
        ))}
        <Link
          href="/admin/global"
          className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/40 p-5 transition-colors hover:bg-brand-50"
        >
          <p className="font-display text-base font-semibold text-brand-950">Global Settings</p>
          <p className="mt-1 text-xs text-slate-400">Doctor profile, contact info, branding, SEO</p>
        </Link>
      </div>
    </div>
  );
}
