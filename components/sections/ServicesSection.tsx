import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="How We Support Your Care"
            description="From your first consultation to long-term follow-up, every service is designed around your recovery."
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.name} delay={index * 70}>
              <ServiceCard {...service} ctaHref="/contact" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
