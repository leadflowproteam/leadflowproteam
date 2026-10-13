import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

import { cities } from "@/data/cities";

import { generateSeo } from "@/lib/seo";

const baseUrl = "https://leadflowproteam.com";

export const metadata: Metadata = generateSeo({
  title: "Service Locations",
  description:
    "LeadFlowProTeam serves businesses across the United States, Canada, the United Kingdom, and Australia. Explore our service locations and find local web development, technical SEO, and AI search visibility support for your city.",
  path: "/locations",
  keywords: [
    "Service Locations",
    "Web Development Locations",
    "Technical SEO Locations",
    "AI Search Visibility Locations",
  ],
});

export default function LocationsPage() {
  return (
    <main className="bg-white py-20 lg:py-28">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: baseUrl },
          { name: "Service Locations", url: `${baseUrl}/locations` },
        ]}
      />

      <Container>
        <SectionHeading
          badge="Service Locations"
          title="Where We Work"
          description="We are a remote-first team serving commercial businesses across the United States, Canada, the United Kingdom, and Australia. Explore our city-specific service pages below."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <a
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                {city.state}, {city.country}
              </p>

              <h2 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-blue-600">
                {city.name}
              </h2>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                {city.description}
              </p>

              <p className="mt-4 text-sm font-semibold text-blue-600">
                Explore {city.name} services →
              </p>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/70 p-6 text-center sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Don&apos;t See Your City?
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            As a remote-first agency, we serve businesses anywhere in our
            four core markets. Request a free audit and we&apos;ll assess
            your current visibility in your local market.
          </p>

          <a
            href="/free-audit"
            className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Request Your Free Audit
          </a>
        </div>
      </Container>
    </main>
  );
}
