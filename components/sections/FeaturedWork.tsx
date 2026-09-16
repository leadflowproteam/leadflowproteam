import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileSearch,
  Globe2,
  MapPin,
  Search,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const evidenceItems = [
  {
    icon: Bot,
    title: "AI Visibility Testing",
    description:
      "We structure relevant customer questions and examine how a business is represented across applicable AI answer experiences.",
  },
  {
    icon: Search,
    title: "Search & Information Review",
    description:
      "We review discoverability, business information, website signals, and the sources that contribute to the overall visibility picture.",
  },
  {
    icon: MapPin,
    title: "Local Data Consistency",
    description:
      "We check important business details across relevant local and public information sources for clarity and consistency.",
  },
];

const reportSections = [
  "Verified business information",
  "Observed visibility findings",
  "Information and consistency gaps",
  "Competitive observations",
  "Prioritized recommendations",
];

export default function FeaturedWork() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Evidence & Case Studies"
          title="See the Work Behind the Recommendation."
          description="Our audit methodology is designed to produce documented findings that can be reviewed, discussed, and acted on. As real client engagements are completed, this section will evolve into a library of verified case studies."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {evidenceItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/10 p-3">
                  <FileSearch className="h-6 w-6 text-blue-300" />
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
                  Sample Audit Structure
                </p>
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
                A Report Designed to Explain What Matters.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Instead of presenting a collection of disconnected technical
                scores, our reporting approach connects evidence, findings,
                opportunity areas, and recommended actions.
              </p>

              <Link
                href="/services/website-audit"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-300"
              >
                Explore the Audit Approach
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <div className="grid gap-4 sm:grid-cols-2">
                {reportSections.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                        {index + 1}
                      </span>

                      <div>
                        <p className="text-sm font-bold leading-5 text-gray-900">
                          {item}
                        </p>

                        <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-gray-500">
                          <CheckCircle2 className="h-4 w-4 text-blue-600" />
                          Evidence-oriented
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/70 p-5">
                <div className="flex items-start gap-3">
                  <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                  <p className="text-sm leading-6 text-gray-700">
                    <span className="font-bold text-gray-900">
                      Case study policy:
                    </span>{" "}
                    published results will be based on real engagement data,
                    documented evidence, and verified outcomes—not illustrative
                    or invented performance claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Want to see how your business is represented?
          </p>

          <Link
            href="/free-audit"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700"
          >
            Start With an AI Visibility Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}