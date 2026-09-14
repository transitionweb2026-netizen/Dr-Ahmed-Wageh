"use client";

import { useState } from "react";
import type { TreatmentOption } from "@/data/types";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard } from "@/components/cards/TreatmentCard";
import { DetailModal, type DetailModalData } from "@/components/ui/DetailModal";

type TreatmentOptionCardData = Omit<TreatmentOption, "icon">;

interface TreatmentOptionsGridProps {
  treatmentOptions: TreatmentOptionCardData[];
}

export function TreatmentOptionsGrid({ treatmentOptions }: TreatmentOptionsGridProps) {
  const [selected, setSelected] = useState<TreatmentOptionCardData | null>(null);

  const modalData: DetailModalData | null = selected
    ? {
        image: selected.image,
        title: selected.name,
        description: selected.detailedDescription,
        sections: [],
      }
    : null;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {treatmentOptions.map((option, index) => (
          <Reveal
            key={option.id}
            delay={index * 70}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <TreatmentCard {...option} onSelect={() => setSelected(option)} />
          </Reveal>
        ))}
      </div>

      <DetailModal data={modalData} onClose={() => setSelected(null)} />
    </>
  );
}
