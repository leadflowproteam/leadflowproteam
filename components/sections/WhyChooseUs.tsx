import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  GitCompare,
  Lightbulb,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const differentiators = [
  {
    icon: FileCheck2,
    title: "Evidence First",
    description:
      "We focus on observable information, source evidence, and documented findings instead of making unsupported visibility claims.",
  },
  {
    icon: Search,
    title: "Beyond Traditional SEO",
    description:
      "We look beyond rankings to understand how your business information is discovered, interpreted, and represented.",
  },
  {
    icon: GitCompare,
    title: "Competitive Context",
    description:
      "Relevant competitors help provide context for gaps, strengths, and opportunities—not just an isolated business score.",
  },
  {
    icon: ShieldCheck,
    title: "Human Validation",
    description:
      "Automation can accelerate repetitive research, while important findings and recommendations receive human review.",
  },
  {
    icon: Lightbulb,
    title: "Actionable Recommendations",
    description:
      "The objective is to explain what matters, why it matters, and what should be prioritized next.",
  },
  {
    icon: Wrench,
    title: "Built to Implement",
    description:
      "When improvements require technical, website, search, local, or information work, we have implementation capabilities to act on the findings.",
  },
];

const principles = [
  "No guaranteed AI rankings or mentions",
  "No one-size-fits-all recommendations",
  "No confusing the audit with the implementation",
  "No relying on a single visibility signal",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Why LeadFlowProTeam"
          title="A Visibility Approach Built Around Evidence and Action."
          description="Our methodology combines AI visibility research, search foundations, website quality, local information, competitive context, and human judgment to create a clearer path from finding a problem to improving it."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-slate-950 text-white">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
                Our Principles
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                What We Will Not Promise.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                AI and search systems change. Visibility depends on many
                factors outside any agency&apos;s direct control. Our approach is
                to document what can be observed, explain what it means, and
                focus on improvements we can actually influence.
              </p>

              <div className="mt-7 space-y-4">
                {principles.map((principle) => (
                  <div key={principle} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />

                    <p className="text-sm leading-6 text-slate-200">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/[0.04] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
                The Goal
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight">
                Better Information. Better Understanding. Better Decisions.
              </h3>

              <div className="mt-7 space-y-5">
                {[
                  {
                    label: "Understand",
                    text: "See how your business is currently represented.",
                  },
                  {
                    label: "Prioritize",
                    text: "Identify the gaps and opportunities that matter most.",
                  },
                  {
                    label: "Improve",
                    text: "Implement practical changes based on the evidence.",
                  },
                  {
                    label: "Monitor",
                    text: "Continue checking visibility as information and systems change.",
                  },
                ].map((item, index) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {index + 1}
                    </span>

                    <div>
                      <p className="font-bold text-white">{item.label}</p>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/free-audit"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                See Your Visibility
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}