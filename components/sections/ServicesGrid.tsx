"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Service } from "@/data/types";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { DetailModal, type DetailModalData } from "@/components/ui/DetailModal";

type ServiceCardData = Omit<Service, "icon">;

interface ServicesGridProps {
  services: ServiceCardData[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  const t = useTranslations("Services");
  const [selected, setSelected] = useState<ServiceCardData | null>(null);

  const modalData: DetailModalData | null = selected
    ? {
        image: selected.image,
        title: selected.name,
        description: selected.detailedDescription,
        sections: [{ label: t("modalHighlights"), items: selected.highlights }],
      }
    : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.name} delay={index * 70}>
            <ServiceCard {...service} onSelect={() => setSelected(service)} />
          </Reveal>
        ))}
      </div>

      <DetailModal data={modalData} onClose={() => setSelected(null)} />
    </>
  );
}
