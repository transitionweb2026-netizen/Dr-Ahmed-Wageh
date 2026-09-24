const PRODUCTION_URL = "https://dr-ahmedwagih.com";

export function getSiteUrl(): string {
  if (process.env.VERCEL_ENV === "production") return PRODUCTION_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3010";
}

export function isProductionEnv(): boolean {
  return process.env.VERCEL_ENV === "production";
}
