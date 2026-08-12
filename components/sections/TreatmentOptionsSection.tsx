"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getTreatmentOptions } from "@/lib/localizedData";
import type { TreatmentOption } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard } from "@/components/cards/TreatmentCard";
import { DetailModal, type DetailModalData } from "@/components/ui/DetailModal";

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
  const tModal = useTranslations("TreatmentOptions");
  const treatmentOptions = getTreatmentOptions(locale);
  const [selected, setSelected] = useState<TreatmentOption | null>(null);

  const modalData: DetailModalData | null = selected
    ? {
        image: selected.image,
        title: selected.name,
        description: selected.detailedDescription,
        sections: [
          { label: tModal("modalHowItWorks"), text: selected.howItWorks },
          { label: tModal("modalBenefits"), items: selected.benefits },
          { label: tModal("modalSuitableFor"), text: selected.suitableFor },
        ],
      }
    : null;

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
              <TreatmentCard {...option} onSelect={() => setSelected(option)} />
            </Reveal>
          ))}
        </div>
      </Container>

      <DetailModal data={modalData} onClose={() => setSelected(null)} />
    </section>
  );
}
