import {
  Bot,
  BrainCircuit,
  Globe2,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Bot,
    title: "Visibility Beyond Traditional Search",
    description:
      "Expand your digital presence beyond Google Search by increasing your chances of being referenced across ChatGPT, Gemini, Claude, Microsoft Copilot, Perplexity AI, and emerging AI-powered search platforms.",
  },
  {
    icon: BrainCircuit,
    title: "Better AI Understanding",
    description:
      "Help Large Language Models accurately interpret your business through semantic content, structured entities, contextual relationships, and machine-readable information.",
  },
  {
    icon: Search,
    title: "Stronger Organic Search Foundation",
    description:
      "Combine Technical SEO, Entity SEO, and AI Search Optimization into one integrated strategy that strengthens both traditional rankings and conversational search visibility.",
  },
  {
    icon: Network,
    title: "Higher Entity Authority",
    description:
      "Develop consistent entity signals that improve topical authority, trust, knowledge graph relevance, and semantic relationships across your entire website.",
  },
  {
    icon: Target,
    title: "Higher Quality Business Leads",
    description:
      "Reach users asking detailed, intent-driven questions where AI assistants recommend trustworthy businesses instead of simply listing search results.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Competitive Advantage",
    description:
      "Position your business ahead of competitors by adopting AI Search Visibility strategies before they become standard across your industry.",
  },
  {
    icon: Globe2,
    title: "Future-Proof Digital Presence",
    description:
      "Prepare your website for the future of search by building an optimization framework that evolves alongside AI-powered discovery platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Greater Trust & Credibility",
    description:
      "Strengthen machine trust through structured data, entity consistency, technical excellence, and reliable business information that AI systems can confidently reference.",
  },
  {
    icon: Sparkles,
    title: "Sustainable Growth Strategy",
    description:
      "Create a scalable search ecosystem that supports long-term visibility, stronger brand authority, and continuous business growth across both search engines and AI assistants.",
  },
];
export default function AiSearchVisibilityBenefits() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Business Benefits"
        title="Why AI Search Visibility Is Becoming Essential for Modern Businesses"
        description="AI-powered search is transforming how customers discover, evaluate, and trust businesses. Our AI Search Visibility framework helps your website become understandable, trustworthy, and recommendable across both traditional search engines and modern AI platforms."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          Modern AI assistants no longer rely only on keywords. They evaluate
          entities, semantic relationships, structured data, topical authority,
          and technical trust signals before recommending businesses. Investing
          in AI Search Visibility today creates a competitive advantage for the
          future of search.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <Card
              key={benefit.title}
              className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              <Card.Body className="flex h-full flex-col p-8">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title className="text-2xl leading-tight">
                  {benefit.title}
                </Card.Title>

                <Card.Description className="mt-5 grow leading-8 text-slate-600">
                  {benefit.description}
                </Card.Description>
                              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            AI Search Visibility Creates Business Opportunities—Not Just Rankings
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Search is evolving from keyword matching to intelligent recommendation.
            Businesses that invest in semantic optimization, entity authority,
            structured data, and AI-ready content today will be better positioned
            to earn visibility, trust, and qualified leads as AI-powered search
            becomes the new standard.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Stronger Brand Recognition
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Consistent entity signals help AI systems recognize your business
                as a trusted source within your industry.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Better Recommendation Potential
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                AI assistants are more likely to recommend businesses with
                structured, trustworthy, and semantically rich websites.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Sustainable Business Growth
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                A future-ready optimization strategy supports long-term
                discoverability across both traditional search engines and the
                rapidly growing AI search ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}