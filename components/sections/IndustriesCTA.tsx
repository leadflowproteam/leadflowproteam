import Link from "next/link";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";

export default function IndustriesCTA() {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-800 px-8 py-14 text-center shadow-2xl sm:px-14">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-100 backdrop-blur-sm">
            <Building2 className="h-3.5 w-3.5" />
            Industry-Specific Audits
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
            Not Finding Your Industry? We Still Audit It.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-blue-100">
            Our AI visibility framework adapts to any business type. If you don&apos;t see your industry listed, contact us — chances are we&apos;ve already worked in your space or can tailor our methodology to fit.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
            >
              <Sparkles className="h-4 w-4" />
              Request a Free Audit
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Talk With Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}