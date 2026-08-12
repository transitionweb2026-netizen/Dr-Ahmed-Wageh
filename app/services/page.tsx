import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TreatmentOptionsSection } from "@/components/sections/TreatmentOptionsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the pain management services and treatment options offered by Dr. Ahmed Wagih, from diagnosis to long-term recovery.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Dr. Ahmed Wagih",
    description: "Pain management services and treatment options offered by Dr. Ahmed Wagih.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Care Designed Around Your Diagnosis"
        description="A full range of consultation, diagnostic, and treatment services built to guide you from first visit to lasting recovery."
        primaryCta={{ label: "Book Appointment", href: "/contact" }}
        secondaryCta={{ label: "Patient Reviews", href: "/reviews" }}
      />
      <ServicesSection />
      <TreatmentOptionsSection
        eyebrow="Treatment Options"
        title="Modern Paths to Pain Relief"
        tone="muted"
      />
      <CTASection />
    </>
  );
}
