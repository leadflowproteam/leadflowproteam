import {
  Brush,
  Compass,
  Rocket,
  SearchCheck,
  Wrench,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: SearchCheck,
    title: "Discovery & Business Analysis",
    description:
      "We begin by understanding your business goals, target audience, competitors, brand positioning, and long-term growth objectives before planning your website.",
  },
  {
    icon: Compass,
    title: "Strategy & Information Architecture",
    description:
      "We create a scalable website structure with logical navigation, content hierarchy, SEO planning, and user-focused information architecture.",
  },
  {
    icon: Brush,
    title: "Modern UI/UX Design",
    description:
      "Every interface is designed to build trust, improve usability, strengthen your brand, and guide visitors toward meaningful business actions.",
  },
  {
    icon: Wrench,
    title: "Development & Technical Optimization",
    description:
      "Your website is developed using Next.js with Technical SEO, semantic HTML, structured data readiness, Core Web Vitals optimization, and AI Search best practices.",
  },
  {
    icon: Rocket,
    title: "Launch, Monitoring & Growth",
    description:
      "After deployment, we configure analytics, monitor performance, refine technical improvements, and support long-term digital growth through continuous optimization.",
  },
];

export default function WebDevelopmentProcess() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="Development Process"
        title="Our Proven Web Development Workflow"
        description="Every website follows a structured process that combines business strategy, modern development, Technical SEO, AI Search Readiness, and long-term scalability."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-5">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <Card
              key={step.title}
              className="group h-full text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              <Card.Body className="flex h-full flex-col items-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <span className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-600">
                  Step {index + 1}
                </span>

                <Card.Title className="text-xl">
                  {step.title}
                </Card.Title>

                <Card.Description className="grow">
                  {step.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-10">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">
            A Structured Process That Delivers Results
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every stage of our development workflow is designed to reduce
            technical debt, improve search visibility, enhance user experience,
            and create a scalable digital foundation that supports your business
            for years to come. From strategy to launch, every decision is guided
            by performance, usability, and measurable business outcomes.
          </p>
        </div>
      </div>
          </Section>
  );
}
