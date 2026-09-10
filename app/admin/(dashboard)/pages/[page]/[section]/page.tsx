import { notFound } from "next/navigation";
import { PAGES, findSection } from "@/lib/cms/admin-schema";
import { getCollectionRowByKey, getCollectionRows, getSingletonRow } from "@/lib/cms/admin-data";
import { CollectionList } from "@/components/admin/CollectionList";
import { CollectionItemForm } from "@/components/admin/CollectionItemForm";
import { FieldRenderer } from "@/components/admin/FieldRenderer";
import { SaveButton } from "@/components/admin/SaveButton";
import { LocationLabel } from "@/components/admin/LocationLabel";
import { updateSingleton } from "@/lib/cms/admin-actions";

export default async function SectionPage({
  params,
}: {
  params: Promise<{ page: string; section: string }>;
}) {
  const { page: pageSlug, section: sectionSlug } = await params;
  const page = PAGES.find((p) => p.slug === pageSlug);
  const section = findSection(pageSlug, sectionSlug);
  if (!page || !section) notFound();

  const baseHref = `/admin/pages/${page.slug}/${section.slug}`;

  // A collection section pinned to one named row (itemKey + itemKeyField)
  // jumps straight to that row's edit form — no list in between.
  if (section.model.kind === "collection" && section.itemKey && section.model.itemKeyField) {
    const row = await getCollectionRowByKey(section.model.model, section.model.itemKeyField, section.itemKey);
    if (!row) notFound();
    return (
      <CollectionItemForm
        model={section.model}
        row={row}
        id={String(row.id)}
        title={section.label}
        locationParts={[`PAGE: ${page.label}`, `SECTION: ${section.label}`]}
        redirectTo={baseHref}
      />
    );
  }

  if (section.model.kind === "collection") {
    const rows = await getCollectionRows(section.model.model);
    return (
      <div className="flex flex-col gap-6">
        <LocationLabel parts={[`PAGE: ${page.label}`, `SECTION: ${section.label}`]} />
        <CollectionList model={section.model} rows={rows} baseHref={baseHref} />
      </div>
    );
  }

  const values = await getSingletonRow(section.model.model);
  return (
    <div className="flex flex-col gap-6">
      <LocationLabel parts={[`PAGE: ${page.label}`, `SECTION: ${section.label}`]} />
      <h1 className="font-display text-2xl font-semibold text-brand-950">{section.label}</h1>
      <form
        action={updateSingleton.bind(null, section.model.model)}
        className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6"
      >
        {section.model.fields.map((field) => (
          <FieldRenderer key={field.key ?? `${field.enKey}-${field.arKey}`} field={field} values={values} />
        ))}
        <div>
          <SaveButton />
        </div>
      </form>
    </div>
  );
}
