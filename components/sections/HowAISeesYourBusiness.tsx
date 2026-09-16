import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  Globe2,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const visibilitySteps = [
  {
    number: "01",
    icon: Globe2,
    title: "Your Website",
    description:
      "Your website provides the core information about your business, services, expertise, and offerings. Structure and content quality directly impact AI comprehension.",
    color: "bg-blue-50 text-blue-600",
    glow: "from-blue-500",
  },
  {
    number: "02",
    icon: Search,
    title: "Search & Local Sources",
    description:
      "Search engines, Google Business Profile, and local information sources contribute critical signals about your business identity and service area.",
    color: "bg-violet-50 text-violet-600",
    glow: "from-violet-500",
  },
  {
    number: "03",
    icon: Building2,
    title: "Business Information",
    description:
      "Names, services, locations, and descriptions need to be clear, consistent, and structured with schema markup so AI can extract and understand them.",
    color: "bg-emerald-50 text-emerald-600",
    glow: "from-emerald-500",
  },
  {
    number: "04",
    icon: Bot,
    title: "AI Systems",
    description:
      "ChatGPT, Gemini, Perplexity, and other AI engines synthesize all available information to build their understanding of your business and answer buyer queries.",
    color: "bg-amber-50 text-amber-600",
    glow: "from-amber-500",
  },
  {
    number: "05",
    icon: MapPin,
    title: "Customer Answers",
    description:
      "The final result: what potential customers discover when they ask an AI about your business, services, or category. This is your real-world AI visibility.",
    color: "bg-rose-50 text-rose-600",
    glow: "from-rose-500",
  },
];

export default function HowAISeesYourBusiness() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="The Visibility Ecosystem"
          title="How AI Sees Your Business"
          description="Your business is represented by more than your website. Search engines, local data sources, structured markup, and AI systems all contribute to what potential customers can discover — and we audit every layer."
          align="center"
        />

        {/* Steps flow */}
        <div className="mt-14">
          <div className="grid gap-5 lg:grid-cols-5">
            {visibilitySteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === visibilitySteps.length - 1;

              return (
                <div key={step.number} className="relative">
                  {/* Card */}
                  <div className="group h-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                    {/* Number top-right */}
                    <div className="flex items-start justify-between">
                      <div className={`rounded-xl p-3 ${step.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-2xl font-black text-gray-100 tabular-nums">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector */}
                  {!isLast && (
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

        {/* Key question callout */}
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 p-px shadow-2xl">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 px-8 py-10 sm:px-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-blue-400" />
                    <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
                      The Key Question
                    </p>
                  </div>

                  <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Is your business information accurate, complete, consistent, and easy for AI systems to understand?
                  </h3>

                  <p className="mt-4 text-base leading-7 text-blue-100">
                    That is where an AI Search Visibility Audit begins — understanding what information is available, how it is represented, and where meaningful gaps may exist.
                  </p>
                </div>

                <div className="flex flex-col gap-3 lg:flex-shrink-0">
                  <Link
                    href="/services/ai-visibility-framework"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    See Our Framework
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/free-audit"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
                  >
                    Get Free Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}