import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { industries } from "@/data/industries";

export default function IndustriesGrid() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Industries We Serve"
        title="Helping Businesses Build, Rank & Grow"
        description="We partner with service-based businesses to build fast, modern websites, improve Technical SEO, and increase AI Search Visibility."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry) => (
          <Card
            key={industry.slug}
            className="flex h-full flex-col"
          >
            <Card.Body className="flex grow flex-col">
              {/* Industry Name */}
              <Card.Title>
                {industry.title}
              </Card.Title>

              {/* Description */}
              <Card.Description className="mt-4">
                {industry.description}
              </Card.Description>

              {/* Recommended Services */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900">
                  Recommended Services
                </h4>

                <div className="mt-3 flex flex-wrap gap-2">
                  {industry.recommendedServices.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
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