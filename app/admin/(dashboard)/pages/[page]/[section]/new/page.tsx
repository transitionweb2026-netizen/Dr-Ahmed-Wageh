import { notFound } from "next/navigation";
import { PAGES, findSection } from "@/lib/cms/admin-schema";
import { FieldRenderer } from "@/components/admin/FieldRenderer";
import { SaveButton } from "@/components/admin/SaveButton";
import { LocationLabel } from "@/components/admin/LocationLabel";
import { createCollectionItem } from "@/lib/cms/admin-actions";

export default async function NewCollectionItemPage({
  params,
}: {
  params: Promise<{ page: string; section: string }>;
}) {
  const { page: pageSlug, section: sectionSlug } = await params;
  const page = PAGES.find((p) => p.slug === pageSlug);
  const section = findSection(pageSlug, sectionSlug);
  if (!page || !section || section.model.kind !== "collection") notFound();

  const baseHref = `/admin/pages/${page.slug}/${section.slug}`;

  return (
    <div className="flex flex-col gap-6">
      <LocationLabel parts={[`PAGE: ${page.label}`, `SECTION: ${section.label}`, "NEW ITEM"]} />
      <h1 className="font-display text-2xl font-semibold text-brand-950">Add {section.model.label}</h1>
      <form
        action={createCollectionItem.bind(null, section.model.model, baseHref)}
        className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6"
      >
        {section.model.fields.map((field) => (
          <FieldRenderer key={field.key ?? `${field.enKey}-${field.arKey}`} field={field} values={{}} />
        ))}
        <div>
          <SaveButton label="Create" />
        </div>
      </form>
    </div>
  );
}
