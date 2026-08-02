import FAQ from "@/components/sections/FAQ";

const aiSearchVisibilityFaqs = [
  {
    question: "What is AI Search Visibility?",
    answer:
      "AI Search Visibility is the process of optimizing your website so AI-powered search systems like ChatGPT, Google Gemini, Claude, Microsoft Copilot, Perplexity, and Google AI Overviews can better understand, trust, and reference your business in AI-generated answers.",
  },
  {
    question: "How is AI Search Visibility different from traditional SEO?",
    answer:
      "Traditional SEO focuses on improving rankings in search engine results. AI Search Visibility expands that foundation by optimizing entities, structured data, semantic relationships, machine-readable content, and Answer Engine Optimization (AEO) so AI systems can accurately interpret and recommend your business.",
  },
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "Answer Engine Optimization (AEO) is the practice of organizing content so AI assistants and answer engines can easily identify, summarize, and present your information as trusted responses to user questions.",
  },
  {
    question: "Which AI platforms can benefit from this optimization?",
    answer:
      "Our methodology supports discoverability across ChatGPT, Google Gemini, Claude, Microsoft Copilot, Perplexity AI, Google AI Overviews, and other emerging AI-powered search experiences that rely on structured, authoritative web content.",
  },
  {
    question: "What is Entity SEO and why is it important?",
    answer:
      "Entity SEO strengthens the relationships between your business, services, locations, and expertise. Instead of relying only on keywords, AI systems understand your website through entities and semantic connections, making your business easier to recognize and recommend.",
  },
  {
    question: "Do you implement structured data (Schema.org)?",
    answer:
      "Yes. We implement structured data wherever appropriate, including Organization, Local Business, Service, FAQ, Breadcrumb, Article, and other Schema.org markup that improves machine understanding and search visibility.",
  },
  {
    question: "Will AI Search Optimization replace Technical SEO?",
    answer:
      "No. Technical SEO remains the foundation of every successful website. AI Search Visibility builds on that foundation by adding semantic optimization, entity consistency, structured data, and AI-friendly content architecture.",
  },
    {
    question: "Can AI Search Visibility improve lead generation?",
    answer:
      "Yes. Better AI Search Visibility increases the likelihood that your business will be referenced in AI-generated answers, helping you attract more qualified visitors with stronger purchase intent and improving long-term lead generation opportunities.",
  },
  {
    question: "Can you optimize my existing website, or do I need a new one?",
    answer:
      "In most cases we can optimize your existing website. However, websites with modern architecture, clean code, strong Technical SEO, and excellent Core Web Vitals generally achieve better AI Search performance than outdated websites.",
  },
  {
    question: "How long does it take to see AI Search Visibility results?",
    answer:
      "AI Search Visibility is a long-term investment. Technical improvements can be implemented immediately, but search engines and AI systems usually need time to crawl, process, trust, and reference updated content. Most businesses begin seeing measurable improvements over several weeks to a few months, depending on competition and website authority.",
  },
  {
    question: "Is AI Search Visibility suitable for local businesses?",
    answer:
      "Absolutely. Local businesses benefit from stronger entity signals, Local Business schema, consistent business information, and semantic relevance, making them easier for both traditional search engines and AI assistants to recommend to nearby customers.",
  },
  {
    question: "Will AI Search Visibility also improve my Google rankings?",
    answer:
      "While AI Search Visibility primarily focuses on helping intelligent systems understand your website, many of the improvements—such as Technical SEO, structured data, semantic optimization, and content quality—also strengthen traditional organic search performance.",
  },
  {
    question: "How do you measure the success of an AI Search Visibility campaign?",
    answer:
      "We evaluate technical improvements, structured data implementation, indexing quality, semantic relevance, search visibility, organic performance, AI readiness, and long-term authority signals rather than relying on rankings alone.",
  },
  {
    question: "Which industries benefit the most from AI Search Visibility?",
    answer:
      "Service-based businesses, local companies, healthcare providers, legal firms, home services, consultants, SaaS companies, agencies, and organizations that rely on trust, expertise, and educational content typically benefit the most from AI Search Optimization.",
  },
];
export default function AiSearchVisibilityFaq() {
  return (
    <FAQ
      badge="AI Search Visibility FAQ"
      title="Frequently Asked Questions About AI Search Visibility"
      description="Explore common questions about AI Search Visibility, Entity SEO, Answer Engine Optimization (AEO), structured data, Technical SEO, and how modern AI-powered search platforms discover, understand, and recommend businesses."
      items={aiSearchVisibilityFaqs}
    />
  );
}
