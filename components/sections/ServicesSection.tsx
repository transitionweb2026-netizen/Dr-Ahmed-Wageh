import { useLocale, useTranslations } from "next-intl";
import { getServices } from "@/lib/localizedData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";

export function ServicesSection() {
  const locale = useLocale();
  const t = useTranslations("Services");
  const services = getServices(locale);

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
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
