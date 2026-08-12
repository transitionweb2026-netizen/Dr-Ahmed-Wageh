"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlayButton } from "@/components/ui/PlayButton";

interface IntroVideoPlayerProps {
  title: string;
  posterLabel: string;
  posterImage: string;
  videoUrl: string;
  className?: string;
}

export function IntroVideoPlayer({
  title,
  posterLabel,
  posterImage,
  videoUrl,
  className,
}: IntroVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/15 ring-1 ring-black/5",
        className
      )}
    >
      {isPlaying ? (
        <video src={videoUrl} controls autoPlay playsInline className="h-full w-full bg-black object-cover">
          Your browser does not support embedded video.
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group relative block h-full w-full"
        >
          <Image
            src={posterImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-brand-950/5 to-transparent"
          />
          <span className="absolute bottom-6 left-6 text-xs font-medium uppercase tracking-[0.14em] text-white/85">
            {posterLabel}
          </span>
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/25">
            <PlayButton size="lg" />
          </div>
        </button>
      )}
    </div>
  );
}
