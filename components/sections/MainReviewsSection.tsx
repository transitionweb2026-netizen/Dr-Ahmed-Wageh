"use client";

import { useState } from "react";
import { featuredWrittenReviews, videoReviews } from "@/data/reviews";
import type { VideoReview } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { VideoCard } from "@/components/cards/VideoCard";
import { VideoLightbox } from "@/components/sections/VideoLightbox";

export function MainReviewsSection() {
  const [activeVideo, setActiveVideo] = useState<VideoReview | null>(null);
  const featuredVideo = videoReviews[0];

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Patient Experiences"
            title="Real Stories, Real Relief"
            description="A glimpse of what patients share about their diagnosis, treatment, and recovery."
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
      </Container>

      <VideoLightbox
        video={activeVideo ? { title: activeVideo.title, videoUrl: activeVideo.videoUrl } : null}
        onClose={() => setActiveVideo(null)}
        aspect="portrait"
      />
    </section>
  );
}
