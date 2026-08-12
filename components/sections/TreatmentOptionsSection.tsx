import { treatmentOptions } from "@/data/treatments";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard } from "@/components/cards/TreatmentCard";

interface TreatmentOptionsSectionProps {
  eyebrow?: string;
  title?: string;
  highlight?: string;
  description?: string;
  tone?: "light" | "muted";
}

export function TreatmentOptionsSection({
  eyebrow = "Treatment Options",
  title = "Modern Paths to Pain Relief",
  highlight,
  description = "A range of clinically grounded treatment options, tailored to your diagnosis and chosen together with you.",
  tone = "light",
}: TreatmentOptionsSectionProps) {
  return (
    <section className={tone === "muted" ? "bg-brand-50/50 py-20 sm:py-28" : "py-20 sm:py-28"}>
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            description={description}
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatmentOptions.map((option, index) => (
            <Reveal key={option.name} delay={index * 70}>
              <TreatmentCard {...option} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
