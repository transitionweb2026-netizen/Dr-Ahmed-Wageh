import { useLocale, useTranslations } from "next-intl";
import { getConditions } from "@/lib/localizedData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ConditionCard } from "@/components/cards/ConditionCard";

export function ConditionsSection() {
  const locale = useLocale();
  const t = useTranslations("Conditions");
  const conditions = getConditions(locale);

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
          {conditions.map((condition, index) => (
            <Reveal key={condition.name} delay={index * 70}>
              <ConditionCard {...condition} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
