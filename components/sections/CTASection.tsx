import Image from "next/image";
import { ArrowRight, Clock, MessageCircle } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { getContact, getDoctor } from "@/lib/cms/content";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PrimaryButton, GhostButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type CTAVariant = "home" | "about" | "services" | "reviews" | "videos" | "articles";

interface CTASectionProps {
  variant?: CTAVariant;
}

export async function CTASection({ variant = "home" }: CTASectionProps) {
  const locale = await getLocale();
  const t = await getTranslations(`CTA.${variant}`);
  const contact = await getContact(locale);
  const doctor = await getDoctor(locale);

  return (
    <section className="py-6 sm:py-10">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-900 shadow-2xl shadow-brand-900/25">
          <div
            aria-hidden
            className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl rtl:left-auto rtl:-right-16"
          />
          <div
            aria-hidden
            className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-brand-950/25 blur-3xl rtl:right-auto rtl:-left-10"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
            <div className="flex flex-col items-start gap-6 px-8 py-14 sm:px-12 sm:py-16">
              <Badge tone="dark">{t("badge")}</Badge>
              <h2 className="text-balance font-display text-3xl font-semibold leading-[1.15] text-white sm:text-4xl">
                {t("title")}
              </h2>
              <p className="max-w-lg text-balance text-base leading-relaxed text-brand-100/90">
                {t("description")}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryButton
                  href="/contact"
                  icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />}
                  className="bg-white text-brand-700 shadow-white/10 hover:bg-brand-50"
                >
                  {t("primaryLabel")}
                </PrimaryButton>
                <GhostButton
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<MessageCircle className="h-4 w-4" />}
                  iconPosition="left"
                >
                  {t("whatsapp")}
                </GhostButton>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-100/80">
                <Clock className="h-4 w-4 shrink-0 text-brand-200" strokeWidth={1.8} />
                <span>{contact.emergencyNote}</span>
              </div>
            </div>

            <div className="relative hidden min-h-[320px] lg:block">
              <Image
                src={doctor.portraitUrl}
                alt={doctor.name}
                fill
                sizes="480px"
                className="object-cover object-top"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-brand-700/95 via-brand-700/10 to-transparent rtl:bg-gradient-to-l"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
