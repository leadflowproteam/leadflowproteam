import { company } from "@/config/company";
import { faqs } from "@/data/faqs";

const SITE_URL = company.url;

/* -------------------------------------------------------------------------- */
/*                                Organization                                */
/* -------------------------------------------------------------------------- */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: company.name,
    url: company.url,
    logo: `${company.url}${company.logo}`,

    email: company.contact.email,

    sameAs: Object.values(company.social),

    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Sales",
        email: company.contact.salesEmail,
        availableLanguage: ["English"],
      },
    ],
  };
}

/* -------------------------------------------------------------------------- */
/*                             Professional Service                           */
/* -------------------------------------------------------------------------- */

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: company.name,

    url: company.url,

    image: `${company.url}${company.logo}`,

    email: company.contact.email,

    areaServed: company.markets.primary,

    sameAs: Object.values(company.social),
  };
}

/* -------------------------------------------------------------------------- */
/*                                  Website                                   */
/* -------------------------------------------------------------------------- */

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: company.name,

    url: SITE_URL,

    potentialAction: {
      "@type": "SearchAction",

      target: `${SITE_URL}/resources?search={search_term_string}`,

      "query-input": "required name=search_term_string",
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                                   Service                                  */
/* -------------------------------------------------------------------------- */

type ServiceOptions = {
  name: string;
  description: string;
  url: string;
  entitySlug?: string;
};

export function serviceSchema({
  name,
  description,
  url,
  entitySlug,
}: ServiceOptions) {
  return {
    "@context": "https://schema.org",

    "@type": "Service",

    "@id": `${url}#service`,

    name,

    serviceType: name,

    description,

    url,

    provider: {
      "@id": `${company.url}#organization`,
    },

    areaServed: company.markets.primary,

    ...(entitySlug && {
      about: {
        "@id": `${company.url}/entities/${entitySlug}#entity`,
      },
    }),
  };
}

/* -------------------------------------------------------------------------- */
/*                                Breadcrumb                                  */
/* -------------------------------------------------------------------------- */

export function breadcrumbSchema(
  items: {
    name: string;
    url: string;
  }[],
) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: item.url,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/*                                   FAQ                                      */
/* -------------------------------------------------------------------------- */

export function faqSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };
}

/* -------------------------------------------------------------------------- */
/*                                  Article                                   */
/* -------------------------------------------------------------------------- */

type ArticleOptions = {
  title: string;
  description: string;
  url: string;
  published: string;
  modified?: string;
  entitySlugs?: string[];
  serviceSlugs?: string[];
};

export function articleSchema({
  title,
  description,
  url,
  published,
  modified,
  entitySlugs,
  serviceSlugs,
}: ArticleOptions) {
  return {
    "@context": "https://schema.org",

    "@type": "Article",

    headline: title,

    description,

    url,

    datePublished: published,

    dateModified: modified ?? published,

    author: {
      "@type": "Organization",

      name: company.name,

      url: company.url,
    },

    publisher: {
      "@type": "Organization",

      name: company.name,

      logo: {
        "@type": "ImageObject",

        url: `${company.url}${company.logo}`,
      },
    },

    mainEntityOfPage: url,
        ...(entitySlugs && {
      about: entitySlugs.map((slug) => ({
        "@id": `${company.url}/entities/${slug}#entity`,
      })),
    }),

    ...(serviceSlugs && {
      mentions: serviceSlugs.map((slug) => ({
        "@id": `${company.url}/services/${slug}#service`,
      })),
    }),
  };
}
/* -------------------------------------------------------------------------- */
/*                              Creative Work                                 */
/* -------------------------------------------------------------------------- */

type CreativeWorkOptions = {
  title: string;
  description: string;
  url: string;
  image?: string;
};

export function creativeWorkSchema({
  title,
  description,
  url,
  image,
}: CreativeWorkOptions) {
  return {
    "@context": "https://schema.org",

    "@type": "CreativeWork",

    "@id": `${url}#creativework`,

    name: title,

    headline: title,

    description,

    url,

    creator: {
      "@id": `${company.url}#organization`,
    },

    publisher: {
      "@id": `${company.url}#organization`,
    },

    image:
      image ??
      `${company.url}${company.logo}`,

    isPartOf: {
      "@id": `${company.url}#website`,
    },
  };
}