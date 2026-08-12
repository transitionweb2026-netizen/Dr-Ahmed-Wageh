import type { Condition } from "@/data/types";

export function ConditionCard({ icon: Icon, name, description }: Condition) {
  return (
    <div className="group flex h-full flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-900/[0.08]">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold text-brand-950">{name}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
}
