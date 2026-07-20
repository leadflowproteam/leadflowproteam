import { company } from "./company";

export const site = {
  // ---------------------------------------------------------------------------
  // Website Identity
  // ---------------------------------------------------------------------------
  name: company.name,

  title:
    "AI-Ready Website Development, Technical SEO & AI Search Visibility | LeadFlowProTeam",

  titleTemplate: "%s | LeadFlowProTeam",

  description:
    "LeadFlowProTeam engineers AI-ready websites for service-based businesses with modern Next.js development, Technical SEO, AI Search Visibility, and performance optimization.",

  url: company.url,

  language: company.language,

  locale: company.locale,

  charset: "UTF-8",

  author: company.name,

  creator: company.name,

  publisher: company.name,

  category: "Technology",

  classification: "Professional Services",

  // ---------------------------------------------------------------------------
  // Search Engine
  // ---------------------------------------------------------------------------
  robots: {
    index: true,
    follow: true,
  },

  // ---------------------------------------------------------------------------
  // Verification
  // ---------------------------------------------------------------------------
  verification: {
    google: "",
    bing: "",
    yandex: "",
  },

  // ---------------------------------------------------------------------------
  // Images
  // ---------------------------------------------------------------------------
  defaultOgImage: "/images/og-image.jpg",

  favicon: "/favicon.ico",

  appleTouchIcon: "/apple-touch-icon.png",

  manifest: "/site.webmanifest",

  // ---------------------------------------------------------------------------
  // Theme
  // ---------------------------------------------------------------------------
  themeColor: "#ffffff",

  colorScheme: "light",

  // ---------------------------------------------------------------------------
  // SEO Keywords
  // ---------------------------------------------------------------------------
  keywords: [...company.keywords],
} as const;

export type Site = typeof site;