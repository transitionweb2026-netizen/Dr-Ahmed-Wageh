import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}

// Retired site-wide (the small pill eyebrow above section headings). Kept as
// a no-op rather than touched at each of its ~20 call sites — every caller
// is a flex child with `gap` spacing, so rendering nothing here removes the
// panel everywhere with no leftover gap.
export function Badge(_props: BadgeProps) {
  return null;
}
