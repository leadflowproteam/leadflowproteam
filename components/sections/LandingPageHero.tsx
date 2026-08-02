import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  LayoutTemplate,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const highlights = [
  "Conversion-Focused Design",
  "AI Search Ready",
  "SEO Optimized",
  "Mobile-First Experience",
];

const metrics = [
  {
    icon: Target,
    title: "Higher Conversions",
    value: "Lead-Focused",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    value: "Core Web Vitals",
  },
  {
    icon: LayoutTemplate,
    title: "Modern UX",
    value: "Enterprise Quality",
  },
];

export default function LandingPageHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Enterprise Landing Page Development
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Landing Pages Designed to
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-300 bg-clip-text text-transparent">
              Convert More Visitors Into Customers
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl">
            We build modern, high-converting landing pages that combine
            persuasive messaging, premium user experience, Technical SEO,
            AI Search Readiness, and lightning-fast performance to maximize
            lead generation and marketing ROI.
          </p>

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <BadgeCheck className="h-4 w-4 text-emerald-400" />
              Conversion Strategy
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <BadgeCheck className="h-4 w-4 text-emerald-400" />
              Technical SEO
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <BadgeCheck className="h-4 w-4 text-emerald-400" />
              AI Search Visibility
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <BadgeCheck className="h-4 w-4 text-emerald-400" />
              Mobile-First
            </span>
          </div>
                    <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/free-audit">
              <Button
                size="lg"
                className="bg-cyan-500 text-slate-950 hover:bg-cyan-400"
              >
                Get Free Landing Page Audit
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

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            {highlights.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300 hover:bg-white/10"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                <span className="text-sm font-semibold tracking-wide text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
                    <div className="mt-20 grid gap-6 md:grid-cols-3">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:bg-white/10"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {metric.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium uppercase tracking-wider text-cyan-300">
                    {metric.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}