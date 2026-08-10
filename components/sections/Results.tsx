import {
  Bot,
  Gauge,
  SearchCheck,
  TrendingUp,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const results = [
  {
    icon: Gauge,
    metric: "95+",
    title: "Lighthouse Performance",
    description:
      "Optimized Core Web Vitals, faster loading speed, smooth responsiveness, and exceptional user experience that supports stronger search performance.",
  },
  {
    icon: SearchCheck,
    metric: "100%",
    title: "Technical SEO Foundation",
    description:
      "Complete Technical SEO implementation including structured metadata, schema markup, crawl optimization, XML sitemap, robots.txt, and search-friendly architecture.",
  },
  {
    icon: Bot,
    metric: "AI",
    title: "AI Search Ready",
    description:
      "Engineered for Google AI Overviews, ChatGPT, Gemini, Claude, Microsoft Copilot, and future AI-powered search experiences using semantic architecture and entity optimization.",
  },
  {
    icon: TrendingUp,
    metric: "Growth",
    title: "Business Growth Focused",
    description:
      "Every website is strategically designed to generate qualified leads, improve conversions, strengthen trust, and support sustainable long-term business growth.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
  "Technical SEO",
  "Schema.org",
  "Core Web Vitals",
  "Google Search Console",
  "Google Analytics",
];

export default function Results() {
  return (
    <Section className="overflow-hidden bg-white">
      <SectionHeading
        badge="Proven Results"
        title="Engineered for Performance, Search Visibility & Long-Term Growth"
        description="Every LeadFlowProTeam website is built with measurable business outcomes in mind—combining modern web engineering, Technical SEO, AI Search Optimization, and conversion-focused architecture to help service businesses grow with confidence."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          We don't just design beautiful websites—we build high-performance
          digital platforms engineered for Google Search, AI-powered search
          experiences, faster loading speeds, stronger technical foundations,
          and sustainable business growth.
        </p>
      </div>

      {/* Result Cards */}
      <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
        {results.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl sm:p-8"
            >
              <div className="mb-6 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white sm:h-16 sm:w-16">
                <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>

              <div className="min-w-0">
                <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  {item.metric}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Technologies */}
      <div className="mt-16 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6 shadow-xl sm:mt-24 sm:rounded-[36px] sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Technologies & Best Practices
          </h3>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We use modern technologies and proven optimization strategies to
            build secure, scalable, SEO-friendly, and AI-ready business
            websites.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex min-w-0 items-center justify-center rounded-2xl border border-cyan-100 bg-white px-3 py-4 text-center text-sm font-semibold leading-5 text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-600 hover:text-white hover:shadow-lg sm:px-5 sm:py-5 sm:text-base"
            >
              <span className="break-words">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-700 to-slate-900 px-6 py-12 text-center text-white shadow-2xl sm:mt-24 sm:rounded-[40px] sm:px-10 sm:py-16">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Ready to Build a Website That
          <span className="block text-cyan-200">
            Generates More Leads?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
          Whether you need a modern business website, Technical SEO, AI Search
          Optimization, or a complete website audit, LeadFlowProTeam helps
          service businesses improve search visibility, build trust, and
          generate qualified leads with long-term sustainable growth.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href="/free-audit"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-center text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 sm:px-8 sm:text-base"
          >
            Get Free Website Audit
          </a>

          <a
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/60 px-6 py-3 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-blue-700 sm:px-8 sm:text-base"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </Section>
  );
}