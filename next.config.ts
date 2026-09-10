import path from "node:path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // Server Actions default to a 1mb request body limit, which the CMS's
  // image upload (8MB cap) and video upload (50MB cap) actions would both
  // exceed instantly — this raises the ceiling to match the video action's
  // own validated limit, with headroom for multipart overhead.
  experimental: {
    serverActions: {
      bodySizeLimit: "60mb",
    },
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "rtdyxecjmfjwxouefelp.supabase.co" },
    ],
    // Vercel's Image Optimization has a monthly source-image quota on most
    // plans; once exhausted, /_next/image starts returning 402 for every
    // image on the site (confirmed directly against production). Serving
    // images unoptimized bypasses that pipeline entirely — Supabase Storage
    // and Unsplash both already serve reasonably-sized files, so this is a
    // safe trade of on-the-fly resizing/format conversion for the site
    // simply not going dark whenever that quota resets or is exceeded.
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
