import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const portfolio = [
  {
    title: "PhotoClippService",
    category: "Lead Generation Landing Page",
    description:
      "A modern Next.js landing page designed to attract qualified leads, improve search visibility, and deliver a fast user experience.",
    highlights: [
      "Next.js + TypeScript",
      "Technical SEO",
      "Core Web Vitals Optimized",
      "AI Search Ready",
    ],
  },
  {
    title: "Clipping Path Agent",
    category: "Service Landing Page",
    description:
      "A conversion-focused landing page built for a creative service business with clear messaging, structured content, and responsive design.",
    highlights: [
      "Mobile-First Design",
      "Conversion Optimization",
      "Schema Markup",
      "Performance Optimized",
    ],
  },
];

export default function LandingPagePortfolio() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionHeading
          badge="Recent Projects"
          title="Landing Pages Built for Business Growth"
          description="Examples of modern landing pages developed with performance, conversion, SEO, and long-term scalability in mind."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {portfolio.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {project.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {project.description}
              </p>

              <ul className="mt-8 space-y-3">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600" />

                    <span className="text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View Full Portfolio

            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}