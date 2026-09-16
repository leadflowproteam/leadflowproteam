import {
  AlertCircle,
  ArrowRight,
  Bot,
  CheckCircle2,
  Globe2,
  Info,
  Link2,
  MapPin,
  Network,
  Rss,
  Search,
  Server,
  Sparkles,
  Star,
} from "lucide-react";
import Container from "@/components/ui/Container";

/* ──────────────────────────────────────────────
   Knowledge Sources AI uses
────────────────────────────────────────────── */
const knowledgeSources = [
  {
    icon: Bot,
    title: "LLM Training Data",
    description:
      "Pre-trained knowledge absorbed from billions of web pages, books, and public data. Your business may (or may not) be in this snapshot.",
    tag: "Static",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    iconColor: "bg-amber-100 text-amber-600",
  },
  {
    icon: Rss,
    title: "Real-Time Retrieval (RAG)",
    description:
      "Modern AI tools like Perplexity and Gemini retrieve live content from the web to supplement their training knowledge with up-to-date information.",
    tag: "Live",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconColor: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Server,
    title: "Structured Data / Schema",
    description:
      "JSON-LD schema markup tells AI systems exactly who you are, what you do, your prices, reviews, and more — in a machine-readable format.",
    tag: "Declarative",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    icon: Link2,
    title: "Citation Networks",
    description:
      "AI systems learn to trust businesses that are cited, mentioned, or linked by other authoritative sources — press, directories, and industry publications.",
    tag: "Authority",
    tagColor: "bg-violet-50 text-violet-700 border-violet-200",
    iconColor: "bg-violet-100 text-violet-600",
  },
  {
    icon: MapPin,
    title: "Business Listings & NAP",
    description:
      "Google Business Profile, Bing Places, and directory listings feed consistent Name, Address, Phone (NAP) data that AI uses to verify your identity.",
    tag: "Signals",
    tagColor: "bg-rose-50 text-rose-700 border-rose-200",
    iconColor: "bg-rose-100 text-rose-600",
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    description:
      "AggregateRating schema and review platforms (G2, Capterra, Google) provide trust signals that influence AI recommendations and buyer-comparison answers.",
    tag: "Trust",
    tagColor: "bg-sky-50 text-sky-700 border-sky-200",
    iconColor: "bg-sky-100 text-sky-600",
  },
  {
    icon: Network,
    title: "Knowledge Graph Entities",
    description:
      "Google's Knowledge Graph and Wikidata store entity information about companies. Being a recognized entity boosts your AI representation significantly.",
    tag: "Entity",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    iconColor: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Globe2,
    title: "Website Content Quality",
    description:
      "The language, structure, depth, and topical authority of your web pages directly determines how well AI understands and summarizes your business.",
    tag: "Content",
    tagColor: "bg-teal-50 text-teal-700 border-teal-200",
    iconColor: "bg-teal-100 text-teal-600",
  },
];

/* ──────────────────────────────────────────────
   Status indicators for the visual brain diagram
────────────────────────────────────────────── */
const statusItems = [
  { label: "Training data includes your business", status: "partial" },
  { label: "Real-time retrieval returns your pages", status: "pass" },
  { label: "Schema markup is present and correct", status: "fail" },
  { label: "Citation network is established", status: "fail" },
  { label: "Business listings are consistent", status: "partial" },
  { label: "Knowledge graph entity recognized", status: "fail" },
];

const statusMap = {
  pass:    { icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50", label: "Verified" },
  partial: { icon: Info,         color: "text-amber-600",   bg: "bg-amber-50",   label: "Partial" },
  fail:    { icon: AlertCircle,  color: "text-red-500",     bg: "bg-red-50",     label: "Gap Found" },
};

/* ──────────────────────────────────────────────
   Component
────────────────────────────────────────────── */
export default function AiBrainSources() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        {/* ── Heading ── */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge">
            <Search className="h-3.5 w-3.5" />
            How AI Learns About You
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Where AI Gets Its
            <span className="text-gradient-brand"> Knowledge</span> About Your Business
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            AI systems don&apos;t just read your website. They pull from a complex web of sources — and gaps in any of them can make your business invisible, misrepresented, or overlooked.
          </p>
        </div>

        {/* ── 8 Knowledge Source Cards ── */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {knowledgeSources.map((source) => {
            const Icon = source.icon;
            return (
              <div
                key={source.title}
                className="card group rounded-3xl border p-6 hover:border-blue-200"
              >
                <div className="flex items-start justify-between">
                  <div className={`rounded-xl p-3 ${source.iconColor}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${source.tagColor}`}>
                    {source.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-gray-900">
                  {source.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {source.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── What This Means In Practice ── */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left: explanation */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3">
                <Bot className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Why This Matters
                </p>
                <h3 className="text-xl font-bold text-gray-900">
                  One Gap Can Undermine Everything
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              Even if your website is excellent, a gap in your citation network or an inaccurate business listing can cause AI to misrepresent you — or worse, recommend a competitor instead.
            </p>

            <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Real Scenario
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">›</span>
                  <p className="text-gray-700">
                    <strong>Buyer asks ChatGPT:</strong> &ldquo;What are the best B2B digital agencies in [city]?&rdquo;
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-red-500">›</span>
                  <p className="text-gray-700">
                    <strong>ChatGPT responds</strong> with three competitors. Your company is not mentioned — despite being established for 5+ years.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-600">›</span>
                  <p className="text-gray-700">
                    <strong>After our audit & fixes:</strong> Structured data, citations, and entity signals updated. Your company now appears in AI recommendations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <p className="text-sm font-semibold text-blue-700">
                This is exactly what an AI Visibility Audit finds and fixes.
              </p>
            </div>
          </div>

          {/* Right: status checklist preview */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-slate-100 p-3">
                <Search className="h-6 w-6 text-slate-600" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Example Audit Snapshot
                </p>
                <h3 className="text-xl font-bold text-gray-900">
                  Your AI Signal Status
                </h3>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {statusItems.map((item) => {
                const s = statusMap[item.status as keyof typeof statusMap];
                const Icon = s.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 ${s.bg}`}
                  >
                    <Icon className={`h-5 w-5 flex-shrink-0 ${s.color}`} />
                    <p className="flex-1 text-sm font-medium text-gray-700">
                      {item.label}
                    </p>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${s.color} bg-white`}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-center text-xs text-gray-400">
              This is a sample. Your actual results may vary.
            </p>

            <div className="mt-6">
              <a
                href="/free-audit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get My Real Audit Results
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
