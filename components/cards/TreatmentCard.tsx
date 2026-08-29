import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import type { TreatmentOption } from "@/data/types";
import { CardImage } from "@/components/ui/CardImage";

interface TreatmentCardProps extends Omit<TreatmentOption, "icon"> {
  onSelect?: () => void;
}

export function TreatmentCard({ image, name, description, onSelect }: TreatmentCardProps) {
  const t = useTranslations("TreatmentOptions");

  return (
    <button
      type="button"
      onClick={onSelect}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white text-left rtl:text-right shadow-sm shadow-slate-900/[0.03] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/[0.08] hover:ring-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <CardImage
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-950/35 via-transparent to-transparent"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-semibold text-brand-950">{name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
          {t("cardCta")}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
        </span>
      </div>
    </button>
  );
}
