import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { AboutTextSection } from "@/components/sections/AboutTextSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { AboutCTASection } from "@/components/sections/AboutCTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const path = locale === "en" ? "/about" : `/${locale}/about`;

  return {
    title: t("about.title"),
    description: t("about.description"),
    alternates: { canonical: path },
    openGraph: { title: t("about.title"), description: t("about.description"), url: path },
  };
}

export default function AboutPage() {
  return (
    <>
      <Hero page="about" secondaryHref="/services" />
      <QuoteSection />
      <AboutTextSection />
      <TechnologiesSection />
      <StatisticsSection />
      <AboutCTASection />
    </>
  );
}
