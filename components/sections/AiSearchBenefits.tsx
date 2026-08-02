import {
  BadgeCheck,
  Bot,
  Brain,
  Globe,
  SearchCheck,
  TrendingUp,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Bot,
    title: "Become Visible in AI Search",
    description:
      "Increase your chances of appearing in AI-generated answers across ChatGPT, Google AI Overviews, Gemini, Claude, Perplexity, and other AI-powered search experiences.",
  },
  {
    icon: Brain,
    title: "Help AI Understand Your Business",
    description:
      "Structured data, semantic content, and Entity SEO make it easier for AI systems to accurately understand your services, expertise, and brand.",
  },
  {
    icon: SearchCheck,
    title: "Strengthen Traditional SEO",
    description:
      "AI Search Optimization enhances—not replaces—Technical SEO, creating a stronger foundation for Google Search and future search technologies.",
  },
  {
    icon: TrendingUp,
    title: "Generate Higher Quality Leads",
    description:
      "Reach users who ask conversational questions and receive AI-generated recommendations, increasing qualified organic traffic and business inquiries.",
  },
  {
    icon: BadgeCheck,
    title: "Build Long-Term Brand Authority",
    description:
      "Entity optimization, consistent content structure, and authoritative signals help establish your business as a trusted source across the web.",
  },
  {
    icon: Globe,
    title: "Future-Proof Your Online Presence",
    description:
      "Prepare your website for the continuing evolution of search, ensuring your business remains discoverable as AI becomes the primary way people find information.",
  },
];

export default function AiSearchBenefits() {
  return (
    <Section className="bg-white py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Business Benefits"
        title="Why AI Search Visibility Is Becoming Essential"
        description="AI-powered search is changing how customers discover businesses. Optimizing today helps your website remain competitive across both traditional search engines and the next generation of AI assistants."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3 lg:mt-16">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold leading-tight text-gray-900">
                {benefit.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary */}

      <div className="mt-24 rounded-[36px] border border-blue-100 bg-blue-50 p-10">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-gray-900">
            AI Search Optimization Is the Next Evolution of SEO
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Traditional SEO helps people find your website through search
            engines. AI Search Visibility helps intelligent assistants
            understand, recommend, and reference your business within
            AI-generated answers. Combining both strategies gives your business
            a stronger competitive advantage today while preparing for the
            future of search.
          </p>
        </div>
      </div>
    </Section>
  );
}