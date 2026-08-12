import Image from "next/image";
import { Quote } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getDoctor } from "@/lib/localizedData";
import { doctorImages } from "@/data/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function QuoteSection() {
  const locale = useLocale();
  const doctor = getDoctor(locale);
  const t = useTranslations("Quote");

  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-100 to-brand-50 blur-2xl"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-900/20 ring-1 ring-black/5">
            <Image
              src={doctorImages.portrait}
              alt={t("imageAlt")}
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="flex flex-col items-start gap-6">
          <Quote className="h-12 w-12 text-brand-200 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden />
          <blockquote className="text-balance font-display text-2xl font-medium leading-snug text-brand-950 sm:text-3xl">
            &ldquo;{doctor.quote}&rdquo;
          </blockquote>
          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold text-brand-950">{doctor.name}</span>
            <span className="text-sm text-brand-500">{doctor.title}</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
