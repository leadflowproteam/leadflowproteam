export const faqs = [
  {
    question: "What services does LeadFlowProTeam provide?",
    answer:
      "We specialize in Web Design & Development, Technical SEO, AI Search Optimization (AEO), Landing Page Development, Website Audits, and Performance Optimization.",
  },

  {
    question: "Do you work with businesses outside Bangladesh?",
    answer:
      "Yes. Our primary focus is helping businesses in the United States, Canada, the United Kingdom, and Australia.",
  },

  {
    question: "Do you build websites with Next.js?",
    answer:
      "Yes. We use modern technologies such as Next.js, TypeScript, and Tailwind CSS to build fast, secure, and scalable websites.",
  },

  {
    question: "Is Technical SEO included?",
    answer:
      "Yes. Technical SEO is integrated into every project to improve search visibility, website health, and long-term performance.",
  },

  {
    question: "How do we get started?",
    answer:
      "Simply request a free website audit. We'll review your website, discuss your goals, and recommend the best solution for your business.",
  },
] as const;

export type FAQ = (typeof faqs)[number];