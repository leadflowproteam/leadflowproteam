import { CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const checklist = [
  "Business identity and core information review",
  "Website crawlability and indexation review",
  "Metadata and heading structure review",
  "Internal linking and information architecture review",
  "Structured data and schema review",
  "Local search and business-information consistency review",
  "Business-name and service visibility checks",
  "Location-specific discovery checks",
  "Customer-query and conversational search testing",
  "Important factual accuracy checks",
  "AI answer and source comparison",
  "Competitor visibility and information-depth comparison",
  "Reputation and trust-signal review",
  "Gap severity assessment",
  "Business and customer impact assessment",
  "Competitive impact assessment",
  "Fixability and priority assessment",
  "Recommended implementation actions",
  "Re-testing recommendations",
  "Ongoing monitoring opportunities",
];

export default function AiSearchChecklist() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          badge="Audit Scope"
          title="What an AI Search Visibility Engagement Can Cover"
          description="The exact scope depends on the engagement level and business needs. The framework below shows the areas we can investigate and connect into one prioritized visibility assessment."
        />

        <div className="mx-auto mt-14 max-w-5xl rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-slate-900"
                  aria-hidden="true"
                />

                <span className="text-sm leading-6 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-7 text-center sm:p-9">
          <h3 className="text-2xl font-bold tracking-tight text-slate-950">
            Audit First. Fix What the Evidence Shows.
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            We do not create problems just to sell implementation. Findings
            should stand on their own, while genuine implementation needs can
            become the natural next step.
          </p>
        </div>
      </Container>
    </section>
  );
}
