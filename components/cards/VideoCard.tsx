import Image from "next/image";
import { Film } from "lucide-react";
import { cn } from "@/lib/utils";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { PlayButton } from "@/components/ui/PlayButton";

interface VideoCardProps {
  title: string;
  posterLabel: string;
  posterImage?: string;
  aspect?: "video" | "portrait";
  variant?: number;
  playSize?: "sm" | "md" | "lg";
  onPlay?: () => void;
}

export function VideoCard({
  title,
  posterLabel,
  posterImage,
  aspect = "portrait",
  variant = 0,
  playSize = "md",
  onPlay,
}: VideoCardProps) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className="group relative flex w-full flex-col overflow-hidden rounded-3xl bg-white text-left shadow-sm shadow-slate-900/[0.03] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      aria-label={`Play video: ${title}`}
    >
      <div className={cn("relative w-full", aspect === "portrait" ? "aspect-[9/16]" : "aspect-video")}>
        {posterImage ? (
          <>
            <Image
              src={posterImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/10 to-transparent"
            />
            <span className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-[0.14em] text-white/85">
              {posterLabel}
            </span>
          </>
        ) : (
          <MediaPlaceholder
            icon={Film}
            label={posterLabel}
            variant={variant}
            contentPosition="bottom"
            className="rounded-none"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/25">
          <PlayButton size={playSize} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-sm font-semibold leading-snug text-brand-950 sm:text-base">
          {title}
        </h3>
      </div>
    </button>
  );
}
