import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { AboutIntroSection } from "@/components/sections/AboutIntroSection";
import { ConditionsSection } from "@/components/sections/ConditionsSection";
import { TreatmentStepsSection } from "@/components/sections/TreatmentStepsSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { TreatmentOptionsSection } from "@/components/sections/TreatmentOptionsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { MainReviewsSection } from "@/components/sections/MainReviewsSection";
import { VideosSection } from "@/components/sections/VideosSection";
import { FaqArticlesSection } from "@/components/sections/FaqArticlesSection";
import { CTASection } from "@/components/sections/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: t("home.title"),
    description: t("home.description"),
    alternates: { canonical: locale === "en" ? "/" : `/${locale}` },
    openGraph: {
      title: t("home.title"),
      description: t("home.description"),
      url: locale === "en" ? "/" : `/${locale}`,
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero page="home" />
      <AboutIntroSection />
      <ConditionsSection />
      <TreatmentStepsSection />
      <StatisticsSection />
      <TreatmentOptionsSection variant="home" />
      <WhyChooseSection />
      <MainReviewsSection />
      <VideosSection variant="home" />
      <FaqArticlesSection />
      <CTASection variant="home" />
    </>
  );
}
