import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  FileSearch,
  Search,
  Target,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: FileSearch,
    title: "Know How Your Business Is Represented",
    description:
      "See what search and AI systems can currently discover about your business, services, locations, positioning, and important public information.",
  },
  {
    icon: AlertTriangle,
    title: "Find Information Gaps",
    description:
      "Identify information that is missing, inconsistent, outdated, ambiguous, or difficult for customers and search systems to discover.",
  },
  {
    icon: CheckCircle2,
    title: "Separate Facts From Assumptions",
    description:
      "Compare observed AI and search results against verified business information instead of treating every generated answer as automatically correct.",
  },
  {
    icon: Search,
    title: "Strengthen Search Foundations",
    description:
      "Improve technical SEO, structured data, internal information architecture, local signals, and website content where the audit shows a meaningful need.",
  },
  {
    icon: Target,
    title: "Prioritize the Gaps That Matter",
    description:
      "Connect each important issue to business impact, competitive impact, fixability, priority, and the most appropriate next service or action.",
  },
  {
    icon: BarChart3,
    title: "Create a Basis for Re-Testing",
    description:
      "Document the initial state so important information and visibility changes can be reviewed again after implementation.",
  },
];

export default function AiSearchBenefits() {
  return (
    <Section className="bg-white py-20 sm:py-24">
      <SectionHeading
        badge="Why This Matters"
        title="AI Visibility Starts With Knowing What the Market Can Actually Discover"
        description="A business may have a good website and still have incomplete, inconsistent, or weakly connected information across the public web. Our work starts by measuring that reality."
      />

      <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article
              key={benefit.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl sm:p-8"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-colors duration-300 group-hover:bg-slate-950 group-hover:text-white">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold leading-tight text-slate-950">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {benefit.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold tracking-tight text-slate-950">
            This Is Not a Guaranteed-Ranking Service
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            AI answers can change by query, source, location, context, and
            time. We therefore focus on measurable information quality,
            coverage, consistency, discoverability, evidence, and practical
            improvements rather than promising a guaranteed AI ranking,
            citation, or recommendation.
          </p>
        </div>
      </div>
    </Section>
  );
}
