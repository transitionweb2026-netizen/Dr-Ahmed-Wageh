import { notFound } from "next/navigation";
import { PAGES } from "@/lib/cms/admin-schema";
import { getTextGroupFields } from "@/lib/cms/admin-data";
import { TextGroupEditor } from "@/components/admin/TextGroupEditor";

export default async function TextGroupPage({
  params,
}: {
  params: Promise<{ page: string; index: string }>;
}) {
  const { page: pageSlug, index } = await params;
  const page = PAGES.find((p) => p.slug === pageSlug);
  if (!page) notFound();
  const group = page.textGroups[Number(index)];
  if (!group) notFound();

  const rows = await getTextGroupFields(group);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          PAGE: {page.label} / SECTION: {group.label}
        </p>
        <h1 className="font-display text-2xl font-semibold text-brand-950">{group.label}</h1>
      </div>
      <TextGroupEditor pageLabel={page.label} groupLabel={group.label} rows={rows} />
    </div>
  );
}
