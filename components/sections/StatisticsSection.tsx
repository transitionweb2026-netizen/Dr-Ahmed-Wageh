import { useLocale, useTranslations } from "next-intl";
import { getStats } from "@/lib/localizedData";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { StatCard } from "@/components/cards/StatCard";

export function StatisticsSection() {
  const locale = useLocale();
  const t = useTranslations("Statistics");
  const stats = getStats(locale);

  return (
    <section className="py-6 sm:py-10">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand-600 px-6 py-12 shadow-2xl shadow-brand-900/20 sm:px-12 sm:py-14">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]"
          />
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl rtl:right-auto rtl:-left-20"
          />
          <div className="relative grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          <p className="relative mt-10 text-center text-xs text-brand-100/70">{t("disclaimer")}</p>
        </Reveal>
      </Container>
    </section>
  );
}
