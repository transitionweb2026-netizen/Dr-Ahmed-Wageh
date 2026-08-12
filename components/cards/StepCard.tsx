import type { TreatmentStep } from "@/data/types";

interface StepCardProps extends TreatmentStep {
  isLast?: boolean;
}

export function StepCard({ number, title, description, isLast }: StepCardProps) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 font-display text-lg font-semibold text-white shadow-md shadow-brand-600/25">
          {number}
        </span>
        {!isLast && <span className="mt-2 w-px flex-1 bg-brand-100" aria-hidden />}
      </div>
      <div className="flex flex-col gap-1.5 pb-10">
        <h3 className="font-display text-lg font-semibold text-brand-950">{title}</h3>
        <p className="max-w-md text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
}
