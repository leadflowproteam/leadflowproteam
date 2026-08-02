export const processSteps = [
  {
    step: "01",
    title: "Business Discovery",
    description:
      "We learn about your business, target audience, competitors, and goals to create a strategy that supports long-term growth.",
  },

  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "We define the website structure, user journey, SEO priorities, and project roadmap before development begins.",
  },

  {
    step: "03",
    title: "Design & Development",
    description:
      "Your website is built with modern technologies, responsive layouts, fast performance, and scalable architecture.",
  },

  {
    step: "04",
    title: "SEO & AI Optimization",
    description:
      "Technical SEO, structured data, Core Web Vitals, and AI search optimization are implemented before launch.",
  },

  {
    step: "05",
    title: "Launch & Continuous Growth",
    description:
      "After launch, we monitor performance, improve visibility, and continuously optimize for better business results.",
  },
] as const;

export type ProcessStep = (typeof processSteps)[number];