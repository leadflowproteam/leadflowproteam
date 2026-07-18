export const processSteps = [
  {
    step: "01",
    title: "Free Growth Audit",
    description:
      "We review your website, advertising funnel, website speed, SEO, and customer experience to identify growth opportunities.",
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    description:
      "You receive a clear action plan focused on performance, conversions, search visibility, and business growth.",
  },
  {
    step: "03",
    title: "High-Performance Development",
    description:
      "We build a lightning-fast Next.js eCommerce website optimized for real customers and advertising traffic.",
  },
  {
    step: "04",
    title: "SEO & AI Search Visibility",
    description:
      "Your website is optimized for Google Search, AI search engines, LLMs, and future search experiences.",
  },
  {
    step: "05",
    title: "Continuous Growth",
    description:
      "After launch, we continue improving speed, visibility, conversions, and long-term business performance.",
  },
] as const;

export type ProcessStep = (typeof processSteps)[number];