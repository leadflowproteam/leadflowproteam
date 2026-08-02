import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { industries } from "@/data/industries";

import RelatedServices from "@/components/sections/RelatedServices";
import RelatedResources from "@/components/sections/RelatedResources";
import RelatedTopics from "@/components/sections/RelatedTopics";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const industry = industries.find(
    (item) => item.slug === slug,
  );

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.title} | LeadFlowProTeam`,
    description: industry.description,

    alternates: {
      canonical: `https://leadflowproteam.com/industries/${industry.slug}`,
    },

    openGraph: {
      title: industry.title,
      description: industry.description,
      url: `https://leadflowproteam.com/industries/${industry.slug}`,
      type: "website",
    },
  };
}

export default async function IndustryPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const industry = industries.find(
    (item) => item.slug === slug,
  );

  if (!industry) {
    notFound();
  }

  return (
    <>
      <main className="mx-auto max-w-5xl px-6 py-20">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Industry
        </span>

        <h1 className="mt-6 text-5xl font-bold text-gray-900">
          {industry.title}
        </h1>

        <p className="mt-8 text-xl leading-9 text-gray-700">
          {industry.description}
        </p>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Common Challenges
          </h2>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-600">
            {industry.painPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Benefits
          </h2>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-600">
            {industry.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-20 rounded-2xl bg-slate-50 p-10">
          <h2 className="text-3xl font-bold">
            {industry.cta}
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-600">
            We help businesses in the {industry.shortTitle.toLowerCase()} industry
            build high-performance websites, improve Technical SEO, and increase
            visibility in AI-powered search.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Our Team
          </a>
        </section>
      </main>

      <RelatedTopics currentSlug={industry.primaryTopic} />

      <RelatedServices
        currentSlug={industry.recommendedServices[0]}
      />

      <RelatedResources
        currentSlug={industry.relatedResources[0]}
      />
    </>
  );
}