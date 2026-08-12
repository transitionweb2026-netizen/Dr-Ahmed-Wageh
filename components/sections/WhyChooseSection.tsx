import { whyChooseUs } from "@/data/whyChooseUs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhyChooseCard } from "@/components/cards/WhyChooseCard";

export function WhyChooseSection() {
  return (
    <section className="bg-brand-50/50 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Dr. Wagih"
            title="Care Built Around You"
            description="A patient-first philosophy, backed by precise diagnosis and a commitment to lasting results."
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((point, index) => (
            <Reveal key={point.title} delay={index * 70}>
              <WhyChooseCard {...point} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
