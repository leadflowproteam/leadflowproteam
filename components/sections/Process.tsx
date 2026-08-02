import {
  ClipboardCheck,
  Rocket,
  SearchCheck,
  Settings,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const processSteps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Discovery & Strategy",
    description:
      "We learn about your business, goals, target audience, and competitors to create a strategic roadmap for success.",
  },
  {
    step: "02",
    icon: Settings,
    title: "Planning & Development",
    description:
      "Our team builds a fast, scalable Next.js website using clean code, modern architecture, and best development practices.",
  },
  {
    step: "03",
    icon: SearchCheck,
    title: "Technical SEO & AI Optimization",
    description:
      "We optimize your website with structured metadata, Core Web Vitals, technical SEO, and AI Search Visibility best practices.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Testing & Quality Assurance",
    description:
      "Every page is carefully tested for responsiveness, accessibility, speed, usability, and cross-device compatibility.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Launch & Deployment",
    description:
      "Your website is deployed with performance monitoring, indexing readiness, and production best practices.",
  },
  {
    step: "06",
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "We help improve search visibility, user experience, and lead generation through ongoing optimization and strategic guidance.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>

        <SectionHeading
          badge="Our Process"
          title="A Proven Process for Long-Term Business Growth"
          description="From strategy to launch and continuous optimization, every step is designed to build fast, search-optimized, AI-ready websites that generate qualified leads."
        />

        <div className="mx-auto mt-12 max-w-5xl lg:mt-16">

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.step}
                className="relative flex gap-5 pb-10 sm:gap-8 sm:pb-14 last:pb-0"
              >
                {/* Timeline */}

                <div className="relative flex flex-col items-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg sm:h-16 sm:w-16">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="mt-3 text-sm font-bold text-blue-600">
                    {step.step}
                  </span>

                  {index !== processSteps.length - 1 && (
                    <div className="mt-4 h-full w-0.5 bg-blue-100" />
                  )}

                </div>

                {/* Content */}

                <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-8">

                  <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7 sm:leading-8">
                    {step.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}