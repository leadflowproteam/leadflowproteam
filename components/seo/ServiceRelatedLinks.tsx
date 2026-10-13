import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import Container from "@/components/ui/Container";

import { entities } from "@/data/entities";
import { resources } from "@/data/resources";
import { services } from "@/data/services";

type Props = {
  slug: string;
};

export default function ServiceRelatedLinks({ slug }: Props) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return null;
  }

  const relatedGuides = resources
    .filter((resource) => resource.relatedServices.includes(slug))
    .slice(0, 3);

  const entity = entities.find((item) => item.slug === slug);

  const relatedEntityLinks = (entity?.relatedEntities ?? [])
    .map((entitySlug) => entities.find((item) => item.slug === entitySlug))
    .filter((item): item is (typeof entities)[number] => Boolean(item))
    .filter((item) => item.slug !== slug)
    .slice(0, 6);

  if (relatedGuides.length === 0 && relatedEntityLinks.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <p className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Related Guides and Topics
        </p>

        {relatedGuides.length > 0 && (
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/resources/${guide.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  {guide.category}
                </span>

                <h3 className="mt-4 text-lg font-bold leading-snug text-slate-950 transition group-hover:text-blue-600">
                  {guide.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {guide.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Read the Guide
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        )}

        {relatedEntityLinks.length > 0 && (
          <div className="mx-auto mt-12 max-w-5xl text-center">
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {relatedEntityLinks.map((item) => (
                <Link
                  key={item.slug}
                  href={item.url}
                  className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
