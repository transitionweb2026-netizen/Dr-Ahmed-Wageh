"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getFeaturedWrittenReviews, getVideoReviews } from "@/lib/localizedData";
import type { VideoReview } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButton } from "@/components/ui/Button";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { VideoCard } from "@/components/cards/VideoCard";
import { VideoLightbox } from "@/components/sections/VideoLightbox";

export function MainReviewsSection() {
  const locale = useLocale();
  const t = useTranslations("MainReviews");
  const featuredWrittenReviews = getFeaturedWrittenReviews(locale);
  const videoReviews = getVideoReviews(locale);
  const [activeVideo, setActiveVideo] = useState<VideoReview | null>(null);
  const featuredVideo = videoReviews[0];

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredWrittenReviews.map((review, index) => (
            <Reveal key={review.id} delay={index * 80}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
          <Reveal delay={240}>
            <VideoCard
              title={featuredVideo.title}
              posterLabel={featuredVideo.posterLabel}
              posterImage={featuredVideo.posterImage}
              aspect="portrait"
              variant={2}
              playSize="lg"
              onPlay={() => setActiveVideo(featuredVideo)}
            />
          </Reveal>
        </div>

        <Reveal delay={320} className="flex justify-center">
          <PrimaryButton href="/reviews">{t("readAllReviews")}</PrimaryButton>
        </Reveal>
      </Container>

      <VideoLightbox
        video={activeVideo ? { title: activeVideo.title, videoUrl: activeVideo.videoUrl } : null}
        onClose={() => setActiveVideo(null)}
        aspect="portrait"
      />
    </section>
  );
}
