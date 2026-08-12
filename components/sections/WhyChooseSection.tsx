import { useLocale, useTranslations } from "next-intl";
import { getWhyChooseUs } from "@/lib/localizedData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhyChooseCard } from "@/components/cards/WhyChooseCard";

export function WhyChooseSection() {
  const locale = useLocale();
  const t = useTranslations("WhyChoose");
  const whyChooseUs = getWhyChooseUs(locale);

  return (
    <section className="bg-brand-50/50 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
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
