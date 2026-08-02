import {
  Code2,
  Gauge,
  LayoutDashboard,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Code2,
    title: "Custom Next.js Development",
    description:
      "We build fully custom business websites using Next.js, React, TypeScript, and Tailwind CSS—delivering enterprise-grade architecture, maintainability, scalability, and long-term flexibility.",
  },
  {
    icon: Gauge,
    title: "Lightning-Fast Performance",
    description:
      "Optimized for Core Web Vitals, fast loading, image optimization, intelligent caching, and exceptional user experience across every modern device.",
  },
  {
    icon: Search,
    title: "Technical SEO & AI Search Ready",
    description:
      "Every website is developed with semantic HTML, clean architecture, structured metadata, schema readiness, and AI Search Optimization best practices from day one.",
  },
  {
    icon: Smartphone,
    title: "Responsive Mobile-First Design",
    description:
      "Every page is fully responsive, ensuring a seamless experience across desktop, tablet, and mobile devices with a mobile-first development approach.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable Architecture",
    description:
      "Built using clean coding standards, accessibility guidelines, security best practices, and scalable architecture for long-term reliability.",
  },
  {
    icon: LayoutDashboard,
    title: "Designed for Sustainable Growth",
    description:
      "Your website is prepared for lead generation, future service expansion, AI visibility, analytics integration, automation, and continuous business growth.",
  },
];

export default function WebDevelopmentFeatures() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Everything Included"
        title="Enterprise-Grade Features Built Into Every Website"
        description="Every website we build combines premium development, technical excellence, AI Search Readiness, and long-term scalability—giving your business a future-proof digital foundation."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="group h-full transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              <Card.Body className="flex h-full flex-col">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title className="text-2xl">
                  {feature.title}
                </Card.Title>

                <Card.Description className="grow">
                  {feature.description}
                </Card.Description>
                </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-10">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">
            More Than Just a Website
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every project is developed with a long-term growth strategy in mind.
            We don't simply build visually appealing websites—we create digital
            platforms that combine performance, Technical SEO, AI Search
            Readiness, scalability, security, and conversion-focused design to
            help your business attract more qualified visitors and generate
            measurable results.
          </p>
        </div>
      </div>
          </Section>
  );
}
