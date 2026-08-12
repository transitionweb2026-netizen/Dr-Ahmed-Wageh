import { useLocale, useTranslations } from "next-intl";
import { getDoctor } from "@/lib/localizedData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function AboutTextSection() {
  const locale = useLocale();
  const t = useTranslations("AboutText");
  const doctor = getDoctor(locale);

  return (
    <section className="bg-brand-50/50 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-10">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </Reveal>
        <Reveal delay={100} className="flex max-w-3xl flex-col gap-6">
          {doctor.bioParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-balance text-center text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
