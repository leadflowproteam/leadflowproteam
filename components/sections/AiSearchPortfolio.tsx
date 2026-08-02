import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Brain,
  Search,
  Sparkles,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: Search,
    title: "Technical SEO",
  },
  {
    icon: Brain,
    title: "Entity SEO",
  },
  {
    icon: Bot,
    title: "AI Search Optimization",
  },
  {
    icon: Sparkles,
    title: "Generative Engine Optimization",
  },
];

export default function AiSearchPortfolio() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Portfolio"
          title="Real AI Search Visibility Projects"
          description="Explore examples of how we combine Technical SEO, Entity SEO, structured data, and AI Search Optimization to help service businesses prepare for the future of search."
        />

        <div className="mt-16 rounded-[36px] border border-gray-200 bg-white p-10 shadow-sm">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-bold text-gray-900">
              AI Search Case Studies Coming Soon
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're currently documenting detailed case studies showing how
              businesses improve AI Search Visibility through structured data,
              Entity SEO, semantic content architecture, Technical SEO, and
              Generative Engine Optimization (GEO).
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-slate-50 p-5"
                  >
                    <Icon className="mx-auto h-8 w-8 text-blue-600" />

                    <p className="mt-4 font-semibold text-gray-900">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <Link href="/portfolio">
                <Button size="lg">
                  Explore Our Portfolio

                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}