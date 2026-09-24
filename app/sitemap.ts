import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const PAGE_PATHS = ["/", "/about", "/services", "/reviews", "/videos", "/articles", "/contact"];

function localizedPath(locale: "en" | "ar", basePath: string): string {
  if (locale === "en") return basePath;
  return `/${locale}${basePath === "/" ? "" : basePath}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return PAGE_PATHS.flatMap((basePath) =>
    (["en", "ar"] as const).map((locale) => ({
      url: `${siteUrl}${localizedPath(locale, basePath)}`,
      alternates: {
        languages: {
          en: `${siteUrl}${localizedPath("en", basePath)}`,
          ar: `${siteUrl}${localizedPath("ar", basePath)}`,
        },
      },
    }))
  );
}
