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
    name: "Marketing Director",
    company: "Home Services Company",
    role: "United States",
    result: "Higher AI Search Visibility",
    quote:
      "LeadFlowProTeam completely transformed our website for the next generation of search. Entity optimization, structured data, and semantic architecture significantly improved how AI-powered search systems interpret our business. We now have a much stronger digital foundation for long-term growth.",
  },

  {
    name: "Founder",
    company: "Professional Services Firm",
    role: "Canada",
    result: "Future-Ready Website",
    quote:
      "Their AI Search Visibility strategy went far beyond traditional SEO. Every recommendation focused on improving discoverability inside AI search platforms while strengthening Google's understanding of our expertise and services.",
  },

  {
    name: "Business Owner",
    company: "Local Service Business",
    role: "United Kingdom",
    result: "Better Search Authority",
    quote:
      "Our website became faster, more structured, and significantly easier for both search engines and AI assistants to understand. The entire framework feels built for the future rather than today's search algorithms.",
  },
];
export default function AiSearchVisibilityTestimonials() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Client Success Stories"
        title="Helping Businesses Prepare for AI-Powered Search"
        description="Our AI Search Visibility framework helps businesses strengthen technical foundations, improve semantic understanding, and become more discoverable across Google Search and modern AI assistants."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          Every project is designed to create sustainable visibility by aligning
          Technical SEO, Entity SEO, structured data, and AI Search
          Optimization into one long-term growth strategy.
        </p>
      </div>

      <div className="mt-16 grid gap-8 xl:grid-cols-3">
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
                  Verified Client
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

                  <p className="text-sm text-slate-500">
                    {testimonial.company}
                  </p>

                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-cyan-600">
                    {testimonial.role}
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
            Trust Built for the Future of Search
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Businesses that invest in AI Search Visibility today are preparing
            for a future where intelligent systems increasingly influence how
            customers discover, evaluate, and trust brands. Our approach focuses
            on building technical excellence, semantic authority, and structured
            information that supports long-term digital growth.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <Sparkles className="mx-auto h-8 w-8 text-cyan-600" />
              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                AI-First Strategy
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We optimize websites for both traditional search engines and
                AI-powered assistants to maximize long-term discoverability.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <BadgeCheck className="mx-auto h-8 w-8 text-cyan-600" />
              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Proven Framework
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Our process combines Entity SEO, Technical SEO, structured data,
                semantic optimization, and Answer Engine Optimization into one
                scalable framework.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <Bot className="mx-auto h-8 w-8 text-cyan-600" />
              <h4 className="mt-4 text-lg font-semibold text-slate-900">
                Long-Term Visibility
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Our goal is not temporary rankings, but sustainable visibility
                across Google Search and the rapidly evolving AI search ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}