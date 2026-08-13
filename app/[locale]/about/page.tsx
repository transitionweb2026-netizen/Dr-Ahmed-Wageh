import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/cms/seo";
import { Hero } from "@/components/sections/Hero";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { AboutTextSection } from "@/components/sections/AboutTextSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { CTASection } from "@/components/sections/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "about");
}

export default function AboutPage() {
  return (
    <>
      <Hero page="about" secondaryHref="/services" />
      <QuoteSection />
      <AboutTextSection />
      <TechnologiesSection />
      <StatisticsSection />
      <CTASection variant="about" />
    </>
  );
}
