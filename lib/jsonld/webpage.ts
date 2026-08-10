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
      "@id": `${company.url}#website`,
    },

    about: {
      "@id": `${company.url}#organization`,
    },

    publisher: {
      "@id": `${company.url}#organization`,
    },
  };
}