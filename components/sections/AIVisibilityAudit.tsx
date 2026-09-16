import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  FileSearch,
  Globe2,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const auditLayers = [
  {
    number: "01",
    icon: Building2,
    title: "Business & Identity",
    description:
      "We review how your business name, location, services, and core identity are presented across important sources.",
  },
  {
    number: "02",
    icon: Globe2,
    title: "Website & Technical",
    description:
      "We examine whether your website is structured, accessible, understandable, and technically prepared for search discovery.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Local Search & Data",
    description:
      "We look for consistency across local and business information sources that can influence how your business is understood.",
  },
  {
    number: "04",
    icon: Bot,
    title: "AI Search Visibility",
    description:
      "We test how your business is represented across relevant AI answer and search experiences.",
  },
  {
    number: "05",
    icon: MessageSquare,
    title: "Customer Queries",
    description:
      "We test realistic questions customers may ask to discover, compare, or evaluate businesses like yours.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Reputation & Trust",
    description:
      "We assess the trust signals and public information that can strengthen or weaken your business representation.",
  },
  {
    number: "07",
    icon: Target,
    title: "Competitive Intelligence",
    description:
      "We compare your visibility and information coverage with relevant competitors to identify meaningful gaps.",
  },
  {
    number: "08",
    icon: BarChart3,
    title: "Opportunities & Actions",
    description:
      "We turn the findings into prioritized opportunities and practical recommendations for improvement.",
  },
];

const auditOutputs = [
  "What information is currently available",
  "Where important information is missing or inconsistent",
  "How your business appears in relevant AI and search experiences",
  "Where competitors have stronger visibility signals",
  "Which improvements should be prioritized first",
];

export default function AIVisibilityAudit() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Understand How Your Business Is Represented."
          description="We don't just check whether your website ranks. We examine the wider information ecosystem that helps search engines and AI systems understand your business."
          align="center"
        />

        {/* Audit Overview */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-50 p-3">
                    <FileSearch className="h-6 w-6 text-blue-600" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                      Before the Fix
                    </p>

                    <h3 className="text-xl font-bold text-gray-900">
                      We Investigate
                    </h3>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {[
                    "Business information",
                    "Website structure",
                    "Search & local sources",
                    "AI visibility",
                    "Customer queries",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden lg:flex lg:items-center">
                <ArrowRight className="h-8 w-8 text-blue-500" />
              </div>

              <div className="rounded-2xl bg-blue-600 p-7 text-white">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/15 p-3">
                    <Sparkles className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">
                      Audit Output
                    </p>

                    <h3 className="text-xl font-bold">
                      We Explain the Gaps
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-blue-100">
                  Findings are organized into clear issues, opportunities,
                  and recommended next steps—not just a generic score.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Eight Audit Layers */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Eight Audit Layers
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              One Methodology. A Complete Visibility Picture.
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Each layer examines a different part of the information
              ecosystem that can affect how your business is discovered,
              understood, compared, and represented.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {auditLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <div
                  key={layer.number}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-blue-50 p-3 transition group-hover:bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <span className="text-sm font-bold text-gray-300">
                      {layer.number}
                    </span>
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-gray-900">
                    {layer.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {layer.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Audit Output */}
        <div className="mt-16 grid gap-8 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>

              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                What You Get
              </p>
            </div>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Evidence First. Actions Next.
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-600">
              The goal is not to overwhelm you with technical data. The goal
              is to show what we found, why it matters, and what can be done
              next.
            </p>

            <div className="mt-7">
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Request an AI Visibility Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {auditOutputs.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <p className="pt-1 text-sm font-medium leading-6 text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}