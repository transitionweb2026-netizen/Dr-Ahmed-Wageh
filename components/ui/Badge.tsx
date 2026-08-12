import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}

export function Badge({ children, className, tone = "light" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
        tone === "light"
          ? "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100"
          : "bg-white/10 text-white ring-1 ring-inset ring-white/20",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "light" ? "bg-brand-500" : "bg-white"
        )}
      />
      {children}
    </span>
  );
}
