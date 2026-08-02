import {
  Quote,
  Star,
  TrendingUp,
  Gauge,
  SearchCheck,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "Home Services Company",
    location: "Texas, USA",
    quote:
      "LeadFlowProTeam uncovered technical SEO issues our previous agency completely missed. After implementing the recommendations, our website became noticeably faster, easier to crawl, and significantly healthier from a technical SEO perspective.",
    result: "Improved website health & stronger search foundation",
  },
  {
    name: "David Thompson",
    company: "Healthcare Practice",
    location: "Florida, USA",
    quote:
      "The audit report was incredibly detailed yet easy to understand. Every recommendation was prioritized, practical, and focused on long-term growth rather than temporary SEO tricks.",
    result: "Clear implementation roadmap with measurable priorities",
  },
  {
    name: "Jennifer Wilson",
    company: "Professional Services Firm",
    location: "California, USA",
    quote:
      "Our Core Web Vitals, indexing issues, and structured data problems were resolved through a systematic process. The improvements gave us confidence that our website is ready for both Google Search and AI-powered search experiences.",
    result: "Better performance, indexing & AI Search readiness",
  },
];

const stats = [
  {
    icon: Gauge,
    value: "90+",
    label: "Technical SEO Checkpoints",
  },
  {
    icon: SearchCheck,
    value: "100%",
    label: "Critical Issues Prioritized",
  },
  {
    icon: TrendingUp,
    value: "Future Ready",
    label: "AI Search Optimized",
  },
] as const;

export default function TechnicalSeoTestimonials() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="Client Success Stories"
        title="Trusted by Businesses That Need Strong Technical SEO Foundations"
        description="Our Technical SEO framework improves website performance, crawlability, indexing, structured data, Core Web Vitals, and AI Search Visibility—creating a stronger technical foundation for long-term organic growth."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
          >
            <Quote className="h-10 w-10 text-blue-600" />

            <div className="mt-6 flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            <p className="mt-6 grow leading-8 text-gray-600">
              "{item.quote}"
            </p>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-linear-to-r from-blue-50 to-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
  Business Impact
</p>

              <p className="mt-3 text-base font-semibold leading-7 text-gray-900">
  {item.result}
</p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-gray-900">
                {item.name}
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                {item.company}
              </p>

              <p className="text-sm text-blue-600">
                {item.location}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-[32px] border border-blue-100 bg-white p-8 shadow-sm lg:p-12">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
  key={stat.label}
  className="rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon className="h-8 w-8" />
                </div>

                <div className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900">
                  {stat.value}
                </div>

                <p className="mt-3 text-sm font-medium leading-6 text-gray-600">
  {stat.label}
</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}