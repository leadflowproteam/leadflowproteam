import { company } from "@/config/company";

const SITE_URL = company.url;

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationReference() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: company.name,
    url: SITE_URL,
  };
}

export function authorReference(name?: string) {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: name ?? company.name,
    url: SITE_URL,
  };
}

export function publisherReference() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: company.name,
    url: SITE_URL,

    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(company.logo),
    },
  };
}

export function imageObject(path: string) {
  return {
    "@type": "ImageObject",
    url: absoluteUrl(path),
  };
}

export function websiteReference() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: company.name,
  };
}

export function breadcrumbItems(
  items: {
    name: string;
    url: string;
  }[],
) {
  return items.map((item, index) => ({
    "@type": "ListItem",

    position: index + 1,

    name: item.name,

    item: item.url,
  }));
}

export function serviceReference(
  name: string,
  url: string,
) {
  return {
    "@type": "Service",

    name,

    url,
  };
}

export function articleReference(
  title: string,
  url: string,
) {
  return {
    "@type": "Article",

    headline: title,

    url,
  };
}

export function personReference(name: string) {
  return {
    "@type": "Person",

    name,
  };
}

export function entityReference(
  name: string,
  url: string,
) {
  return {
    "@type": "Thing",

    name,

    url,
  };
}