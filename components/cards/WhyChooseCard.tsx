import type { IconPoint } from "@/data/types";

export function WhyChooseCard({ icon: Icon, title, description }: IconPoint) {
  return (
    <div className="flex h-full gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/[0.08]">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-display text-base font-semibold text-brand-950">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
}
