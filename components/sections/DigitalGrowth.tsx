import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const pathways = [
  {
    priority: "Primary",
    number: "01",
    icon: TrendingUp,
    eyebrow: "Commercial Businesses",
    title: "For Businesses Ready to Invest in Growth",
    description:
      "Our primary focus is established and growth-oriented commercial businesses that understand digital visibility is a business investment—not an expense to avoid. We work with organizations prepared to invest in better websites, search visibility, AI Search Visibility, conversion, and ongoing digital improvement.",
    points: [
      "Businesses actively investing in marketing and customer acquisition",
      "High-performance websites built to support business growth",
      "Technical SEO, Local SEO, and AI Search Visibility",
      "Conversion-focused landing pages and information architecture",
      "Ongoing optimization, testing, and digital improvement",
    ],
    qualification:
      "Best fit: businesses with a real growth objective, an existing customer market, and willingness to invest in professional digital work.",
    href: "/services",
    cta: "Explore Growth Services",
  },
  {
    priority: "Secondary",
    number: "02",
    icon: HeartHandshake,
    eyebrow: "Mission-Driven Organizations",
    title: "Digital Support for Organizations With a Mission",
    description:
      "We also support selected mission-driven organizations that need stronger digital infrastructure to communicate their work, reach supporters, and build sustainable digital pathways.",
    points: [
      "Mission-focused websites and landing pages",
      "Digital communication and supporter pathways",
      "Search visibility and information infrastructure",
      "Trust-building and clear online communication",
    ],
    qualification:
      "This pathway is secondary to our commercial business focus and may be evaluated according to project scope and available resources.",
    href: "/mission-driven-organizations",
    cta: "Explore Mission Support",
  },
];

export default function DigitalGrowth() {
  return (
    <section
      aria-labelledby="digital-growth-heading"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          badge="Who We Serve"
          title="Digital Growth for Organizations Ready to Move Forward"
          description="LeadFlowProTeam is built to deliver practical digital services that create business value. Our primary focus is commercial organizations that are willing to invest in professional improvement and growth."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {pathways.map((pathway) => {
            const Icon = pathway.icon;

            const isPrimary = pathway.priority === "Primary";

            return (
              <article
                key={pathway.number}
                className={`group relative overflow-hidden rounded-[32px] border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10 ${
                  isPrimary
                    ? "border-slate-300 ring-1 ring-slate-200"
                    : "border-slate-200"
                }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute right-8 top-6 text-6xl font-black text-slate-100"
                >
                  {pathway.number}
                </div>

                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                        isPrimary
                          ? "bg-slate-950 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <Icon
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] ${
                        isPrimary
                          ? "bg-slate-950 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {pathway.priority} Focus
                    </span>
                  </div>

                  <p className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                    {pathway.eyebrow}
                  </p>

                  <h3 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {pathway.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {pathway.description}
                  </p>

                  <div className="mt-7">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      What We Provide
                    </p>

                    <ul className="mt-4 space-y-3">
                      {pathway.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      Best Fit
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {pathway.qualification}
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={pathway.href}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      {pathway.cta}

                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-4xl text-center">
          <p className="text-sm leading-6 text-slate-500">
            We focus our commercial efforts on organizations that have a
            genuine business objective and are prepared to invest in the work
            required to improve their digital presence.
          </p>
        </div>
      </Container>
    </section>
  );
}
