import type { ReactNode } from "react";
import type { Viewport } from "next";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/ui/StickyCTA";

import JsonLd from "@/components/seo/JsonLd";
import { siteGraph } from "@/lib/jsonld/site-graph";

import { metadata } from "@/lib/metadata";
import { site } from "@/config/site";

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
    <html lang="en">
      <body>
        {/* Global Structured Data */}
        <JsonLd data={siteGraph()} />

        <Header />

        <main>{children}</main>

        <StickyCTA />

        <Footer />
      </body>
    </html>
  );
}