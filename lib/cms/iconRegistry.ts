import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Only real icon components export from lucide-react's root — filters out
// the package's non-component named exports (e.g. `createLucideIcon`, "icons"
// registry object, `default`) so the registry can't accidentally resolve to
// something that isn't renderable as <Icon />.
function isLucideIcon(value: unknown): value is LucideIcon {
  return typeof value === "function" || (typeof value === "object" && value !== null && "render" in value);
}

const iconEntries = Object.entries(LucideIcons).filter(
  (entry): entry is [string, LucideIcon] => isLucideIcon(entry[1])
);

export const iconRegistry: Record<string, LucideIcon> = Object.fromEntries(iconEntries);

const iconNameByComponent = new Map<LucideIcon, string>(
  iconEntries.map(([name, component]) => [component, name])
);

/** Reverse lookup used only by the seed script, so icon names can never drift from the data files. */
export function nameForIcon(component: LucideIcon): string {
  const name = iconNameByComponent.get(component);
  if (!name) {
    throw new Error(
      `nameForIcon: component not found in lucide-react's exports (did the seed data import a non-lucide icon?)`
    );
  }
  return name;
}

export function isValidIconName(name: string): boolean {
  return name in iconRegistry;
}

/** Falls back to a neutral placeholder icon rather than throwing on a bad/typo'd stored name. */
export function resolveIcon(name: string): LucideIcon {
  return iconRegistry[name] ?? LucideIcons.CircleHelp;
}
