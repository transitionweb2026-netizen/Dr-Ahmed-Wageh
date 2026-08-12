import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlayButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-11 w-11",
  md: "h-14 w-14",
  lg: "h-20 w-20",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-7 w-7",
};

export function PlayButton({ size = "md", className }: PlayButtonProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex items-center justify-center rounded-full bg-white/95 text-brand-600 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-110",
        sizes[size],
        className
      )}
    >
      <Play className={cn(iconSizes[size], "translate-x-0.5")} fill="currentColor" />
    </span>
  );
}
