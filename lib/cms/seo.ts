import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getSeoMeta } from "./content";
import { isProductionRequest } from "@/lib/site";

const PAGE_PATHS: Record<string, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  reviews: "/reviews",
  videos: "/videos",
  articles: "/articles",
  contact: "/contact",
};

const LOCALES = ["en", "ar"] as const;

function localizedPath(locale: string, basePath: string): string {
  if (locale === "en") return basePath;
  return `/${locale}${basePath === "/" ? "" : basePath}`;
}

export async function buildPageMetadata(locale: string, slug: keyof typeof PAGE_PATHS): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Meta" });
  const title = t(`${slug}.title`);
  const description = t(`${slug}.description`);
  const siteName = t("brandName");

  const basePath = PAGE_PATHS[slug];
  const defaultPath = localizedPath(locale, basePath);

  const seo = await getSeoMeta(slug);
  const canonical = seo?.canonicalPathOverride || defaultPath;

  // Every page must declare its own hreflang set (not just home's) — Next's
  // metadata merging replaces the root layout's `alternates` object wholesale
  // whenever a page returns its own, so this has to be self-contained here.
  const languages: Record<string, string> = { "x-default": basePath };
  for (const l of LOCALES) {
    languages[l] = localizedPath(l, basePath);
  }

  // Same shallow-replace issue applies to `openGraph` — siteName/locale set
  // on the root layout never reach a page that returns its own openGraph
  // object, so they're repeated explicitly here.
  const ogImage = seo?.ogImageUrl
    ? { url: seo.ogImageUrl, alt: seo.ogImageAlt ?? title }
    : { url: "/og-image.png", width: 1200, height: 630, alt: title };

  const robots = (await isProductionRequest())
    ? { index: true, follow: true }
    : { index: false, follow: false };

  return {
    title,
    description,
    alternates: { canonical, languages },
    robots,
    openGraph: {
      type: "website",
      siteName,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      title,
      description,
      url: canonical,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
