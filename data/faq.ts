export const faqs = [
  {
    question: "Why choose Next.js instead of Shopify or WordPress?",
    answer:
      "Next.js delivers exceptional speed, better SEO, stronger security, and a modern foundation for long-term eCommerce growth.",
  },
  {
    question: "Do you provide SEO with every project?",
    answer:
      "Yes. Every project includes technical SEO best practices, performance optimization, and AI search visibility foundations.",
  },
  {
    question: "Can you improve my existing website?",
    answer:
      "Absolutely. We can redesign, optimize performance, improve SEO, and increase conversion rates for existing eCommerce websites.",
  },
  {
    question: "Is my website optimized for Facebook and Google Ads?",
    answer:
      "Yes. We build fast, conversion-focused landing pages and eCommerce websites designed to maximize paid advertising performance.",
  },
  {
    question: "Do you optimize websites for AI search?",
    answer:
      "Yes. We implement modern technical SEO, structured data, and AI search optimization practices to improve visibility across emerging search platforms.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects are completed within 2–6 weeks depending on the project scope and business requirements.",
  },
] as const;

export type FAQ = (typeof faqs)[number];