import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { entities } from "@/data/entities";
import { entityContent } from "@/data/entity-content";

import RelatedTopics from "@/components/sections/RelatedTopics";
import RelatedServices from "@/components/sections/RelatedServices";
import RelatedResources from "@/components/sections/RelatedResources";
import RelatedPortfolio from "@/components/sections/RelatedPortfolio";

import RelatedEntities from "@/components/seo/RelatedEntities";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import JsonLd from "@/components/seo/JsonLd";

import KnowledgeGraph from "@/components/knowledge/KnowledgeGraph";
import TopicCluster from "@/components/knowledge/TopicCluster";

import { getEntity } from "@/lib/knowledge-graph";

import { siteGraph } from "@/lib/jsonld/site-graph";
import { webpageJsonLd } from "@/lib/jsonld/webpage";
import { entitySchema } from "@/lib/jsonld/entity";

import InternalLinks from "@/lib/seo/InternalLinks";
import { getSemanticLinks } from "@/lib/seo/semantic-links";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return entities.map((entity) => ({
    slug: entity.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const entity = getEntity(slug);

  if (!entity) {
    return {
      title: "Entity Not Found",
    };
  }

  return {
    title: `${entity.name} | LeadFlowProTeam`,

    description: entity.description,

    alternates: {
      canonical: `https://leadflowproteam.com/entities/${entity.slug}`,
    },

    openGraph: {
      title: entity.name,

      description: entity.description,

      url: `https://leadflowproteam.com/entities/${entity.slug}`,

      type: "article",
    },
  };
}

export default async function EntityPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const entity = entities.find(
    (item) => item.slug === slug,
  );

  if (!entity) {
    notFound();
  }

  const content =
    entityContent[
      entity.slug as keyof typeof entityContent
    ];

  const relatedEntitiesData =
    entity.relatedEntities
      .map((slug) =>
        entities.find(
          (entity) => entity.slug === slug,
        ),
      )
      .filter(
        (
          entity,
        ): entity is (typeof entities)[number] =>
          entity !== undefined,
      );

  const topicClusterItems =
    entity.relatedEntities
      .map((slug) => {
        const related = entities.find(
          (item) => item.slug === slug,
        );

        if (!related) {
          return null;
        }

        return {
          title: related.name,

          href: `/entities/${related.slug}`,
        };
      })
      .filter(
        (
          item,
        ): item is {
          title: string;
          href: string;
        } => item !== null,
      );
      <main className="mx-auto max-w-5xl px-6 py-20">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Entity
        </span>

        <h1 className="mt-6 text-5xl font-bold text-gray-900">
          {entity.name}
        </h1>

        <p className="mt-8 text-xl leading-9 text-gray-700">
          {entity.description}
        </p>

        <KnowledgeGraph
          title="Connected Knowledge Graph"
          entities={relatedEntitiesData}
        />

        <TopicCluster
          title="Explore Related Topics"
          items={topicClusterItems}
        />

        <InternalLinks
          title="Continue Exploring"
          links={getSemanticLinks(entity.slug)}
        />
        {content && (
          <>
            <section className="mt-16">
              <h2 className="text-3xl font-bold">
                Overview
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                {content.summary}
              </p>
            </section>

            <section className="mt-16">
              <h2 className="text-3xl font-bold">
                Why It Matters
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                {content.definition}
              </p>
            </section>

            <section className="mt-16">
              <h2 className="text-3xl font-bold">
                Benefits
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-600">
                {content.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                            </ul>
            </section>
          </>
        )}

               <InternalLinks
          title="Continue Exploring"
          links={getSemanticLinks(entity.slug)}
        />

        <section className="mt-20 rounded-2xl bg-slate-50 p-10">
          <h2 className="text-3xl font-bold">
            Need Help With {entity.name}?
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-600">
            Our team helps businesses implement modern web
            development, Technical SEO, AI Search Visibility,
            and structured website architecture.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Our Team
          </a>
        </section>

      </main>
      
  return (
  <>
      <RelatedTopics
        currentSlug={entity.slug}
      />

      <RelatedServices
        currentSlug={entity.slug}
      />

      <KnowledgeGraph
        title="Connected Knowledge Graph"
        entities={relatedEntitiesData}
      />

      <TopicCluster
        title="Explore Related Topics"
        items={topicClusterItems}
      />

      <RelatedEntities
        entitySlugs={entity.relatedEntities}
      />

      <RelatedResources
        currentSlug={entity.slug}
      />

      <RelatedPortfolio
        currentSlug={entity.slug}
      />
    </>
  );
}