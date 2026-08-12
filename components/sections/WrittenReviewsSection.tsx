import type { WrittenReview } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewCard } from "@/components/cards/ReviewCard";

interface WrittenReviewsSectionProps {
  reviews: WrittenReview[];
  eyebrow?: string;
  title?: string;
  description?: string;
  showDate?: boolean;
  tone?: "light" | "muted";
}

export function WrittenReviewsSection({
  reviews,
  eyebrow = "Patient Experiences",
  title = "Real Stories, Real Relief",
  description = "Feedback shared by patients about their diagnosis, treatment, and recovery experience.",
  showDate = false,
  tone = "light",
}: WrittenReviewsSectionProps) {
  return (
    <section className={tone === "muted" ? "bg-brand-50/50 py-20 sm:py-28" : "py-20 sm:py-28"}>
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
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
