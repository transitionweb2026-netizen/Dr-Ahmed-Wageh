import { FieldRenderer } from "./FieldRenderer";
import { SaveButton } from "./SaveButton";
import { LocationLabel } from "./LocationLabel";
import { DeleteButton } from "./DeleteButton";
import { updateCollectionItem } from "@/lib/cms/admin-actions";
import type { ModelConfig } from "@/lib/cms/admin-schema";

export function CollectionItemForm({
  model,
  row,
  id,
  title,
  locationParts,
  redirectTo,
  showDelete = true,
}: {
  model: ModelConfig;
  row: Record<string, unknown>;
  id: string;
  title: string;
  locationParts: string[];
  redirectTo: string;
  showDelete?: boolean;
}) {
  return (
    <div className="flex flex-col gap-6">
      <LocationLabel parts={locationParts} />
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold text-brand-950">{title}</h1>
        {showDelete && <DeleteButton model={model.model} id={id} redirectTo={redirectTo} />}
      </div>
      <form
        action={updateCollectionItem.bind(null, model.model, id, redirectTo)}
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
