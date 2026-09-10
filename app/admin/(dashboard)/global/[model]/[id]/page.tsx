import { notFound } from "next/navigation";
import { GLOBAL_MODELS } from "@/lib/cms/admin-schema";
import { getCollectionRow } from "@/lib/cms/admin-data";
import { CollectionItemForm } from "@/components/admin/CollectionItemForm";

export default async function EditGlobalItemPage({
  params,
}: {
  params: Promise<{ model: string; id: string }>;
}) {
  const { model: modelName, id } = await params;
  const model = GLOBAL_MODELS.find((m) => m.model === modelName);
  if (!model || model.kind !== "collection") notFound();

  const row = await getCollectionRow(model.model, id);
  if (!row) notFound();

  const baseHref = `/admin/global/${model.model}`;
  const title = model.titleKey ? String(row[model.titleKey] ?? "Untitled") : id;

  return (
    <CollectionItemForm
      model={model}
      row={row}
      id={id}
      title={title}
      locationParts={["Site-wide", model.label, `ITEM: ${title}`]}
      redirectTo={baseHref}
    />
  );
}
