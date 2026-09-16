import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CaseStudiesCTA() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 px-8 py-14 text-center shadow-2xl sm:px-14">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-100 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Real Results
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
            Want Results Like These for Your Business?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-blue-100">
            Every case study started with an AI Visibility Audit. Let us find the gaps and opportunities in your website before your competitors do.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
            >
              Get Your Free AI Audit
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              <BookOpen className="h-4 w-4" />
              Explore Our Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}