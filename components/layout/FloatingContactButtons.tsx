import { MessageCircle, PhoneCall } from "lucide-react";
import { getLocale } from "next-intl/server";
import { getContact } from "@/lib/cms/content";

const LABELS = {
  en: { whatsapp: "Chat on WhatsApp", phone: "Call us" },
  ar: { whatsapp: "تواصل عبر واتساب", phone: "اتصل بنا" },
} as const;

export async function FloatingContactButtons() {
  const locale = await getLocale();
  const contact = await getContact(locale);
  const labels = locale === "ar" ? LABELS.ar : LABELS.en;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 sm:bottom-8 sm:right-8">
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labels.whatsapp}
        title={labels.whatsapp}
        className="animate-slide-in-right relative flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp-500 text-white shadow-lg shadow-whatsapp-500/30 transition-all duration-300 hover:scale-105 hover:bg-whatsapp-600 hover:shadow-xl hover:shadow-whatsapp-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp-500 focus-visible:ring-offset-2 sm:h-14 sm:w-14"
        style={{ animationDelay: "600ms" }}
      >
        <span
          aria-hidden
          className="animate-whatsapp-pulse absolute inset-0 rounded-full bg-whatsapp-500"
          style={{ animationDelay: "600ms" }}
        />
        <MessageCircle className="relative h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
      </a>

      <a
        href={contact.phoneHref}
        aria-label={labels.phone}
        title={labels.phone}
        className="animate-slide-in-right flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:scale-105 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:h-14 sm:w-14"
        style={{ animationDelay: "750ms" }}
      >
        <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
      </a>
    </div>
  );
}
