import {
  ClipboardCheck,
  FileSearch,
  MapPinned,
  Wrench,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: FileSearch,
    title: "Assess",
    description:
      "Review the business website, local information, relevant public sources, services, locations, and other important local signals.",
  },
  {
    icon: ClipboardCheck,
    title: "Identify",
    description:
      "Document meaningful inconsistencies, missing information, weak local signals, and customer-discovery gaps.",
  },
  {
    icon: Wrench,
    title: "Implement",
    description:
      "Apply the agreed corrections and improvements within the project scope.",
  },
  {
    icon: MapPinned,
    title: "Validate",
    description:
      "Re-check important business information and local signals after implementation and identify future maintenance needs.",
  },
];

export default function LocalSeoProcess() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Our Process"
        title="From Local Information Gap to Verified Improvement"
        description="Local SEO becomes more useful when changes are connected to verified business information and a defined commercial objective."
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
          Local SEO Can Be the Right Implementation After an AI Visibility Audit
        </h3>

        <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-300">
          When an audit identifies inconsistent or incomplete local business
          information, Local SEO provides a practical implementation path for
          correcting and strengthening those signals.
        </p>
      </div>
    </Section>
  );
}
