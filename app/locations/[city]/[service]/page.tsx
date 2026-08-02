import { notFound } from "next/navigation";
import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";

import { cities } from "@/data/cities";
import { services } from "@/data/services";

import {
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/schema";

type PageProps = {
  params: Promise<{
    city: string;
    service: string;
  }>;
};

export async function generateStaticParams() {
  return cities.flatMap((city) =>
    services.map((service) => ({
      city: city.slug,
      service: service.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city, service } = await params;

  const cityData = cities.find(
    (item) => item.slug === city,
  );

  const serviceData = services.find(
    (item) => item.slug === service,
  );

  if (!cityData || !serviceData) {
    return {
      title: "Not Found",
    };
  }

  const title = `${serviceData.title} in ${cityData.name} | LeadFlowProTeam`;

  const description = `Professional ${serviceData.title} services in ${cityData.name}. Fast, SEO-friendly, AI-ready websites built by LeadFlowProTeam.`;

  return {
    title,
    description,

    alternates: {
      canonical: `https://leadflowproteam.com/locations/${cityData.slug}/${serviceData.slug}`,
    },

    openGraph: {
      title,
      description,
      url: `https://leadflowproteam.com/locations/${cityData.slug}/${serviceData.slug}`,
    },
  };
}

export default async function LocationServicePage({
  params,
}: PageProps) {
  const { city, service } = await params;

  const cityData = cities.find(
    (item) => item.slug === city,
  );

  const serviceData = services.find(
    (item) => item.slug === service,
  );

  if (!cityData || !serviceData) {
    notFound();
  }

  const url = `https://leadflowproteam.com/locations/${cityData.slug}/${serviceData.slug}`;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${serviceData.title} in ${cityData.name}`,
          description: `Professional ${serviceData.title} services for businesses in ${cityData.name}.`,
          url,
        })}
      />

      <JsonLd
        data={breadcrumbSchema([
          {
            name: "Home",
            url: "https://leadflowproteam.com",
          },
          {
            name: "Locations",
            url: "https://leadflowproteam.com/locations",
          },
          {
            name: cityData.name,
            url: `https://leadflowproteam.com/locations/${cityData.slug}`,
          },
          {
            name: serviceData.title,
            url,
          },
        ])}
      />

      <main className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          {serviceData.title} in {cityData.name}
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          LeadFlowProTeam provides professional{" "}
          {serviceData.title.toLowerCase()} services for
          businesses in {cityData.name}. Our websites are
          optimized for Technical SEO, AI Search Visibility,
          Core Web Vitals, and long-term business growth.
        </p>

        <section className="mt-12 rounded-2xl border p-8">
          <h2 className="text-2xl font-semibold">
            Why Businesses Choose Us
          </h2>

          <ul className="mt-6 space-y-3 list-disc pl-6">
            <li>Modern Next.js Development</li>
            <li>Technical SEO Included</li>
            <li>AI Search Optimization</li>
            <li>Fast Core Web Vitals</li>
            <li>Clean Scalable Architecture</li>
          </ul>
        </section>
      </main>
    </>
  );
}