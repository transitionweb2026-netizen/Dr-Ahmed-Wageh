import type { Metadata } from "next";
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
import { homeVideos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Dr. Ahmed Wagih | Pain Management Consultant in Cairo",
  description:
    "Consultant pain management physician offering precise diagnosis, minimally invasive treatment, and personalized, patient-centered care.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dr. Ahmed Wagih | Pain Management Consultant in Cairo",
    description:
      "Precise diagnosis, personalized treatment plans, and long-term follow-up care from Dr. Ahmed Wagih.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero
        variant="home"
        eyebrow="Pain Management Consultant"
        title="Relieve Pain. Reclaim Your Life."
        highlight="Reclaim"
        description="Precise diagnosis, evidence-based treatment, and personalized care to help you move through pain and back into the life you love."
      />
      <AboutIntroSection />
      <ConditionsSection />
      <TreatmentStepsSection />
      <StatisticsSection />
      <TreatmentOptionsSection />
      <WhyChooseSection />
      <MainReviewsSection />
      <VideosSection
        eyebrow="Patient Education"
        title="Watch & Learn"
        description="Short, practical videos from Dr. Wagih on common conditions and what to expect from treatment."
        videos={homeVideos}
      />
      <FaqArticlesSection />
      <CTASection />
    </>
  );
}
