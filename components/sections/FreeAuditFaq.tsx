import FAQ from "@/components/sections/FAQ";

const freeAuditFaqs = [
  {
    question: "What is included in the AI Search Visibility Audit?",
    answer:
      "The audit can examine business and identity information, website and technical foundations, local search and business data, AI search visibility, customer queries, reputation and trust signals, competitive context, and improvement opportunities.",
  },
  {
    question: "Is the audit completely free?",
    answer:
      "The initial audit offer is intended as a low-friction starting point. The exact scope and depth of any free assessment may be limited compared with our deeper paid audit tiers.",
  },
  {
    question: "Will the audit guarantee that my business appears in AI answers?",
    answer:
      "No. We do not guarantee rankings, recommendations, mentions, or inclusion in any AI or search system. The audit focuses on evidence, information quality, visibility observations, gaps, and practical improvements.",
  },
  {
    question: "Will I receive a report?",
    answer:
      "The audit is designed to produce useful findings and recommendations. The exact report depth depends on the audit scope and the information available for the business.",
  },
  {
    question: "Do I have to buy implementation after the audit?",
    answer:
      "No. The audit should provide value as a standalone diagnostic. If implementation is appropriate, the findings can help determine what should be improved and what scope may be required.",
  },
  {
    question: "Can LeadFlowProTeam fix the issues found?",
    answer:
      "Depending on the findings, implementation may include website engineering, technical SEO, structured data, content and information improvements, local profile cleanup, AI visibility optimization, performance work, conversion improvements, and monitoring.",
  },
  {
    question: "Why do you need my website and business information?",
    answer:
      "The audit compares public business information with what customers and search or AI systems may encounter. Accurate inputs make it easier to distinguish verified business facts from missing, inconsistent, outdated, or ambiguous information.",
  },
];

export default function FreeAuditFaq() {
  return (
    <FAQ
      badge="AI Visibility Audit FAQ"
      title="Questions Before You Start"
      description="A few practical answers about the audit, its scope, and what happens after the findings are available."
      items={freeAuditFaqs}
    />
  );
}