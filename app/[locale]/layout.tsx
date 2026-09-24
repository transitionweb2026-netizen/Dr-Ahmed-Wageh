import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cairo, Fraunces, Inter, Tajawal } from "next/font/google";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getContact, getDoctor, getGlobalSettings, getSocialLinks } from "@/lib/cms/content";
import { getSiteUrl, isProductionRequest } from "@/lib/site";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/layout/FloatingContactButtons";

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

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const settings = await getGlobalSettings(locale);
  const [siteUrl, isProd] = await Promise.all([getSiteUrl(), isProductionRequest()]);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("defaultTitle"),
      template: `%s | ${t("brandName")}`,
    },
    description: t("defaultDescription"),
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: {
        en: "/",
        ar: "/ar",
      },
    },
    robots: isProd ? { index: true, follow: true } : { index: false, follow: false },
    // Falls back to the app/icon.png file convention until an admin
    // uploads a favicon via Global Settings.
    ...(settings.faviconUrl ? { icons: { icon: settings.faviconUrl } } : {}),
    openGraph: {
      type: "website",
      siteName: t("brandName"),
      title: t("defaultTitle"),
      description: t("defaultDescription"),
      url: locale === "en" ? siteUrl : `${siteUrl}/${locale}`,
      locale: locale === "ar" ? "ar_EG" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("defaultTitle"),
      description: t("defaultDescription"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const t = await getTranslations({ locale, namespace: "Meta" });
  const [doctor, contact, socialLinks] = await Promise.all([
    getDoctor(locale),
    getContact(locale),
    getSocialLinks(locale),
  ]);
  const siteUrl = await getSiteUrl();

  // Only fields backed by real CMS data go here — no invented specialties,
  // ratings, or structured postal addresses (the CMS only has free-text
  // address lines, not separate street/city/postal fields to build one
  // honestly).
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: t("brandName"),
        url: siteUrl,
      },
      {
        "@type": "MedicalBusiness",
        name: doctor.name,
        description: doctor.title.trim(),
        image: doctor.portraitUrl,
        url: siteUrl,
        telephone: contact.phoneDisplay,
        address: [contact.addressLine1, contact.addressLine2],
        sameAs: socialLinks.map((s) => s.href),
      },
    ],
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${fraunces.variable} ${tajawal.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContactButtons />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
