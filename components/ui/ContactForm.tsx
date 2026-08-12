"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { PrimaryButton } from "@/components/ui/Button";

const fieldClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-brand-950 placeholder:text-slate-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";

export function ContactForm() {
  const t = useTranslations("ContactForm");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-brand-100 bg-brand-50 px-8 py-14 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="font-display text-xl font-semibold text-brand-950">{t("successTitle")}</h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate-600">{t("successDescription")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-brand-950">
            {t("fullName")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t("fullNamePlaceholder")}
            className={fieldClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-brand-950">
            {t("phone")}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            dir="ltr"
            placeholder={t("phonePlaceholder")}
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-brand-950">
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          dir="ltr"
          placeholder={t("emailPlaceholder")}
          className={fieldClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-brand-950">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t("messagePlaceholder")}
          className={fieldClasses}
        />
      </div>

      <PrimaryButton
        type="submit"
        icon={<Send className="h-4 w-4 rtl:-scale-x-100" />}
        className="mt-2 w-full sm:w-auto"
      >
        {t("submit")}
      </PrimaryButton>
    </form>
  );
}
