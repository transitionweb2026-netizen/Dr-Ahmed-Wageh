import { notFound } from "next/navigation";
import { GLOBAL_MODELS } from "@/lib/cms/admin-schema";
import { getCollectionRow } from "@/lib/cms/admin-data";
import { FieldRenderer } from "@/components/admin/FieldRenderer";
import { SaveButton } from "@/components/admin/SaveButton";
import { LocationLabel } from "@/components/admin/LocationLabel";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { updateCollectionItem } from "@/lib/cms/admin-actions";

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
    <div className="flex flex-col gap-6">
      <LocationLabel parts={["Site-wide", model.label, `ITEM: ${title}`]} />
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold text-brand-950">{title}</h1>
        <DeleteButton model={model.model} id={id} redirectTo={baseHref} />
      </div>
      <form
        action={updateCollectionItem.bind(null, model.model, id, baseHref)}
        className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6"
      >
        {model.fields.map((field) => (
          <FieldRenderer key={field.key ?? `${field.enKey}-${field.arKey}`} field={field} values={row} />
        ))}
        <div>
          <SaveButton />
        </div>
      </form>
    </div>
  );
}
