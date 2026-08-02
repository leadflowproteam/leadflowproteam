import {
  BarChart3,
  Gauge,
  Search,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Gauge,
    title: "Lightning-Fast Website Performance",
    description:
      "Improve Core Web Vitals, loading speed, visual stability, and responsiveness to deliver an exceptional user experience while strengthening your search visibility.",
  },
  {
    icon: Search,
    title: "Higher Search Engine Visibility",
    description:
      "Resolve technical barriers that prevent Google and other search engines from efficiently crawling, indexing, and ranking your most valuable pages.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First User Experience",
    description:
      "Deliver consistent performance across desktops, tablets, and smartphones with responsive architecture that supports Google's mobile-first indexing.",
  },
  {
    icon: Wrench,
    title: "Stronger Technical Foundation",
    description:
      "Eliminate crawl errors, broken links, redirect chains, duplicate content, indexing issues, and technical weaknesses that limit website performance.",
  },
  {
    icon: ShieldCheck,
    title: "Future-Proof Website Architecture",
    description:
      "Build a technically stable, secure, scalable, and AI-ready website capable of adapting to future search engine algorithm updates.",
  },
  {
    icon: BarChart3,
    title: "Sustainable Organic Growth",
    description:
      "Create a robust Technical SEO foundation that supports higher rankings, qualified organic traffic, improved conversions, and long-term business growth.",
  },
];

export default function TechnicalSeoBenefits() {
  return (
    <Section>
      <SectionHeading
        badge="Benefits"
        title="Why Technical SEO Matters"
        description="Technical SEO creates the foundation that allows search engines to crawl, understand, and rank your website efficiently."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {benefits.map((benefit) => {
    const Icon = benefit.icon;

    return (
      <Card
        key={benefit.title}
        className="
          group
          h-full
          border
          border-slate-200
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-200
          hover:shadow-2xl
        "
      >
        <Card.Body className="flex h-full flex-col p-8">

          <div
            className="
              mb-6
              inline-flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-cyan-50
              text-cyan-600
              transition-all
              duration-300
              group-hover:bg-cyan-600
              group-hover:text-white
            "
          >
            <Icon className="h-8 w-8" />
          </div>

          <Card.Title className="leading-tight">
            {benefit.title}
          </Card.Title>

          <Card.Description className="mt-4 grow leading-8">
            {benefit.description}
          </Card.Description>

        </Card.Body>
      </Card>
    );
  })}
</div>
    </Section>
  );
}