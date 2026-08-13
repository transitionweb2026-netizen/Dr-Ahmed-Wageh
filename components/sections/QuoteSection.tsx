import Image from "next/image";
import { Quote } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { getDoctor } from "@/lib/cms/content";
import { treatmentImages } from "@/data/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export async function QuoteSection() {
  const locale = await getLocale();
  const doctor = await getDoctor(locale);
  const t = await getTranslations("Quote");

  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="mx-auto w-full max-w-md py-4">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -top-6 -right-5 z-0 h-[82%] w-[78%] -rotate-6 overflow-hidden rounded-[2rem] shadow-xl shadow-brand-900/15 rtl:right-auto rtl:-left-5 rtl:rotate-6"
            >
              <Image
                src={treatmentImages.diagnostics}
                alt=""
                fill
                sizes="(min-width: 1024px) 380px, 80vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/45" />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-6 -left-6 z-10 h-[68%] w-[62%] rotate-6 overflow-hidden rounded-[1.75rem] shadow-xl shadow-brand-900/15 rtl:left-auto rtl:-right-6 rtl:-rotate-6"
            >
              <Image
                src={treatmentImages.ultrasound}
                alt=""
                fill
                sizes="(min-width: 1024px) 320px, 70vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-900/35" />
            </div>
            <div className="relative z-20 aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-900/25 ring-1 ring-black/5">
              <Image
                src={doctor.portraitUrl}
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="flex flex-col items-start gap-7">
          <Quote className="h-14 w-14 text-brand-200 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden />
          <blockquote className="text-balance font-display text-3xl font-medium leading-[1.3] text-brand-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.25]">
            &ldquo;{doctor.quote}&rdquo;
          </blockquote>
          <div className="flex flex-col gap-1 border-t border-slate-100 pt-5">
            <span className="font-display text-xl font-semibold text-brand-950">{doctor.name}</span>
            <span className="text-sm font-medium uppercase tracking-[0.08em] text-brand-500">
              {doctor.title}
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
