import { ArrowRight, X, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";

const comparisons = [
  {
    topic: "AI Answer Engines",
    before: {
      headline: "Absent — Competitors Win Every Query",
      detail:
        "ChatGPT, Gemini, and Perplexity have no knowledge of your business. When buyers ask AI about your services, your competitors are cited and recommended — you are not.",
    },
    after: {
      headline: "Recognized, Referenced & Recommended",
      detail:
        "AI systems correctly understand your business, cite your expertise, and recommend you to users asking relevant questions — driving qualified organic traffic without paid ads.",
    },
  },
  {
    topic: "Google AI Overviews",
    before: {
      headline: "Completely Excluded",
      detail:
        "Your pages are not structured for AI extraction, so Google's AI Overview system never pulls content from your site — even when you rank on page one for the query.",
    },
    after: {
      headline: "Eligible, Appearing & Cited",
      detail:
        "GEO-optimized pages with proper semantic structure are regularly pulled into Google AI Overviews, placing your business above traditional search results where it matters most.",
    },
  },
  {
    topic: "Structured Data & Schema",
    before: {
      headline: "No Machine-Readable Signals",
      detail:
        "Without schema markup, AI systems guess your business type, services, and offerings — resulting in misrepresentation, exclusion from rich results, and reduced AI comprehension of your brand.",
    },
    after: {
      headline: "Full Schema Layer Implemented",
      detail:
        "Organization, Service, FAQ, LocalBusiness, and BreadcrumbList schemas provide AI systems with precise, structured data — enabling rich results, accurate entity understanding, and AI citation eligibility.",
    },
  },
  {
    topic: "Page Speed & Core Web Vitals",
    before: {
      headline: "Failing — 5s+ Load Times",
      detail:
        "Pages failing Core Web Vitals thresholds signal low quality to both Google and AI search systems. High bounce rates from slow loading translate directly into lost leads and lower rankings.",
    },
    after: {
      headline: "Passing — Sub-2.5s Performance",
      detail:
        "Fully optimized to meet or exceed Core Web Vitals standards — delivering fast, high-quality user experiences that satisfy both performance benchmarks and AI readiness requirements.",
    },
  },
  {
    topic: "Entity & Knowledge Graph",
    before: {
      headline: "Unknown — No Entity Footprint",
      detail:
        "Your brand has zero entity connections, no knowledge graph presence, and no cross-web authority signals — making it impossible for AI systems to confidently recognize or recommend your business.",
    },
    after: {
      headline: "Mapped, Connected & Authoritative",
      detail:
        "Your business is established as a recognized entity — connected to authoritative sources, reinforced with structured signals, and visible within the knowledge graph ecosystem that AI systems rely on.",
    },
  },
  {
    topic: "Technical SEO Foundation",
    before: {
      headline: "Broken — Silent Visibility Leaks",
      detail:
        "Crawl errors, duplicate content, missing canonicals, and broken metadata quietly undermine your ability to rank and be understood — even your best pages may not be indexed correctly.",
    },
    after: {
      headline: "Clean — Fully Audited & Resolved",
      detail:
        "Every technical issue has been identified and remediated — your site is fully crawlable, correctly indexed, and built on a clean technical foundation that supports long-term visibility growth.",
    },
  },
];

export default function AiSearchBeforeAfter() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
            Before & After
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            The Measurable Difference Our Audit Makes
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            See exactly how your website&apos;s AI search visibility changes after
            our audit and fixing work — across every dimension that determines
            whether AI systems find, trust, and recommend your business.
          </p>
        </div>

        {/* Column Headers */}
        <div className="mt-14 grid grid-cols-[1fr_40px_1fr] items-center gap-3 px-2 md:grid-cols-[1fr_60px_1fr]">
          <div className="flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-5 py-3">
            <X className="h-5 w-5 shrink-0 text-red-500" />
            <span className="font-bold text-red-700">Before the Audit</span>
          </div>
          <div />
          <div className="flex items-center gap-2 rounded-2xl border border-green-200 bg-green-50 px-5 py-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
            <span className="font-bold text-green-700">After the Fix</span>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="mt-4 grid gap-4">
          {comparisons.map((item) => (
            <div
              key={item.topic}
              className="grid grid-cols-[1fr_40px_1fr] items-center gap-3 md:grid-cols-[1fr_60px_1fr]"
            >
              {/* Before */}
              <div className="rounded-2xl border border-red-100 bg-red-50/60 p-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                  {item.topic}
                </p>
                <p className="mt-2 font-bold text-red-700">
                  {item.before.headline}
                </p>
                <p className="mt-1.5 text-sm leading-5 text-gray-500">
                  {item.before.detail}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 shadow-md md:h-10 md:w-10">
                  <ArrowRight className="h-4 w-4 text-white md:h-5 md:w-5" />
                </div>
              </div>

              {/* After */}
              <div className="rounded-2xl border border-green-100 bg-green-50/60 p-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-green-500">
                  {item.topic}
                </p>
                <p className="mt-2 font-bold text-green-700">
                  {item.after.headline}
                </p>
                <p className="mt-1.5 text-sm leading-5 text-gray-500">
                  {item.after.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
          <a
            href="/free-audit"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Start With a Free Audit
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="/services/ai-search-visibility"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-7 py-4 font-bold text-gray-700 transition hover:border-blue-400 hover:text-blue-600"
          >
            Learn About the Full Service
          </a>
        </div>
      </Container>
    </section>
  );
}
