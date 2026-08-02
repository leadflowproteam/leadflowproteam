import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { cities } from "@/data/cities";

type PageProps = {
  params: Promise<{
    city: string;
  }>;
};

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city } = await params;

  const location = cities.find(
    (item) => item.slug === city,
  );

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${location.name}, ${location.state} Web Development & Technical SEO`,
    description: location.description,

    alternates: {
      canonical: `https://leadflowproteam.com/locations/${location.slug}`,
    },

    openGraph: {
      title: `${location.name} Business Website Services`,
      description: location.description,
      url: `https://leadflowproteam.com/locations/${location.slug}`,
      type: "website",
    },
  };
}

export default async function CityPage({
  params,
}: PageProps) {
  const { city } = await params;

  const location = cities.find(
    (item) => item.slug === city,
  );

  if (!location) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        Location
      </span>

      <h1 className="mt-6 text-5xl font-bold text-gray-900">
        {location.name}, {location.state}
      </h1>

      <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700">
        {location.description}
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Services Available
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {location.services.map((service) => (
            <Link
              key={service}
              href={`/locations/${location.slug}/${service}`}
              className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              {service}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Industries We Serve
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {location.industries.map((industry) => (
            <Link
              key={industry}
              href={`/industries/${industry}`}
              className="rounded-xl border px-5 py-3 transition hover:border-blue-600 hover:text-blue-600"
            >
              {industry}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Nearby Cities
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {location.nearbyCities.map((nearby) => (
            <span
              key={nearby}
              className="rounded-full bg-slate-100 px-4 py-2"
            >
              {nearby}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-2xl bg-slate-50 p-10">
        <h2 className="text-3xl font-bold">
          Need Help Growing in {location.name}?
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-gray-600">
          LeadFlowProTeam helps service businesses build
          fast websites, improve Technical SEO, and prepare
          for AI Search Visibility.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Contact Our Team
        </Link>
      </section>
    </main>
  );
}