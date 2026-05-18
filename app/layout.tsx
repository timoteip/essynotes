import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Italianno } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Announce from "@/components/Announce";
import { getSiteSettings } from "@/lib/data";

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
    default: "essy notes — handwriting, slow living, intentional pages",
    template: "%s · essy notes",
  },
  description:
    "Handwriting content, digital templates, and the tools I write with. A quiet corner of the internet for people who still love the weight of a pen.",
  openGraph: {
    title: "essy notes",
    description: "Handwriting, slow living, intentional pages.",
    url: "https://essynotes.com",
    siteName: "essy notes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "essy notes",
    description: "Handwriting, slow living, intentional pages.",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  return (
    <html lang="en" className={`${cormorant.variable} ${ebGaramond.variable} ${italianno.variable}`}>
      <body>
        <Announce text={settings.announceBar} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
