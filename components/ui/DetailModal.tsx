"use client";

import { useCallback, useEffect, useState, type AnimationEvent } from "react";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { CardImage } from "./CardImage";

export interface DetailModalSection {
  label: string;
  text?: string;
  items?: string[];
}

export interface DetailModalData {
  image: string;
  title: string;
  description: string;
  sections: DetailModalSection[];
}

interface DetailModalProps {
  data: DetailModalData | null;
  onClose: () => void;
}

export function DetailModal({ data, onClose }: DetailModalProps) {
  const t = useTranslations("DetailModal");
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (data) setClosing(false);
  }, [data]);

  const requestClose = useCallback(() => setClosing(true), []);

  useEffect(() => {
    if (!data) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [data, requestClose]);

  if (!data) return null;

  const handleBackdropAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (closing && event.target === event.currentTarget) onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/70 p-4 backdrop-blur-sm sm:p-6",
        closing ? "animate-modal-fade-out" : "animate-modal-fade-in"
      )}
      onClick={requestClose}
      onAnimationEnd={handleBackdropAnimationEnd}
    >
      <div
        className={cn(
          "relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl",
          closing ? "animate-modal-scale-out" : "animate-modal-scale-in"
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={requestClose}
          aria-label={t("close")}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-950 shadow-md backdrop-blur transition-colors hover:bg-white rtl:right-auto rtl:left-5"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-56 w-full shrink-0 sm:h-72">
          <CardImage
            src={data.image}
            alt={data.title}
            fill
            sizes="(min-width: 640px) 42rem, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent"
          />
        </div>

        <div className="flex flex-col gap-6 overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-2xl font-semibold text-brand-950">{data.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {data.description}
            </p>
          </div>

          {data.sections.map((section) => (
            <div key={section.label} className="flex flex-col gap-3 border-t border-slate-100 pt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">
                {section.label}
              </h4>
              {section.text && (
                <p className="text-sm leading-relaxed text-slate-600">{section.text}</p>
              )}
              {section.items && (
                <ul className="flex flex-col gap-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
