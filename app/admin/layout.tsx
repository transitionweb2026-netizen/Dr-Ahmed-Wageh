import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin | Dr. Ahmed Wagih",
  robots: { index: false, follow: false },
};

// A separate top-level root from app/[locale]/layout.tsx — the admin tool
// is English-only/LTR and has its own chrome (no public Navbar/Footer), so
// it doesn't nest under the public site's locale layout at all.
export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full bg-slate-50 text-foreground">{children}</body>
    </html>
  );
}
