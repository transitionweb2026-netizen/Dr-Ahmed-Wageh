import type { MetadataRoute } from "next";
import { getProductionUrl } from "@/lib/site";

// Deliberately static (no headers()/request-time APIs): robots.txt is the
// same for every deployment and doesn't need to vary. Disallow only blocks
// crawling, not indexing of already-known URLs, so it's not the mechanism
// protecting preview/staging deployments anyway — the per-page
// `noindex`/`index,follow` meta tag (lib/cms/seo.ts, app/[locale]/layout.tsx)
// is, and that's untouched by this file.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/admin" },
    sitemap: `${getProductionUrl()}/sitemap.xml`,
  };
}
