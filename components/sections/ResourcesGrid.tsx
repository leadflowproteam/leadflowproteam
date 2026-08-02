import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { resources } from "@/data/resources";

export default function ResourcesGrid() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Latest Resources"
        title="Helpful Guides & Expert Insights"
        description="Practical articles to help your business improve website performance, Technical SEO, and AI Search Visibility."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {resources.map((article) => (
          <Card
            key={article.slug}
            className="group flex h-full flex-col overflow-hidden"
          >
            {/* Placeholder Image */}
            <div className="h-52 bg-gradient-to-br from-blue-100 to-slate-200" />

            <Card.Body className="flex grow flex-col">
              <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {article.category}
              </span>

              <Card.Title className="mt-4 text-2xl">
                {article.title}
              </Card.Title>

              <Card.Description className="grow">
                {article.description}
              </Card.Description>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock3 className="h-4 w-4" />
                  {article.readingTime}
                </div>

                <Link href={`/resources/${article.slug}`}>
                  <Button
                    variant="outline"
                    className="group"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Section>
  );
}