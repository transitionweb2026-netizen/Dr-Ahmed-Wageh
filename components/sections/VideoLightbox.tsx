"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxVideo {
  title: string;
  videoUrl: string;
}

interface VideoLightboxProps {
  video: LightboxVideo | null;
  onClose: () => void;
  aspect?: "portrait" | "video";
}

export function VideoLightbox({ video, onClose, aspect = "portrait" }: VideoLightboxProps) {
  useEffect(() => {
    if (!video) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/85 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className={cn(
          "w-full overflow-hidden rounded-3xl bg-black shadow-2xl",
          aspect === "portrait" ? "max-w-md" : "max-w-3xl"
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <video
          src={video.videoUrl}
          controls
          autoPlay
          playsInline
          className={cn("w-full bg-black", aspect === "portrait" ? "aspect-[9/16]" : "aspect-video")}
        >
          Your browser does not support embedded video.
        </video>
        <p className="bg-brand-950 px-5 py-4 text-sm font-medium text-white">{video.title}</p>
      </div>
    </div>
  );
}
