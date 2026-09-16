import {
  ClipboardCheck,
  FileSearch,
  LineChart,
  SearchCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: FileSearch,
    title: "01. Discover",
    description:
      "Collect the business's verified information, website details, local presence, services, market context, and other public signals needed for a meaningful assessment.",
  },
  {
    icon: SearchCheck,
    title: "02. Test",
    description:
      "Run relevant search, AI, location, service, and customer-query checks and preserve the important observations and sources.",
  },
  {
    icon: ClipboardCheck,
    title: "03. Validate",
    description:
      "Compare observed results against verified business information and review important findings before they become client-facing conclusions.",
  },
  {
    icon: ShieldCheck,
    title: "04. Prioritize",
    description:
      "Classify gaps by severity, business impact, competitive impact, fixability, priority, and recommended next action.",
  },
  {
    icon: Wrench,
    title: "05. Improve",
    description:
      "Where implementation is appropriate, apply practical improvements across website, technical SEO, structured data, local information, content, conversion, or visibility foundations.",
  },
  {
    icon: LineChart,
    title: "06. Re-Test & Monitor",
    description:
      "Review important changes, compare the new state against the original findings, and establish ongoing monitoring or periodic re-audit where it makes business sense.",
  },
];

export default function AiSearchProcess() {
  return (
    <Section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <SectionHeading
        badge="Our Commercial Process"
        title="From Audit Findings to Practical Business Improvement"
        description="The audit is the entry point. When genuine gaps are found, they can become clearly scoped implementation work and, where appropriate, an ongoing optimization relationship."
      />

      <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <article
              key={step.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl sm:p-8"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-colors duration-300 group-hover:bg-slate-950 group-hover:text-white">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold leading-tight text-slate-950">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
            Commercial Journey
          </p>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Audit → Findings → Implementation → Re-Test → Monitoring
          </h3>

          <p className="mt-5 leading-7 text-slate-600">
            Every stage should have a clear purpose. An audit remains valuable
            on its own, while genuine implementation and monitoring needs can
            create higher-value follow-on services.
          </p>
        </div>
      </div>
    </Section>
  );
}
