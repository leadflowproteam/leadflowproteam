import type { Metadata } from "next";

import { company } from "@/config/company";
import { site } from "@/config/site";
import { social } from "@/config/social";

const siteUrl = new URL(site.url);

export const metadata: Metadata = {
  metadataBase: siteUrl,

  title: {
    default: site.title,
    template: site.titleTemplate,
  },

  description: site.description,

  applicationName: site.name,

  keywords: site.keywords,

  authors: [
    {
      name: site.author,
      url: site.url,
    },
  ],

  creator: site.creator,

  publisher: site.publisher,

  category: site.category,

  classification: site.classification,

  alternates: {
    canonical: "/",
  },

  verification: {
    google: site.verification.google || undefined,
    other: {
      "msvalidate.01": site.verification.bing || undefined,
      yandex: site.verification.yandex || undefined,
    },
  },

  robots: {
    index: site.robots.index,
    follow: site.robots.follow,

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

    locale: site.locale,

    url: site.url,

    siteName: site.name,

    title: site.title,

    description: site.description,

    images: [
      {
        url: site.defaultOgImage,
        width: 1200,
        height: 630,
        alt: company.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: site.title,

    description: site.description,

    creator: social.twitter.username,

    images: [site.defaultOgImage],
  },

  icons: {
    icon: site.favicon,

    shortcut: site.favicon,

    apple: site.appleTouchIcon,
  },

  manifest: site.manifest,

  referrer: "origin-when-cross-origin",

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "default",
  },
};