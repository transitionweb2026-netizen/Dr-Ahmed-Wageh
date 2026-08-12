"use client";

import { useState } from "react";
import type { VideoReview } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VideoCard } from "@/components/cards/VideoCard";
import { VideoLightbox } from "@/components/sections/VideoLightbox";

interface VideoReviewsSectionProps {
  videoReviews: VideoReview[];
  eyebrow?: string;
  title?: string;
  description?: string;
  tone?: "light" | "muted";
}

export function VideoReviewsSection({
  videoReviews,
  eyebrow = "In Their Own Words",
  title = "Video Testimonials",
  description = "Hear directly from patients about their experience, in their own words.",
  tone = "light",
}: VideoReviewsSectionProps) {
  const [activeVideo, setActiveVideo] = useState<VideoReview | null>(null);

  return (
    <section className={tone === "muted" ? "bg-brand-50/50 py-20 sm:py-28" : "py-20 sm:py-28"}>
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </Reveal>
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 sm:max-w-xl lg:max-w-2xl">
          {videoReviews.map((video, index) => (
            <Reveal key={video.id} delay={index * 90}>
              <VideoCard
                title={video.title}
                posterLabel={video.posterLabel}
                posterImage={video.posterImage}
                aspect="portrait"
                variant={index + 1}
                onPlay={() => setActiveVideo(video)}
              />
            </Reveal>
          ))}
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
