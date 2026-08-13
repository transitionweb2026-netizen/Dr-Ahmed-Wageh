"use client";

import { useState } from "react";
import type { VideoItem } from "@/data/types";
import { Reveal } from "@/components/ui/Reveal";
import { VideoCard } from "@/components/cards/VideoCard";
import { VideoLightbox } from "@/components/sections/VideoLightbox";

interface VideosGridProps {
  videos: VideoItem[];
}

export function VideosGrid({ videos }: VideosGridProps) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <>
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

      <VideoLightbox
        video={activeVideo ? { title: activeVideo.title, videoUrl: activeVideo.videoUrl } : null}
        onClose={() => setActiveVideo(null)}
        aspect="portrait"
      />
    </>
  );
}
