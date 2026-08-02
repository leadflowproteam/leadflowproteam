import {
  Compass,
  Eye,
  Target,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To help service businesses grow through modern websites, technical SEO, AI-ready search optimization, and conversion-focused digital experiences.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a trusted digital growth partner for businesses worldwide by combining innovation, performance, and long-term strategy.",
  },
  {
    icon: Compass,
    title: "Our Promise",
    description:
      "Every project is built with quality, transparency, measurable results, and a commitment to helping our clients achieve sustainable growth.",
  },
];

export default function Mission() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="Mission & Vision"
        title="Driven by Purpose. Focused on Results."
        description="Everything we build is guided by a simple philosophy: create digital solutions that are fast, scalable, search-friendly, and designed to help businesses grow."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="group h-full"
            >
              <Card.Body className="flex h-full flex-col">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title>
                  {item.title}
                </Card.Title>

                <Card.Description className="grow">
                  {item.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}