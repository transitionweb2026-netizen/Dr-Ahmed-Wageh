"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Menu, X } from "lucide-react";
import { mainNav } from "@/data/nav";
import { contact } from "@/data/contact";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/Button";
import { Logo } from "@/components/navigation/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  // Every hero (home and page variants) starts with a dark/photo background, so the
  // navbar can stay transparent with light text until the user scrolls past it.
  const solid = isScrolled || isOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        solid
          ? "border-b border-slate-100 bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo tone={solid ? "light" : "dark"} />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                      solid
                        ? active
                          ? "text-brand-600"
                          : "text-slate-600 hover:text-brand-600"
                        : active
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.label}
                    {active && (
                      <span
                        className={cn(
                          "absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full",
                          solid ? "bg-brand-600" : "bg-white"
                        )}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <PrimaryButton href="/contact" icon={<CalendarCheck className="h-4 w-4" />} iconPosition="left">
            Book Appointment
          </PrimaryButton>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden",
            solid ? "border-slate-200 text-brand-700" : "border-white/40 text-white"
          )}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden border-t border-slate-100 bg-white transition-[grid-template-rows] duration-300 ease-in-out lg:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-1 py-5">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    active ? "bg-brand-50 text-brand-600" : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-col gap-3">
              <PrimaryButton
                href="/contact"
                icon={<CalendarCheck className="h-4 w-4" />}
                iconPosition="left"
                className="w-full"
              >
                Book Appointment
              </PrimaryButton>
              <a
                href={contact.phoneHref}
                className="text-center text-sm font-semibold text-brand-700"
              >
                {contact.phoneDisplay}
              </a>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
