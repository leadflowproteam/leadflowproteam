import {
  Braces,
  Code2,
  Globe,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const technologies = [
  {
    icon: Rocket,
    title: "Next.js 16",
    description:
      "Modern React framework delivering exceptional performance, server rendering, and enterprise scalability.",
  },
  {
    icon: Code2,
    title: "React 19",
    description:
      "Interactive, reusable, and maintainable user interfaces built with the latest React ecosystem.",
  },
  {
    icon: Braces,
    title: "TypeScript",
    description:
      "Type-safe development that reduces bugs and improves long-term maintainability.",
  },
  {
    icon: Smartphone,
    title: "Tailwind CSS",
    description:
      "Utility-first styling for responsive, clean, and consistent modern interfaces.",
  },
  {
    icon: Search,
    title: "Technical SEO",
    description:
      "Semantic HTML, metadata, schema readiness, crawlability, and search-friendly architecture.",
  },
  {
    icon: Globe,
    title: "AI Search Ready",
    description:
      "Built with structured content and entity-friendly architecture to support AI-powered search experiences.",
  },
  {
    icon: Zap,
    title: "Core Web Vitals",
    description:
      "Optimized loading, rendering, and responsiveness for excellent Lighthouse performance.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Deployment",
    description:
      "Reliable deployment on Vercel with modern security practices and production-ready architecture.",
  },
];

export default function WebDevelopmentTechStack() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="Technology Stack"
        title="Modern Technologies Behind Every Website"
        description="We use trusted technologies and proven development practices to build websites that are fast, secure, scalable, and ready for long-term business growth."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {tech.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {tech.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}