import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileSearch,
  Hotel,
  MapPin,
  Search,
  Star,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const focusAreas = [
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description:
      "Our initial pilot focus is hospitality businesses, starting with hotels and local properties where discovery, reputation, location, services, and customer questions strongly shape the buying journey.",
  },
  {
    icon: MapPin,
    title: "Local Business Visibility",
    description:
      "Hospitality businesses depend on accurate location, amenities, services, business information, and local visibility across multiple discovery environments.",
  },
  {
    icon: Bot,
    title: "AI & Search Representation",
    description:
      "We examine how relevant business information is represented in search and AI answer experiences when customers research where to stay or what a property offers.",
  },
];

const pilotSignals = [
  "Business identity and property information",
  "Website and technical foundations",
  "Local search and business data",
  "AI visibility and customer query testing",
  "Reputation and trust signals",
  "Relevant competitor comparison",
];

export default function IndustriesWeServe() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Initial Market Focus"
          title="Starting With Texas Hotels & Hospitality."
          description="We are deliberately starting with one clearly defined market so the AI Search Visibility Audit methodology can be tested, refined, and proven before expanding into additional industries."
        />

        <div className="mt-14 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/10 p-3">
                  <Hotel className="h-7 w-7 text-blue-300" />
                </div>

                <span className="text-sm font-semibold uppercase tracking-wide text-blue-300">
                  Texas Hospitality Pilot
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                A Focused Starting Point for a Repeatable Methodology.
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                Instead of trying to serve every industry at once, we are
                starting with a defined hospitality market. That allows us to
                learn what customers ask, what information matters most, where
                visibility gaps occur, and how the audit process can be
                improved through real-world testing.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/free-audit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Request an AI Visibility Audit
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/industries"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Industries
                </Link>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-3">
                  <FileSearch className="h-6 w-6 text-blue-600" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    What We Study
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    Hospitality Visibility Signals
                  </h3>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {pilotSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                    <p className="text-sm leading-6 text-gray-700">
                      {signal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {focusAreas.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
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

        <div className="mt-14 rounded-3xl border border-blue-100 bg-blue-50/70 p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Why Start Narrow?
                </p>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                One Niche. One Methodology. Better Learning.
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                A focused pilot helps us measure the research process, refine
                the audit framework, improve evidence collection, understand
                customer-query patterns, and build useful case studies before
                expanding into broader markets.
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Our initial focus is narrow by design. Expansion comes after the
            methodology is proven.
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