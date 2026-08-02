import FAQ from "@/components/sections/FAQ";

const websiteAuditFaqs = [
  {
    question: "What does your Website Audit include?",
    answer:
      "Our Website Audit covers Technical SEO, Core Web Vitals, website performance, accessibility, security, crawlability, indexability, structured data, internal linking, mobile usability, AI Search Visibility readiness, and conversion optimization. Every audit includes a prioritized roadmap for improvement.",
  },
  {
    question: "Who should invest in a professional Website Audit?",
    answer:
      "A Website Audit is ideal for businesses that rely on their website for leads, sales, local visibility, or long-term organic growth. Whether your website is brand new or several years old, an audit uncovers hidden issues that limit search performance and user experience.",
  },
  {
    question: "Will I receive a detailed audit report?",
    answer:
      "Yes. You'll receive a professional audit report outlining every issue we discover, its impact on your business, recommended fixes, priority level, and practical next steps. The report is written so both business owners and developers can easily understand it.",
  },
  {
    question: "Can you implement the recommended fixes?",
    answer:
      "Absolutely. After completing the audit, we can help implement Technical SEO improvements, performance optimization, accessibility fixes, schema markup, AI Search Optimization, and conversion enhancements based on your business goals.",
  },
  {
    question: "How long does a Website Audit usually take?",
    answer:
      "Most Website Audits are completed within a few business days. Larger or more complex websites may require additional time depending on the number of pages, technical complexity, and overall project scope.",
  },
  {
    question: "Can a Website Audit improve Google rankings?",
    answer:
      "Yes. While an audit itself doesn't directly increase rankings, it identifies the technical, performance, and content issues preventing your website from performing well. Fixing those issues creates a stronger SEO foundation that supports higher rankings over time.",
  },
  {
    question: "Does your audit include AI Search Visibility analysis?",
    answer:
      "Yes. We evaluate how well your website is prepared for AI-powered search platforms including Google AI Overviews, ChatGPT, Gemini, Claude, and Perplexity by reviewing entity optimization, structured data, semantic relevance, and content architecture.",
  },
  {
    question: "How often should a Website Audit be performed?",
    answer:
      "We generally recommend performing a comprehensive Website Audit every 6–12 months, or immediately after a major website redesign, migration, significant SEO update, or noticeable drop in search performance.",
  },
];

export default function WebsiteAuditFaq() {
  return (
    <FAQ
      badge="Website Audit FAQ"
      title="Frequently Asked Questions About Website Audits"
      description="Get answers to the most common questions about our professional Website Audit service, Technical SEO analysis, Core Web Vitals, AI Search Visibility, and how our recommendations help businesses improve long-term online performance."
      items={websiteAuditFaqs}
    />
  );
} 