import {
  ArrowRight,
  Globe,
  Rocket,
  Search,
  Target,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const journey = [
  {
    icon: Rocket,
    year: "2026",
    title: "LeadFlowProTeam Founded",
    description:
      "We started with a clear vision to help service businesses grow through modern web technologies.",
  },
  {
    icon: Globe,
    year: "Phase 1",
    title: "Modern Website Development",
    description:
      "Building fast, scalable, and responsive business websites using Next.js and modern development practices.",
  },
  {
    icon: Search,
    year: "Phase 2",
    title: "Technical SEO & AI Search",
    description:
      "Integrating technical SEO, Core Web Vitals, and AI-ready optimization into every project.",
  },
  {
    icon: Target,
    year: "Future",
    title: "Long-Term Growth Partner",
    description:
      "Helping businesses generate more leads, improve visibility, and achieve sustainable digital growth.",
  },
];

export default function Journey() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Our Journey"
        title="Building Long-Term Digital Success"
        description="Every milestone reflects our commitment to creating better websites, stronger search visibility, and measurable business growth."
      />

      <div className="relative mt-20">
        <div className="absolute left-8 top-0 hidden h-full w-px bg-gray-200 lg:block" />

        <div className="space-y-12">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative grid gap-8 lg:grid-cols-[80px_1fr]"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl">
                  <Icon className="h-8 w-8" />
                </div>

                <Card className="group">
                  <Card.Body>
                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                      {item.year}
                    </span>

                    <Card.Title className="mt-5">
                      {item.title}
                    </Card.Title>

                    <Card.Description>
                      {item.description}
                    </Card.Description>

                    {index !== journey.length - 1 && (
                      <div className="mt-6 inline-flex items-center text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}