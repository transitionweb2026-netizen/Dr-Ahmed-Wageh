import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  outOf?: number;
  className?: string;
}

export function StarRating({ rating, outOf = 5, className }: StarRatingProps) {
  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="img"
      aria-label={`Rated ${rating} out of ${outOf} stars`}
    >
      {Array.from({ length: outOf }).map((_, index) => (
        <Star
          key={index}
          aria-hidden
          className={cn(
            "h-4 w-4",
            index < rating ? "fill-accent-500 text-accent-500" : "fill-slate-200 text-slate-200"
          )}
        />
      ))}
    </div>
  );
}
