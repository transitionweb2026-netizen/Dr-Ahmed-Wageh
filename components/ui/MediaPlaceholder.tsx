import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const GRADIENTS = [
  "from-brand-700 via-brand-600 to-brand-500",
  "from-brand-900 via-brand-700 to-brand-500",
  "from-brand-600 via-brand-500 to-brand-400",
  "from-brand-950 via-brand-800 to-brand-600",
];

interface MediaPlaceholderProps {
  icon?: LucideIcon;
  label?: string;
  variant?: number;
  className?: string;
  /**
   * "center" shows icon + label as the focal point (articles, banners).
   * "bottom" anchors the label near the bottom edge, leaving the center
   * free for an overlay such as a play button.
   */
  contentPosition?: "center" | "bottom";
}

/**
 * Brand-consistent placeholder used wherever real photography/video assets
 * are not yet available. Swap for a real `next/image` once assets exist.
 */
export function MediaPlaceholder({
  icon: Icon,
  label,
  variant = 0,
  className,
  contentPosition = "center",
}: MediaPlaceholderProps) {
  const gradient = GRADIENTS[variant % GRADIENTS.length];

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br",
        contentPosition === "center" ? "items-center justify-center" : "items-start justify-end",
        gradient,
        className
      )}
    >
      <div
        aria-hidden
        className="absolute -left-10 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-brand-950/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:18px_18px]"
      />
      {contentPosition === "center" && Icon && (
        <Icon
          aria-hidden
          className="relative h-10 w-10 text-white/80 sm:h-12 sm:w-12"
          strokeWidth={1.5}
        />
      )}
      {label && (
        <span
          className={cn(
            "relative text-center text-xs font-medium uppercase tracking-[0.14em] text-white/70",
            contentPosition === "center" ? "mt-3 px-4" : "px-5 pb-5"
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
