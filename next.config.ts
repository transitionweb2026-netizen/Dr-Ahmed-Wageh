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
  },
};

export default withNextIntl(nextConfig);
