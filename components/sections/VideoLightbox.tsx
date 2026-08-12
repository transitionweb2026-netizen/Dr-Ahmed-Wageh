"use client";

import { useCallback, useEffect, useState, type AnimationEvent } from "react";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("VideoLightbox");
  const tVideo = useTranslations("Video");
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (video) setClosing(false);
  }, [video]);

  const requestClose = useCallback(() => setClosing(true), []);

  useEffect(() => {
    if (!video) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [video, requestClose]);

  if (!video) return null;

  const handleBackdropAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (closing && event.target === event.currentTarget) onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/85 p-4 backdrop-blur-sm",
        closing ? "animate-modal-fade-out" : "animate-modal-fade-in"
      )}
      onClick={requestClose}
      onAnimationEnd={handleBackdropAnimationEnd}
    >
      <button
        type="button"
        onClick={requestClose}
        aria-label={t("closeVideo")}
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 rtl:right-auto rtl:left-5"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className={cn(
          "w-full overflow-hidden rounded-3xl bg-black shadow-2xl",
          aspect === "portrait" ? "max-w-md" : "max-w-3xl",
          closing ? "animate-modal-scale-out" : "animate-modal-scale-in"
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
          {tVideo("unsupportedBrowser")}
        </video>
        <p className="bg-brand-950 px-5 py-4 text-sm font-medium text-white">{video.title}</p>
      </div>
    </div>
  );
}
