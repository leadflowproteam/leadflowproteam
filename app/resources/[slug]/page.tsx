import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/seo/JsonLd";
import EntityList from "@/components/seo/EntityList";

import RelatedResources from "@/components/sections/RelatedResources";
import RelatedServices from "@/components/sections/RelatedServices";

import { resources } from "@/data/resources";
import { resourceContents } from "@/data/resource-content";
import { resourceLinks } from "@/lib/resource-links";
import { siteGraph } from "@/lib/jsonld/site-graph";
import { getSemanticLinks } from "@/lib/seo/semantic-links";
import InternalLinks from "@/lib/seo/InternalLinks";


import {
  articleSchema,
  breadcrumbSchema,
} from "@/lib/schema";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return resources.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = resources.find(
    (item) => item.slug === slug,
  );

  if (!article) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: article.canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: article.canonicalUrl,
      type: "article",
    },
  };
}

export default async function ResourceArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const article = resources.find(
    (item) => item.slug === slug,
  );

  if (!article) {
    notFound();
  }

  const content = 
  resourceContents.find(
    (item) => item.slug === slug,
  );
  const links = resourceLinks[article.slug];

  return (
    <>
      <JsonLd
  data={siteGraph(
    articleSchema({
      title: article.title,
      description: article.description,
      url: article.canonicalUrl,
      published: article.publishedAt,
      entitySlugs: links?.entities,
      serviceSlugs: links?.services,
    }),

    breadcrumbSchema([
      {
        name: "Home",
        url: "https://leadflowproteam.com",
      },
      {
        name: "Resources",
        url: "https://leadflowproteam.com/resources",
      },
      {
        name: article.title,
        url: article.canonicalUrl,
      },
    ])
  )}
/>

      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-6">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {article.category}
          </span>
        </div>

        <h1 className="text-5xl font-bold text-gray-900">
          {article.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-500">
          <span>{article.author}</span>

          <span>{article.publishedAt}</span>

          <span>{article.readingTime}</span>
        </div>

        <p className="mt-10 text-lg leading-8 text-gray-700">
          {article.description}
        </p>

        <EntityList
          entities={article.entityKeywords}
        />

        {content ? (
          <article className="prose prose-lg mt-12 max-w-none">

            <p>{content.introduction}</p>

            {content.sections.map((section) => (
              <section
                key={section.heading}
                className="mt-10"
              >
                <h2>{section.heading}</h2>

                <p>{section.content}</p>
              </section>
            ))}

            <section className="mt-10">
              <h2>Conclusion</h2>

              <p>{content.conclusion}</p>
            </section>

            <section className="mt-12">
              <h2>
                Frequently Asked Questions
              </h2>

              {content.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="mt-6"
                >
                  <h3>{faq.question}</h3>

                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>

          </article>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-gray-300 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold">
              Article Content Coming Soon
            </h2>

            <p className="mt-4 text-gray-600">
              This resource page is ready.
              The full article content
              will be added in the next phase.
            </p>
          </div>
        )}
      </main>

      <InternalLinks
        title="Related Resources"
        links={[
          {
            title: "Technical SEO Services",
            href: "/services/technical-seo",
          },
          {
            title: "Website Audit",
            href: "/services/website-audit",
          },
          {
            title: "Web Development",
            href: "/services/web-development",
          },
          {
            title: "AI Search Visibility",
            href: "/services/ai-search-visibility",
          },
        ]}
      />
      <RelatedServices
        currentSlug={article.relatedServices[0]}
      />

      <RelatedResources
        currentSlug={article.slug}
      />
    </>
  );
}