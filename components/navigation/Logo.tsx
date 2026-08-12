import { Stethoscope } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

export function Logo({ tone = "light", className }: LogoProps) {
  const t = useTranslations("Meta");

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3", className)}
      aria-label={t("homeAriaLabel")}
    >
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border",
          tone === "light"
            ? "border-brand-200 bg-brand-50 text-brand-600"
            : "border-white/25 bg-white/10 text-white"
        )}
      >
        <Stethoscope className="h-5 w-5" strokeWidth={1.8} />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-tight",
            tone === "light" ? "text-brand-950" : "text-white"
          )}
        >
          {t("brandName")}
        </span>
        <span
          className={cn(
            "text-[0.65rem] font-semibold uppercase tracking-[0.16em]",
            tone === "light" ? "text-brand-500" : "text-brand-200"
          )}
        >
          {t("brandTagline")}
        </span>
      </span>
    </Link>
  );
}
