import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { VideosSection } from "@/components/sections/VideosSection";
import { CTASection } from "@/components/sections/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const path = locale === "en" ? "/videos" : `/${locale}/videos`;

  return {
    title: t("videos.title"),
    description: t("videos.description"),
    alternates: { canonical: path },
    openGraph: { title: t("videos.title"), description: t("videos.description"), url: path },
  };
}

export default function VideosPage() {
  return (
    <>
      <Hero page="videos" />
      <VideosSection variant="videosPage" />
      <CTASection variant="videos" />
    </>
  );
}
