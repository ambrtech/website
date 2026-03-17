import type { Metadata, Viewport } from "next";
import { Lora, Outfit } from "next/font/google";
import { brand } from "@/lib/tokens";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Grain } from "@/components/grain";
import { SVGFilters } from "@/components/svg-filters";
import { Analytics, GTMNoScript, LinkedInNoScript, ClickCeaseNoScript } from "@/components/analytics";
import { CookieConsent } from "@/components/cookie-consent";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-heading",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-body",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ambr.ai";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: brand.colors.surface.DEFAULT },
    { media: "(prefers-color-scheme: dark)", color: brand.colors.dark.DEFAULT },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ambr AI",
    template: "%s | Ambr AI",
  },
  description: "Ambr AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ambr AI",
    title: "Ambr AI",
    description: "Ambr AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambr AI",
    description: "Ambr AI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${outfit.variable}`}>
      <head>
        <Analytics />
      </head>
      <body className="font-body bg-surface text-copy antialiased">
        <CookieConsent />
        <SVGFilters />
        <Grain />
        <GTMNoScript />
        <LinkedInNoScript />
        <ClickCeaseNoScript />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
