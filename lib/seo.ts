import type { Metadata } from "next";

import { brandEntity } from "@/data/brand-entity";

const brand = brandEntity.brand;

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function generateSeo({
  title,
  description,
  path = "",
  keywords = [],
  image = "/images/og-image.jpg",
  noIndex = false,
}: SeoProps): Metadata {
  const canonical = `${brand.url}${path}`;

  return {
    title,
    description,

    keywords: [...brandEntity.keywords, ...keywords],

    metadataBase: new URL(brand.url),

    alternates: {
      canonical,
    },

    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: brand.name,
      locale: "en_US",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,

      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}