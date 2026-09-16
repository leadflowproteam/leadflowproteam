import {
  ClipboardCheck,
  FileSearch,
  SearchCheck,
  Wrench,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: FileSearch,
    title: "Assess",
    description:
      "Review the website's technical foundation and identify issues affecting crawlability, indexing, architecture, performance, structured data, or reliability.",
  },
  {
    icon: ClipboardCheck,
    title: "Prioritize",
    description:
      "Separate important issues from low-value recommendations and connect the findings to actual business and visibility priorities.",
  },
  {
    icon: Wrench,
    title: "Implement",
    description:
      "Apply the agreed technical changes within the defined project scope.",
  },
  {
    icon: SearchCheck,
    title: "Validate",
    description:
      "Re-check important changes and confirm that the intended technical improvements were implemented correctly.",
  },
];

export default function TechnicalSeoProcess() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Our Process"
        title="From Technical Finding to Verified Fix"
        description="Technical SEO is most useful when it is connected to a clear problem, a practical implementation scope, and validation after the work is completed."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-sm">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <span className="text-2xl font-black text-slate-200">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-12 rounded-[32px] bg-slate-950 p-8 text-center sm:p-10">
        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Technical SEO Can Be the Next Step After an AI Visibility Audit
        </h3>

        <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-300">
          When the audit identifies genuine technical barriers, Technical SEO
          provides a clear path from finding to implementation. This keeps the
          work evidence-led and connected to business priorities.
        </p>
      </div>
    </Section>
  );
}
