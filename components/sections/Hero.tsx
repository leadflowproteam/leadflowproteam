import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const visibilitySignals = [
  { icon: Search,       label: "Search Visibility",    value: "Discoverable", color: "bg-blue-50 text-blue-600" },
  { icon: Bot,          label: "AI Representation",    value: "Tested",       color: "bg-violet-50 text-violet-600" },
  { icon: ShieldCheck,  label: "Business Information", value: "Verified",     color: "bg-emerald-50 text-emerald-600" },
  { icon: CheckCircle2, label: "Opportunity Gaps",     value: "Identified",   color: "bg-amber-50 text-amber-600" },
];

const aiEngineLogos = ["ChatGPT", "Gemini", "Perplexity", "Copilot", "Claude"];

const trustStats = [
  { icon: Users,     value: "50+",  label: "B2B clients audited" },
  { icon: Zap,       value: "48h",  label: "Avg. delivery time" },
  { icon: TrendingUp,value: "3x",   label: "Avg. visibility gain" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero py-24 lg:py-32">
      {/* ── Decorative background orbs ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-blue-100/60 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-100/50 blur-[100px]" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ───── LEFT COLUMN ───── */}
          <div className="animate-fade-up">

            {/* Badge */}
            <span className="badge">
              <Sparkles className="h-3.5 w-3.5" />
              AI Search Visibility
            </span>

            {/* Headline */}
            <h1 className="mt-6 text-5xl font-black leading-[1.1] tracking-tight text-gray-900 sm:text-6xl xl:text-7xl">
              See How AI Sees
              <span className="block text-gradient-brand mt-1">
                Your Business.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              We audit how your business is represented across modern search, local data sources, and AI answer engines like ChatGPT, Gemini, and Perplexity. Find what&apos;s missing, inconsistent, or limiting your visibility — and get a practical roadmap to fix it.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/free-audit">
                <Button size="lg" className="shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40">
                  Get Your Free AI Audit
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/services/ai-visibility-framework">
                <Button variant="outline" size="lg">
                  See Our Framework
                </Button>
              </Link>
            </div>

            {/* Secondary link */}
            <div className="mt-5">
              <Link
                href="/services/ai-search-visibility"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800 hover:gap-3"
              >
                Explore AI Search Visibility Service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust stats row */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {trustStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm text-center">
                    <Icon className="mx-auto h-5 w-5 text-blue-600" />
                    <p className="mt-2 text-2xl font-black text-gray-900">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* AI engines audited */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Tested across AI engines including
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {aiEngineLogos.map((engine) => (
                  <span
                    key={engine}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm"
                  >
                    {engine}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ───── RIGHT COLUMN — Dashboard Mockup ───── */}
          <div className="relative animate-fade-up animation-delay-200">

            {/* Main Card */}
            <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-2xl animate-float">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-3 flex-1 rounded-lg bg-white px-4 py-1.5 text-xs text-gray-400 border border-gray-100">
                  leadflowproteam.com/ai-audit
                </div>
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                {/* Audit header card */}
                <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/15 p-3">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-100">
                        AI Search Visibility
                      </p>
                      <h2 className="mt-0.5 text-xl font-black">
                        Visibility Audit Report
                      </h2>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-blue-100">
                    Audited across ChatGPT · Gemini · Perplexity · Copilot · Claude
                  </p>
                </div>

                {/* Visibility signal cards */}
                <div className="grid grid-cols-2 gap-3">
                  {visibilitySignals.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                      >
                        <div className={`inline-flex rounded-lg p-2 ${item.color}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="mt-3 text-xs font-medium text-gray-500">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-bold text-gray-900">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Finding highlight */}
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-white p-2 shadow-sm">
                      <Sparkles className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                        Audit Output
                      </p>
                      <p className="mt-1 font-bold text-gray-900">
                        Gaps & Opportunities Identified
                      </p>
                      <p className="mt-1 text-xs leading-5 text-gray-600">
                        Clear findings and practical recommendations — not generic scores.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs font-semibold text-gray-700">
                      Overall Visibility Assessment
                    </p>
                    <p className="text-xs font-bold text-blue-600">Evidence First</p>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge — AI Tested */}
            <div className="card-glass absolute -left-8 top-12 hidden rounded-2xl p-4 lg:block animate-float animation-delay-200">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-2.5">
                  <Bot className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    AI Systems
                  </p>
                  <p className="text-sm font-black text-gray-900">5 Engines Tested</p>
                </div>
              </div>
            </div>

            {/* Floating badge — Findings */}
            <div className="card-glass absolute -right-8 bottom-16 hidden rounded-2xl p-4 lg:block animate-float animation-delay-400">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Audit Finding
              </p>
              <p className="mt-1 text-2xl font-black text-blue-600">+3 Gaps</p>
              <p className="text-xs text-gray-500">Opportunities ready for action</p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}