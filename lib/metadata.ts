import type { Metadata } from "next";

import { brandEntity } from "@/data/brand-entity";

const brand = brandEntity.brand;

const siteTitle =
  "AI Search Visibility | See How AI Sees Your Business | LeadFlowProTeam";

const siteDescription =
  "LeadFlowProTeam helps businesses understand and improve how they are represented across search, local information sources, and AI answer systems through evidence-based AI Search Visibility audits, practical implementation, and ongoing optimization.";

// P16-C: dynamic OG images rendered on the fly by /api/og (next/og).
// Same-origin endpoint — fully compatible with the strict CSP (img-src 'self').
// Pages can pass their own title via the `title` query param.
const ogImageUrl = `/api/og?title=${encodeURIComponent(
  "See How AI Sees Your Business",
)}&subtitle=${encodeURIComponent("AI Search Visibility Audit")}`;

const metadata: Metadata = {
  metadataBase: new URL(brand.url),

  title: {
    default: siteTitle,
    template: "%s | LeadFlowProTeam",
  },

  description: siteDescription,

  applicationName: brand.name,

  keywords: [
    "AI Search Visibility",
    "AI Search Visibility Audit",
    "AI Visibility Audit",
    "AI Search Optimization",
    "Search Visibility",
    "Technical SEO",
    "Local Search",
    "Business Information",
    "Entity SEO",
    "Structured Data",
    "Website Audit",
    "Website Development",
    "Next.js Development",
    "Conversion Optimization",
  ],

  authors: [
    {
      name: brand.name,
      url: brand.url,
    },
  ],

  creator: brand.name,
  publisher: brand.name,
  category: "Business",

  alternates: {
    canonical: brand.url,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: brand.url,
    siteName: brand.name,
    locale: "en_US",

    title: siteTitle,

    description: siteDescription,

    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "LeadFlowProTeam — AI Search Visibility",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImageUrl],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.webmanifest",

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};
export { metadata };
