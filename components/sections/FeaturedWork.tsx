import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Globe,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { portfolioProjects } from "@/data/portfolio";

export default function FeaturedWork() {
  const featuredProjects = portfolioProjects.slice(0, 2);

  return (
    <Section className="bg-slate-50">
    <SectionHeading
        badge="Featured Portfolio"
        title="Real Websites Built for Performance, Search Visibility & Business Growth"
        description="Explore a selection of professional websites developed by LeadFlowProTeam using modern web technologies, Technical SEO, Entity SEO, Core Web Vitals optimization, and AI Search Visibility best practices. Every project demonstrates our commitment to building fast, scalable, search-friendly websites that generate measurable business results."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          Our portfolio showcases modern business websites designed for long-term
          success. Every project combines clean design, high performance,
          conversion-focused architecture, and AI-ready optimization to help
          businesses strengthen their digital presence and generate qualified leads.
        </p>
      </div>
      <div className="mt-16 space-y-10">
        {featuredProjects.map((project) => (
          <Card
            key={project.slug}
            className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="grid lg:grid-cols-2">
              {/* LEFT */}

              <div className="flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-10">
                <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
                  {/* Browser */}

                  <div className="flex items-center gap-2 border-b bg-gray-100 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />

                    <div className="ml-3 rounded-lg bg-white px-3 py-1 text-xs text-gray-500">
                      {project.liveUrl.replace("https://", "")}
                    </div>
                  </div>

                  <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_40%)]" />

                  <div className="relative text-center">

                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-cyan-100 text-cyan-700 shadow-lg">
                      <Globe className="h-12 w-12" />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-700">
                      {project.industry}
                    </p>

                    <div className="mt-8 inline-flex rounded-full border border-cyan-200 bg-white px-5 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
                      AI Search Ready Website
                    </div>

                  </div>

                </div>
                </div>
              </div>

              {/* RIGHT */}

              <Card.Body className="flex flex-col justify-center p-10 lg:p-12">
                <span className="inline-flex w-fit rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                {project.industry}
              </span>

                <Card.Title className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900">
                {project.title}
              </Card.Title>

                <Card.Description className="mt-6 text-lg leading-8 text-slate-600">
                {project.description}
              </Card.Description>

                {/* Technologies */}

                <div className="mt-8">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 transition-colors duration-300 hover:bg-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

                {/* Results */}

                <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <h4 className="text-lg font-bold text-slate-900">
                  Key Improvements Delivered
                </h4>

                  <div className="mt-6 space-y-4">
                    {project.results.map((result) => (
                      <div
                      key={result}
                      className="flex items-start gap-4"
                    >
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-600" />

                        <span className="leading-7 text-slate-600">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}

                <div className="mt-12 flex flex-wrap gap-4">
                  <Link href={`/portfolio/${project.slug}`}>
                    <Button>
                      View Case Study

                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      Live Website

                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-24 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-10 lg:p-14">
  <div className="mx-auto max-w-5xl text-center">

    <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      Every Project Starts With Strategy, Not Just Design
    </h3>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
      We don't simply build attractive websites. Every project is engineered
      with Technical SEO, AI Search Visibility, Entity SEO, Core Web Vitals,
      structured data, and conversion-focused architecture that supports
      sustainable business growth.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-4">

      <Link href="/portfolio">
        <Button size="lg">
          View Full Portfolio
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>

      <Link href="/free-audit">
        <Button
          variant="outline"
          size="lg"
        >
          Get Free Website Audit
        </Button>
      </Link>

    </div>

  </div>
</div>
    </Section>
  );
}