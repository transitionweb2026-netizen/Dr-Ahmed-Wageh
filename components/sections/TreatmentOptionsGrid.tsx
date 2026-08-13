"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { TreatmentOption } from "@/data/types";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard } from "@/components/cards/TreatmentCard";
import { DetailModal, type DetailModalData } from "@/components/ui/DetailModal";

type TreatmentOptionCardData = Omit<TreatmentOption, "icon">;

interface TreatmentOptionsGridProps {
  treatmentOptions: TreatmentOptionCardData[];
}

export function TreatmentOptionsGrid({ treatmentOptions }: TreatmentOptionsGridProps) {
  const tModal = useTranslations("TreatmentOptions");
  const [selected, setSelected] = useState<TreatmentOptionCardData | null>(null);

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
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {treatmentOptions.map((option, index) => (
          <Reveal key={option.name} delay={index * 70}>
            <TreatmentCard {...option} onSelect={() => setSelected(option)} />
          </Reveal>
        ))}
      </div>

      <DetailModal data={modalData} onClose={() => setSelected(null)} />
    </>
  );
}
