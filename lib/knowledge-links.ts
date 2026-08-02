export type KnowledgeLinks = {
  services: string[];
  resources: string[];
  portfolio: string[];
  industries: string[];
};

export const knowledgeLinks: Record<string, KnowledgeLinks> = {
  "web-development": {
    services: [
      "web-development",
      "technical-seo",
      "ai-search-visibility",
    ],

    resources: [
      "nextjs-business-websites",
      "technical-seo-checklist",
    ],

    portfolio: [
      "photoclippservice",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
    ],
  },

  "technical-seo": {
    services: [
      "technical-seo",
      "website-audit",
      "ai-search-visibility",
    ],

    resources: [
      "technical-seo-checklist",
      "ai-search-visibility-guide",
    ],

    portfolio: [
      "clipping-path-agent",
    ],

    industries: [
      "home-services",
      "legal",
    ],
  },

  "website-audit": {
    services: [
      "website-audit",
      "technical-seo",
    ],

    resources: [
      "technical-seo-checklist",
    ],

    portfolio: [],

    industries: [
      "home-services",
    ],
  },
};