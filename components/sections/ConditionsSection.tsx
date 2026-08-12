"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getConditions } from "@/lib/localizedData";
import type { Condition } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButton } from "@/components/ui/Button";
import { ConditionCard } from "@/components/cards/ConditionCard";
import { DetailModal, type DetailModalData } from "@/components/ui/DetailModal";

export function ConditionsSection() {
  const locale = useLocale();
  const t = useTranslations("Conditions");
  const conditions = getConditions(locale);
  const [selected, setSelected] = useState<Condition | null>(null);

  const modalData: DetailModalData | null = selected
    ? {
        image: selected.image,
        title: selected.name,
        description: selected.detailedDescription,
        sections: [
          { label: t("modalSymptoms"), items: selected.symptoms },
          { label: t("modalEvaluation"), text: selected.evaluation },
          { label: t("modalTreatment"), text: selected.treatmentApproach },
        ],
      }
    : null;

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
              <ConditionCard {...condition} onSelect={() => setSelected(condition)} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={280} className="flex justify-center">
          <PrimaryButton href="/services">{t("viewAllServices")}</PrimaryButton>
        </Reveal>
      </Container>

      <DetailModal data={modalData} onClose={() => setSelected(null)} />
    </section>
  );
}
