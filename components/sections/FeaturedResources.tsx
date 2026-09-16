import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Clock3,
  FileSearch,
  SearchCheck,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { resources } from "@/data/resources";

const resourceIcons = [Bot, SearchCheck, FileSearch];

export default function FeaturedResources() {
  const featuredResources = resources.slice(0, 3);

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Knowledge Center"
          title="Learn How Visibility Works in the AI Search Era."
          description="Practical guides to help business owners understand AI Search Visibility, technical foundations, modern websites, and the information systems behind digital discovery."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredResources.map((resource, index) => {
            const Icon = resourceIcons[index] ?? BookOpen;

            return (
              <article
                key={resource.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={
                      resource.coverImage ??
                      "/images/resources/resource-placeholder.webp"
                    }
                    alt={resource.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-blue-700 backdrop-blur">
                      <Icon className="h-3.5 w-3.5" />
                      {resource.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-blue-600">
                    {resource.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                    {resource.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-5 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-4 w-4" />
                      {resource.readingTime}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="h-4 w-4" />
                      {resource.funnelStage}
                    </span>
                  </div>

                  <Link
                    href={`/resources/${resource.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700"
                  >
                    Read the Guide
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
                Build Your Understanding
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Start With the Fundamentals. Then Improve What Matters.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Our resources explain the concepts behind modern search and
                AI visibility so you can make better decisions about your
                website, business information, and digital presence.
              </p>

              <div className="mt-7">
                <Link href="/resources">
                  <Button variant="white" size="lg">
                    Browse All Resources
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold text-blue-300">
                Explore Topics
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "AI Search Visibility",
                  "Technical SEO",
                  "Business Information",
                  "Modern Website Engineering",
                  "Website Performance",
                ].map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-sm font-medium text-slate-200">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Ready to move from learning to a real visibility assessment?
          </p>

          <Link
            href="/free-audit"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700"
          >
            Start With an AI Visibility Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}