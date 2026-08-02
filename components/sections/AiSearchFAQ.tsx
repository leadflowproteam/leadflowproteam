import FAQ from "@/components/sections/FAQ";

export default function AiSearchFAQ() {
  return (
    <FAQ
      badge="AI Search Visibility FAQ"
      title="Frequently Asked Questions"
      description="Answers to common questions about AI Search Visibility, AI Search Optimization, Entity SEO, and Generative Engine Optimization."

      items={[
        {
          question: "What is AI Search Visibility?",
          answer:
            "AI Search Visibility is the process of helping AI-powered search platforms such as Google AI Overviews, ChatGPT, Gemini, Claude, and Perplexity better understand your website so they can confidently reference and recommend your business.",
        },
        {
          question: "Is AI Search replacing traditional SEO?",
          answer:
            "No. AI Search builds on top of traditional SEO rather than replacing it. A strong Technical SEO foundation, structured data, semantic content, and entity optimization remain essential for both Google Search and AI-powered search experiences.",
        },
        {
          question: "What is Entity SEO?",
          answer:
            "Entity SEO helps search engines and AI systems understand your business, services, locations, and expertise through structured relationships rather than relying only on keywords. It strengthens topical authority and improves AI understanding.",
        },
        {
          question: "Do you implement Schema Markup?",
          answer:
            "Yes. We implement structured data including Organization, Service, FAQ, Breadcrumb, Local Business, and other relevant Schema.org markup that improves machine understanding and AI Search Visibility.",
        },
        {
          question: "Will this improve visibility in Google AI Overviews?",
          answer:
            "Our strategy follows Google's best practices for structured data, semantic content, entity optimization, and Technical SEO, which helps improve eligibility for AI-powered search experiences including Google AI Overviews.",
        },
        {
          question: "Can existing websites be optimized for AI Search?",
          answer:
            "Absolutely. We can audit your current website, identify technical issues, improve structured data, strengthen content architecture, optimize entities, and prepare the site for modern AI search systems.",
        },
        {
          question: "How is AI Search Optimization different from Technical SEO?",
          answer:
            "Technical SEO focuses on crawlability, indexing, website performance, and search engine accessibility, while AI Search Optimization extends those foundations by improving semantic understanding, structured content, entity relationships, and AI-friendly information architecture.",
        },
        {
          question: "Why should businesses prepare for AI-powered search now?",
          answer:
            "Search behavior is rapidly evolving. Businesses that prepare early with strong Technical SEO, structured data, semantic content, and entity optimization are more likely to remain visible as AI-powered search becomes increasingly important.",
        },
      ]}
    />
  );
}