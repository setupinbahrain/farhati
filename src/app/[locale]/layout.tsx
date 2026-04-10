import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import AIConcierge from "@/components/AIConcierge";

const newsreader = Newsreader({ 
  subsets: ["latin"],
  variable: '--font-newsreader'
});

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-source-sans'
});

export const metadata: Metadata = {
  title: "Deliver Gifts, Flowers & Cakes in Bahrain | Farhati",
  description: "Bahrain's leading gifting platform",
};

import { locales } from "@/i18n";
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${newsreader.variable} ${sourceSans.variable}`}>
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
        <StickyCTA locale={locale} />
        <AIConcierge locale={locale} />
        <FloatingWhatsApp locale={locale} />
      </body>
    </html>
  );
}
