import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

import { entities } from "@/data/entities";

import { getPriorityClusters } from "@/lib/topic-engine";

import { generateSeo } from "@/lib/seo";

const baseUrl = "https://leadflowproteam.com";

export const metadata: Metadata = generateSeo({
  title: "Entity Library",
  description:
    "Explore the key services, technologies, and concepts that define modern web development, technical SEO, and AI search visibility — from Entity SEO and Knowledge Graphs to Next.js, Schema.org, and Core Web Vitals.",
  path: "/entities",
  keywords: [
    "Entity SEO",
    "Semantic SEO",
    "Knowledge Graph",
    "Schema.org",
    "Core Web Vitals",
    "AI Search Concepts",
  ],
});

const typeLabels: Record<string, string> = {
  Service: "Services",
  Technology: "Technologies",
  Concept: "Concepts",
  Platform: "Platforms",
  Metric: "Metrics",
};

export default function EntitiesPage() {
  const groups = Object.entries(typeLabels).map(([type, label]) => ({
    label,
    items: entities.filter((entity) => entity.type === type),
  }));

  const clusters = getPriorityClusters();

  return (
    <main className="bg-white py-20 lg:py-28">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: baseUrl },
          { name: "Entity Library", url: `${baseUrl}/entities` },
        ]}
      />

      <Container>
        <SectionHeading
          badge="Entity Library"
          title="The Language of AI Search Visibility"
          description="These are the services, technologies, and concepts our work is built on. Each entity below links to a detailed explanation page — a useful reference when researching modern search and AI visibility work."
          align="center"
        />

        <section className="mt-14">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Topic Clusters
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            Our expertise is organized into connected topic clusters — each
            anchored by a core service and supported by related entities,
            guides, and proof of work.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clusters.map((cluster) => (
              <Link
                key={cluster.slug}
                href={`/services/${cluster.pillarService}`}
                className="group rounded-2xl border border-blue-200 bg-blue-50/50 p-6 transition hover:border-blue-400 hover:bg-blue-50"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {cluster.searchIntent === "commercial" &&
                    "Commercial cluster"}
                  {cluster.searchIntent === "informational" &&
                    "Informational cluster"}
                  {cluster.searchIntent === "transactional" &&
                    "Transactional cluster"}
                </p>

                <h3 className="mt-2 text-lg font-bold text-gray-900 transition group-hover:text-blue-600">
                  {cluster.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {cluster.description}
                </p>

                <p className="mt-4 text-xs font-medium text-gray-500">
                  {cluster.entities.length} entities ·{" "}
                  {cluster.resources.length} guides
                </p>
              </Link>
            ))}
          </div>
        </section>

        {groups.map((group) => {
          if (group.items.length === 0) return null;

          return (
            <section key={group.label} className="mt-14">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {group.label}
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((entity) => (
                  <a
                    key={entity.slug}
                    href={`/entities/${entity.slug}`}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
                  >
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600">
                      {entity.name}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                      {entity.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </Container>
    </main>
  );
}
