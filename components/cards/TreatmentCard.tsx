import type { TreatmentOption } from "@/data/types";

export function TreatmentCard({ icon: Icon, name, description }: TreatmentOption) {
  return (
    <div className="group flex h-full flex-col gap-5 rounded-3xl bg-white p-7 shadow-sm shadow-slate-900/[0.03] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/[0.08] hover:ring-brand-100">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-md shadow-brand-600/20">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold text-brand-950">{name}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
}
