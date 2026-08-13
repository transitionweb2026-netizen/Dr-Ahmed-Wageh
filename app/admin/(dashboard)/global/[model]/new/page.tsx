import { notFound } from "next/navigation";
import { GLOBAL_MODELS } from "@/lib/cms/admin-schema";
import { FieldRenderer } from "@/components/admin/FieldRenderer";
import { SaveButton } from "@/components/admin/SaveButton";
import { LocationLabel } from "@/components/admin/LocationLabel";
import { createCollectionItem } from "@/lib/cms/admin-actions";

export default async function NewGlobalItemPage({
  params,
}: {
  params: Promise<{ model: string }>;
}) {
  const { model: modelName } = await params;
  const model = GLOBAL_MODELS.find((m) => m.model === modelName);
  if (!model || model.kind !== "collection") notFound();

  const baseHref = `/admin/global/${model.model}`;

  return (
    <div className="flex flex-col gap-6">
      <LocationLabel parts={["Site-wide", model.label, "NEW ITEM"]} />
      <h1 className="font-display text-2xl font-semibold text-brand-950">Add {model.label}</h1>
      <form
        action={createCollectionItem.bind(null, model.model, baseHref)}
        className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6"
      >
        {model.fields.map((field) => (
          <FieldRenderer key={field.key ?? `${field.enKey}-${field.arKey}`} field={field} values={{}} />
        ))}
        <div>
          <SaveButton label="Create" />
        </div>
      </form>
    </div>
  );
}
