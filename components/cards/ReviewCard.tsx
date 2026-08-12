import Image from "next/image";
import { Quote } from "lucide-react";
import { useLocale } from "next-intl";
import type { WrittenReview } from "@/data/types";
import { StarRating } from "@/components/ui/StarRating";

interface ReviewCardProps {
  review: WrittenReview;
  showDate?: boolean;
}

export function ReviewCard({ review, showDate = false }: ReviewCardProps) {
  const locale = useLocale();
  const formattedDate = showDate
    ? new Date(review.date).toLocaleDateString(locale === "ar" ? "ar-EG-u-nu-latn" : "en-US", {
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <figure className="flex h-full flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/[0.08]">
      <Quote className="h-8 w-8 text-brand-200 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden />
      <blockquote className="flex-1 text-sm leading-relaxed text-slate-600">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <StarRating rating={review.rating} />
      <figcaption className="flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-3">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-100">
            <Image src={review.avatar} alt="" fill sizes="40px" className="object-cover" />
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-brand-950">{review.name}</p>
            {review.location && <p className="text-xs text-slate-500">{review.location}</p>}
          </div>
        </div>
        {formattedDate && <span className="text-xs text-slate-400">{formattedDate}</span>}
      </figcaption>
    </figure>
  );
}
