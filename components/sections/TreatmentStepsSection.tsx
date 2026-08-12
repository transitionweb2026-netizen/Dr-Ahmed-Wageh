import { treatmentSteps } from "@/data/treatmentSteps";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StepCard } from "@/components/cards/StepCard";

export function TreatmentStepsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Your Treatment Journey"
            title="A Clear Path to Recovery"
            description="Every patient follows a structured process designed for accurate diagnosis and measurable progress."
            className="lg:sticky lg:top-28"
          />
        </Reveal>
        <div className="flex flex-col">
          {treatmentSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <StepCard {...step} isLast={index === treatmentSteps.length - 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
