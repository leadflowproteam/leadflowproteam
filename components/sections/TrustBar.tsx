import {
  Bot,
  Gauge,
  SearchCheck,
  TrendingUp,
} from "lucide-react";

import Section from "@/components/ui/Section";

const items = [
  {
    icon: Gauge,
    title: "High-Performance Architecture",
    description:
      "Built with Next.js, optimized Core Web Vitals, modern coding standards, and lightning-fast performance to improve user experience, rankings, and long-term scalability.",
  },

  {
    icon: SearchCheck,
    title: "Technical SEO Foundation",
    description:
      "Every website includes clean architecture, crawlability improvements, structured metadata, XML sitemaps, schema markup, and technical SEO best practices from day one.",
  },

  {
    icon: Bot,
    title: "AI Search Visibility Ready",
    description:
      "Optimized for Google AI Overviews, ChatGPT, Gemini, Claude, Microsoft Copilot, Perplexity, and the next generation of AI-powered search experiences.",
  },

  {
    icon: TrendingUp,
    title: "Conversion-Focused Growth",
    description:
      "Every page is strategically designed to increase trust, improve engagement, and convert qualified visitors into valuable business enquiries.",
  },
];

export default function TrustBar() {
  return (
  <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
    <div className="mx-auto mb-14 max-w-4xl text-center">
      <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
        Why Businesses Choose LeadFlowProTeam
      </span>

      <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Built for Performance, Search Visibility & Long-Term Growth
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Every website we build combines modern development, Technical SEO,
        AI Search Optimization, and conversion-focused architecture to help
        businesses rank higher, load faster, and generate more qualified leads.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-300
              hover:shadow-2xl
            "
          >
            <div
              className="
                mb-6
                inline-flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-cyan-50
                text-cyan-700
                transition-all
                duration-300
                group-hover:bg-cyan-600
                group-hover:text-white
              "
            >
              <Icon className="h-8 w-8" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
    <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
  <div className="mx-auto max-w-5xl text-center">
    <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      A Future-Ready Foundation for Modern Search
    </h3>

    <p className="mt-6 text-lg leading-8 text-slate-600">
      Today, search visibility depends on more than keywords. Modern search
      engines and AI assistants evaluate website performance, technical
      architecture, semantic understanding, structured data, and trust signals
      before recommending businesses. Every LeadFlowProTeam website is built
      with these principles from the beginning.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-slate-900">
          Technical Excellence
        </h4>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Modern architecture, Core Web Vitals optimization, clean code,
          crawlability, indexing, and structured SEO implementation.
        </p>
      </div>

      <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-slate-900">
          AI Search Visibility
        </h4>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Entity SEO, semantic optimization, structured data, and
          Answer Engine Optimization designed for modern AI-powered search.
        </p>
      </div>

      <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-slate-900">
          Business Growth
        </h4>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Every website is strategically engineered to increase trust,
          improve discoverability, generate qualified leads, and support
          sustainable long-term business growth.
        </p>
      </div>
    </div>
  </div>
</div>
  </Section>
);
}