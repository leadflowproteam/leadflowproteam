import {
  FileSearch,
  Gauge,
  Link2,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Gauge,
    title: "Core Web Vitals Optimization",
    description:
      "Improve loading speed, interaction responsiveness, and visual stability to deliver an exceptional user experience while meeting Google's Core Web Vitals performance standards.",
  },
  {
    icon: Search,
    title: "Advanced Crawlability & Indexing",
    description:
      "Ensure search engines efficiently crawl, understand, and index your website by resolving crawl errors, orphan pages, robots directives, XML sitemap issues, and indexing barriers.",
  },
  {
    icon: ShieldCheck,
    title: "Structured Data & Schema Markup",
    description:
      "Implement Schema.org structured data that improves machine understanding, supports rich search results, strengthens Entity SEO, and prepares your website for AI-powered search experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Performance",
    description:
      "Deliver a fast, responsive, and accessible experience across all devices while aligning with Google's mobile-first indexing requirements.",
  },
  {
    icon: FileSearch,
    title: "Comprehensive Technical SEO Audit",
    description:
      "Identify hidden technical issues including duplicate content, redirect chains, broken links, canonical conflicts, crawl budget waste, indexing problems, and performance bottlenecks.",
  },
  {
    icon: Link2,
    title: "Scalable Website Architecture",
    description:
      "Build a logical website hierarchy, clean URL structure, optimized internal linking, semantic relationships, and scalable information architecture for sustainable long-term growth.",
  },
];

export default function TechnicalSeoFeatures() {
  return (
    <Section className="bg-white py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Technical SEO Features"
        title="Everything Included in Our Technical SEO Service"
        description="Our Technical SEO framework strengthens your website's technical foundation, improves search engine accessibility, enhances user experience, and prepares your website for both traditional search engines and AI-powered search platforms."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          Technical SEO is more than fixing errors. It creates a solid
          infrastructure that allows search engines, AI systems, and users to
          access, understand, and trust your website more efficiently.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="group h-full overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              <Card.Body className="flex h-full flex-col p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title className="text-2xl leading-tight">
                  {feature.title}
                </Card.Title>

                <Card.Description className="mt-5 grow leading-8 text-slate-600">
                  {feature.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Technical SEO Is the Foundation of Long-Term Search Success
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A visually attractive website alone cannot achieve sustainable
            search visibility. Technical SEO ensures search engines can crawl,
            index, interpret, and trust your website while providing users with
            a fast, secure, and seamless browsing experience.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Stronger Search Foundation
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Create a technically healthy website that supports higher search
                visibility, improved indexing, and sustainable organic growth.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Better User Experience
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Improve loading speed, navigation, responsiveness, and overall
                usability to increase engagement, trust, and conversion rates.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Future-Ready Architecture
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Build a scalable technical infrastructure that remains
                compatible with future Google algorithm updates and AI-powered
                search technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}