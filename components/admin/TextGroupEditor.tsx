import { updateContentField } from "@/lib/cms/admin-actions";
import { SaveButton } from "./SaveButton";
import { LocationLabel } from "./LocationLabel";

interface ContentFieldRow {
  id: string;
  namespace: string;
  key: string;
  valueEn: string;
  valueAr: string;
}

const inputClass =
  "w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-brand-950 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";

export function TextGroupEditor({
  pageLabel,
  groupLabel,
  rows,
}: {
  pageLabel: string;
  groupLabel: string;
  rows: ContentFieldRow[];
}) {
  return (
    <div className="flex flex-col gap-6">
      {rows.length === 0 && (
        <p className="text-sm text-slate-400">No text fields found for this group.</p>
      )}
      {rows.map((row) => (
        <form
          key={row.id}
          action={updateContentField.bind(null, row.namespace, row.key)}
          className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5"
        >
          <LocationLabel parts={[`PAGE: ${pageLabel}`, `SECTION: ${groupLabel}`, `FIELD: ${row.key}`]} />
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-slate-400">English</span>
              <textarea name="valueEn" defaultValue={row.valueEn} rows={3} className={inputClass} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-slate-400">Arabic (RTL)</span>
              <textarea name="valueAr" defaultValue={row.valueAr} dir="rtl" rows={3} className={inputClass} />
            </div>
          </div>
          <div>
            <SaveButton />
          </div>
        </form>
      ))}
    </div>
  );
}
