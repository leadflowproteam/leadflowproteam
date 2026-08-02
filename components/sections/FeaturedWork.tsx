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
        badge="Featured Projects"
        title="Real Business Websites That Deliver Results"
        description="Every project is engineered for performance, Technical SEO, AI Search Visibility, and long-term business growth."
      />

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

                  <div className="flex h-[320px] items-center justify-center bg-white">
                    <div className="text-center">
                      <Globe className="mx-auto h-16 w-16 text-blue-600" />

                      <h3 className="mt-6 text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-gray-500">
                        Website Preview
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}

              <Card.Body className="flex flex-col justify-center p-10">
                <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                  {project.industry}
                </span>

                <Card.Title className="mt-6 text-3xl">
                  {project.title}
                </Card.Title>

                <Card.Description className="mt-5 text-base leading-8">
                  {project.description}
                </Card.Description>

                {/* Technologies */}

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}

                <div className="mt-8 rounded-2xl bg-gray-50 p-6">
                  <h4 className="font-semibold text-gray-900">
                    Project Results
                  </h4>

                  <div className="mt-4 space-y-3">
                    {project.results.map((result) => (
                      <div
                        key={result}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />

                        <span className="text-gray-600">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}

                <div className="mt-10 flex flex-wrap gap-4">
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
    </Section>
  );
}