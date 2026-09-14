"use client";

import { useState } from "react";
import type { Service } from "@/data/types";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { DetailModal, type DetailModalData } from "@/components/ui/DetailModal";

type ServiceCardData = Omit<Service, "icon">;

interface ServicesGridProps {
  services: ServiceCardData[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  const [selected, setSelected] = useState<ServiceCardData | null>(null);

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
        {services.map((service, index) => (
          <Reveal
            key={service.id}
            delay={index * 70}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <ServiceCard {...service} onSelect={() => setSelected(service)} />
          </Reveal>
        ))}
      </div>

      <DetailModal data={modalData} onClose={() => setSelected(null)} />
    </>
  );
}
