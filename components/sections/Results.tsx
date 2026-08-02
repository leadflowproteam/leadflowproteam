import {
  ArrowRight,
  Bot,
  Gauge,
  SearchCheck,
  TrendingUp,
} from "lucide-react";

import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const results = [
  {
    icon: Gauge,
    metric: "95+",
    title: "Performance Score",
    description:
      "Optimized for exceptional speed, Core Web Vitals, and a smooth user experience.",
  },
  {
    icon: SearchCheck,
    metric: "SEO",
    title: "Technical SEO Ready",
    description:
      "Clean architecture, structured data, metadata, sitemap, robots.txt, and crawl optimization.",
  },
  {
    icon: Bot,
    metric: "AI",
    title: "AI Search Ready",
    description:
      "Prepared for ChatGPT, Gemini, Claude, AI Overviews, Entity SEO, and Semantic Search.",
  },
  {
    icon: TrendingUp,
    metric: "Growth",
    title: "Business Focused",
    description:
      "Designed to improve lead generation, conversion rates, trust, and long-term business growth.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
  "Technical SEO",
  "Schema.org",
  "Core Web Vitals",
  "Google Search Console",
  "Google Analytics",
];

export default function Results() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Results That Matter"
          title="Built for Speed, Search Visibility & Business Growth"
          description="Every project is engineered with measurable outcomes in mind—from website performance and Technical SEO to AI Search Visibility and long-term lead generation."
        />

        {/* Result Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {results.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <span className="text-4xl font-extrabold text-blue-600">
                    {item.metric}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Technologies */}

        <div className="mt-24 rounded-[36px] border border-gray-200 bg-white p-10 shadow-lg">
          <h3 className="text-center text-3xl font-bold text-gray-900">
            Technologies & Best Practices
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-center leading-8 text-gray-600">
            We use modern technologies and proven optimization strategies to
            build secure, scalable, SEO-friendly, and AI-ready business
            websites.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-600 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-24 rounded-[36px] bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 px-10 py-16 text-center text-white shadow-2xl">
          <h3 className="text-4xl font-extrabold">
            Ready to Grow Your Business Online?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Let's build a high-performance website that loads faster, ranks
            better, and generates more qualified leads for your business.
          </p>

          <div className="mt-10 flex justify-center">
            <Link href="/free-audit">
              <Button
                variant="secondary"
                className="group"
              >
                Get Your Free Website Audit

                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}