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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.id} delay={(index % 3) * 80}>
              <ReviewCard review={review} showDate={showDate} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
