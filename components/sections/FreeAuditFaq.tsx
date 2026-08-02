import FAQ from "@/components/sections/FAQ";

const freeAuditFaqs = [
  {
    question: "Is the Website Audit really free?",
    answer:
      "Yes. Our initial website audit is completely free with no obligation. You'll receive practical insights into your website's performance and SEO.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "Most audits are completed within 24–72 hours depending on the size and complexity of your website.",
  },
  {
    question: "What does the audit include?",
    answer:
      "We review Technical SEO, Core Web Vitals, website performance, AI Search readiness, mobile usability, security, and conversion opportunities.",
  },
  {
    question: "Will I receive a report?",
    answer:
      "Yes. You'll receive a detailed report explaining the issues we found along with clear recommendations for improvement.",
  },
  {
    question: "Can you fix the problems after the audit?",
    answer:
      "Absolutely. If you'd like, we can implement the recommended improvements and help optimize your website for long-term growth.",
  },
  {
    question: "Who is this audit for?",
    answer:
      "Our free audit is ideal for service-based businesses, local businesses, startups, and growing companies that want better search visibility and more leads.",
  },
];

export default function FreeAuditFaq() {
  return (
    <FAQ
      badge="Free Audit FAQ"
      title="Frequently Asked Questions"
      description="Everything you need to know before requesting your free website audit."
      items={freeAuditFaqs}
    />
  );
}