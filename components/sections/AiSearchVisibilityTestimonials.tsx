import {
  BadgeCheck,
  Bot,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Md. Hamidul Islam",
    company: "PhotoClippService",
    role: "Business Owner",
    location: "Sundarganj, Gaibandha, Bangladesh",
    result: "Modern AI-Ready Business Website",
    quote:
      "LeadFlowProTeam transformed our business website into a modern, high-performance platform built with Next.js. The project focused on Technical SEO, structured data, semantic architecture, and AI Search Visibility, creating a stronger digital foundation for long-term online growth.",
  },

  {
    name: "Md. Ariful Islam (Anando)",
    company: "Clipping Path Agent",
    role: "Founder",
    location: "Sundarganj, Gaibandha, Bangladesh",
    result: "Improved Technical SEO Foundation",
    quote:
      "LeadFlowProTeam modernized our website with a stronger technical SEO structure, semantic organization, and AI-friendly optimization strategy. The improvements prepared the website for both traditional search engines and modern AI-powered search experiences.",
  },
];

export default function AiSearchVisibilityTestimonials() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Project Success Stories"
        title="Real Businesses. Real Projects. Real Results."
        description="Every project is built with Technical SEO, Entity SEO, structured data, semantic architecture, and AI Search Visibility best practices to help businesses strengthen long-term digital authority."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          These featured projects demonstrate how modern websites can become
          easier for both search engines and AI systems to understand, trust,
          and recommend through a strong technical and semantic foundation.
        </p>
      </div>

      <div className="mt-16 grid gap-8 xl:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Card
            key={`${testimonial.name}-${testimonial.company}`}
            className="group h-full overflow-hidden border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
          >
            <Card.Body className="flex h-full flex-col p-8">
              <div className="flex items-center justify-between">
                <Quote className="h-10 w-10 text-cyan-600" />

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  <BadgeCheck className="h-4 w-4" />
                  Verified Project
                </span>
              </div>

              <div className="mt-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <div className="mt-5">
                <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
                  {testimonial.result}
                </span>
              </div>

              <Card.Description className="mt-6 grow text-base leading-8">
                “{testimonial.quote}”
              </Card.Description>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Bot className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm font-medium text-cyan-600">
                    {testimonial.role}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {testimonial.company}
                  </p>

                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for the Future of Search
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every LeadFlowProTeam project follows a modern optimization
            framework that combines Technical SEO, Entity SEO, structured data,
            semantic architecture, and AI Search Visibility. This creates
            websites that are easier for both search engines and AI assistants
            to understand, trust, and recommend.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <Sparkles className="mx-auto h-8 w-8 text-cyan-600" />

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                AI-Ready Foundation
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Built with semantic architecture, structured data, and Entity
                SEO to improve AI understanding.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <BadgeCheck className="mx-auto h-8 w-8 text-cyan-600" />

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Proven Technical Quality
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Every project emphasizes performance, accessibility, structured
                information, and sustainable Technical SEO.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <Bot className="mx-auto h-8 w-8 text-cyan-600" />

              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Future-Proof Search Strategy
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Optimized for both Google Search and the rapidly evolving AI
                search ecosystem including ChatGPT, Gemini, Claude, Copilot, and
                Perplexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}