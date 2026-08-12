import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { VideoReviewsSection } from "@/components/sections/VideoReviewsSection";
import { WrittenReviewsSection } from "@/components/sections/WrittenReviewsSection";
import { CTASection } from "@/components/sections/CTASection";
import { getVideoReviews, getWrittenReviews } from "@/lib/localizedData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const path = locale === "en" ? "/reviews" : `/${locale}/reviews`;

  return {
    title: t("reviews.title"),
    description: t("reviews.description"),
    alternates: { canonical: path },
    openGraph: { title: t("reviews.title"), description: t("reviews.description"), url: path },
  };
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const videoReviews = getVideoReviews(locale);
  const writtenReviews = getWrittenReviews(locale);

  return (
    <>
      <Hero page="reviews" />
      <VideoReviewsSection videoReviews={videoReviews} />
      <WrittenReviewsSection reviews={writtenReviews} showDate tone="muted" />
      <CTASection />
    </>
  );
}
