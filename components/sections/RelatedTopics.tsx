import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { getRelatedClusters } from "@/lib/topic-engine";

type RelatedTopicsProps = {
  currentSlug: string;
};

export default function RelatedTopics({
  currentSlug,
}: RelatedTopicsProps) {
  const topics = getRelatedClusters(currentSlug);

  if (topics.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          badge="Related Topics"
          title="Continue Exploring Related Topics"
          description="Explore closely connected topics to deepen your understanding and discover how they work together."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.slug}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {topic.description}
              </p>

              <Link
                href={`/entities/${topic.slug}`}
                className="mt-6 inline-flex items-center font-semibold text-blue-600 transition hover:translate-x-1"
              >
                Explore Topic
                <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}