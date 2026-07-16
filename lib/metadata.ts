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

  keywords: [...site.keywords],

  authors: [
    {
      name: site.author,
      url: site.url,
    },
  ],

  creator: company.basicInfo.name,

  publisher: company.basicInfo.name,

  alternates: {
    canonical: "/",
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
        alt: site.name,
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

  category: "Technology",
};