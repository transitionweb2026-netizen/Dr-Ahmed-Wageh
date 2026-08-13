import { notFound } from "next/navigation";
import { PAGES, findSection } from "@/lib/cms/admin-schema";
import { getCollectionRow } from "@/lib/cms/admin-data";
import { FieldRenderer } from "@/components/admin/FieldRenderer";
import { SaveButton } from "@/components/admin/SaveButton";
import { LocationLabel } from "@/components/admin/LocationLabel";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { updateCollectionItem } from "@/lib/cms/admin-actions";

export default async function EditCollectionItemPage({
  params,
}: {
  params: Promise<{ page: string; section: string; id: string }>;
}) {
  const { page: pageSlug, section: sectionSlug, id } = await params;
  const page = PAGES.find((p) => p.slug === pageSlug);
  const section = findSection(pageSlug, sectionSlug);
  if (!page || !section || section.model.kind !== "collection") notFound();

  const row = await getCollectionRow(section.model.model, id);
  if (!row) notFound();

  const baseHref = `/admin/pages/${page.slug}/${section.slug}`;
  const title = section.model.titleKey ? String(row[section.model.titleKey] ?? "Untitled") : id;

  return (
    <div className="flex flex-col gap-6">
      <LocationLabel parts={[`PAGE: ${page.label}`, `SECTION: ${section.label}`, `ITEM: ${title}`]} />
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold text-brand-950">{title}</h1>
        <DeleteButton model={section.model.model} id={id} redirectTo={baseHref} />
      </div>
      <form
        action={updateCollectionItem.bind(null, section.model.model, id, baseHref)}
        className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6"
      >
        {section.model.fields.map((field) => (
          <FieldRenderer key={field.key ?? `${field.enKey}-${field.arKey}`} field={field} values={row} />
        ))}
        <div>
          <SaveButton />
        </div>
      </form>
    </div>
  );
}
