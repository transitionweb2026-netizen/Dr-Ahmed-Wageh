import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function ArticlesIntroSection() {
  const t = await getTranslations("ArticlesGrid");

  return (
    <section className="pb-4 pt-20 sm:pb-6 sm:pt-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
        </Reveal>
      </Container>
    </section>
  );
}
