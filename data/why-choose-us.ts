export const whyChooseUs = [
  {
    title: "Modern Technology",
    description:
      "Built with Next.js, TypeScript, and modern web standards for speed, scalability, and reliability.",
    icon: "💻",
  },
  {
    title: "Performance First",
    description:
      "Every website is optimized for Core Web Vitals, fast loading, and an excellent user experience.",
    icon: "⚡",
  },
  {
    title: "Technical SEO",
    description:
      "Strong technical foundations help search engines crawl, understand, and rank your website.",
    icon: "🔍",
  },
  {
    title: "AI Search Ready",
    description:
      "Prepared for AI-powered search experiences, Answer Engines, and future search technologies.",
    icon: "🤖",
  },
  {
    title: "Transparent Workflow",
    description:
      "Clear communication, milestone-based delivery, and no hidden surprises throughout the project.",
    icon: "🤝",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We continue supporting your business after launch with improvements and ongoing optimization.",
    icon: "📈",
  },
] as const;

export type WhyChooseUsItem = (typeof whyChooseUs)[number];