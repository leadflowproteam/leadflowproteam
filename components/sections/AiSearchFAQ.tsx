import FAQ from "@/components/sections/FAQ";

export default function AiSearchFAQ() {
  return (
    <FAQ
      badge="AI Search Visibility FAQ"
      title="Questions Commercial Businesses Should Ask Before Investing"
      description="Clear answers about AI Search Visibility, audits, implementation, evidence, and what businesses can realistically expect from the work."
      items={[
        {
          question: "What is AI Search Visibility?",
          answer:
            "AI Search Visibility is the ability of a business to be discovered, represented, and understood across AI answer systems and related search experiences. Our work measures the current state, identifies information and visibility gaps, and recommends practical improvements.",
        },
        {
          question: "Is this a replacement for traditional SEO?",
          answer:
            "No. Technical SEO, crawlability, indexation, structured data, information architecture, and strong website foundations remain important. AI Search Visibility extends the assessment into how business information is discovered and represented across newer answer-driven search experiences.",
        },
        {
          question: "What does the audit actually check?",
          answer:
            "Depending on scope, the audit can cover business identity, website and technical foundations, local search and information consistency, AI visibility, customer-query testing, reputation and trust signals, competitor comparison, and commercial opportunity prioritization.",
        },
        {
          question: "Will you guarantee that AI systems recommend my business?",
          answer:
            "No. AI answers vary by query, context, source, location, and time. We do not promise guaranteed rankings, citations, mentions, or recommendations. We focus on evidence, information quality, consistency, coverage, discoverability, and practical improvements.",
        },
        {
          question: "Can an existing website be improved?",
          answer:
            "Yes. An existing website can be assessed for technical, content, structured-data, information-architecture, local, and conversion issues. Where genuine gaps are found, implementation can be scoped around those findings.",
        },
        {
          question: "What happens after the audit?",
          answer:
            "You can use the audit as a standalone decision document, implement the recommendations internally, or engage us for selected improvements. Where appropriate, important changes can then be re-tested and monitored.",
        },
        {
          question: "Do you provide implementation as well as audits?",
          answer:
            "Yes. Implementation may include website improvements, technical SEO, structured data, business-information updates, local search work, content architecture, conversion improvements, and related visibility work, depending on the findings and agreed scope.",
        },
        {
          question: "Who is the best fit for this service?",
          answer:
            "Our primary commercial focus is businesses with a genuine growth objective that are prepared to invest in professional digital work. The strongest fit is an organization that sees visibility, website quality, information accuracy, and customer acquisition as business priorities.",
        },
        {
          question: "How do you handle evidence and confidential information?",
          answer:
            "Important findings should be supported by source information or preserved evidence where practical. Verified facts, observed results, and recommendations are kept distinct, and private client information is not published as public proof without appropriate approval.",
        },
      ]}
    />
  );
}
