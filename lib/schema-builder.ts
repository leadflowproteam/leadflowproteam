import { company } from "@/config/company";

const SITE_URL = company.url;

export type Thing = Record<string, unknown>;

export function organizationSchema(): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: company.name,

    url: SITE_URL,

    logo: `${SITE_URL}/logo.png`,

    description: company.description,

    email: company.contact.email,

    sameAs: [],
  };
}

export function websiteSchema(): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: company.name,

    url: SITE_URL,

    description: company.description,

    publisher: {
      "@type": "Organization",
      name: company.name,
    },
  };
}

export function webpageSchema(
  title: string,
  description: string,
  url: string,
): Thing {
  return {
    "@context": "https://schema.org",

    "@type": "WebPage",

    name: title,

    description,

    url,
  };
}

export function articleSchema(
  title: string,
  description: string,
  url: string,
  published: string,
  modified: string,
): Thing {
  return {
    "@context": "https://schema.org",

    "@type": "Article",

    headline: title,

    description,

    url,

    datePublished: published,

    dateModified: modified,

    author: {
      "@type": "Organization",
      name: company.name,
    },

    publisher: {
      "@type": "Organization",

      name: company.name,
    },
  };
}

export function breadcrumbSchema(
  items: {
    name: string;
    url: string;
  }[],
): Thing {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: items.map(
      (item, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: item.name,

        item: item.url,
      }),
    ),
  };
}

export function faqSchema(
  items: {
    question: string;
    answer: string;
  }[],
): Thing {
  return {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: items.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };
}