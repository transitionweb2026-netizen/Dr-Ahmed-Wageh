import { socialLinks } from "@/data/social";
import { cn } from "@/lib/utils";
import { SocialIcon } from "@/components/ui/SocialIcon";

interface SocialLinksProps {
  tone?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
}

export function SocialLinks({ tone = "light", size = "md", className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((social) => (
        <li key={social.platform}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={cn(
              "flex items-center justify-center rounded-full border transition-colors duration-300",
              size === "sm" ? "h-9 w-9" : "h-11 w-11",
              tone === "light"
                ? "border-slate-200 text-brand-700 hover:border-brand-300 hover:bg-brand-50"
                : "border-white/20 text-white hover:border-white/40 hover:bg-white/10"
            )}
          >
            <SocialIcon platform={social.platform} className={size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]"} />
          </a>
        </li>
      ))}
    </ul>
  );
}
