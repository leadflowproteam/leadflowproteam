import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesGrid() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Success Stories"
        title="How We Help Businesses Grow"
        description="Explore real-world examples of how our web development, Technical SEO, and AI Search Visibility strategies create better business outcomes."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Card
            key={study.slug}
            className="flex h-full flex-col"
          >
            <Card.Body className="flex grow flex-col">
              {/* Industry */}
              <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {study.industry}
              </span>

              {/* Title */}
              <Card.Title className="mt-4">
                {study.title}
              </Card.Title>

              {/* Challenge */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900">
                  Challenge
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900">
                  Solution
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900">
                  Results
                </h4>

                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  {study.results.map((result) => (
                    <li key={result}>✓ {result}</li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="group"
                  >
                    Discuss Your Project

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