export type FAQCategory =
  | "general"
  | "ai-search-visibility"
  | "ai-search-visibility-audit"
  | "ai-visibility-framework"
  | "landing-page-development"
  | "local-seo"
  | "technical-seo"
  | "web-development"
  | "website-audit";

export type FAQ = {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
};

export const faqs: readonly FAQ[] = [
  {
    id: "services",
    category: "general",
    question: "What services does LeadFlowProTeam provide?",
    answer:
      "LeadFlowProTeam specializes in Next.js website development, Technical SEO, AI Search Optimization, Landing Page Development, Website Audits, and website performance optimization. Every project is designed to improve search visibility, user experience, and lead generation.",
  },
  {
    id: "businesses",
    category: "general",
    question: "What types of businesses do you work with?",
    answer:
      "We primarily work with service-based businesses looking to improve their online presence, generate qualified leads, and build high-performance websites.",
  },
  {
    id: "nextjs",
    category: "general",
    question: "Why do you build websites with Next.js?",
    answer:
      "Next.js enables us to create fast, secure, scalable, and SEO-friendly websites. Combined with TypeScript and Tailwind CSS, it delivers excellent Core Web Vitals, improved user experience, and stronger long-term search performance.",
  },
  {
    id: "technical-seo",
    category: "general",
    question: "Is Technical SEO included in every project?",
    answer:
      "Yes. Technical SEO is integrated into every website we build. This includes structured metadata, schema markup, clean architecture, internal linking, crawl optimization, and Core Web Vitals improvements.",
  },
  {
    id: "ai-search",
    category: "general",
    question: "What is AI Search Optimization?",
    answer:
      "AI Search Optimization prepares websites for AI-powered search experiences such as Google AI Overviews, ChatGPT, Gemini, Claude, and other AI assistants through semantic content, structured data, and entity-based optimization.",
  },
  {
    id: "audit",
    category: "general",
    question: "Do you provide a free website audit?",
    answer:
      "Yes. We provide a free website audit covering Technical SEO, website performance, search visibility, user experience, Core Web Vitals, and actionable recommendations for improvement.",
  },
  {
    id: "timeline",
    category: "general",
    question: "How long does a website project take?",
    answer:
      "Project timelines depend on the scope of work. After reviewing your requirements, we provide a clear roadmap, realistic timeline, and regular progress updates throughout the project.",
  },
  {
    id: "getting-started",
    category: "general",
    question: "How can we get started?",
    answer:
      "Simply request a free website audit or contact our team. We'll review your business goals, evaluate your current website if applicable, and recommend the best solution for your needs.",
  },
  {
    id: "response-time",
    category: "general",
    question: "How quickly will you respond?",
    answer:
      "We typically respond to all inquiries within one business day.",
  },
  {
    id: "international",
    category: "general",
    question: "Do you work with international clients?",
    answer:
      "Yes. We primarily serve businesses in the United States, Canada, the United Kingdom, and Australia.",
  },
  {
    id: "redesign",
    category: "general",
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We can redesign, optimize, and modernize existing websites to improve performance and search visibility.",
  },
  {
    id: "ongoing-support",
    category: "general",
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer continuous website maintenance, optimization, and long-term technical support after project completion.",
  },
  {
    id: "consultation",
    category: "general",
    question: "Can I request a free consultation?",
    answer:
      "Yes. You can contact us directly or request a Free Website Audit to discuss your project.",
  },
] as const;
