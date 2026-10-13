import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";

import { industries } from "@/data/industries";
import { portfolioProjects } from "@/data/portfolio";
import { resources } from "@/data/resources";
import { services } from "@/data/services";

import { knowledgeLinks } from "@/lib/knowledge-links";

type Props = {
  slug: string;
};

export default function EntityKnowledgeLinks({ slug }: Props) {
  const links = knowledgeLinks[slug];

  if (!links) {
    return null;
  }

  const linkedServices = links.services
    .map((serviceSlug) =>
      services.find((item) => item.slug === serviceSlug),
    )
    .filter((item): item is (typeof services)[number] =>
      Boolean(item),
    )
    .slice(0, 4);

  const linkedResources = links.resources
    .map((resourceSlug) =>
      resources.find((item) => item.slug === resourceSlug),
    )
    .filter((item): item is (typeof resources)[number] =>
      Boolean(item),
    )
    .slice(0, 3);

  const linkedPortfolio = links.portfolio
    .map((portfolioSlug) =>
      portfolioProjects.find(
        (item) => item.slug === portfolioSlug,
      ),
    )
    .filter((item): item is (typeof portfolioProjects)[number] =>
      Boolean(item),
    )
    .slice(0, 2);

  const linkedIndustries = links.industries
    .map((industrySlug) =>
      industries.find((item) => item.slug === industrySlug),
    )
    .filter((item): item is (typeof industries)[number] =>
      Boolean(item),
    )
    .slice(0, 6);

  if (
    linkedServices.length === 0 &&
    linkedResources.length === 0 &&
    linkedPortfolio.length === 0 &&
    linkedIndustries.length === 0
  ) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-950">
            Related Knowledge
          </h2>

          <p className="mt-3 text-center text-sm leading-6 text-slate-600">
            Services, guides, and industry contexts connected to{" "}
            this topic.
          </p>

          {linkedServices.length > 0 && (
            <div className="mt-10">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Services
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {linkedServices.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
                  >
                    {item.title}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {linkedResources.length > 0 && (
            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Guides
              </p>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {linkedResources.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/resources/${item.slug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                      {item.category}
                    </p>

                    <p className="mt-2 text-sm font-bold leading-snug text-slate-950 transition group-hover:text-blue-600">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {linkedIndustries.length > 0 && (
            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Industries We Help
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {linkedIndustries.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/industries/${item.slug}`}
                    className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {linkedPortfolio.length > 0 && (
            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Proof of Work
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {linkedPortfolio.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/portfolio/${item.slug}`}
                    className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
