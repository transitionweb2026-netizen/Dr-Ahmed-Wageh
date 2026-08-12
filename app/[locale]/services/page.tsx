import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
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
  const t = await getTranslations({ locale, namespace: "Meta" });
  const path = locale === "en" ? "/services" : `/${locale}/services`;

  return {
    title: t("services.title"),
    description: t("services.description"),
    alternates: { canonical: path },
    openGraph: { title: t("services.title"), description: t("services.description"), url: path },
  };
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
