import {
  FileSearch,
  Gauge,
  Link2,
  SearchCheck,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: SearchCheck,
    title: "Improve Crawlability & Indexability",
    description:
      "Remove technical barriers that can prevent important pages from being efficiently discovered, crawled, or indexed.",
  },
  {
    icon: Link2,
    title: "Strengthen Site Architecture",
    description:
      "Improve URL structure, internal linking, navigation relationships, and information architecture so important content is easier to discover and understand.",
  },
  {
    icon: FileSearch,
    title: "Resolve Technical Errors",
    description:
      "Identify and address broken links, redirect problems, canonical conflicts, sitemap issues, duplicate-page risks, and other technical weaknesses.",
  },
  {
    icon: Gauge,
    title: "Improve Performance",
    description:
      "Address performance bottlenecks affecting loading, responsiveness, visual stability, asset delivery, and overall user experience.",
  },
  {
    icon: Smartphone,
    title: "Strengthen Mobile Experience",
    description:
      "Improve responsive behaviour, usability, content presentation, and technical implementation across mobile and desktop experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Create a More Reliable Foundation",
    description:
      "Establish cleaner technical foundations that make future SEO, content, AI visibility, and website improvements easier to implement and maintain.",
  },
];

export default function TechnicalSeoBenefits() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="Why Technical SEO Matters"
        title="Good Visibility Needs a Sound Technical Foundation"
        description="Technical SEO does not replace strong business information, useful content, local signals, or reputation. It makes the website itself easier to access, interpret, maintain, and improve."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <Card key={benefit.title} className="group h-full">
              <Card.Body className="flex h-full flex-col p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-950 group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                <Card.Title>{benefit.title}</Card.Title>

                <Card.Description className="grow">
                  {benefit.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
        <h3 className="text-2xl font-bold tracking-tight text-slate-950">
          Technical SEO as an Implementation Layer
        </h3>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          When an AI Search Visibility or website audit identifies genuine
          technical issues, Technical SEO can provide the implementation work
          needed to resolve them. That keeps the work connected to evidence and
          business priorities rather than selling technical changes without a
          defined reason.
        </p>
      </div>
    </Section>
  );
}
