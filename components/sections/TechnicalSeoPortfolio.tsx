import Link from "next/link";
import {
  ArrowRight,
 BadgeCheck,
  CheckCircle2,
  Gauge,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  "Technical SEO Audit",
  "Core Web Vitals Optimization",
  "Schema.org Structured Data",
  "Entity SEO Implementation",
  "AI Search Visibility",
  "Crawlability Optimization",
  "Indexability Improvements",
  "XML Sitemap & Robots.txt",
  "Internal Linking Strategy",
  "Semantic SEO Architecture",
] as const;

const project = {
  badge: "Featured Technical SEO Case Study",

  title: "PhotoClippService",

  subtitle: "Professional Image Editing Company",

  description:
    "PhotoClippService was strategically optimized using our complete Technical SEO Framework. The project focused on improving crawlability, indexability, Core Web Vitals, structured data, semantic architecture, Entity SEO, and AI Search Visibility. The result is a faster, cleaner, and future-ready website that performs better for both traditional search engines and modern AI-powered search platforms.",

  outcome:
    "Today the website has a significantly stronger technical foundation that supports Google Search, Google AI Overviews, ChatGPT, Gemini, Claude, Microsoft Copilot, Perplexity AI, and future AI search systems.",

  metrics: [
    {
      value: "Technical",
      label: "SEO Foundation",
    },
    {
      value: "AI",
      label: "Search Ready",
    },
    {
      value: "Future",
      label: "Optimized",
    },
  ],

  features: [
    {
      icon: Gauge,
      title: "Core Web Vitals Optimization",
      description:
        "Improved loading performance, responsiveness, and user experience through advanced performance optimization.",
    },
    {
      icon: Search,
      title: "Search Engine Crawlability",
      description:
        "Enhanced crawl efficiency, indexing quality, metadata, XML sitemap, robots.txt, and internal architecture.",
    },
    {
      icon: ShieldCheck,
      title: "AI Search Visibility",
      description:
        "Implemented structured data, semantic relationships, and Entity SEO to improve machine understanding across modern AI search platforms.",
    },
  ],
};
export default function TechnicalSeoPortfolio() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          badge="Technical SEO Portfolio"
          title="Real Technical SEO Projects Built for Search & AI Visibility"
          description="Explore how our Technical SEO Framework strengthens website performance, search visibility, semantic understanding, and AI Search Readiness through measurable technical improvements."
        />

        <div className="mt-16 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 lg:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                <BadgeCheck className="h-4 w-4" />
                {project.badge}
              </span>

              <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
                {project.title}
              </h3>

              <p className="mt-2 text-lg font-medium text-cyan-700">
                {project.subtitle}
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-2 text-sm font-medium text-cyan-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50/40 p-6">
                <div className="flex gap-3">
                  <Sparkles className="mt-1 h-6 w-6 shrink-0 text-cyan-600" />

                  <p className="leading-8 text-slate-600">
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-cyan-100 bg-white p-5 text-center shadow-sm"
                  >
                    <p className="text-2xl font-bold text-cyan-700">
                      {metric.value}
                    </p>

                    <p className="mt-2 text-sm text-slate-600">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
                        {/* Right Content */}
            <div className="flex items-center bg-gradient-to-br from-slate-50 via-white to-cyan-50 p-8 lg:p-12">
              <div className="grid w-full gap-6">
                {project.features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                          <Icon className="h-7 w-7" />
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-slate-900">
                            {feature.title}
                          </h4>

                          <p className="mt-3 leading-7 text-slate-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-600 to-blue-600 p-8 text-white shadow-lg">
                  <h4 className="text-2xl font-bold">
                    Technical SEO That Supports AI Search
                  </h4>

                  <p className="mt-4 leading-8 text-cyan-50">
                    Technical SEO is no longer only about Google rankings.
                    Modern AI systems also depend on clean architecture,
                    structured data, semantic relationships, and strong
                    technical foundations to understand and recommend your
                    business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Technical SEO + AI Search Visibility
            </span>

            <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Strong Technical Foundation Powers Every SEO Strategy
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Technical SEO is no longer just about fixing website errors.
              Today, it serves as the foundation for Entity SEO, Semantic SEO,
              AI Search Visibility, and long-term organic growth.
              A technically optimized website enables Google Search,
              Google AI Overviews, ChatGPT, Gemini, Claude, Microsoft Copilot,
              Perplexity AI, and future AI-powered search systems to efficiently
              crawl, understand, trust, and recommend your business.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
                <Gauge className="mx-auto h-8 w-8 text-cyan-600" />

                <h4 className="mt-4 text-lg font-semibold text-slate-900">
                  Faster Performance
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Improve Core Web Vitals, loading speed, responsiveness,
                  and overall website performance for both users and search engines.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
                <Search className="mx-auto h-8 w-8 text-cyan-600" />

                <h4 className="mt-4 text-lg font-semibold text-slate-900">
                  Better Search Visibility
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Help search engines and AI systems crawl, index,
                  and interpret your website more accurately through
                  strong technical architecture.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
                <ShieldCheck className="mx-auto h-8 w-8 text-cyan-600" />

                <h4 className="mt-4 text-lg font-semibold text-slate-900">
                  Future-Ready SEO
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Build a scalable SEO foundation that supports
                  Technical SEO, Entity SEO, AI Search Optimization,
                  and sustainable long-term business growth.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/free-audit">
                <Button size="lg">
                  Get Your Free Technical SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Talk With a Technical SEO Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>      
        </Container>
    </section>
  );
}        