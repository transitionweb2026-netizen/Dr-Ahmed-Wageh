import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/cms/seo";
import { Hero } from "@/components/sections/Hero";
import { VideosSection } from "@/components/sections/VideosSection";
import { CTASection } from "@/components/sections/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "videos");
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
