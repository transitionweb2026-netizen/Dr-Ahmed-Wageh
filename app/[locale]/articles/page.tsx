import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { FeaturedArticleSection } from "@/components/sections/FeaturedArticleSection";
import { ArticlesGridSection } from "@/components/sections/ArticlesGridSection";
import { CTASection } from "@/components/sections/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const path = locale === "en" ? "/articles" : `/${locale}/articles`;

  return {
    title: t("articles.title"),
    description: t("articles.description"),
    alternates: { canonical: path },
    openGraph: { title: t("articles.title"), description: t("articles.description"), url: path },
  };
}

export default function ArticlesPage() {
  return (
    <>
      <Hero page="articles" />
      <FeaturedArticleSection />
      <ArticlesGridSection />
      <CTASection />
    </>
  );
}
