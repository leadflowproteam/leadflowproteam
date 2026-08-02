import type { ReactNode } from "react";
import type { Viewport } from "next";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import JsonLd from "@/components/seo/JsonLd";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import { siteGraph } from "@/lib/jsonld/site-graph";
import StickyCTA from "@/components/ui/StickyCTA";

import {
  organizationSchema,
  websiteSchema,
  professionalServiceSchema,
} from "@/lib/schema";

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
    <html
      lang={site.language}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Global Structured Data */}

        <OrganizationSchema />

        <JsonLd data={organizationSchema()} />

        <JsonLd data={professionalServiceSchema()} />

          <JsonLd data={siteGraph()} />

        <JsonLd data={websiteSchema()} />

        <Header />

        <main>{children}</main>
          <StickyCTA />
        <Footer />
      </body>
    </html>
  );
}