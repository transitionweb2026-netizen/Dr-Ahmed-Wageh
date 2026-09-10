import { notFound } from "next/navigation";
import { PAGES, findSection } from "@/lib/cms/admin-schema";
import { getCollectionRow } from "@/lib/cms/admin-data";
import { CollectionItemForm } from "@/components/admin/CollectionItemForm";

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
    <CollectionItemForm
      model={section.model}
      row={row}
      id={id}
      title={title}
      locationParts={[`PAGE: ${page.label}`, `SECTION: ${section.label}`, `ITEM: ${title}`]}
      redirectTo={baseHref}
    />
  );
}
