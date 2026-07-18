export const processSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "We analyze your business, website, competitors, technical SEO, and growth opportunities to understand where improvements will create the biggest impact.",
  },

  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "We create a clear roadmap covering website structure, user experience, SEO priorities, and measurable business goals.",
  },

  {
    step: "03",
    title: "Design & Development",
    description:
      "We build a modern, responsive, and high-performance website using Next.js with clean, scalable, and maintainable code.",
  },

  {
    step: "04",
    title: "SEO & AI Optimization",
    description:
      "Every project is optimized for Technical SEO, Core Web Vitals, AI-powered search, and future search experiences.",
  },

  {
    step: "05",
    title: "Launch & Continuous Growth",
    description:
      "After launch, we monitor performance, improve visibility, and support long-term business growth through continuous optimization.",
  },
] as const;

export type ProcessStep = (typeof processSteps)[number];