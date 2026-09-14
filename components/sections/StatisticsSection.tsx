import { getLocale, getTranslations } from "next-intl/server";
import { getStats } from "@/lib/cms/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { StatCard } from "@/components/cards/StatCard";

export async function StatisticsSection() {
  const locale = await getLocale();
  const t = await getTranslations("Statistics");
  const stats = await getStats(locale);

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
          <div className="relative flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                <StatCard {...stat} />
              </div>
            ))}
          </div>
          <p className="relative mt-10 text-center text-xs text-brand-100/70">{t("disclaimer")}</p>
        </Reveal>
      </Container>
    </section>
  );
}
