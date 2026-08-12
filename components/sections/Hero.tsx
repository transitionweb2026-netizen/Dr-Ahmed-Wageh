import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getContact, getDoctor } from "@/lib/localizedData";
import { doctorImages } from "@/data/images";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { SocialLinks } from "@/components/navigation/SocialLinks";

type HeroPage = "home" | "about" | "services" | "reviews" | "videos" | "articles" | "contact";

interface HeroProps {
  page: HeroPage;
  primaryHref?: string;
  secondaryHref?: string;
}

export function Hero({ page, primaryHref = "/contact", secondaryHref }: HeroProps) {
  const locale = useLocale();
  const doctor = getDoctor(locale);
  const contact = getContact(locale);
  const t = useTranslations(`Hero.${page}`);
  const hasPrimary = t.has("primaryCta");
  const hasSecondary = t.has("secondaryCta");
  const title = t("title");
  const highlight = t.has("highlight") ? t("highlight") : undefined;

  if (page === "home") {
    return (
      <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden">
        <Image
          src={doctorImages.portrait}
          alt={doctor.portraitAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Brand-blue scrim: darkest under the text (start side), fading out toward
            the end side so the doctor stays clearly visible rather than washed out. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-950/55 to-brand-950/10 rtl:bg-gradient-to-l"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/20"
        />

        <Container className="relative z-10 py-28">
          <div className="flex max-w-xl flex-col items-start gap-7">
            <Badge tone="dark">{t("eyebrow")}</Badge>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {highlight ? (
                <>
                  {title.split(highlight)[0]}
                  <span className="text-brand-200">{highlight}</span>
                  {title.split(highlight)[1]}
                </>
              ) : (
                title
              )}
            </h1>
            <p className="max-w-lg text-balance text-base leading-relaxed text-white/85 sm:text-lg">
              {t("description")}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <PrimaryButton
                href={primaryHref}
                icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />}
              >
                {t("primaryCta")}
              </PrimaryButton>
              <SecondaryButton
                href={secondaryHref ?? "/services"}
                className="border-white/50 bg-transparent text-white hover:bg-white/10"
              >
                {t("secondaryCta")}
              </SecondaryButton>
            </div>

            <div className="flex w-full flex-wrap items-center gap-4 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md sm:w-auto">
              <SocialLinks size="sm" tone="dark" />
              <span className="h-6 w-px bg-white/25" aria-hidden />
              <a
                href={contact.phoneHref}
                className="flex items-center gap-2 text-sm font-semibold text-white"
                dir="ltr"
              >
                <PhoneCall className="h-4 w-4 text-brand-200" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (page === "about") {
    return (
      <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden">
        <Image
          src={doctorImages.portrait}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Text sits over a scrim on the start side only, so the doctor's
            face stays fully visible on the opposite side in both LTR/RTL. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-brand-950/88 via-brand-950/50 to-transparent rtl:bg-gradient-to-l"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-950/55 via-transparent to-brand-950/15"
        />

        <Container className="relative z-10 py-28">
          <div className="flex max-w-xl flex-col items-start gap-7">
            <Badge tone="dark">{t("eyebrow")}</Badge>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
              {highlight ? (
                <>
                  {title.split(highlight)[0]}
                  <span className="text-brand-200">{highlight}</span>
                  {title.split(highlight)[1]}
                </>
              ) : (
                title
              )}
            </h1>
            <p className="max-w-lg text-balance text-base leading-relaxed text-white/85 sm:text-lg">
              {t("description")}
            </p>
            {(hasPrimary || hasSecondary) && (
              <div className="flex flex-wrap items-center gap-4">
                {hasPrimary && (
                  <PrimaryButton
                    href={primaryHref}
                    icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />}
                  >
                    {t("primaryCta")}
                  </PrimaryButton>
                )}
                {hasSecondary && (
                  <SecondaryButton
                    href={secondaryHref ?? "/services"}
                    className="border-white/50 bg-transparent text-white hover:bg-white/10"
                  >
                    {t("secondaryCta")}
                  </SecondaryButton>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[520px] w-full items-center overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36">
      <Image
        src={doctorImages.portrait}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div aria-hidden className="absolute inset-0 bg-brand-950/80" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-brand-950/50"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <Container className="relative z-10 flex flex-col items-center gap-5 text-center">
        <Badge tone="dark">{t("eyebrow")}</Badge>
        <h1 className="text-balance font-display text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl">
          {highlight ? (
            <>
              {title.split(highlight)[0]}
              <span className="text-brand-200">{highlight}</span>
              {title.split(highlight)[1]}
            </>
          ) : (
            title
          )}
        </h1>
        <p className="max-w-2xl text-balance text-base leading-relaxed text-brand-100/90 sm:text-lg">
          {t("description")}
        </p>
        {(hasPrimary || hasSecondary) && (
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            {hasPrimary && (
              <PrimaryButton
                href={primaryHref}
                icon={<ArrowRight className="h-4 w-4 rtl:rotate-180" />}
              >
                {t("primaryCta")}
              </PrimaryButton>
            )}
            {hasSecondary && (
              <SecondaryButton
                href={secondaryHref ?? "/"}
                className="border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                {t("secondaryCta")}
              </SecondaryButton>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
