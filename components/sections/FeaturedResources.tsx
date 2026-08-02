import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  User2,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { resources } from "@/data/resources";

export default function FeaturedResources() {
  const featuredResources = resources.slice(0, 3);

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Knowledge Center"
          title="Actionable Resources For Smarter Business Growth"
          description="Practical guides covering Next.js, Technical SEO, AI Search Visibility, website optimization, and digital growth strategies."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {featuredResources.map((resource) => (
            <article
              key={resource.slug}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900">
                <BookOpen className="h-20 w-20 text-white/90" />
              </div>

              {/* Content */}

              <div className="p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    {resource.category}
                  </span>

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    Featured
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                  {resource.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {resource.description}
                </p>

                {/* Meta */}

                <div className="mt-8 flex flex-wrap gap-5 border-t border-gray-100 pt-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User2 className="h-4 w-4" />

                    {resource.author}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />

                    {resource.readingTime}
                  </div>
                </div>

                <Link
                  href={`/resources/${resource.slug}`}
                  className="mt-8 inline-flex items-center font-semibold text-blue-600"
                >
                  Read Complete Guide

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-blue-700 to-blue-600 px-10 py-16 text-center">
          <h2 className="text-4xl font-extrabold text-white">
            Keep Learning. Keep Growing.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Explore practical resources on Technical SEO,
            AI Search Optimization, Entity SEO,
            Next.js development, website performance,
            and modern business growth strategies.
          </p>

          <Link
            href="/resources"
            className="mt-10 inline-flex items-center rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Browse All Resources

            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
