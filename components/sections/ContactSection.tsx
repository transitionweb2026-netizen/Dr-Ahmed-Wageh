import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getContact } from "@/lib/localizedData";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/ui/ContactForm";
import { SocialLinks } from "@/components/navigation/SocialLinks";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  const locale = useLocale();
  const t = useTranslations("Contact");
  const contact = getContact(locale);

  const infoRows = [
    {
      icon: MapPin,
      label: t("clinicAddressLabel"),
      value: `${contact.addressLine1}, ${contact.addressLine2}`,
    },
    { icon: Phone, label: t("phoneLabel"), value: contact.phoneDisplay, href: contact.phoneHref, ltr: true },
    {
      icon: Mail,
      label: t("emailLabel"),
      value: contact.email,
      href: `mailto:${contact.email}`,
      ltr: true,
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-8 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm shadow-slate-900/[0.03] sm:p-10">
          <div className="flex flex-col gap-3">
            <Badge>{t("formBadge")}</Badge>
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-brand-950">
              {t("formHeading")}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">{t("formDescription")}</p>
          </div>
          <ContactForm />
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-brand-950 shadow-2xl shadow-brand-900/20">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]"
            />
            <div
              aria-hidden
              className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-brand-600/30 blur-3xl rtl:left-auto rtl:-right-10"
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                <MapPin className="h-6 w-6" />
              </span>
              <p className="font-display text-lg font-semibold text-white">{contact.addressLine1}</p>
              <p className="text-sm text-brand-100/80">{contact.addressLine2}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm shadow-slate-900/[0.03]">
            <ul className="flex flex-col gap-5">
              {infoRows.map((row) => (
                <li key={row.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <row.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                      {row.label}
                    </span>
                    {row.href ? (
                      <a
                        href={row.href}
                        dir={row.ltr ? "ltr" : undefined}
                        className="text-sm font-medium text-brand-950 hover:text-brand-600"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-brand-950">{row.value}</span>
                    )}
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Clock className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                    {t("workingHoursLabel")}
                  </span>
                  {contact.workingHours.map((slot) => (
                    <span key={slot.days} className="text-sm font-medium text-brand-950">
                      {slot.days}: {slot.hours}
                    </span>
                  ))}
                </div>
              </li>
            </ul>

            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
              <span className="text-sm font-medium text-slate-600">{t("followClinic")}</span>
              <SocialLinks size="sm" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
