import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Inter, Outfit } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/ui/StickyCTA";

import JsonLd from "@/components/seo/JsonLd";
import { siteGraph } from "@/lib/jsonld/site-graph";

import { metadata } from "@/lib/metadata";
import { site } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export { metadata };

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: site.colorScheme,
  width: "device-width",
  initialScale: 1,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {/* Global Structured Data */}
        <JsonLd data={siteGraph()} />

        <Header />

        <div>{children}</div>

        <StickyCTA />

        <Footer />
      </body>
    </html>
  );
}