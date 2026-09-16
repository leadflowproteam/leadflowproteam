import { CheckCircle2 } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const foundations = [
  "Crawlability review",
  "Indexability review",
  "Robots.txt review",
  "XML sitemap review",
  "Canonical URL review",
  "Redirect review",
  "404 and broken URL review",
  "Duplicate-page risk review",
  "Internal linking review",
  "URL structure review",
];

const performance = [
  "Core Web Vitals assessment",
  "Largest Contentful Paint (LCP)",
  "Interaction to Next Paint (INP)",
  "Cumulative Layout Shift (CLS)",
  "Image and asset optimization",
  "Rendering and loading review",
  "Mobile usability review",
  "JavaScript and CSS review",
  "Page-level performance checks",
  "User experience considerations",
];

const structuredData = [
  "Schema.org review",
  "Organization data where appropriate",
  "Service data where appropriate",
  "Breadcrumb data where appropriate",
  "WebPage relationships",
  "Metadata alignment",
  "Semantic HTML review",
  "Entity relationship clarity",
  "Internal linking relationships",
  "Technical implementation validation",
];

function ChecklistCard({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
          {title}
        </h3>

        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {items.length} areas
        </span>
      </div>

      <ul className="mt-7 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-slate-700"
          >
            <CheckCircle2
              className="mt-1 h-4 w-4 shrink-0 text-slate-900"
              aria-hidden="true"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechnicalSeoChecklist() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="Technical SEO Checklist"
        title="A Practical Technical Review"
        description="We prioritize issues according to their relevance to the business rather than treating every technical recommendation as equally important."
      />

      <div className="grid gap-7 lg:grid-cols-3">
        <ChecklistCard
          title="Technical Foundation"
          items={foundations}
        />

        <ChecklistCard
          title="Performance & UX"
          items={performance}
        />

        <ChecklistCard
          title="Structured Data & Semantics"
          items={structuredData}
        />
      </div>

      <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-9">
        <h3 className="text-2xl font-bold tracking-tight text-slate-950">
          Not Every Technical Issue Deserves the Same Investment
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          We connect technical findings to actual business objectives,
          visibility needs, implementation effort, and priority so the work can
          be scoped around what matters.
        </p>
      </div>
    </Section>
  );
}
