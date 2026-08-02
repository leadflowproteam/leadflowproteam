import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Rocket,
  ShieldCheck,
  Cpu,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const highlights = [
  "Custom Next.js Development",
  "Technical SEO & AI Search Ready",
  "Lightning-Fast Performance",
  "Responsive Across Every Device",
  "Enterprise-Grade Architecture",
  "Built for Long-Term Business Growth",
];

export default function WebDevelopmentHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.16),transparent_45%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_45%)]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-cyan-200">
              Enterprise Web Development
            </span>

            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              High-Performance Business Websites

              <span className="mt-2 block text-cyan-400">
                Built to Rank, Convert & Grow
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">
              We build custom Next.js websites that combine premium design,
              enterprise-grade performance, Technical SEO, AI Search Readiness,
              and conversion-focused architecture to help modern businesses
              generate more leads, improve search visibility, and achieve
              sustainable long-term growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/free-audit">
                <Button size="lg">
                  Get Free Website Audit

                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/portfolio">
                <Button
                  variant="secondary"
                  size="lg"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />

                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
                    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="space-y-6">
              <div className="rounded-2xl bg-slate-900/60 p-6 transition-all duration-300 hover:bg-slate-900/80">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-cyan-500/15 p-4">
                    <Code2 className="h-8 w-8 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Modern Technology Stack
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      Built with Next.js, React, TypeScript, Tailwind CSS,
                      ensuring maximum flexibility, maintainability, and
                      enterprise-level scalability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900/60 p-6 transition-all duration-300 hover:bg-slate-900/80">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-cyan-500/15 p-4">
                    <Rocket className="h-8 w-8 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Performance & Search Ready
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      Every website is optimized for Core Web Vitals,
                      Technical SEO, semantic HTML, structured data, and
                      AI-powered search engines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900/60 p-6 transition-all duration-300 hover:bg-slate-900/80">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-cyan-500/15 p-4">
                    <Cpu className="h-8 w-8 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Future-Proof Architecture
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      Clean code architecture built for future integrations,
                      automation, AI Search Optimization, and long-term
                      business expansion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-cyan-500/15 p-4">
                    <ShieldCheck className="h-8 w-8 text-cyan-300" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-cyan-200">
                      Perfect for Growth-Focused Businesses
                    </h3>

                    <p className="mt-3 leading-7 text-slate-300">
                      Ideal for startups, agencies, consultants,
                      healthcare providers, law firms, home service
                      businesses, and companies seeking measurable
                      online growth through high-performance websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                {/* Trust & Business Metrics */}
        <div className="mt-20 rounded-[32px] border border-cyan-900/30 bg-slate-900/50 p-8 backdrop-blur-sm">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-extrabold text-cyan-400">
                100%
              </h3>

              <p className="mt-2 text-sm uppercase tracking-widest text-slate-400">
                Custom Code
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-cyan-400">
                Next.js
              </h3>

              <p className="mt-2 text-sm uppercase tracking-widest text-slate-400">
                Modern Framework
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-cyan-400">
                SEO
              </h3>

              <p className="mt-2 text-sm uppercase tracking-widest text-slate-400">
                Technical Foundation
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-cyan-400">
                AI Ready
              </h3>

              <p className="mt-2 text-sm uppercase tracking-widest text-slate-400">
                Future Search
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-8 text-center">
            <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-300">
              Every website we build is designed with
              <span className="font-semibold text-cyan-300">
                {" "}
                performance,
              </span>
              <span className="font-semibold text-cyan-300">
                {" "}
                Technical SEO,
              </span>
              <span className="font-semibold text-cyan-300">
                {" "}
                AI Search Visibility,
              </span>
              <span className="font-semibold text-cyan-300">
                {" "}
                accessibility,
              </span>
              and
              <span className="font-semibold text-cyan-300">
                {" "}
                long-term scalability
              </span>
              — ensuring your business is ready for both today's search engines
              and tomorrow's AI-powered discovery platforms.
            </p>
          </div>
        </div>
              </Container>
    </section>
  );
}