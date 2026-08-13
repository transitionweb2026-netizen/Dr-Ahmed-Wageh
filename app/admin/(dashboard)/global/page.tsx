import Link from "next/link";
import { GLOBAL_MODELS, GLOBAL_TEXT_GROUPS } from "@/lib/cms/admin-schema";

export default function GlobalSettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Site-wide</p>
        <h1 className="font-display text-2xl font-semibold text-brand-950">Global Settings</h1>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-slate-500">Site-wide Text</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {GLOBAL_TEXT_GROUPS.map((group, index) => (
            <Link
              key={`${group.namespace}-${index}`}
              href={`/admin/global/text/${index}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-brand-950 transition-colors hover:border-brand-200 hover:bg-brand-50/40"
            >
              {group.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-slate-500">Records</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {GLOBAL_MODELS.map((model) => (
            <Link
              key={model.model}
              href={`/admin/global/${model.model}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-brand-950 transition-colors hover:border-brand-200 hover:bg-brand-50/40"
            >
              {model.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
