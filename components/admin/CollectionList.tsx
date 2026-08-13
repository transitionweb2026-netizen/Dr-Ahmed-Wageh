import Link from "next/link";
import type { ModelConfig } from "@/lib/cms/admin-schema";

export function CollectionList({
  model,
  rows,
  baseHref,
}: {
  model: ModelConfig;
  rows: Record<string, unknown>[];
  baseHref: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-brand-950">{model.label}</h2>
        <Link
          href={`${baseHref}/new`}
          className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          + Add New
        </Link>
      </div>
      <div className="flex flex-col divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {rows.length === 0 && <p className="p-6 text-sm text-slate-400">No items yet.</p>}
        {rows.map((row) => {
          const title = model.titleKey ? String(row[model.titleKey] ?? "Untitled") : String(row.id);
          const image = model.imageKey ? String(row[model.imageKey] ?? "") : "";
          return (
            <Link
              key={String(row.id)}
              href={`${baseHref}/${row.id}`}
              className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-slate-50"
            >
              {model.imageKey && (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  {image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-[10px] text-slate-400">—</span>
                  )}
                </div>
              )}
              <span className="flex-1 truncate text-sm font-medium text-brand-950">{title}</span>
              <span className="text-xs font-medium text-brand-600">Edit →</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
