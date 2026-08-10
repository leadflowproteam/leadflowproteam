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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const entityUrl =
    `https://leadflowproteam.com/entities/${entity.slug}`;

  return {
    title: `${entity.name} | LeadFlowProTeam`,

    description: entity.description,

    alternates: {
      canonical: entityUrl,
    },

    openGraph: {
      title: `${entity.name} | LeadFlowProTeam`,
      description: entity.description,
      url: entityUrl,
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

  const relatedEntitiesData = entity.relatedEntities
    .map((slug) =>
      entities.find(
        (relatedEntity) =>
          relatedEntity.slug === slug,
      ),
    )
    .filter(
      (
        relatedEntity,
      ): relatedEntity is (typeof entities)[number] =>
        relatedEntity !== undefined,
    );

  const topicClusterItems = entity.relatedEntities
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

  const entityUrl =
    `https://leadflowproteam.com/entities/${entity.slug}`;

  return (
    <>
      <JsonLd
        data={siteGraph(
          entitySchema(entity),

          webpageJsonLd({
            title: `${entity.name} | LeadFlowProTeam`,
            description: entity.description,
            url: entityUrl,
          }),
        )}
      />

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://leadflowproteam.com",
          },
          {
            name: "Entities",
            url: "https://leadflowproteam.com/entities",
          },
          {
            name: entity.name,
            url: entityUrl,
          },
        ]}
      />

      <main className="mx-auto max-w-5xl px-6 py-20">
        <header>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {entity.type}
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
            {entity.name}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700">
            {entity.description}
          </p>
        </header>

        {content && (
          <>
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900">
                Overview
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                {content.summary}
              </p>
            </section>

            <section className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900">
                Why It Matters
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                {content.definition}
              </p>
            </section>

            <section className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900">
                Benefits
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-600">
                {content.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900">
                Common Use Cases
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-600">
                {content.useCases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </>
        )}

        <section className="mt-20">
          <KnowledgeGraph
            title="Connected Knowledge Graph"
            entities={relatedEntitiesData}
          />
        </section>

        <section className="mt-16">
          <TopicCluster
            title="Explore Related Topics"
            items={topicClusterItems}
          />
        </section>

        <section className="mt-16">
          <InternalLinks
            title="Continue Exploring"
            links={getSemanticLinks(entity.slug)}
          />
        </section>

        <section className="mt-20 rounded-2xl bg-slate-50 p-10">
          <h2 className="text-3xl font-bold text-gray-900">
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

      <RelatedEntities
        entitySlugs={entity.relatedEntities}
      />

      <RelatedServices
        currentSlug={entity.slug}
      />

      <RelatedResources
        currentSlug={entity.slug}
      />

      <RelatedPortfolio
        currentSlug={entity.slug}
      />

      <RelatedTopics
        currentSlug={entity.slug}
      />
    </>
  );
}