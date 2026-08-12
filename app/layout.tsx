import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const siteUrl = "https://www.drahmedwagih.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Ahmed Wagih | Pain Management Consultant",
    template: "%s | Dr. Ahmed Wagih",
  },
  description:
    "Dr. Ahmed Wagih is a consultant in pain management and physical rehabilitation, offering precise diagnosis and personalized, patient-centered care.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Dr. Ahmed Wagih",
    title: "Dr. Ahmed Wagih | Pain Management Consultant",
    description:
      "Precise diagnosis, personalized treatment plans, and long-term follow-up care from Dr. Ahmed Wagih.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Ahmed Wagih | Pain Management Consultant",
    description:
      "Precise diagnosis, personalized treatment plans, and long-term follow-up care from Dr. Ahmed Wagih.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-foreground">
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
