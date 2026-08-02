export const results = [
  {
    title: "High-Performance Websites",
    description:
      "Built with modern technologies to deliver exceptional speed, responsiveness, and user experience.",
  },
  {
    title: "Search-First Development",
    description:
      "Every website is developed with technical SEO best practices from the very beginning.",
  },
  {
    title: "AI Search Ready",
    description:
      "Structured content and modern architecture prepared for AI-powered search experiences.",
  },
  {
    title: "Conversion-Focused Experience",
    description:
      "Clear messaging, intuitive layouts, and strategic design that encourage more enquiries.",
  },
] as const;

export type Result = (typeof results)[number];