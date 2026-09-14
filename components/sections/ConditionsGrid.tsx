"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Condition } from "@/data/types";
import { Reveal } from "@/components/ui/Reveal";
import { ConditionCard } from "@/components/cards/ConditionCard";
import { DetailModal, type DetailModalData } from "@/components/ui/DetailModal";

type ConditionCardData = Omit<Condition, "icon">;

interface ConditionsGridProps {
  conditions: ConditionCardData[];
}

export function ConditionsGrid({ conditions }: ConditionsGridProps) {
  const t = useTranslations("Conditions");
  const [selected, setSelected] = useState<ConditionCardData | null>(null);

  const modalData: DetailModalData | null = selected
    ? {
        image: selected.image,
        title: selected.name,
        description: selected.detailedDescription,
        sections: [{ label: t("modalSymptoms"), items: selected.symptoms }],
      }
    : null;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {conditions.map((condition, index) => (
          <Reveal
            key={condition.id}
            delay={index * 70}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <ConditionCard {...condition} onSelect={() => setSelected(condition)} />
          </Reveal>
        ))}
      </div>

      <DetailModal data={modalData} onClose={() => setSelected(null)} />
    </>
  );
}
