import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  FileSearch,
  Wrench,
  RotateCcw,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const engagementStages = [
  {
    icon: ClipboardCheck,
    title: "Audit",
    description:
      "Establish the current state of business information, website foundations, local visibility, AI visibility, customer queries, and competitive context.",
  },
  {
    icon: FileSearch,
    title: "Evidence & Findings",
    description:
      "Document important observations, sources, screenshots, information gaps, inconsistencies, and areas requiring attention.",
  },
  {
    icon: Wrench,
    title: "Implementation",
    description:
      "Where genuine needs exist, apply practical improvements across website, technical SEO, structured data, content, local information, or conversion.",
  },
  {
    icon: RotateCcw,
    title: "Re-Test",
    description:
      "Review important changes against the original findings and establish the basis for ongoing monitoring or future audits.",
  },
];

export default function AiSearchPortfolio() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          badge="Evidence & Work"
          title="See What a Commercial AI Visibility Engagement Produces"
          description="We are building a public evidence library from reviewed work. Until verified client case studies are available, we show the engagement structure rather than inventing results or testimonials."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {engagementStages.map((stage) => {
            const Icon = stage.icon;

            return (
              <article
                key={stage.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-8"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-sm">
                  <Icon
                    className="h-7 w-7"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950">
                  {stage.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {stage.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                Public Evidence
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Verified findings will be published as the evidence library
                grows.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Public proof will distinguish examples from verified client
                work and will never expose confidential business information.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/proof-of-work"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                View Proof of Work
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900"
          >
            Start with an AI Visibility Audit
            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
