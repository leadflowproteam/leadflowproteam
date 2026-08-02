import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Globe,
  SearchCheck,
  Sparkles,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const portfolio = [
  {
    title: "LeadFlowProTeam",
    category: "AI Search Visibility",
    icon: BrainCircuit,
    description:
      "A Next.js agency website engineered for AI Search Visibility using Entity SEO, Technical SEO, structured data, semantic architecture, and Answer Engine Optimization (AEO).",
    highlights: [
      "Entity SEO",
      "Schema.org",
      "AI Search Ready",
      "Core Web Vitals",
    ],
    result:
      "Built as a future-ready website optimized for Google Search, ChatGPT, Gemini, Claude, Perplexity, and other AI-powered search experiences.",
  },

  {
    title: "PhotoClippService",
    category: "Service Website",
    icon: Globe,
    description:
      "Professional image editing website optimized with semantic structure, service entities, responsive architecture, and AI-friendly technical foundations.",
    highlights: [
      "Semantic SEO",
      "Technical SEO",
      "Mobile Performance",
      "Structured Content",
    ],
    result:
      "Created a stronger technical foundation that supports long-term organic visibility and AI understanding.",
  },

  {
    title: "Clipping Path Agent",
    category: "SEO Modernization",
    icon: SearchCheck,
    description:
      "Legacy service website modernized with improved crawlability, structured metadata, entity consistency, and AI-readable content organization.",
    highlights: [
      "Metadata",
      "Internal Linking",
      "Entity Signals",
      "Search Visibility",
    ],
    result:
      "Improved machine readability and established stronger semantic relevance for modern AI search systems.",
  },
];
export default function AiSearchVisibilityPortfolio() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Portfolio"
        title="AI Search Visibility Projects & Experience"
        description="Every project is built with AI Search Optimization, Entity SEO, Technical SEO, semantic architecture, and structured data to improve discoverability across both traditional search engines and AI-powered search assistants."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          Our portfolio demonstrates how modern websites can become easier for
          both people and intelligent systems to understand, trust, and
          recommend.
        </p>
      </div>

      <div className="mt-16 grid gap-8 xl:grid-cols-3">
        {portfolio.map((project) => {
          const Icon = project.icon;

          return (
            <Card
              key={project.title}
              className="group h-full overflow-hidden border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              <Card.Body className="flex h-full flex-col p-8">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
                    {project.category}
                  </span>
                </div>

                <Card.Title className="mt-8 text-2xl">
                  {project.title}
                </Card.Title>

                <Card.Description className="mt-4 grow leading-7">
                  {project.description}
                </Card.Description>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />

                    <p className="text-sm leading-7 text-slate-600">
                      {project.result}
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
            <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for the Future of Search
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every project we build follows a modern search strategy that combines
            Technical SEO, Entity SEO, structured data, semantic architecture,
            and AI Search Visibility principles. This creates websites that are
            easier for Google, ChatGPT, Gemini, Claude, Copilot, Perplexity, and
            future AI systems to understand and recommend.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                AI-Ready Architecture
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Every project starts with a scalable information architecture
                designed for semantic understanding and long-term discoverability.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Business-Focused SEO
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                We optimize for qualified visibility, authority, and sustainable
                organic growth—not vanity rankings or short-term tactics.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Future-Proof Strategy
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Our implementation aligns with both today's search engines and
                tomorrow's AI-powered discovery platforms.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/portfolio">
              <Button size="lg">
                Explore Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}