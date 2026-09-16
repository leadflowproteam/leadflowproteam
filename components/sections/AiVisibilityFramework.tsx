import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  Database,
  Globe2,
  Layers,
  MapPin,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import Container from "@/components/ui/Container";

/* ──────────────────────────────────────────────
   AI Engines we audit against
────────────────────────────────────────────── */
const aiEngines = [
  {
    name: "ChatGPT",
    icon: Bot,
    color: "from-emerald-500 to-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    detail: "Largest B2B user base. Tests LLM knowledge + live retrieval.",
  },
  {
    name: "Google Gemini",
    icon: Sparkles,
    color: "from-blue-500 to-indigo-600",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    detail: "Powers AI Overviews in Google Search. Critical for organic visibility.",
  },
  {
    name: "Perplexity",
    icon: Search,
    color: "from-violet-500 to-violet-600",
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    detail: "Fastest-growing B2B research tool. Real-time retrieval (RAG).",
  },
  {
    name: "Microsoft Copilot",
    icon: Network,
    color: "from-sky-500 to-blue-600",
    badge: "bg-sky-50 text-sky-700 border-sky-200",
    detail: "Enterprise-first. Powered by Bing + GPT-4 for workplace queries.",
  },
  {
    name: "Claude",
    icon: Brain,
    color: "from-amber-500 to-orange-500",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    detail: "Growing B2B adoption. Long-context reasoning for complex queries.",
  },
];

/* ──────────────────────────────────────────────
   The 5 core audit questions
────────────────────────────────────────────── */
const coreQuestions = [
  {
    number: "01",
    icon: Globe2,
    title: "Existence",
    question: "Do AI systems know your business exists?",
    detail: "We test whether your business is in the training data and retrieval context of major AI engines — and identify where it's missing entirely.",
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-200 hover:border-blue-400",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Accuracy",
    question: "Is the AI's information about you correct?",
    detail: "We verify whether AI systems represent your business name, services, location, and offerings accurately — and flag any hallucinations or outdated data.",
    color: "bg-violet-50 text-violet-600",
    border: "border-violet-200 hover:border-violet-400",
  },
  {
    number: "03",
    icon: Layers,
    title: "Completeness",
    question: "Is your full offering represented?",
    detail: "We check whether AI systems understand all your services, target markets, and differentiators — not just a narrow or incomplete picture.",
    color: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-200 hover:border-emerald-400",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Competitive Position",
    question: "Are you recommended when compared to rivals?",
    detail: "We test B2B buyer comparison queries to see whether AI recommends you, ignores you, or actively recommends a competitor instead.",
    color: "bg-amber-50 text-amber-700",
    border: "border-amber-200 hover:border-amber-400",
  },
  {
    number: "05",
    icon: Zap,
    title: "Action Triggers",
    question: "Are you surfaced when buyers are ready to decide?",
    detail: "We test high-intent buyer queries — the ones that precede a purchasing decision — to ensure AI surfaces your business at the right moment.",
    color: "bg-rose-50 text-rose-600",
    border: "border-rose-200 hover:border-rose-400",
  },
];

/* ──────────────────────────────────────────────
   B2B-specific signals we check
────────────────────────────────────────────── */
const b2bSignals = [
  { icon: Building2, label: "Organization Schema Markup" },
  { icon: Network,   label: "LinkedIn Company Page Signals" },
  { icon: Star,      label: "G2 / Capterra / Clutch Reviews" },
  { icon: BookOpen,  label: "Case Study Indexing & Discovery" },
  { icon: Database,  label: "Industry Directory Listings" },
  { icon: Globe2,    label: "Press Mentions & Editorial Citations" },
  { icon: MapPin,    label: "NAP Consistency Across Sources" },
  { icon: Brain,     label: "Founder / Leadership Entity Signals" },
];

/* ──────────────────────────────────────────────
   Component
────────────────────────────────────────────── */
export default function AiVisibilityFramework() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        {/* ── Section Heading ── */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge">
            <Sparkles className="h-3.5 w-3.5" />
            AI Visibility Framework
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            The Framework We Use to Audit
            <span className="text-gradient-brand"> AI Visibility</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We don&apos;t run a generic checklist. Our structured methodology answers five fundamental questions about how your business is understood and recommended by the AI systems your buyers use every day.
          </p>
        </div>

        {/* ── 5 Core Questions ── */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {coreQuestions.map((q) => {
            const Icon = q.icon;
            return (
              <div
                key={q.number}
                className={`card group rounded-3xl border p-7 transition-all duration-300 ${q.border}`}
              >
                <div className="flex items-start justify-between">
                  <div className={`rounded-xl p-3 ${q.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-black text-gray-100 tabular-nums">
                    {q.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {q.title}
                </h3>

                <p className="mt-1 text-sm font-semibold italic text-gray-500">
                  &ldquo;{q.question}&rdquo;
                </p>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {q.detail}
                </p>
              </div>
            );
          })}

          {/* CTA card in the 6th slot */}
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-200 bg-blue-50/40 p-7 text-center">
            <div className="rounded-2xl bg-blue-600 p-4">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </div>
            <p className="mt-4 text-lg font-bold text-gray-900">
              Get Your Answers
            </p>
            <p className="mt-2 text-sm text-gray-600">
              We audit all five questions for your business and deliver a clear, prioritized report.
            </p>
            <Link
              href="/free-audit"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Request Free Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* ── AI Engines We Audit Against ── */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Tested Across
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              5 Major AI Engines
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              We don&apos;t just test one platform. We audit how your business appears across every major AI engine your B2B buyers are actually using.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {aiEngines.map((engine) => {
              const Icon = engine.icon;
              return (
                <div
                  key={engine.name}
                  className="group flex flex-col items-center rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gray-300 hover:shadow-xl"
                >
                  <div className={`rounded-2xl bg-gradient-to-br p-4 ${engine.color}`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h4 className="mt-4 text-base font-bold text-gray-900">
                    {engine.name}
                  </h4>

                  <span className={`mt-2 rounded-full border px-3 py-0.5 text-xs font-semibold ${engine.badge}`}>
                    Audited
                  </span>

                  <p className="mt-3 text-xs leading-5 text-gray-500">
                    {engine.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── B2B-Specific Signals ── */}
        <div className="mt-24">
          <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 p-8 shadow-2xl sm:p-12 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              {/* Left */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-100">
                  <Building2 className="h-3.5 w-3.5" />
                  B2B-Specific Audit Signals
                </span>

                <h3 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Beyond the Website.<br />
                  <span className="text-blue-300">The Full B2B Signal Ecosystem.</span>
                </h3>

                <p className="mt-5 text-base leading-7 text-blue-100">
                  B2B buyers and the AI tools they use draw on dozens of signals beyond your website. We audit the full information ecosystem that determines whether your company is trusted, found, and recommended.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/free-audit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    Audit My B2B Signals
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services/ai-search-visibility"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
                  >
                    How It Works
                  </Link>
                </div>
              </div>

              {/* Right — Signal Grid */}
              <div className="grid grid-cols-2 gap-3">
                {b2bSignals.map((sig) => {
                  const Icon = sig.icon;
                  return (
                    <div
                      key={sig.label}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-sm transition hover:bg-white/10"
                    >
                      <div className="rounded-lg bg-blue-500/20 p-2">
                        <Icon className="h-4 w-4 text-blue-300" />
                      </div>
                      <span className="text-xs font-semibold text-blue-100">
                        {sig.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Decision CTA ── */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            Ready to find your gaps?
          </p>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
            Start With a Free AI Visibility Audit
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-base text-gray-600">
            We apply this full framework to your business, then deliver clear findings and prioritized recommendations — not a generic score report.
          </p>
          <Link
            href="/free-audit"
            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Get Your Free Audit
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
