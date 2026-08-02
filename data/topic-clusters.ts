export type TopicCluster = {
  slug: string;
  title: string;

  pillarService: string;

  description: string;

  entities: readonly string[];

  resources: readonly string[];

  portfolio: readonly string[];

  relatedClusters: readonly string[];

  searchIntent:
    | "informational"
    | "commercial"
    | "transactional";

  priority: number;
};

export const topicClusters: readonly TopicCluster[] = [
  {
    slug: "web-development",

    title: "Web Development",

    pillarService: "web-development",

    description:
      "Modern Next.js website development for high-performance service business websites.",

    entities: [
      "nextjs",
      "react",
      "typescript",
      "tailwind-css",
      "responsive-design",
      "core-web-vitals",
    ],

    resources: [
      "nextjs-business-websites",
    ],

    portfolio: [
      "photoclippservice",
      "clipping-path-agent",
    ],

    relatedClusters: [
      "technical-seo",
      "ai-search-visibility",
    ],

    searchIntent: "commercial",

    priority: 1,
  },

  {
    slug: "technical-seo",

    title: "Technical SEO",

    pillarService: "technical-seo",

    description:
      "Technical optimization for search visibility, crawlability, indexing, and Core Web Vitals.",

    entities: [
      "technical-seo",
      "schema-markup",
      "core-web-vitals",
      "robots-txt",
      "xml-sitemap",
      "canonical-url",
    ],

    resources: [
      "technical-seo-checklist",
    ],

    portfolio: [
      "photoclippservice",
    ],

    relatedClusters: [
      "web-development",
      "ai-search-visibility",
    ],

    searchIntent: "informational",

    priority: 2,
  },

  {
    slug: "ai-search-visibility",

    title: "AI Search Visibility",

    pillarService: "ai-search-visibility",

    description:
      "Prepare websites for AI-powered search engines, semantic understanding, and entity-based optimization.",

    entities: [
      "entity-seo",
      "knowledge-graph",
      "semantic-seo",
      "ai-search",
      "chatgpt",
      "gemini",
      "claude",
    ],

    resources: [
      "ai-search-visibility-guide",
    ],

    portfolio: [
      "photoclippservice",
    ],

    relatedClusters: [
      "technical-seo",
      "web-development",
    ],

    searchIntent: "commercial",

    priority: 3,
  },

  {
    slug: "website-audit",

    title: "Website Audit",

    pillarService: "website-audit",

    description:
      "Comprehensive technical, SEO, AI readiness, accessibility, and performance audits.",

    entities: [
      "website-audit",
      "core-web-vitals",
      "technical-seo",
      "schema-markup",
    ],

    resources: [
      "technical-seo-checklist",
    ],

    portfolio: [
      "photoclippservice",
    ],

    relatedClusters: [
      "technical-seo",
      "web-development",
    ],

    searchIntent: "transactional",

    priority: 4,
  },

  {
    slug: "landing-page-development",

    title: "Landing Page Development",

    pillarService: "landing-page-development",

    description:
      "Conversion-focused landing pages built for paid ads, local SEO, and lead generation.",

    entities: [
      "landing-page",
      "conversion-rate-optimization",
      "responsive-design",
      "nextjs",
    ],

    resources: [
      "nextjs-business-websites",
    ],

    portfolio: [
      "photoclippservice",
    ],

    relatedClusters: [
      "web-development",
    ],

    searchIntent: "transactional",

    priority: 5,
  },
] as const;