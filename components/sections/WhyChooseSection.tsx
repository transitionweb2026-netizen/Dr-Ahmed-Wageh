import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getDoctor, getWhyChooseUs } from "@/lib/localizedData";
import { doctorImages } from "@/data/images";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseSection() {
  const locale = useLocale();
  const t = useTranslations("WhyChoose");
  const whyChooseUs = getWhyChooseUs(locale);
  const doctor = getDoctor(locale);

  return (
    <section className="bg-brand-50/50 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-9">
            <div className="flex flex-col items-start gap-4 text-left rtl:text-right">
              <Badge>{t("eyebrow")}</Badge>
              <h2 className="text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight text-brand-950 sm:text-4xl lg:text-[2.75rem]">
                {t("title")}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {t("description")}
              </p>
            </div>
            <ul className="flex flex-col gap-6">
              {whyChooseUs.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div className="flex flex-col gap-1 pt-1">
                      <h3 className="font-display text-base font-semibold text-brand-950">
                        {point.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">{point.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal
            delay={150}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-brand-900/10 sm:aspect-[3/4]"
          >
            <Image
              src={doctorImages.whyChoose}
              alt={doctor.name}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
