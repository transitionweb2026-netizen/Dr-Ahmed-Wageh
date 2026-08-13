import { getLocale, getTranslations } from "next-intl/server";
import { getServices } from "@/lib/cms/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export async function ServicesSection() {
  const locale = await getLocale();
  const t = await getTranslations("Services");
  // Icon components are functions, which can't cross the Server->Client
  // boundary as props; ServiceCard never rendered the icon anyway (the
  // vertical image-card design uses the photo instead).
  const services = (await getServices(locale)).map(({ icon, ...rest }) => rest);

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
        <ServicesGrid services={services} />
      </Container>
    </section>
  );
}
