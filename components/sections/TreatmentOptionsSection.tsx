import { getLocale, getTranslations } from "next-intl/server";
import { getTreatmentOptions } from "@/lib/cms/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentOptionsGrid } from "@/components/sections/TreatmentOptionsGrid";

interface TreatmentOptionsSectionProps {
  variant?: "home" | "services";
  tone?: "light" | "muted";
}

export async function TreatmentOptionsSection({
  variant = "home",
  tone = "light",
}: TreatmentOptionsSectionProps) {
  const locale = await getLocale();
  const t = await getTranslations(`TreatmentOptions.${variant}`);
  // Icon components are functions, which can't cross the Server->Client
  // boundary as props; TreatmentCard never rendered the icon anyway (the
  // vertical image-card design uses the photo instead).
  const treatmentOptions = (await getTreatmentOptions(locale)).map(({ icon, ...rest }) => rest);

  return (
    <section className={tone === "muted" ? "bg-brand-50/50 py-20 sm:py-28" : "py-20 sm:py-28"}>
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t.has("description") ? t("description") : undefined}
          />
        </Reveal>
        <TreatmentOptionsGrid treatmentOptions={treatmentOptions} />
      </Container>
    </section>
  );
}
