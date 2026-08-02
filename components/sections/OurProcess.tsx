import {
  ClipboardCheck,
  Search,
  PenTool,
  Rocket,
  BarChart3,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ClipboardCheck,
    title: "01. Discovery",
    description:
      "We learn about your business, goals, competitors, and target audience before writing a single line of code.",
  },
  {
    icon: Search,
    title: "02. Strategy",
    description:
      "We build an SEO-first and AI Search Visibility strategy with information architecture and keyword planning.",
  },
  {
    icon: PenTool,
    title: "03. Design & Development",
    description:
      "Modern responsive websites are built using Next.js, TypeScript, and Tailwind CSS with clean, scalable code.",
  },
  {
    icon: Rocket,
    title: "04. Launch",
    description:
      "After performance testing, Technical SEO validation, and quality assurance, your website goes live.",
  },
  {
    icon: BarChart3,
    title: "05. Growth",
    description:
      "We continue improving performance, search visibility, content, and conversion opportunities over time.",
  },
];

export default function OurProcess() {
  return (
    <Section className="bg-white py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Our Process"
        title="A Proven Process for Building High-Performing Websites"
        description="Every project follows a structured workflow focused on performance, Technical SEO, AI Search Visibility, and measurable business growth."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <Card
              key={step.title}
              className="group h-full border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <Card.Body className="flex h-full flex-col items-center text-center p-7">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title className="text-xl">
                  {step.title}
                </Card.Title>

                <Card.Description className="mt-4">
                  {step.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}