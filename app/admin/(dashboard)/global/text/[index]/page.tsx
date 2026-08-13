import { notFound } from "next/navigation";
import { GLOBAL_TEXT_GROUPS } from "@/lib/cms/admin-schema";
import { getTextGroupFields } from "@/lib/cms/admin-data";
import { TextGroupEditor } from "@/components/admin/TextGroupEditor";

export default async function GlobalTextGroupPage({
  params,
}: {
  params: Promise<{ index: string }>;
}) {
  const { index } = await params;
  const group = GLOBAL_TEXT_GROUPS[Number(index)];
  if (!group) notFound();

  const rows = await getTextGroupFields(group);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Site-wide / {group.label}</p>
        <h1 className="font-display text-2xl font-semibold text-brand-950">{group.label}</h1>
      </div>
      <TextGroupEditor pageLabel="Site-wide" groupLabel={group.label} rows={rows} />
    </div>
  );
}
