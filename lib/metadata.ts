import type { Metadata } from "next";

import { brandEntity } from "@/data/brand-entity";

const brand = brandEntity.brand;

const metadata: Metadata = {
  metadataBase: new URL(brand.url),

  title: {
    default:
      "LeadFlowProTeam | Web Development, Technical SEO & AI Search Optimization",
    template: "%s | LeadFlowProTeam",
  },

  description: brand.longDescription,

  applicationName: brand.name,

  keywords: [...brandEntity.keywords],

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

    title:
      "LeadFlowProTeam | Web Development, Technical SEO & AI Search Optimization",

    description: brand.shortDescription,

    images: [
      {
        url: "/images/og-image.jpg",

        width: 1200,

        height: 630,

        alt: brand.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "LeadFlowProTeam | Web Development, Technical SEO & AI Search Optimization",

    description: brand.shortDescription,

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  formatDetection: {
    telephone: false,

    address: false,

    email: false,
  },
};

export { metadata };