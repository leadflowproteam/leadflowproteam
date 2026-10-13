import type { FAQ } from "@/data/faqs";

export const serviceFaqs: readonly FAQ[] = [
  // --- AI SEARCH VISIBILITY ---
  {
    id: "ai-vis-what",
    category: "ai-search-visibility",
    question: "What is AI Search Visibility?",
    answer:
      "AI Search Visibility is the practice of improving how accurately and completely AI systems understand, represent, and cite a business across search and answer experiences. It covers structured data, entity clarity, semantic content, and consistency across public information sources.",
  },
  {
    id: "ai-vis-need",
    category: "ai-search-visibility",
    question: "Why does my business need AI Search Visibility work?",
    answer:
      "More customer research now happens through AI-assisted search. If a business's information is unclear, inconsistent, or missing from the sources AI systems rely on, the business risks being misdescribed or omitted from AI-generated answers.",
  },
  {
    id: "ai-vis-difference",
    category: "ai-search-visibility",
    question: "How is AI Search Visibility different from traditional SEO?",
    answer:
      "Traditional SEO focuses on ranking pages in search results. AI Search Visibility also covers whether AI systems understand the business correctly and can cite it accurately — which requires entity clarity, structured data, and consistent public information.",
  },
  {
    id: "ai-vis-guarantee",
    category: "ai-search-visibility",
    question: "Do you guarantee appearances in ChatGPT or Google AI Overviews?",
    answer:
      "No. AI systems and their answer processes are outside any agency's direct control. We focus on identifying observable gaps and improving the information and signals that can be influenced, rather than promising specific appearances.",
  },

  // --- AI SEARCH VISIBILITY AUDIT ---
  {
    id: "ai-audit-what",
    category: "ai-search-visibility-audit",
    question: "What is an AI Search Visibility Audit?",
    answer:
      "An AI Search Visibility Audit examines how your business is represented across relevant search, local information, and AI answer experiences. It looks at business identity, website and technical foundations, local data, AI visibility, customer queries, reputation signals, competitors, and improvement opportunities.",
  },
  {
    id: "ai-audit-checks",
    category: "ai-search-visibility-audit",
    question: "What does the audit actually check?",
    answer:
      "Our methodology uses eight areas: Business & Identity, Website & Technical Foundation, Local Search & Data Consistency, AI Search Visibility, Customer Query Testing, Reputation & Trust Signals, Competitive Intelligence, and Opportunity & Commercial Assessment.",
  },
  {
    id: "ai-audit-score",
    category: "ai-search-visibility-audit",
    question: "Will I receive just a score?",
    answer:
      "No. The goal is to produce useful evidence and explain what it means. Depending on the audit scope, the output can include findings, information gaps, competitive observations, priority opportunities, and practical recommendations.",
  },
  {
    id: "ai-audit-purchase",
    category: "ai-search-visibility-audit",
    question: "Do I have to purchase implementation after the audit?",
    answer:
      "No. The audit is designed to be valuable as a standalone diagnostic service. If implementation is appropriate, the findings can identify what should be improved and help define the required scope.",
  },
  {
    id: "ai-audit-fix",
    category: "ai-search-visibility-audit",
    question: "Can you help fix the issues found in the audit?",
    answer:
      "Yes. Depending on the findings, implementation can include website engineering, technical SEO, local business information improvements, structured data, content updates, AI visibility optimization, and conversion-focused changes.",
  },
  {
    id: "ai-audit-monitoring",
    category: "ai-search-visibility-audit",
    question: "Why is ongoing monitoring important?",
    answer:
      "Business information, websites, competitors, search experiences, and AI systems change over time. Monitoring identifies meaningful changes, new gaps, and new opportunities rather than treating visibility as a one-time task.",
  },

  // --- AI VISIBILITY FRAMEWORK ---
  {
    id: "ai-fw-what",
    category: "ai-visibility-framework",
    question: "What is the AI Visibility Framework?",
    answer:
      "The AI Visibility Framework is a structured, repeatable process that connects business identity, website and technical foundations, local search information, AI visibility testing, customer queries, reputation, competitive intelligence, and opportunity prioritization into one process.",
  },
  {
    id: "ai-fw-audit-relation",
    category: "ai-visibility-framework",
    question: "How does the framework relate to the audit?",
    answer:
      "The audit identifies where visibility gaps exist. The framework defines the repeatable process for closing those gaps and prioritizing which improvements deliver the most commercial value.",
  },
  {
    id: "ai-fw-fit",
    category: "ai-visibility-framework",
    question: "Who is the framework for?",
    answer:
      "The framework is designed for commercial businesses with a genuine growth objective that depend on being found and correctly described online — particularly service businesses where discovery and trust directly influence revenue.",
  },
] as const;
