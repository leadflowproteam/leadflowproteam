export type City = {
  slug: string;

  name: string;

  state: string;

  country: string;

  population: string;

  description: string;

  industries: readonly string[];

  services: readonly string[];

  nearbyCities: readonly string[];

  keywords: readonly string[];
};

export const cities: readonly City[] = [
  {
    slug: "new-york-ny",

    name: "New York",

    state: "New York",

    country: "USA",

    population: "8.8M",

    description:
      "New York is one of the world's largest business hubs with thousands of local service companies competing online.",

    industries: [
      "home-services",
      "legal",
      "healthcare",
      "professional-services",
    ],

    services: [
      "web-development",
      "technical-seo",
      "website-audit",
      "landing-page-development",
      "ai-search-visibility",
    ],

    nearbyCities: [
      "jersey-city-nj",
      "newark-nj",
    ],

    keywords: [
      "New York Web Design",
      "Technical SEO New York",
      "AI Search Optimization NYC",
    ],
  },

  {
    slug: "los-angeles-ca",

    name: "Los Angeles",

    state: "California",

    country: "USA",

    population: "3.8M",

    description:
      "Los Angeles businesses need modern websites and strong search visibility to compete in one of America's largest markets.",

    industries: [
      "home-services",
      "real-estate",
      "professional-services",
    ],

    services: [
      "web-development",
      "technical-seo",
      "website-audit",
      "landing-page-development",
    ],

    nearbyCities: [
      "long-beach-ca",
      "anaheim-ca",
    ],

    keywords: [
      "Los Angeles Web Design",
      "Technical SEO Los Angeles",
      "Business Website California",
    ],
  },

  {
    slug: "chicago-il",

    name: "Chicago",

    state: "Illinois",

    country: "USA",

    population: "2.7M",

    description:
      "Chicago companies benefit from fast websites, Technical SEO and AI-ready digital marketing.",

    industries: [
      "home-services",
      "healthcare",
      "legal",
    ],

    services: [
      "technical-seo",
      "website-audit",
      "web-development",
    ],

    nearbyCities: [
      "naperville-il",
      "aurora-il",
    ],

    keywords: [
      "Chicago Technical SEO",
      "Chicago Website Development",
      "Business Website Chicago",
    ],
  },

  {
    slug: "houston-tx",

    name: "Houston",

    state: "Texas",

    country: "USA",

    population: "2.3M",

    description:
      "Houston is home to thousands of local service companies looking to improve online visibility.",

    industries: [
      "home-services",
      "healthcare",
      "local-business",
    ],

    services: [
      "web-development",
      "technical-seo",
      "landing-page-development",
    ],

    nearbyCities: [
      "pasadena-tx",
      "pearland-tx",
    ],

    keywords: [
      "Houston SEO",
      "Houston Website Design",
      "Technical SEO Houston",
    ],
  },

  {
    slug: "miami-fl",

    name: "Miami",

    state: "Florida",

    country: "USA",

    population: "460K",

    description:
      "Miami businesses need high-performance websites to compete in tourism and local services.",

    industries: [
      "real-estate",
      "professional-services",
      "local-business",
    ],

    services: [
      "web-development",
      "website-audit",
      "technical-seo",
    ],

    nearbyCities: [
      "fort-lauderdale-fl",
      "hollywood-fl",
    ],

    keywords: [
      "Miami Website Design",
      "Miami SEO",
      "Florida Business Website",
    ],
  },
] as const;