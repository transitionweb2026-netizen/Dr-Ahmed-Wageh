import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  target?: string;
  rel?: string;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

function ButtonContent({
  children,
  icon,
  iconPosition = "right",
}: {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}) {
  return (
    <>
      {icon && iconPosition === "left" ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? icon : null}
    </>
  );
}

export function PrimaryButton({
  children,
  href,
  className,
  icon,
  iconPosition,
  target,
  rel,
  ...rest
}: ButtonProps) {
  const classes = cn(
    base,
    "bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/25 focus-visible:ring-brand-500",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        <ButtonContent icon={icon} iconPosition={iconPosition}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  );
}

export function SecondaryButton({
  children,
  href,
  className,
  icon,
  iconPosition,
  target,
  rel,
  ...rest
}: ButtonProps) {
  const classes = cn(
    base,
    "border border-brand-600 bg-white text-brand-600 hover:bg-brand-50 focus-visible:ring-brand-500",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        <ButtonContent icon={icon} iconPosition={iconPosition}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  );
}

export function GhostButton({
  children,
  href,
  className,
  icon,
  iconPosition,
  target,
  rel,
  ...rest
}: ButtonProps) {
  const classes = cn(
    base,
    "border border-white/30 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        <ButtonContent icon={icon} iconPosition={iconPosition}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  );
}
