export type Comparison = {
  slug: string;
  title: string;
  question: string;
  summary: string;
  left: { name: string; description: string };
  right: { name: string; description: string };
  verdict: string;
  relatedEntities: readonly string[];
  relatedServices: readonly string[];
};

export const comparisons: readonly Comparison[] = [
  {
    slug: "aeo-vs-geo",
    title: "AEO vs GEO: What Is the Difference?",
    question: "What is the difference between AEO and GEO?",
    summary:
      "AEO optimizes content so answer engines can extract direct answers. GEO optimizes so generative AI systems like ChatGPT, Gemini, and Perplexity cite or mention a business in synthesized answers. A business pursuing AI visibility needs both.",
    left: {
      name: "AEO",
      description:
        "Answer Engine Optimization: structured, extractable answers using FAQ formats, concise definitions, and structured data.",
    },
    right: {
      name: "GEO",
      description:
        "Generative Engine Optimization: entity clarity, consistent facts across sources, and topical authority so AI systems include the business in generated answers.",
    },
    verdict:
      "AEO makes answers extractable; GEO makes the business part of the generated answer. Both rely on structured data and consistent entity information.",
    relatedEntities: ["entity-seo", "schema-markup", "semantic-seo"],
    relatedServices: ["ai-search-visibility", "technical-seo"],
  },
] as const;
