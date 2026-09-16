import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Hammer,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We collect the core information needed to understand your business, website, market, and visibility landscape.",
    color: "bg-blue-50 text-blue-600",
    accent: "border-blue-200",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Test",
    description:
      "We examine search, local information, AI visibility across ChatGPT, Gemini, Perplexity, Copilot, and Claude — using realistic customer queries.",
    color: "bg-violet-50 text-violet-600",
    accent: "border-violet-200",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Verify",
    description:
      "We review the findings, compare sources, and separate verified information from observations and opportunities requiring action.",
    color: "bg-emerald-50 text-emerald-600",
    accent: "border-emerald-200",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Report",
    description:
      "We organize the evidence into clear findings, priority gaps, competitive insights, and practical recommendations you can act on.",
    color: "bg-amber-50 text-amber-600",
    accent: "border-amber-200",
  },
  {
    number: "05",
    icon: Hammer,
    title: "Fix",
    description:
      "Where implementation is needed, we help improve the website, technical foundation, schema markup, and AI visibility signals.",
    color: "bg-rose-50 text-rose-600",
    accent: "border-rose-200",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Monitor",
    description:
      "AI visibility changes over time. Ongoing monitoring identifies new gaps, changes in AI representation, and emerging opportunities.",
    color: "bg-sky-50 text-sky-600",
    accent: "border-sky-200",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="How It Works"
          title="From Visibility Audit to Practical Improvement."
          description="Our process is designed to turn AI visibility research into clear decisions and useful action — not another report that sits on a shelf."
          align="center"
        />

        <div className="mt-14">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  <div className={`group h-full rounded-3xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${step.accent}`}>
                    <div className="flex items-start justify-between">
                      <div className={`rounded-xl p-3 ${step.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-3xl font-black text-gray-100 tabular-nums">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector between adjacent cards (only on lg, not after 3rd/6th) */}
                  {index < processSteps.length - 1 && (index + 1) % 3 !== 0 && (
                    <div
                      aria-hidden="true"
                      className="absolute -right-3.5 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
                    >
                      <div className="rounded-full border border-gray-200 bg-white p-1.5 shadow-sm">
                        <ArrowRight className="h-4 w-4 text-blue-500" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Journey summary */}
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
                  The Full Journey
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
                  Audit → Findings → Fixes → Monitoring
                </h3>

                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Start with an independent AI visibility assessment. Use the findings to decide what should be improved, then continue with implementation or ongoing optimization where it makes sense for your business.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Start With a Free Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/ai-visibility-framework"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
              >
                See Our Full Framework
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}