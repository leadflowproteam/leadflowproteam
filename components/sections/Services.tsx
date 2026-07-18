import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-gray-50 py-24 lg:py-28">
      <Container>
        <SectionHeading
          badge="Our Services"
          title="Digital Solutions That Help Your Business Grow"
          description="We combine modern web development, technical SEO, and AI-ready optimization to build websites that perform, rank, and convert."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-6 text-5xl">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-8 inline-flex items-center font-semibold text-blue-600 transition group-hover:translate-x-1"
              >
                Learn More →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}