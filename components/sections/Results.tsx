import {
  CheckCircle2,
  FileSearch,
  GitCompare,
  Lightbulb,
  Search,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const evidenceAreas = [
  {
    icon: Search,
    title: "Visibility Testing",
    description:
      "Test relevant search, local, and AI experiences to understand what customers may encounter.",
  },
  {
    icon: FileSearch,
    title: "Source & Information Review",
    description:
      "Review the business information available across the website and relevant external sources.",
  },
  {
    icon: GitCompare,
    title: "Competitive Context",
    description:
      "Compare relevant businesses to identify information gaps and stronger visibility opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Prioritized Actions",
    description:
      "Turn observations into practical recommendations based on impact, relevance, and implementation needs.",
  },
];

const outcomes = [
  "A clearer picture of your current visibility",
  "Documented gaps and inconsistencies",
  "Relevant competitive observations",
  "Prioritized opportunities for improvement",
  "A practical next-step roadmap",
];

export default function Results() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Results & Evidence"
          title="What a Better Visibility Process Should Produce."
          description="We are building our proof library through real audits, implementation work, and measurable observations. Until there is enough verified client data to publish outcome statistics, we focus on the quality of the evidence and decisions the process produces."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {evidenceAreas.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
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

        <div className="mt-14 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-slate-950 p-7 text-white sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <TrendingUp className="h-6 w-6 text-blue-300" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-blue-300">
                From Audit to Improvement
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                The Goal Is Better Decisions, Not Just Better Scores.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                A useful audit should make it easier to understand what is
                happening, what matters, and what should happen next.
              </p>
            </div>

            <div className="p-7 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Audit Output
              </p>

              <div className="mt-6 space-y-4">
                {outcomes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                    <p className="text-sm font-medium leading-6 text-gray-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Real client evidence and case studies will be added as the pilot
            program produces verified results.
          </p>
        </div>
      </Container>
    </section>
  );
}