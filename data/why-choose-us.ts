export const whyChooseUs = [
  {
    title: "Built for Business Growth",
    description:
      "Every website is designed with one goal in mind—helping your business attract more qualified leads and convert more visitors into customers.",
  },
  {
    title: "Performance Without Compromise",
    description:
      "Fast loading, responsive, and optimized websites that deliver an excellent experience across all devices.",
  },
  {
    title: "Search-First Development",
    description:
      "Technical SEO is built into every project from the beginning, not added as an afterthought.",
  },
  {
    title: "Future-Ready Technology",
    description:
      "Modern technologies and AI-ready architecture ensure your website stays competitive as search evolves.",
  },
] as const;

export type WhyChooseUsItem = (typeof whyChooseUs)[number];