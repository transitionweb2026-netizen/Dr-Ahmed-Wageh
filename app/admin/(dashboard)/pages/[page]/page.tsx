import Link from "next/link";
import { notFound } from "next/navigation";
import { PAGES } from "@/lib/cms/admin-schema";

export default async function PageDetail({ params }: { params: Promise<{ page: string }> }) {
  const { page: pageSlug } = await params;
  const page = PAGES.find((p) => p.slug === pageSlug);
  if (!page) notFound();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Page</p>
        <h1 className="font-display text-2xl font-semibold text-brand-950">{page.label}</h1>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-slate-500">Page Text</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {page.textGroups.map((group, index) => (
            <Link
              key={`${group.namespace}-${group.keyPrefix ?? ""}-${index}`}
              href={`/admin/pages/${page.slug}/text/${index}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-brand-950 transition-colors hover:border-brand-200 hover:bg-brand-50/40"
            >
              {group.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-slate-500">Content Sections</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {page.sections.map((section) => (
            <Link
              key={section.slug}
              href={`/admin/pages/${page.slug}/${section.slug}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-brand-950 transition-colors hover:border-brand-200 hover:bg-brand-50/40"
            >
              {section.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
