import {
  CheckCircle2,
  Code2,
  Rocket,
  Search,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const developmentItems = [
  "Custom Next.js Development",
  "React + TypeScript Architecture",
  "Reusable Component System",
  "Responsive Mobile-First Design",
  "Cross-Browser Compatibility",
  "Clean & Scalable Codebase",
  "Performance Optimization",
  "Accessibility Best Practices",
];

const seoItems = [
  "Technical SEO Implementation",
  "Semantic HTML Structure",
  "Metadata Optimization",
  "Schema Markup",
  "XML Sitemap",
  "Robots.txt",
  "Canonical URLs",
  "Internal Linking Strategy",
];

const growthItems = [
  "AI Search Readiness",
  "Core Web Vitals Optimization",
  "Google Analytics Ready",
  "Conversion-Focused Layout",
  "Security Best Practices",
  "Scalable Website Architecture",
  "Future Feature Expansion",
  "Long-Term Growth Foundation",
];

type ChecklistCardProps = {
  icon: React.ElementType;
  title: string;
  items: readonly string[];
};

function ChecklistCard({
  icon: Icon,
  title,
  items,
}: ChecklistCardProps) {
    return (
    <Card className="group h-full transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl">
      <Card.Body className="flex h-full flex-col">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
          <Icon className="h-8 w-8" />
        </div>

        <Card.Title className="text-2xl">
          {title}
        </Card.Title>

        <ul className="mt-8 space-y-4">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />

              <span className="leading-7 text-slate-600">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default function WebDevelopmentChecklist() {
return (
  <Section className="bg-white">
    <SectionHeading
      badge="What's Included"
      title="Everything Included in Every Website We Build"
      description="Every project follows our proven development framework that combines modern engineering, Technical SEO, AI Search Readiness, performance optimization, and a scalable architecture for long-term business growth."
    />

    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      <ChecklistCard
        icon={Code2}
        title="Development"
        items={developmentItems}
      />

      <ChecklistCard
        icon={Search}
        title="SEO Foundation"
        items={seoItems}
      />

      <ChecklistCard
        icon={Rocket}
        title="Growth & Optimization"
        items={growthItems}
      />
    </div>

    <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-10">
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="text-3xl font-bold tracking-tight text-slate-900">
          More Than Just a Website
        </h3>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Every website we deliver is built to become a long-term digital
          business asset—not just an online brochure. Our process combines
          performance, search visibility, user experience, AI readiness, and
          scalability to help your business compete today and continue growing
          tomorrow.
        </p>
      </div>
    </div>
    </Section>
);
}