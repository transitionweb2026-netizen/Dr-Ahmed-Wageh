import { getLocale, getTranslations } from "next-intl/server";
import { getConditions } from "@/lib/cms/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButton } from "@/components/ui/Button";
import { ConditionsGrid } from "@/components/sections/ConditionsGrid";

export async function ConditionsSection() {
  const locale = await getLocale();
  const t = await getTranslations("Conditions");
  // Icon components are functions, which can't cross the Server->Client
  // boundary as props; ConditionCard never rendered the icon anyway (the
  // vertical image-card design uses the photo instead).
  const conditions = (await getConditions(locale)).map(({ icon, ...rest }) => rest);

  return (
    <section className="bg-brand-50/50 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </Reveal>
        <ConditionsGrid conditions={conditions} />
        <Reveal delay={280} className="flex justify-center">
          <PrimaryButton href="/services">{t("viewAllServices")}</PrimaryButton>
        </Reveal>
      </Container>
    </section>
  );
}
