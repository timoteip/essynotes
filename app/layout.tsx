import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Cormorant_Garamond, EB_Garamond, Italianno } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Announce from "@/components/Announce";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italianno",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://essynotes.com"),
  title: {
    default: "essynotes — handwriting, slow living, intentional pages",
    template: "%s · essynotes",
  },
  description:
    "Handwriting content, digital templates, and the tools I write with. A quiet corner of the internet for people who still love the weight of a pen.",
  openGraph: {
    title: "essynotes",
    description: "Handwriting, slow living, intentional pages.",
    url: "https://essynotes.com",
    siteName: "essynotes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "essynotes",
    description: "Handwriting, slow living, intentional pages.",
  },
  keywords: [
    "handwriting",
    "journaling",
    "slow living",
    "digital templates",
    "fountain pen",
    "bullet journal",
    "handwriting content creator",
    "essynotes",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://essynotes.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://essynotes.com/#estera",
      name: "Estera",
      url: "https://essynotes.com",
      sameAs: [
        "https://tiktok.com/@essynotes",
        "https://instagram.com/essynotes",
        "https://youtube.com/@essynotes",
      ],
      jobTitle: "Handwriting Content Creator",
    },
    {
      "@type": "WebSite",
      "@id": "https://essynotes.com/#website",
      url: "https://essynotes.com",
      name: "essynotes",
      description: "Handwriting content, digital templates, and the tools I write with.",
      publisher: { "@id": "https://essynotes.com/#estera" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${ebGaramond.variable} ${italianno.variable}`}>
      <head>
        <link rel="preconnect" href="https://assets.lemonsqueezy.com" />
        <link rel="preconnect" href="https://cdn.lemonsqueezy.com" />
      </head>
      <body>
        <Announce />
        <Nav />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
