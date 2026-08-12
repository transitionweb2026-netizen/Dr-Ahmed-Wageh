import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Stethoscope } from "lucide-react";
import { mainNav } from "@/data/nav";
import { services } from "@/data/services";
import { contact } from "@/data/contact";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/navigation/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-3" aria-label="Dr. Ahmed Wagih — Home">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
              <Stethoscope className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-white">Dr. Ahmed Wagih</span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand-200">
                Pain Management Consultant
              </span>
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-brand-100/80">
            Precise diagnosis, personalized treatment plans, and long-term follow-up care —
            helping patients live active, pain-free lives.
          </p>
          <SocialLinks tone="dark" size="sm" />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-200">
            Quick Links
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-brand-100/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-200">
            Services
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {services.slice(0, 5).map((service) => (
              <li key={service.name} className="text-sm text-brand-100/80">
                {service.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-200">
              Contact Info
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-brand-100/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>
                  {contact.addressLine1}, {contact.addressLine2}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-200">
              Working Hours
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-brand-100/80">
              {contact.workingHours.map((slot) => (
                <li key={slot.days} className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  <span>
                    {slot.days}: {slot.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-200/80 sm:flex-row">
          <p>&copy; {year} Dr. Ahmed Wagih. All Rights Reserved.</p>
          <p>Content shown is for demonstration purposes and does not constitute medical advice.</p>
        </Container>
      </div>
    </footer>
  );
}
