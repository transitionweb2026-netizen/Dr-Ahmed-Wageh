import type { Stat } from "@/data/types";

export function StatCard({ icon: Icon, value, label }: Stat) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <div className="flex min-w-0 flex-col">
        <span className="font-display text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
          {value}
        </span>
        <span className="text-sm text-brand-100/85">{label}</span>
      </div>
    </div>
  );
}
