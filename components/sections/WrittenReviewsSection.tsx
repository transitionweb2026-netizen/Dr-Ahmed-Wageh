import { useTranslations } from "next-intl";
import type { WrittenReview } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewCard } from "@/components/cards/ReviewCard";

interface WrittenReviewsSectionProps {
  reviews: WrittenReview[];
  showDate?: boolean;
  tone?: "light" | "muted";
}

export function WrittenReviewsSection({
  reviews,
  showDate = false,
  tone = "light",
}: WrittenReviewsSectionProps) {
  const t = useTranslations("WrittenReviewsSection");

  return (
    <section className={tone === "muted" ? "bg-brand-50/50 py-20 sm:py-28" : "py-20 sm:py-28"}>
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
        </Reveal>
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((review, index) => (
            <Reveal
              key={review.id}
              delay={(index % 3) * 80}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <ReviewCard review={review} showDate={showDate} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
