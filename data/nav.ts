import type { NavItem } from "./types";

// Labels are resolved at render time via useTranslations("Nav") using `key`,
// so this list is locale-agnostic — the same hrefs power every language.
export const mainNav: NavItem[] = [
  { key: "main", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "reviews", href: "/reviews" },
  { key: "videos", href: "/videos" },
  { key: "articles", href: "/articles" },
  { key: "contact", href: "/contact" },
];
