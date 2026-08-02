import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function WebDevelopmentCTA() {
  return (
    <Section className="overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
      <Container>
        <div className="mx-auto max-w-5xl text-center">

          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-200">
            Ready To Grow?
          </span>

          <h2 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Let's Build a Website
            <span className="mt-2 block text-cyan-400">
              That Actually Grows Your Business
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            We create high-performance Next.js websites designed for
            Technical SEO, AI Search Visibility, lightning-fast speed,
            and real business growth.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>Free Consultation</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>Free Website Audit</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>No Hidden Fees</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>Long-Term Support</span>
            </div>

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

        </div>
      </Container>
    </Section>
  );
}