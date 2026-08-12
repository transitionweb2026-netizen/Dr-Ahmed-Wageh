import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { VideoReviewsSection } from "@/components/sections/VideoReviewsSection";
import { WrittenReviewsSection } from "@/components/sections/WrittenReviewsSection";
import { CTASection } from "@/components/sections/CTASection";
import { videoReviews, writtenReviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read and watch real patient experiences with Dr. Ahmed Wagih's diagnosis, treatment, and follow-up care.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Patient Reviews | Dr. Ahmed Wagih",
    description: "Real patient experiences with Dr. Ahmed Wagih's care.",
    url: "/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <Hero
        eyebrow="Reviews"
        title="Trusted by Patients, One Story at a Time"
        description="Honest feedback from patients about their diagnosis, treatment journey, and results."
        primaryCta={{ label: "Book Appointment", href: "/contact" }}
      />
      <VideoReviewsSection videoReviews={videoReviews} />
      <WrittenReviewsSection reviews={writtenReviews} showDate tone="muted" />
      <CTASection />
    </>
  );
}
