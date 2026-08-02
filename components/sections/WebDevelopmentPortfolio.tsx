import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Globe,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const portfolio = [
  {
    title: "PhotoClippService",
    category: "Professional Photo Editing Website",
    description:
      "A modern Next.js website developed for a professional photo editing company featuring Technical SEO, AI Search Optimization, Core Web Vitals optimization, responsive UI, and conversion-focused architecture.",
    image: "/images/portfolio/photoclippservice.webp",
    href: "/portfolio/photoclippservice",
  },
  {
    title: "Clipping Path Agent",
    category: "Business Service Website",
    description:
      "A production-ready business website built with a clean architecture, structured data, Technical SEO, lightning-fast performance, and lead generation best practices.",
    image: "/images/portfolio/clipping-path-agent.webp",
    href: "/portfolio/clipping-path-agent",
  },
];

export default function WebDevelopmentPortfolio() {
  return (
    <Section>
      <SectionHeading
  badge="Our Portfolio"
  title="Web Development That Drives Results"
  description="Explore the websites we have built for growing businesses."
/>

      <div className="grid gap-8 md:grid-cols-2">
        {portfolio.map((project) => (
  <Card
    key={project.title}
    className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
  >
    <div className="relative aspect-[16/9] overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

      <span className="absolute left-6 top-6 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-100 backdrop-blur-sm">
        {project.category}
      </span>
    </div>

    <Card.Body className="flex h-full flex-col">
      <Card.Title className="text-2xl">
        {project.title}
      </Card.Title>

      <Card.Description className="mt-4 grow leading-8">
        {project.description}
      </Card.Description>

      <div className="mt-8 flex items-center justify-between">
        <Link href={project.href}>
          <Button variant="outline">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        <Link
          href={project.href}
          className="text-cyan-600 transition-colors hover:text-cyan-700"
        >
          <ExternalLink className="h-5 w-5" />
        </Link>
      </div>
    </Card.Body>
  </Card>
        ))}
      </div>

      <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-10">
  <div className="mx-auto max-w-4xl text-center">
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
      <Globe className="h-4 w-4" />
      Real Business Projects
    </div>

    <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
      Every Project Reflects Our Development Standards
    </h3>

    <p className="mt-6 text-lg leading-8 text-slate-600">
      Every website we build follows the same high standards for modern
      development, Technical SEO, AI Search Readiness, responsive design,
      accessibility, performance optimization, and long-term scalability.
    </p>

    <div className="mt-10">
      <Link href="/portfolio">
        <Button size="lg">
          View All Portfolio
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  </div>
      </div>
    </Section>
  );
}
