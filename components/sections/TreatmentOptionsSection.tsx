import { useLocale, useTranslations } from "next-intl";
import { getTreatmentOptions } from "@/lib/localizedData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard } from "@/components/cards/TreatmentCard";

interface TreatmentOptionsSectionProps {
  variant?: "home" | "services";
  tone?: "light" | "muted";
}

export function TreatmentOptionsSection({
  variant = "home",
  tone = "light",
}: TreatmentOptionsSectionProps) {
  const locale = useLocale();
  const t = useTranslations(`TreatmentOptions.${variant}`);
  const treatmentOptions = getTreatmentOptions(locale);

  return (
    <section className={tone === "muted" ? "bg-brand-50/50 py-20 sm:py-28" : "py-20 sm:py-28"}>
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t.has("description") ? t("description") : undefined}
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
