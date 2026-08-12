import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { ContactSection } from "@/components/sections/ContactSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const path = locale === "en" ? "/contact" : `/${locale}/contact`;

  return {
    title: t("contact.title"),
    description: t("contact.description"),
    alternates: { canonical: path },
    openGraph: { title: t("contact.title"), description: t("contact.description"), url: path },
  };
}

export default function ContactPage() {
  return (
    <>
      <Hero page="contact" />
      <ContactSection />
    </>
  );
}
