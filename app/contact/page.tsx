import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dr. Ahmed Wagih's clinic to book a consultation, ask a question, or find our location and working hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Dr. Ahmed Wagih",
    description: "Book a consultation or get in touch with Dr. Ahmed Wagih's clinic.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact Us"
        title="Let's Start Your Recovery Journey"
        description="Reach out to book a consultation, ask a question, or learn more about how we can help."
      />
      <ContactSection />
    </>
  );
}
