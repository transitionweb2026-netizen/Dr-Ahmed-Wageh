import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getSeoMeta } from "./content";

const PAGE_PATHS: Record<string, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  reviews: "/reviews",
  videos: "/videos",
  articles: "/articles",
  contact: "/contact",
};

export async function buildPageMetadata(locale: string, slug: keyof typeof PAGE_PATHS): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Meta" });
  const title = t(`${slug}.title`);
  const description = t(`${slug}.description`);

  const basePath = PAGE_PATHS[slug];
  const defaultPath = locale === "en" ? basePath : `/${locale}${basePath === "/" ? "" : basePath}`;

  const seo = await getSeoMeta(slug);
  const canonical = seo?.canonicalPathOverride || defaultPath;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      ...(seo?.ogImageUrl ? { images: [{ url: seo.ogImageUrl, alt: seo.ogImageAlt ?? title }] } : {}),
    },
  };
}
