import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/cms/seo";
import { Hero } from "@/components/sections/Hero";
import { ContactSection } from "@/components/sections/ContactSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "contact");
}

export default function ContactPage() {
  return (
    <>
      <Hero page="contact" />
      <ContactSection />
    </>
  );
}
