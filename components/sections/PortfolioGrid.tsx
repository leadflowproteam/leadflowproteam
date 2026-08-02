import Link from "next/link";
import { ArrowRight, ExternalLink, Star } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { portfolioProjects } from "@/data/portfolio";

export default function PortfolioGrid() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Featured Portfolio"
        title="Real Client Projects"
        description="Explore selected projects showcasing modern web development, Technical SEO, AI Search Optimization, and long-term website growth."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {portfolioProjects.map((project) => (
          <Card
            key={project.slug}
            className="flex h-full flex-col rounded-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Card.Body className="flex grow flex-col">
              {/* Featured */}
              {project.featured && (
                <div className="mb-5 flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-yellow-700">
                    Featured Project
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {project.category}
                </span>

                <span className="text-sm text-gray-500">
                  {project.year}
                </span>
              </div>

              <Card.Title className="mt-5">
                {project.title}
              </Card.Title>

              <p className="mt-2 text-sm font-medium text-blue-700">
                Client: {project.client}
              </p>

              <Card.Description className="mt-4">
                {project.description}
              </Card.Description>

              <div className="mt-6">
                <h4 className="text-sm font-semibold">
                  Services
                </h4>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold">
                  Technologies
                </h4>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/portfolio/${project.slug}`}>
                  <Button className="group">
                    View Case Study

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          </Card>
        ))}
      </div>
    </Section>
  );
}