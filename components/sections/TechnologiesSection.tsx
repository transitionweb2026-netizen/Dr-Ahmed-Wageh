import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { getDoctor, getTechnologies } from "@/lib/cms/content";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export async function TechnologiesSection() {
  const locale = await getLocale();
  const t = await getTranslations("Technologies");
  const technologies = await getTechnologies(locale);
  const doctor = await getDoctor(locale);

  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-900/20 lg:max-w-none">
          <Image
            src={doctor.portraitUrl}
            alt={t("title")}
            fill
            sizes="(min-width: 1024px) 460px, 90vw"
            className="object-cover object-[center_25%]"
          />
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col items-start gap-4">
            <Badge>{t("badge")}</Badge>
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">
              {t("title")}
            </h2>
            <p className="text-base leading-relaxed text-slate-600">{t("description")}</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {technologies.map((tech, index) => (
              <Reveal key={tech.title} delay={index * 80} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <tech.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-base font-semibold text-brand-950">{tech.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{tech.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
