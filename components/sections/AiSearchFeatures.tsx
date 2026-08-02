import {
  Brain,
  Database,
  FileText,
  Globe,
  Network,
  Sparkles,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Brain,
    title: "AI Search Optimization",
    description:
      "Optimize your website for AI-powered search engines like ChatGPT, Gemini, Claude, and Perplexity.",
  },
  {
    icon: Database,
    title: "Structured Data",
    description:
      "Implement Schema.org markup so AI systems can better understand your business and services.",
  },
  {
    icon: Network,
    title: "Entity SEO",
    description:
      "Strengthen your brand entities and relationships to improve AI understanding and knowledge graph visibility.",
  },
  {
    icon: FileText,
    title: "AI-Friendly Content",
    description:
      "Create well-structured content that is easy for both users and AI models to interpret.",
  },
  {
    icon: Globe,
    title: "Generative Engine Optimization",
    description:
      "Prepare your website for the future of AI-generated search experiences and answer engines.",
  },
  {
    icon: Sparkles,
    title: "Future-Proof Strategy",
    description:
      "Build a long-term SEO strategy designed for both traditional search engines and modern AI platforms.",
  },
];

export default function AiSearchFeatures() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="AI Search Features"
        title="Prepare Your Website for the Future of Search"
        description="We combine technical excellence, structured data, and AI-focused optimization to help your business become more visible across the next generation of search platforms."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="group h-full"
            >
              <Card.Body className="flex h-full flex-col">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title>
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
    </Section>
  );
}