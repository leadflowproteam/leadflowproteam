import FAQ from "@/components/sections/FAQ";

const aiSearchVisibilityFaqs = [
  {
    question: "What is AI Search Visibility?",
    answer:
      "AI Search Visibility is the process of optimizing your website so AI-powered search systems like ChatGPT, Google AI Overviews, Gemini, Claude, Microsoft Copilot, and Perplexity can better understand, trust, and recommend your business within AI-generated answers.",
  },
  {
    question: "How is AI Search Visibility different from traditional SEO?",
    answer:
      "Traditional SEO focuses on improving rankings in search engine results. AI Search Visibility builds on that foundation by optimizing semantic content, entities, structured data, technical architecture, and Answer Engine Optimization (AEO) so AI systems can accurately interpret your business and reference it in conversational search.",
  },
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "Generative Engine Optimization (GEO) is the practice of optimizing websites so generative AI systems can confidently use your content when producing AI-generated answers. GEO focuses on semantic relevance, entity relationships, structured information, and trustworthy content rather than keywords alone.",
  },
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "Answer Engine Optimization (AEO) helps structure your website so AI assistants and answer engines can easily extract, summarize, and deliver accurate information directly from your content when users ask questions.",
  },
  {
    question: "Which AI platforms can benefit from AI Search Optimization?",
    answer:
      "Our optimization framework is designed for Google AI Overviews, ChatGPT, Gemini, Claude, Microsoft Copilot, Perplexity AI, and other emerging AI-powered search platforms that rely on structured and trustworthy web content.",
  },
  {
    question: "Can ChatGPT recommend my business?",
    answer:
      "Yes. While no agency can guarantee recommendations, optimizing your website with strong entity signals, structured data, semantic content, technical SEO, and trustworthy information increases the likelihood that AI systems can accurately understand and reference your business.",
  },
  {
    question: "Does Google AI Overview use website content?",
    answer:
      "Yes. Google AI Overviews analyze high-quality web content, structured data, semantic relationships, and authoritative sources to generate AI-powered summaries. A technically optimized website with clear content has a stronger opportunity to contribute to these results.",
  },
  {
    question: "What is Entity SEO and why is it important?",
    answer:
      "Entity SEO focuses on helping search engines and AI systems understand your business through entities and their relationships rather than relying only on keywords. Strong entity optimization improves topical authority, semantic understanding, and machine trust.",
  },
  {
    question: "Why is structured data important for AI Search?",
    answer:
      "Structured data (Schema.org) provides machine-readable information about your business, services, organization, FAQs, articles, and locations. It helps both search engines and AI assistants interpret your content more accurately.",
  },
  {
    question: "Do you implement Schema.org structured data?",
    answer:
      "Yes. We implement relevant Schema.org markup including Organization, Local Business, Service, FAQ, Breadcrumb, Article, WebPage, and other structured data types that improve technical SEO and AI understanding.",
  },
  {
    question: "Will AI Search Visibility replace Technical SEO?",
    answer:
      "No. Technical SEO remains the foundation of every successful website. AI Search Visibility builds on Technical SEO by adding semantic optimization, entity architecture, structured data, and AI-friendly content organization.",
  },
  {
    question: "Can AI Search Visibility improve lead generation?",
    answer:
      "Yes. Better AI Search Visibility helps your business appear in AI-generated answers where users often ask highly specific, intent-driven questions. This can increase qualified traffic, trust, and long-term lead generation opportunities.",
  },
  {
    question: "Can you optimize my existing website?",
    answer:
      "Yes. In most cases we can optimize existing websites. However, websites built with modern architecture, clean code, excellent Core Web Vitals, and strong technical foundations usually achieve better long-term AI Search performance.",
  },
  {
    question: "How long does AI Search Optimization take?",
    answer:
      "Technical improvements can be implemented immediately, but search engines and AI systems require time to crawl, process, understand, and trust new content. Depending on your website's authority and competition, measurable improvements generally appear over several weeks or months.",
  },
  {
    question: "Is AI Search Visibility suitable for small businesses?",
    answer:
      "Absolutely. Small businesses often benefit significantly because structured information, Local Business schema, semantic optimization, and consistent entity signals help AI assistants better understand and recommend local businesses.",
  },
  {
    question: "Will AI Search Visibility improve my Google rankings?",
    answer:
      "Although AI Search Visibility primarily focuses on helping intelligent systems understand your website, many improvements—including Technical SEO, structured data, semantic content, and entity optimization—also strengthen traditional organic search performance.",
  },
  {
    question: "How do you measure AI Search Visibility success?",
    answer:
      "We measure improvements through technical SEO health, Core Web Vitals, structured data implementation, entity consistency, semantic optimization, indexing quality, search visibility, and overall AI readiness rather than relying only on keyword rankings.",
  },
  {
    question: "Which industries benefit most from AI Search Visibility?",
    answer:
      "Service businesses, healthcare providers, legal firms, home services, consultants, SaaS companies, agencies, financial services, local businesses, and organizations that depend on trust, expertise, and educational content benefit the most from AI Search Optimization.",
  },
  {
    question: "Is AI Search Visibility worth investing in now?",
    answer:
      "Yes. AI-powered search continues to grow rapidly. Businesses that strengthen their technical foundations, semantic relevance, entity architecture, and structured data today will be better positioned as AI-driven discovery becomes a standard part of online search.",
  },
];

export default function AiSearchVisibilityFaq() {
  return (
    <FAQ
      badge="AI Search Visibility FAQ"
      title="Frequently Asked Questions About AI Search Visibility"
      description="Learn how AI Search Visibility, Entity SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), structured data, and semantic SEO help businesses become more discoverable across Google Search, AI assistants, and next-generation search experiences."
      items={aiSearchVisibilityFaqs}
    />
  );
}