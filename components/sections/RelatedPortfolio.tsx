import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { portfolioProjects } from "@/data/portfolio";

type RelatedPortfolioProps = {
  currentSlug?: string;
};

export default function RelatedPortfolio({
  currentSlug,
}: RelatedPortfolioProps) {
  const projects = portfolioProjects
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 2);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          badge="Related Case Studies"
          title="Explore More Projects"
          description="See how we help businesses improve website performance, search visibility, and long-term growth."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                {project.industry}
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {project.description}
              </p>

              <Link
                href={`/portfolio/${project.slug}`}
                className="mt-8 inline-flex items-center font-semibold text-blue-600 transition-all hover:translate-x-1"
              >
                View Case Study
                <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}