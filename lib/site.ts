import { headers } from "next/headers";

// The site's one true public domain. Sitemap URLs always use this literally
// (a sitemap must declare canonical production URLs no matter which host
// happens to be serving the file), and it's also the match target for
// deciding whether an incoming request is actually production traffic.
const PRODUCTION_URL = "https://dr-ahmedwagih.com";
const PRODUCTION_HOSTNAMES = new Set(["dr-ahmedwagih.com", "www.dr-ahmedwagih.com"]);

export function getProductionUrl(): string {
  return PRODUCTION_URL;
}

// Deliberately NOT based on VERCEL_ENV/VERCEL_URL: those are only populated
// when a Vercel project has "Automatically expose System Environment
// Variables" turned on. When it's off (an easy-to-miss per-project setting,
// confirmed off here — VERCEL_ENV was undefined even on the real production
// domain, which silently made every request look like "not production" and
// fell back to a hardcoded localhost URL site-wide). Reading the actual
// incoming Host header is robust regardless of that setting.
async function getRequestHostname(): Promise<string | null> {
  const h = await headers();
  const host = h.get("host");
  return host ? host.toLowerCase().split(":")[0] : null;
}

export async function isProductionRequest(): Promise<boolean> {
  const hostname = await getRequestHostname();
  return hostname !== null && PRODUCTION_HOSTNAMES.has(hostname);
}

// For metadataBase / self-referencing URLs: the production domain resolves
// to the canonical production URL, anything else (previews, local dev)
// resolves to itself so relative links still work correctly there.
export async function getSiteUrl(): Promise<string> {
  const h = await headers();
  const host = h.get("host");
  if (!host) return PRODUCTION_URL;

  const hostname = host.toLowerCase().split(":")[0];
  if (PRODUCTION_HOSTNAMES.has(hostname)) return PRODUCTION_URL;

  const isLocal = hostname === "localhost" || hostname === "127.0.0.1";
  const proto = isLocal ? "http" : (h.get("x-forwarded-proto") ?? "https");
  return `${proto}://${host}`;
}
