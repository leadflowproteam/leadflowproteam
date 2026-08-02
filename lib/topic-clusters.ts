export const topicClusters = {
  "technical-seo": [
    "schema-markup",
    "core-web-vitals",
    "robots-txt",
    "xml-sitemap",
    "website-audit",
  ],

  "ai-search-visibility": [
    "entity-seo",
    "semantic-seo",
    "knowledge-graph",
    "structured-data",
    "llm-optimization",
  ],

  "web-development": [
    "nextjs",
    "react",
    "typescript",
    "tailwind-css",
    "website-performance",
  ],

  "landing-page-development": [
    "conversion-rate",
    "lead-generation",
    "ux",
    "cta",
    "copywriting",
  ],
} as const;

export type TopicCluster =
  keyof typeof topicClusters;