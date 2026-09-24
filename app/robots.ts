import type { MetadataRoute } from "next";
import { getProductionUrl, isProductionRequest } from "@/lib/site";

export default async function robots(): Promise<MetadataRoute.Robots> {
  if (!(await isProductionRequest())) {
    // Preview deployments and local dev must never be indexed as
    // independent sites.
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/admin" },
    sitemap: `${getProductionUrl()}/sitemap.xml`,
  };
}
