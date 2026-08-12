import { ArrowRight, MessageCircle } from "lucide-react";
import { contact } from "@/data/contact";
import { Container } from "@/components/ui/Container";
import { PrimaryButton, GhostButton } from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CTASection({
  title = "Ready to Live Pain-Free?",
  description = "Take the first step toward lasting relief. Our team is here to guide you through every stage of care.",
  primaryLabel = "Book Appointment",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-6 sm:py-10">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-600 px-8 py-14 shadow-2xl shadow-brand-900/20 sm:px-14 sm:py-16">
          <div
            aria-hidden
            className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-brand-950/20 blur-3xl"
          />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
                {title}
              </h2>
              <p className="max-w-xl text-balance text-base leading-relaxed text-brand-100/90">
                {description}
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-4 lg:w-auto">
              <PrimaryButton
                href={primaryHref}
                icon={<ArrowRight className="h-4 w-4" />}
                className="bg-white text-brand-700 shadow-white/10 hover:bg-brand-50"
              >
                {primaryLabel}
              </PrimaryButton>
              <GhostButton
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageCircle className="h-4 w-4" />}
                iconPosition="left"
              >
                Chat on WhatsApp
              </GhostButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
