export type KnowledgeNode = {
  id: string;

  name: string;

  type:
    | "Service"
    | "Technology"
    | "Industry"
    | "Concept";

  related: readonly string[];
};

export const knowledgeGraph: readonly KnowledgeNode[] = [
  {
    id: "technical-seo",

    name: "Technical SEO",

    type: "Service",

    related: [
      "structured-data",
      "core-web-vitals",
      "website-audit",
    ],
  },

  {
    id: "website-audit",

    name: "Website Audit",

    type: "Service",

    related: [
      "technical-seo",
      "core-web-vitals",
    ],
  },

  {
    id: "web-development",

    name: "Web Development",

    type: "Service",

    related: [
      "nextjs",
      "technical-seo",
    ],
  },

  {
    id: "structured-data",

    name: "Structured Data",

    type: "Concept",

    related: [
      "technical-seo",
      "entity-seo",
    ],
  },

  {
    id: "entity-seo",

    name: "Entity SEO",

    type: "Concept",

    related: [
      "structured-data",
      "ai-search",
    ],
  },

  {
    id: "ai-search",

    name: "AI Search",

    type: "Concept",

    related: [
      "entity-seo",
      "technical-seo",
    ],
  },

  {
    id: "nextjs",

    name: "Next.js",

    type: "Technology",

    related: [
      "web-development",
    ],
  },

  {
    id: "core-web-vitals",

    name: "Core Web Vitals",

    type: "Concept",

    related: [
      "technical-seo",
      "website-audit",
    ],
  },
] as const;