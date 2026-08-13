import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/cms/seo";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TreatmentOptionsSection } from "@/components/sections/TreatmentOptionsSection";
import { CTASection } from "@/components/sections/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "services");
}

export default function ServicesPage() {
  return (
    <>
      <Hero page="services" secondaryHref="/reviews" />
      <ServicesSection />
      <TreatmentOptionsSection variant="services" tone="muted" />
      <CTASection variant="services" />
    </>
  );
}
