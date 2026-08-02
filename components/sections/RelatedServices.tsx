import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { services } from "@/data/services";

type RelatedServicesProps = {
  currentSlug?: string;
};

export default function RelatedServices({
  currentSlug,
}: RelatedServicesProps) {
  const related = services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          badge="Related Services"
          title="Explore More Services"
          description="Discover additional services designed to improve website performance, search visibility, and long-term business growth."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {related.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.slug}
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.shortDescription}
                </p>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center font-semibold text-blue-600 transition-all duration-300 group-hover:translate-x-1"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}