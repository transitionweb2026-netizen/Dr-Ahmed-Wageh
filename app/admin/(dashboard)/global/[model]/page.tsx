import { notFound } from "next/navigation";
import { GLOBAL_MODELS } from "@/lib/cms/admin-schema";
import { getCollectionRows, getSingletonRow } from "@/lib/cms/admin-data";
import { CollectionList } from "@/components/admin/CollectionList";
import { FieldRenderer } from "@/components/admin/FieldRenderer";
import { SaveButton } from "@/components/admin/SaveButton";
import { LocationLabel } from "@/components/admin/LocationLabel";
import { updateSingleton } from "@/lib/cms/admin-actions";

export default async function GlobalModelPage({
  params,
}: {
  params: Promise<{ model: string }>;
}) {
  const { model: modelName } = await params;
  const model = GLOBAL_MODELS.find((m) => m.model === modelName);
  if (!model) notFound();

  if (model.kind === "collection") {
    const rows = await getCollectionRows(model.model);
    return (
      <div className="flex flex-col gap-6">
        <LocationLabel parts={["Site-wide", model.label]} />
        <CollectionList model={model} rows={rows} baseHref={`/admin/global/${model.model}`} />
      </div>
    );
  }

  const values = await getSingletonRow(model.model);
  return (
    <div className="flex flex-col gap-6">
      <LocationLabel parts={["Site-wide", model.label]} />
      <h1 className="font-display text-2xl font-semibold text-brand-950">{model.label}</h1>
      <form
        action={updateSingleton.bind(null, model.model)}
        className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6"
      >
        {model.fields.map((field) => (
          <FieldRenderer key={field.key ?? `${field.enKey}-${field.arKey}`} field={field} values={values} />
        ))}
        <div>
          <SaveButton />
        </div>
      </form>
    </div>
  );
}
