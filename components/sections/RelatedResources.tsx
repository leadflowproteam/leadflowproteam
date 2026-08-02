import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { resources } from "@/data/resources";

type RelatedResourcesProps = {
  currentSlug?: string;
};

export default function RelatedResources({
  currentSlug,
}: RelatedResourcesProps) {
  const related = resources
    .filter((resource) => resource.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          badge="Related Resources"
          title="Continue Learning"
          description="Explore more practical guides on Technical SEO, AI Search Visibility, website performance, and business growth."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {related.map((resource) => (
            <article
              key={resource.slug}
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                {resource.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                {resource.title}
              </h3>

              <p className="mt-4 grow leading-7 text-gray-600">
                {resource.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 text-sm text-gray-500">
                <span>{resource.author}</span>

                <span>{resource.readingTime}</span>
              </div>

              <Link
                href={`/resources/${resource.slug}`}
                className="mt-8 inline-flex items-center font-semibold text-blue-600 transition-all group-hover:translate-x-1"
              >
                Read Article
                <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}