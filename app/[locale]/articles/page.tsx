import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/cms/seo";
import { Hero } from "@/components/sections/Hero";
import { ArticlesIntroSection } from "@/components/sections/ArticlesIntroSection";
import { FeaturedArticleSection } from "@/components/sections/FeaturedArticleSection";
import { ArticlesGridSection } from "@/components/sections/ArticlesGridSection";
import { CTASection } from "@/components/sections/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "articles");
}

export default function ArticlesPage() {
  return (
    <>
      <Hero page="articles" />
      <ArticlesIntroSection />
      <FeaturedArticleSection />
      <ArticlesGridSection />
      <CTASection variant="articles" />
    </>
  );
}
