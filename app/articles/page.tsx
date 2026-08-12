import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturedArticleSection } from "@/components/sections/FeaturedArticleSection";
import { ArticlesGridSection } from "@/components/sections/ArticlesGridSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Patient education articles from Dr. Ahmed Wagih on pain conditions, treatment options, and recovery.",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "Articles | Dr. Ahmed Wagih",
    description: "Patient education articles from Dr. Ahmed Wagih.",
    url: "/articles",
  },
};

export default function ArticlesPage() {
  return (
    <>
      <Hero
        eyebrow="Articles"
        title="Understand Your Condition, One Article at a Time"
        description="Clear, practical writing to help you understand your diagnosis and make informed treatment decisions."
        primaryCta={{ label: "Book Appointment", href: "/contact" }}
      />
      <FeaturedArticleSection />
      <ArticlesGridSection />
      <CTASection />
    </>
  );
}
