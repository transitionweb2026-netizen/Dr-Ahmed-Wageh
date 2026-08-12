"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getServices } from "@/lib/localizedData";
import type { Service } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { DetailModal, type DetailModalData } from "@/components/ui/DetailModal";

export function ServicesSection() {
  const locale = useLocale();
  const t = useTranslations("Services");
  const services = getServices(locale);
  const [selected, setSelected] = useState<Service | null>(null);

  const modalData: DetailModalData | null = selected
    ? {
        image: selected.image,
        title: selected.name,
        description: selected.detailedDescription,
        sections: [
          { label: t("modalHighlights"), items: selected.highlights },
        ],
      }
    : null;

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.name} delay={index * 70}>
              <ServiceCard {...service} onSelect={() => setSelected(service)} />
            </Reveal>
          ))}
        </div>
      </Container>

      <DetailModal data={modalData} onClose={() => setSelected(null)} />
    </section>
  );
}
