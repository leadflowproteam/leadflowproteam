import Link from "next/link";

import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Globe2,
  SearchCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
const trustBadges = [
  "Entity SEO",
  "Answer Engine Optimization",
  "AI Search Visibility",
  "Structured Data",
];

const platforms = [
  "ChatGPT",
  "Google AI Overviews",
  "Gemini",
  "Claude",
  "Perplexity",
  "Copilot",
];

const highlights = [
  {
    icon: BrainCircuit,
    title: "Entity SEO",
    description:
      "Strengthen entity recognition so AI systems clearly understand your business.",
  },
  {
    icon: SearchCheck,
    title: "Answer Engine Optimization",
    description:
      "Optimize content to appear inside AI-generated answers instead of only traditional search results.",
  },
  {
    icon: Zap,
    title: "Technical AI Readiness",
    description:
      "Improve structured data, semantic architecture, and crawl efficiency for modern AI search.",
  },
  {
    icon: Globe2,
    title: "Future Search Visibility",
    description:
      "Build a website prepared for both search engines and Large Language Models.",
  },
];

const metrics = [
  {
    value: "100%",
    label: "AI Search Ready Architecture",
  },
  {
    value: "EEAT",
    label: "Content Framework",
  },
  {
    value: "Schema",
    label: "Structured Data",
  },
  {
    value: "Next.js",
    label: "Performance Optimized",
  },
];
export default function AiSearchVisibilityHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.14),transparent_45%)]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <Sparkles className="h-4 w-4" />
              AI Search Visibility Services
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Get Found in Google, ChatGPT, Gemini & AI Search
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                AI Search Visibility for the Next Generation of Search
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Traditional SEO alone is no longer enough. We optimize your website
              for AI-powered search experiences by strengthening entity signals,
              structured data, semantic relevance, technical architecture, and
              Answer Engine Optimization (AEO), helping platforms like ChatGPT,
              Google AI Overviews, Gemini, Claude, and Perplexity understand,
              trust, and recommend your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/free-audit">
                <Button
                  size="lg"
                  className="bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                >
                  Get Free AI Visibility Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-white hover:bg-white/10"
                >
                  Book Strategy Call
                </Button>
              </Link>
            </div>

            <div className="mt-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Optimized For
              </p>

              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="space-y-6">

              <div className="rounded-2xl bg-slate-900/60 p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-500/20 p-4">
                    <Bot className="h-8 w-8 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      AI Search Ready
                    </h3>

                    <p className="mt-2 text-slate-400">
                      Entity SEO • AEO • Semantic Optimization
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900/60 p-6">
                <h3 className="text-lg font-semibold">
                  What We Optimize
                </h3>

                <ul className="mt-5 space-y-3 text-slate-300">
                  <li>✓ Entity Relationships</li>
                  <li>✓ Structured Data & Schema</li>
                  <li>✓ Knowledge Graph Signals</li>
                  <li>✓ AI Crawlability</li>
                  <li>✓ Semantic Content Structure</li>
                  <li>✓ Technical SEO Foundation</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5 text-center">
                  <div className="text-3xl font-bold text-cyan-300">
                    2026+
                  </div>

                  <p className="mt-2 text-sm text-slate-300">
                    AI Search Era
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 text-center">
                  <div className="text-3xl font-bold text-blue-300">
                    Future
                  </div>

                  <p className="mt-2 text-sm text-slate-300">
                    Search Ready
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
          