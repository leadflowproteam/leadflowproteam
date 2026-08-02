import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Gauge,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const stats = [
  {
    icon: Gauge,
    title: "95+ Performance",
  },
  {
    icon: SearchCheck,
    title: "Technical SEO",
  },
  {
    icon: Bot,
    title: "AI Search Ready",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-20 lg:py-28">
      {/* Background */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.08),transparent_35%)]"
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              AI-Ready Website Engineering
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
              Websites That
              <span className="block text-blue-600">
                Rank, Convert &
                Grow
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              We build modern Next.js websites engineered with
              Technical SEO, AI Search Optimization, Core Web
              Vitals, and conversion-focused architecture that
              helps service businesses generate qualified leads.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/free-audit">
                <Button size="lg">
                  Get Free Website Audit
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                >
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Trust */}

            <div className="mt-10 flex flex-wrap gap-4">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-blue-600" />

                    <span className="text-sm font-semibold text-gray-700">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
              {/* Browser */}

              <div className="flex items-center gap-2 border-b bg-gray-100 px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />

                <span className="h-3 w-3 rounded-full bg-yellow-400" />

                <span className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-4 rounded-lg bg-white px-4 py-1 text-xs text-gray-500">
                  leadflowproteam.com
                </div>
              </div>

              <div className="space-y-6 p-8">
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm uppercase tracking-wide text-blue-100">
                    Website Performance
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    95+
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border bg-gray-50 p-5">
                    <p className="text-sm text-gray-500">
                      Technical SEO
                    </p>

                    <p className="mt-2 text-xl font-bold text-gray-900">
                      Ready
                    </p>
                  </div>

                  <div className="rounded-xl border bg-gray-50 p-5">
                    <p className="text-sm text-gray-500">
                      AI Search
                    </p>

                    <p className="mt-2 text-xl font-bold text-gray-900">
                      Optimized
                    </p>
                  </div>

                  <div className="rounded-xl border bg-gray-50 p-5">
                    <p className="text-sm text-gray-500">
                      Core Web Vitals
                    </p>

                    <p className="mt-2 text-xl font-bold text-gray-900">
                      Excellent
                    </p>
                  </div>

                  <div className="rounded-xl border bg-gray-50 p-5">
                    <p className="text-sm text-gray-500">
                      Lead Focus
                    </p>

                    <p className="mt-2 text-xl font-bold text-gray-900">
                      High
                    </p>
                  </div>
                </div>

                  {/* Floating Card */}

<div className="absolute -left-6 top-8 hidden rounded-2xl border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur lg:block">
  <div className="flex items-center gap-3">
    <div className="rounded-xl bg-blue-100 p-3">
      <Sparkles className="h-6 w-6 text-blue-600" />
    </div>

    <div>
      <p className="text-xs uppercase tracking-wide text-gray-500">
        AI Visibility
      </p>

      <h4 className="font-bold text-gray-900">
        Optimized
      </h4>
    </div>
  </div>
</div>

<div className="absolute -right-6 bottom-10 hidden rounded-2xl border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur lg:block">
  <p className="text-xs uppercase tracking-wide text-gray-500">
    Lighthouse
  </p>

  <h3 className="mt-1 text-3xl font-extrabold text-blue-600">
    95+
  </h3>

  <p className="text-sm text-gray-600">
    Performance
  </p>
</div>
                <div className="rounded-xl bg-gray-50 p-5">
                  <div className="mb-3 h-2 rounded-full bg-gray-200">
                    <div className="h-2 w-[96%] rounded-full bg-blue-600" />
                  </div>

                  <p className="text-sm text-gray-600">
                    Performance Score: 96 / 100
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