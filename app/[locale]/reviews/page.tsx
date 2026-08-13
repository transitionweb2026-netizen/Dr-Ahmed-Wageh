import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { VideoReviewsSection } from "@/components/sections/VideoReviewsSection";
import { WrittenReviewsSection } from "@/components/sections/WrittenReviewsSection";
import { CTASection } from "@/components/sections/CTASection";
import { getVideoReviews, getWrittenReviews } from "@/lib/cms/content";
import { buildPageMetadata } from "@/lib/cms/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "reviews");
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const videoReviews = await getVideoReviews(locale);
  const writtenReviews = await getWrittenReviews(locale);

  return (
    <>
      <Hero page="reviews" />
      <VideoReviewsSection videoReviews={videoReviews} />
      <WrittenReviewsSection reviews={writtenReviews} showDate tone="muted" />
      <CTASection variant="reviews" />
    </>
  );
}
