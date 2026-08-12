import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  // The site has an explicit EN|AR switcher with canonical, deterministic
  // URLs (unprefixed = English, /ar/* = Arabic). Cookie/Accept-Language
  // based auto-redirection must stay off, otherwise visiting /ar once
  // makes every later unprefixed URL bounce back to /ar via a stale
  // NEXT_LOCALE cookie, breaking the switch back to English.
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];
