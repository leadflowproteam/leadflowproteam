import Link from "next/link";
import {
  BarChart3,
  Bot,
  Gauge,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: Search,
    title: "Technical SEO Issues Identified",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals Optimized",
  },
  {
    icon: Bot,
    title: "Structured Data Reviewed",
  },
  {
    icon: ShieldCheck,
    title: "AI Search Readiness Evaluated",
  },
];

export default function WebsiteAuditPortfolio() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          badge="Website Audit Case Study"
          title="Real Website Audit Improvements That Drive Business Growth"
          description="Explore how our Website Audit process uncovers technical SEO issues, Core Web Vitals problems, AI Search Visibility gaps, accessibility limitations, and conversion opportunities that directly impact organic growth."
        />

        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <Sparkles className="h-4 w-4" />
               Real Website Audit Example
              </span>

              <h3 className="mt-6 text-3xl font-bold text-gray-900">
                Website Audit for PhotoClippService
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                We audited PhotoClippService to evaluate technical SEO, Core Web Vitals, structured data, AI Search readiness, accessibility, website architecture, and overall search performance. The audit identified critical improvements that strengthened website health, crawlability, user experience, and long-term organic growth.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-slate-50 p-4 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
                    >
                      <Icon className="h-6 w-6 text-blue-600" />

                      <span className="font-medium text-gray-700">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10">
                <Link href="/portfolio">
                  <Button>
                    View More Case Studies
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center bg-gradient-to-br from-blue-600 via-cyan-600 to-slate-900 p-10 text-white">
              <div className="max-w-sm text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                  <BarChart3 className="h-10 w-10" />
                </div>

                <div className="mt-8 text-6xl font-extrabold">
                  100+
                </div>

                <p className="mt-4 text-2xl font-bold">
                  Professional Audit Checks
                </p>

                <p className="mt-6 leading-8 text-blue-100">
                 Our Website Audit evaluates more than 100 critical SEO, performance, accessibility, AI Search Visibility, security, and technical factors—providing a clear roadmap for higher rankings, stronger website performance, and sustainable business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}