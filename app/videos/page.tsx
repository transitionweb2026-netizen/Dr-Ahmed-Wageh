import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { VideosSection } from "@/components/sections/VideosSection";
import { CTASection } from "@/components/sections/CTASection";
import { galleryVideos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch patient education videos from Dr. Ahmed Wagih covering common conditions, procedures, and recovery tips.",
  alternates: { canonical: "/videos" },
  openGraph: {
    title: "Videos | Dr. Ahmed Wagih",
    description: "Patient education videos from Dr. Ahmed Wagih.",
    url: "/videos",
  },
};

export default function VideosPage() {
  return (
    <>
      <Hero
        eyebrow="Videos"
        title="Pain Care, Explained Simply"
        description="Short videos covering common conditions, what to expect from treatment, and practical everyday tips."
        primaryCta={{ label: "Book Appointment", href: "/contact" }}
      />
      <VideosSection
        eyebrow="Video Library"
        title="Watch & Learn"
        description="Nine short videos from Dr. Wagih on diagnosis, treatment, and living well with pain conditions."
        videos={galleryVideos}
      />
      <CTASection />
    </>
  );
}
