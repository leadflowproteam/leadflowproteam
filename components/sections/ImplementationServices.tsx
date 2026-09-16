import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Code2,
  Gauge,
  Globe2,
  MapPin,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const implementationServices = [
  {
    icon: Code2,
    title: "Website Engineering",
    description:
      "Build, rebuild, or improve a modern website with a strong technical and content foundation.",
    href: "/services/web-development",
  },
  {
    icon: SearchCheck,
    title: "Technical SEO",
    description:
      "Improve crawlability, metadata, internal structure, indexing signals, and technical search foundations.",
    href: "/services/technical-seo",
  },
  {
    icon: MapPin,
    title: "Local Search & Data",
    description:
      "Improve the consistency, completeness, and clarity of important local and business information.",
    href: "/services/ai-search-visibility",
  },
  {
    icon: Bot,
    title: "AI Search Visibility",
    description:
      "Improve the information and supporting signals that help AI systems better understand your business.",
    href: "/services/ai-search-visibility",
  },
  {
    icon: Sparkles,
    title: "Structured Data & Entity Signals",
    description:
      "Strengthen structured information and entity relationships so important business details are easier to interpret.",
    href: "/services/technical-seo",
  },
  {
    icon: Globe2,
    title: "Content & Information",
    description:
      "Improve the clarity, completeness, and usefulness of the information customers and search systems need.",
    href: "/services/ai-search-visibility",
  },
  {
    icon: Gauge,
    title: "Performance & Core Web Vitals",
    description:
      "Address performance and user-experience issues that can weaken the quality of the website experience.",
    href: "/services/web-development",
  },
  {
    icon: ShieldCheck,
    title: "Conversion Improvements",
    description:
      "Turn visibility into action with clearer messaging, calls to action, page structure, and conversion paths.",
    href: "/services/landing-page-development",
  },
];

export default function ImplementationServices() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Implementation Services"
          title="Find a Gap. Fix the Gap."
          description="An audit tells you where the opportunities are. Our implementation services help turn those findings into practical improvements across your website, search foundation, business information, and AI visibility."
          align="center"
        />

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/70 p-6 text-center sm:p-8">
          <p className="text-sm leading-7 text-gray-700">
            <span className="font-bold text-gray-900">Important:</span>{" "}
            implementation is not required to purchase an audit. The audit
            should stand on its own as a useful diagnostic product. When
            implementation is appropriate, the findings naturally identify
            what should be improved and why.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {implementationServices.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-xl bg-blue-50 p-3 transition group-hover:bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <ArrowRight className="h-5 w-5 text-gray-300 transition group-hover:translate-x-1 group-hover:text-blue-600" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
                  Explore Service
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/10 p-3">
                  <Sparkles className="h-6 w-6 text-blue-300" />
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
                  From Diagnosis to Action
                </p>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                Your Audit Becomes a Practical Improvement Roadmap.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Some businesses need information and content improvements.
                Others need technical work, local data cleanup, website
                changes, or deeper AI visibility optimization. The right scope
                depends on what the evidence shows.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="space-y-4">
                {[
                  "Audit findings",
                  "Prioritized opportunities",
                  "Recommended implementation",
                  "Improvement work",
                  "Ongoing optimization",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {index + 1}
                    </span>

                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>

                    {index < 4 && (
                      <ArrowRight className="ml-auto h-4 w-4 text-slate-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Not sure what needs to be improved?
          </p>

          <Link
            href="/free-audit"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700"
          >
            Start with an AI Search Visibility Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}