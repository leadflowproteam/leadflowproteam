import { company } from "@/config/company";

type WebPageOptions = {
  title: string;
  description: string;
  url: string;
};

export function webpageJsonLd({
  title,
  description,
  url,
}: WebPageOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",

    "@id": `${url}#webpage`,

    url,

    name: title,

    description,

    inLanguage: "en",

    isPartOf: {
      "@type": "WebSite",
      "@id": `${company.url}#website`,
    },

    about: {
      "@type": "Organization",
      "@id": `${company.url}#organization`,
    },

    publisher: {
      "@type": "Organization",
      "@id": `${company.url}#organization`,
    },
  };
}