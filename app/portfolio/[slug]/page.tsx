import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ArrowLeft, ExternalLink } from "lucide-react";

import JsonLd from "@/components/seo/JsonLd";
import InternalLinks from "@/lib/seo/InternalLinks";

import {
  breadcrumbSchema,
  creativeWorkSchema,
} from "@/lib/schema";

import { siteGraph } from "@/lib/jsonld/site-graph";

import Button from "@/components/ui/Button";
import RelatedPortfolio from "@/components/sections/RelatedPortfolio";

import { portfolioProjects } from "@/data/portfolio";

import { webpageJsonLd } from "@/lib/jsonld/webpage";

type PortfolioPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = portfolioProjects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,

    description: project.description,

    alternates: {
      canonical: `https://leadflowproteam.com/portfolio/${project.slug}`,
    },

    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://leadflowproteam.com/portfolio/${project.slug}`,
      type: "article",
    },
  };
}

export default async function PortfolioPage({
  params,
}: PortfolioPageProps) {
  const { slug } = await params;

  const project = portfolioProjects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  return (
    <>
    <JsonLd
  data={siteGraph(
    creativeWorkSchema({
      title: project.title,
      description: project.description,
      url: `https://leadflowproteam.com/portfolio/${project.slug}`,
    }),

    breadcrumbSchema([
      {
        name: "Home",
        url: "https://leadflowproteam.com",
      },
      {
        name: "Portfolio",
        url: "https://leadflowproteam.com/portfolio",
      },
      {
        name: project.title,
        url: `https://leadflowproteam.com/portfolio/${project.slug}`,
      },
    ]),

    webpageJsonLd({
      title: project.title,
      description: project.description,
      url: `https://leadflowproteam.com/portfolio/${project.slug}`,
    })
  )}
/>
      <main className="mx-auto max-w-6xl px-6 py-20">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="mt-10">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            {project.category}
          </span>

          <h1 className="mt-5 text-5xl font-bold">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            {project.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-bold">
              Client
            </h3>

            <p className="mt-3 text-gray-600">
              {project.client}
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-bold">
              Industry
            </h3>

            <p className="mt-3 text-gray-600">
              {project.industry}
            </p>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Challenge
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            {project.challenge}
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Solution
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            {project.solution}
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Services
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
              >
                {service}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Technologies
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Results
          </h2>

          <ul className="mt-6 space-y-3">
            {project.results.map((result) => (
              <li key={result}>
                ✓ {result}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 rounded-2xl bg-slate-50 p-10">
          <h2 className="text-3xl font-bold">
            Visit Live Website
          </h2>

          <p className="mt-4 text-gray-600">
            Explore the live project and see our work in action.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                Live Website

                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <Link href="/contact">
              <Button variant="outline">
                Start Your Project
              </Button>
            </Link>
          </div>
        </section>
      </main>
    
    <InternalLinks
  title="Explore More"
  links={[
    {
      title: "Web Development Services",
      href: "/services/web-development",
    },
    {
      title: "Technical SEO",
      href: "/services/technical-seo",
    },
    {
      title: "Website Audit",
      href: "/services/website-audit",
    },
    {
      title: "Resources",
      href: "/resources",
    },
  ]}
/>

      <RelatedPortfolio
        currentSlug={project.slug}
      />
    </>
  );
}