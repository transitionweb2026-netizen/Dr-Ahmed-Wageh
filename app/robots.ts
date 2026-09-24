import type { MetadataRoute } from "next";
import { getSiteUrl, isProductionEnv } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  if (!isProductionEnv()) {
    // Preview deployments and local dev must never be indexed as
    // independent sites.
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/admin" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
