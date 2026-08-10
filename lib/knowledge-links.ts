export type KnowledgeLinks = {
  services: string[];
  resources: string[];
  portfolio: string[];
  industries: string[];
};

export const knowledgeLinks: Record<string, KnowledgeLinks> = {
  // ============================================================
  // SERVICES
  // ============================================================

  "web-development": {
    services: [
      "web-development",
      "technical-seo",
      "website-audit",
      "ai-search-visibility",
      "landing-page-development",
    ],

    resources: [
      "nextjs-business-websites",
      "technical-seo-checklist",
      "ai-search-visibility-guide",
    ],

    portfolio: [
      "photoclippservice",
      "clipping-path-agent",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "technical-seo": {
    services: [
      "technical-seo",
      "website-audit",
      "web-development",
      "ai-search-visibility",
    ],

    resources: [
      "technical-seo-checklist",
      "ai-search-visibility-guide",
      "nextjs-business-websites",
    ],

    portfolio: [
      "photoclippservice",
      "clipping-path-agent",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "website-audit": {
    services: [
      "website-audit",
      "technical-seo",
      "web-development",
    ],

    resources: [
      "technical-seo-checklist",
      "nextjs-business-websites",
    ],

    portfolio: [
      "photoclippservice",
      "clipping-path-agent",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "ai-search-visibility": {
    services: [
      "ai-search-visibility",
      "technical-seo",
      "web-development",
      "landing-page-development",
    ],

    resources: [
      "ai-search-visibility-guide",
      "technical-seo-checklist",
      "nextjs-business-websites",
    ],

    portfolio: [
      "photoclippservice",
      "clipping-path-agent",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "landing-page-development": {
    services: [
      "landing-page-development",
      "web-development",
      "technical-seo",
      "ai-search-visibility",
    ],

    resources: [
      "nextjs-business-websites",
      "technical-seo-checklist",
      "ai-search-visibility-guide",
    ],

    portfolio: [
      "photoclippservice",
    ],

    industries: [
      "home-services",
      "professional-services",
      "local-business",
      "legal",
      "real-estate",
    ],
  },

  // ============================================================
  // TECHNOLOGIES
  // ============================================================

  "nextjs": {
    services: [
      "web-development",
      "landing-page-development",
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
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "react": {
    services: [
      "web-development",
      "landing-page-development",
    ],

    resources: [
      "nextjs-business-websites",
    ],

    portfolio: [
      "photoclippservice",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "typescript": {
    services: [
      "web-development",
      "landing-page-development",
    ],

    resources: [
      "nextjs-business-websites",
    ],

    portfolio: [
      "photoclippservice",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "tailwind-css": {
    services: [
      "web-development",
      "landing-page-development",
    ],

    resources: [
      "nextjs-business-websites",
    ],

    portfolio: [
      "photoclippservice",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "vercel": {
    services: [
      "web-development",
    ],

    resources: [
      "nextjs-business-websites",
    ],

    portfolio: [
      "photoclippservice",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  // ============================================================
  // SEO / SEMANTIC CONCEPTS
  // ============================================================

  "entity-seo": {
    services: [
      "ai-search-visibility",
      "technical-seo",
    ],

    resources: [
      "ai-search-visibility-guide",
      "technical-seo-checklist",
    ],

    portfolio: [
      "photoclippservice",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "semantic-seo": {
    services: [
      "ai-search-visibility",
      "technical-seo",
    ],

    resources: [
      "ai-search-visibility-guide",
    ],

    portfolio: [
      "photoclippservice",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "knowledge-graph": {
    services: [
      "ai-search-visibility",
      "technical-seo",
    ],

    resources: [
      "ai-search-visibility-guide",
      "technical-seo-checklist",
    ],

    portfolio: [
      "photoclippservice",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "schema-org": {
    services: [
      "technical-seo",
      "ai-search-visibility",
      "website-audit",
    ],

    resources: [
      "technical-seo-checklist",
      "ai-search-visibility-guide",
    ],

    portfolio: [
      "photoclippservice",
      "clipping-path-agent",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "core-web-vitals": {
    services: [
      "technical-seo",
      "website-audit",
      "web-development",
    ],

    resources: [
      "technical-seo-checklist",
      "nextjs-business-websites",
    ],

    portfolio: [
      "photoclippservice",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "robots-txt": {
    services: [
      "technical-seo",
      "website-audit",
    ],

    resources: [
      "technical-seo-checklist",
    ],

    portfolio: [
      "clipping-path-agent",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "xml-sitemap": {
    services: [
      "technical-seo",
      "website-audit",
    ],

    resources: [
      "technical-seo-checklist",
    ],

    portfolio: [
      "clipping-path-agent",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },

  "google-search-console": {
    services: [
      "technical-seo",
      "website-audit",
    ],

    resources: [
      "technical-seo-checklist",
    ],

    portfolio: [
      "clipping-path-agent",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
      "local-business",
      "real-estate",
    ],
  },
};