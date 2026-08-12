import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { AboutTextSection } from "@/components/sections/AboutTextSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Dr. Ahmed Wagih",
  description:
    "Learn about Dr. Ahmed Wagih's approach to pain management — precise diagnosis, modern technology, and personalized, patient-centered care.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Dr. Ahmed Wagih",
    description:
      "Learn about Dr. Ahmed Wagih's approach to pain management and patient-centered care.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Doctor"
        title="Dedicated to Understanding Your Pain"
        description="Get to know the philosophy, background, and patient-first approach behind Dr. Ahmed Wagih's practice."
        primaryCta={{ label: "Book Appointment", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
      <QuoteSection />
      <AboutTextSection />
      <TechnologiesSection />
      <StatisticsSection />
      <CTASection />
    </>
  );
}
