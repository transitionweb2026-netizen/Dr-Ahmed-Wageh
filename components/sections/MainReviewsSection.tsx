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
  const [reviewA, reviewB, reviewC, reviewD] = featuredWrittenReviews;

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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <Reveal className="lg:col-start-1 lg:row-start-1">
            <ReviewCard review={reviewA} />
          </Reveal>
          <Reveal delay={90} className="lg:col-start-1 lg:row-start-2">
            <ReviewCard review={reviewB} />
          </Reveal>

          <Reveal
            delay={160}
            className="order-first lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2"
          >
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

          <Reveal delay={120} className="lg:col-start-3 lg:row-start-1">
            <ReviewCard review={reviewC} />
          </Reveal>
          <Reveal delay={200} className="lg:col-start-3 lg:row-start-2">
            <ReviewCard review={reviewD} />
          </Reveal>

          <Reveal
            delay={260}
            className="flex justify-center lg:col-start-2 lg:row-start-3 lg:pt-2"
          >
            <PrimaryButton href="/reviews">{t("readAllReviews")}</PrimaryButton>
          </Reveal>
        </div>
      </Container>

      <VideoLightbox
        video={activeVideo ? { title: activeVideo.title, videoUrl: activeVideo.videoUrl } : null}
        onClose={() => setActiveVideo(null)}
        aspect="portrait"
      />
    </section>
  );
}
