"use client";

import { useState } from "react";
import type { VideoItem } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VideoCard } from "@/components/cards/VideoCard";
import { VideoLightbox } from "@/components/sections/VideoLightbox";

interface VideosSectionProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  videos: VideoItem[];
  tone?: "light" | "muted";
}

export function VideosSection({
  eyebrow = "Video Library",
  title = "Watch & Learn",
  highlight,
  description,
  videos,
  tone = "light",
}: VideosSectionProps) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section className={tone === "muted" ? "bg-brand-50/60 py-20 sm:py-28" : "py-20 sm:py-28"}>
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} highlight={highlight} description={description} />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <Reveal key={video.id} delay={index * 80}>
              <VideoCard
                title={video.title}
                posterLabel={video.posterLabel}
                posterImage={video.posterImage}
                aspect="portrait"
                variant={index}
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
