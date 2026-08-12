import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Service } from "@/data/types";

interface ServiceCardProps extends Service {
  ctaHref?: string;
}

export function ServiceCard({ icon: Icon, name, description, ctaHref }: ServiceCardProps) {
  const t = useTranslations("ServiceCard");

  return (
    <div className="group flex h-full flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-900/[0.08]">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        {ctaHref && (
          <Link
            href={ctaHref}
            aria-label={t("learnMoreAbout", { name })}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors duration-300 group-hover:border-brand-200 group-hover:text-brand-600"
          >
            <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold text-brand-950">{name}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
}
