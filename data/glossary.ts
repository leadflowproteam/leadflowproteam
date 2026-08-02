export type GlossaryItem = {
  slug: string;

  term: string;

  definition: string;

  relatedEntities: readonly string[];
};

export const glossary: readonly GlossaryItem[] = [
  {
    slug: "technical-seo",

    term: "Technical SEO",

    definition:
      "Technical SEO improves website crawlability, indexing, Core Web Vitals, structured data, and overall search engine accessibility.",

    relatedEntities: [
      "technical-seo",
      "website-audit",
    ],
  },

  {
    slug: "core-web-vitals",

    term: "Core Web Vitals",

    definition:
      "Core Web Vitals are Google's user experience metrics measuring loading performance, interactivity, and visual stability.",

    relatedEntities: [
      "technical-seo",
    ],
  },

  {
    slug: "structured-data",

    term: "Structured Data",

    definition:
      "Structured Data helps search engines understand page content using Schema.org markup.",

    relatedEntities: [
      "technical-seo",
      "ai-search-visibility",
    ],
  },

  {
    slug: "entity-seo",

    term: "Entity SEO",

    definition:
      "Entity SEO focuses on semantic relationships between people, organizations, services, topics, and concepts instead of only keywords.",

    relatedEntities: [
      "ai-search-visibility",
      "technical-seo",
    ],
  },

  {
    slug: "ai-search-optimization",

    term: "AI Search Optimization",

    definition:
      "AI Search Optimization prepares websites to be understood and cited by AI-powered search systems such as ChatGPT, Gemini, Claude, and Google AI Overviews.",

    relatedEntities: [
      "ai-search-visibility",
    ],
  },
] as const;