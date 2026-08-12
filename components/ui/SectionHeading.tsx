import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  tone = "light",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <Badge tone={tone}>{eyebrow}</Badge>}
      <Tag
        className={cn(
          "text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-brand-950" : "text-white"
        )}
      >
        {highlight && parts.length > 1 ? (
          <>
            {parts[0]}
            <span className={tone === "light" ? "text-brand-600" : "text-brand-200"}>
              {highlight}
            </span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </Tag>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-balance text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-slate-600" : "text-brand-100/90",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
