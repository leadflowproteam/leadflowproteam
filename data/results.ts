export const results = [
  {
    title: "Performance Optimized",
    description:
      "Every website is built for speed, stability, and excellent Core Web Vitals.",
    icon: "⚡",
  },
  {
    title: "SEO Foundation",
    description:
      "Technical SEO is integrated from the beginning—not added later.",
    icon: "🔍",
  },
  {
    title: "AI Search Ready",
    description:
      "Prepared for AI-powered search engines and modern search experiences.",
    icon: "🤖",
  },
  {
    title: "Scalable Architecture",
    description:
      "Clean, maintainable code designed for future business growth.",
    icon: "🏗️",
  },
  {
    title: "Responsive Experience",
    description:
      "Optimized for desktop, tablet, and mobile devices.",
    icon: "📱",
  },
  {
    title: "Long-Term Support",
    description:
      "Continuous improvements and technical support after launch.",
    icon: "🤝",
  },
] as const;

export type ResultItem = (typeof results)[number];