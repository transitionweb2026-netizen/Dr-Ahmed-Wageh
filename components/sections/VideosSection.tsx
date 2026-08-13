import { getLocale, getTranslations } from "next-intl/server";
import { getGalleryVideos, getHomeVideos } from "@/lib/cms/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VideosGrid } from "@/components/sections/VideosGrid";

interface VideosSectionProps {
  variant?: "home" | "videosPage";
}

export async function VideosSection({ variant = "home" }: VideosSectionProps) {
  const locale = await getLocale();
  const t = await getTranslations(`VideosSection.${variant}`);
  const videos = variant === "home" ? await getHomeVideos(locale) : await getGalleryVideos(locale);

  return (
    <section className={variant === "videosPage" ? "bg-brand-50/60 py-20 sm:py-28" : "py-20 sm:py-28"}>
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
        </Reveal>
        <VideosGrid videos={videos} />
      </Container>
    </section>
  );
}
