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
  {
    slug: "aeo",
    term: "AEO (Answer Engine Optimization)",
    definition:
      "AEO (Answer Engine Optimization) optimizes content so answer engines can extract direct answers — using question-matching headings, concise definitions, FAQ formats, and structured data.",
    relatedEntities: [
      "ai-search-visibility",
      "technical-seo",
    ],
  },
  {
    slug: "geo",
    term: "GEO (Generative Engine Optimization)",
    definition:
      "GEO (Generative Engine Optimization) improves how generative AI systems like ChatGPT, Gemini, and Perplexity discover, understand, and cite a business in synthesized answers.",
    relatedEntities: [
      "ai-search-visibility",
      "entity-seo",
    ],
  },
  {
    slug: "aio",
    term: "AIO (AI Optimization)",
    definition:
      "AIO (AI Optimization) is the practice of making a website's information machine-readable and understandable so AI systems can represent it accurately.",
    relatedEntities: [
      "ai-search-visibility",
      "entity-seo",
    ],
  },
  {
    slug: "llm-seo",
    term: "LLM SEO",
    definition:
      "LLM SEO is the practice of publishing clear, consistent, citable information that large language models can extract and attribute correctly when answering user questions.",
    relatedEntities: [
      "ai-search-visibility",
      "entity-seo",
    ],
  },
  {
    slug: "semantic-seo",
    term: "Semantic SEO",
    definition:
      "Semantic SEO structures content around meaning, entities, and relationships — helping search engines and AI systems understand topics in context rather than matching keywords alone.",
    relatedEntities: [
      "ai-search-visibility",
      "entity-seo",
    ],
  },
  {
    slug: "schema-markup",
    term: "Schema Markup",
    definition:
      "Schema Markup is the JSON-LD implementation of Schema.org vocabulary that tells machines what a page is about, using types like Organization, Service, and FAQPage.",
    relatedEntities: [
      "technical-seo",
      "ai-search-visibility",
    ],
  },
  {
    slug: "knowledge-graph",
    term: "Knowledge Graph",
    definition:
      "A Knowledge Graph represents entities and their relationships as connected data, allowing search engines and AI systems to reason about a business's context.",
    relatedEntities: [
      "entity-seo",
      "ai-search-visibility",
    ],
  },
] as const;
