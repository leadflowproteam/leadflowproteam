import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  Search,
  ShieldCheck,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  "Complete Technical SEO Audit",
  "Core Web Vitals Optimization",
  "Advanced Schema Markup",
  "XML Sitemap & Robots.txt",
  "Crawlability Improvements",
  "Indexability Optimization",
  "Internal Linking Strategy",
  "Entity SEO Signals",
  "AI Search Readiness",
  "Long-Term SEO Growth Foundation",
] as const;

export default function TechnicalSeoPortfolio() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
     <SectionHeading
        badge="Technical SEO Case Study"
        title="Real Technical SEO Improvements That Deliver Measurable Results"
        description="Our Technical SEO process strengthens website performance, search visibility, AI Search readiness, and long-term business growth through measurable technical improvements."
      />
        <div className="mt-14 overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 shadow-sm">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-10 lg:p-12">
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Enterprise Technical SEO Project
              </span>

              <h3 className="mt-6 text-3xl font-bold text-gray-900">
                PhotoClippService
              </h3>

             <p className="mt-5 leading-8 text-gray-600">
              PhotoClippService was optimized using our complete Technical SEO
              framework. We improved crawlability, indexing, structured data,
              Core Web Vitals, page speed, internal linking, entity optimization,
              and AI Search Visibility to build a stronger long-term SEO
              foundation for sustainable organic growth.
            </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                 <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />

                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div> 
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center">
              <p className="text-3xl font-bold text-blue-700">90+</p>
              <p className="mt-2 text-sm text-gray-600">
                Technical SEO Checks Completed
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center">
              <p className="text-3xl font-bold text-blue-700">100%</p>
              <p className="mt-2 text-sm text-gray-600">
                Crawlability Optimized
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center">
              <p className="text-3xl font-bold text-blue-700">A+</p>
              <p className="mt-2 text-sm text-gray-600">
                Technical SEO Foundation
              </p>
            </div>
          </div>
            </div>

            <div className="flex items-center bg-slate-100 p-10 lg:p-12">
              <div className="grid w-full gap-6">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Gauge className="h-8 w-8 text-blue-600" />

                    <div>
                       <h4 className="font-semibold text-gray-900">
                      Core Web Vitals
                    </h4>

                    <p className="text-sm text-gray-500">
                      Faster loading, improved responsiveness, and better user experience.
                    </p>
                                          </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Search className="h-8 w-8 text-blue-600" />

                    <div>
                       <h4 className="font-semibold text-gray-900">
                          Crawlability & Indexing
                        </h4>

                        <p className="text-sm text-gray-500">
                          Search engines can efficiently discover, crawl, and index every important page.
                        </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-8 w-8 text-blue-600" />

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        AI Search Readiness
                      </h4>

                      <p className="text-sm text-gray-500">
                        Structured data, semantic markup, and entity optimization for modern AI-powered search.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}