import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const benefits = [
  "Free Website Audit",
  "Technical SEO Included",
  "AI Search Ready",
  "No Hidden Fees",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_45%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_45%)]" />

      <Container className="relative z-10">

        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 px-8 py-20 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:px-20">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Free Consultation • No Obligation
          </span>

          <h2 className="mx-auto mt-8 max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Ready to Build a Website
            <span className="mt-2 block text-cyan-400">
              That Actually Grows Your Business?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            We help service-based businesses build modern Next.js websites
            optimized for Technical SEO, AI Search Visibility, lightning-fast
            performance, and long-term business growth.
          </p>

          <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />

                <span className="text-sm font-medium text-slate-200">
                  {item}
                </span>
              </div>
            ))}

          </div>

          <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

            <Link href="/free-audit">
              <Button size="lg">
                Get Free Website Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
              >
                Schedule Discovery Call
              </Button>
            </Link>

          </div>

          <div className="mt-14 flex items-center justify-center gap-3 text-sm text-slate-400">

            <ShieldCheck className="h-5 w-5 text-cyan-400" />

            <span>
              Trusted Process • Transparent Communication • Long-Term Partnership
            </span>

          </div>

        </div>

      </Container>

    </section>
  );
}