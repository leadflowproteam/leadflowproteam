import {
  Bot,
  BrainCircuit,
  Boxes,
  Database,
  FileSearch,
  Globe2,
  Network,
  Search,
  Sparkles,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Bot,
    title: "AI Search Visibility Optimization",
    description:
      "Optimize your website for AI-powered search experiences including ChatGPT, Google AI Overviews, Gemini, Claude, Microsoft Copilot, Perplexity AI, and the next generation of conversational search engines.",
  },
  {
    icon: Boxes,
    title: "Entity SEO & Knowledge Graph Signals",
    description:
      "Build strong entity relationships, topical authority, and semantic context so AI systems clearly understand your business, services, locations, expertise, and brand identity.",
  },
  {
    icon: Database,
    title: "Knowledge Graph Optimization",
    description:
      "Strengthen machine-readable business signals that improve entity recognition, topical relevance, trust, and visibility across Google's Knowledge Graph and AI systems.",
  },
  {
    icon: FileSearch,
    title: "Structured Data & Schema Markup",
    description:
      "Implement high-quality Schema.org markup, structured entities, organization data, service schema, FAQ schema, and other structured signals that improve AI understanding.",
  },
  {
    icon: BrainCircuit,
    title: "Answer Engine Optimization (AEO)",
    description:
      "Structure pages so AI assistants can confidently extract accurate answers, summaries, and business information directly from your website.",
  },
  {
    icon: Network,
    title: "Semantic Content Framework",
    description:
      "Develop content architecture based on topics, entities, relationships, search intent, and contextual relevance instead of outdated keyword stuffing.",
  },
  {
    icon: Globe2,
    title: "AI Visibility Strategy",
    description:
      "Create a future-ready optimization strategy that combines Technical SEO, Entity SEO, Semantic SEO, and AI Search Visibility into one scalable framework.",
  },
  {
    icon: Search,
    title: "Search Ecosystem Integration",
    description:
      "Optimize your website for both traditional Google Search and emerging AI discovery platforms without sacrificing long-term organic performance.",
  },
  {
    icon: Sparkles,
    title: "Future-Proof Search Presence",
    description:
      "Prepare your business for the future of search by building a technically strong, semantically rich, AI-friendly website that remains competitive as search continues to evolve.",
  },
];
export default function AiSearchVisibilityFeatures() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="AI Search Visibility Features"
        title="Build a Website That AI Systems Can Understand, Trust & Recommend"
        description="Our AI Search Visibility framework combines Entity SEO, Technical SEO, Semantic Search Optimization, Answer Engine Optimization (AEO), structured data, and Knowledge Graph signals to help your business become discoverable across both traditional search engines and modern AI assistants."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          AI-powered search is changing how people discover businesses.
          Instead of relying only on keywords, modern search systems evaluate
          entities, relationships, structured information, topical authority,
          and semantic relevance. Our optimization framework prepares your
          website for this new search ecosystem.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              <Card.Body className="flex h-full flex-col p-8">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title className="text-2xl leading-tight">
                  {feature.title}
                </Card.Title>

                <Card.Description className="mt-5 grow leading-8 text-slate-600">
                  {feature.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            AI Search Visibility Is the Next Evolution of SEO
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Traditional SEO focuses on rankings in search results. AI Search
            Visibility goes further by helping intelligent systems understand
            your business, recognize your expertise, connect your entities, and
            confidently recommend your website when users ask complex questions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Better AI Understanding
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Strengthen entity relationships and semantic signals that help
                AI models accurately interpret your business.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Stronger Search Authority
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Build a trusted technical foundation that supports both Google
                Search and modern AI-powered search platforms.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Future-Ready Growth
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Prepare your website for the future of search with a scalable
                optimization strategy that continues delivering value as AI
                search evolves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}