import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function AboutStory() {
  const highlights = [
    "Modern Next.js Development",
    "Technical SEO Best Practices",
    "AI Search Optimization (AEO & GEO)",
    "Performance & Core Web Vitals",
  ];

  return (
    <Section className="bg-white">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Story
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
            Helping Businesses Build Better Digital Experiences
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            LeadFlowProTeam was founded with one clear mission—to help service
            businesses succeed online through high-performance websites,
            technical SEO, and AI-ready digital strategies.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe that a website should do more than look beautiful. It
            should load fast, rank higher in search engines, and convert
            visitors into real customers.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-blue-600" />

                <span className="font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/services">
              <Button className="group">
                Explore Our Services

                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative">
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-slate-50 to-blue-50 p-10 shadow-sm">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  Our Vision
                </p>

                <h3 className="mt-3 text-2xl font-bold text-gray-900">
                  Build Faster. Rank Smarter. Grow Better.
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Our goal is to become a trusted digital growth partner for
                  businesses by combining web development, SEO, and AI search
                  optimization into one powerful solution.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-8">
                <div>
                  <h4 className="text-3xl font-bold text-blue-600">
                    100%
                  </h4>

                  <p className="mt-2 text-sm text-gray-600">
                    Performance Focused
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-blue-600">
                    SEO
                  </h4>

                  <p className="mt-2 text-sm text-gray-600">
                    Built Into Every Project
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-blue-600">
                    AI
                  </h4>

                  <p className="mt-2 text-sm text-gray-600">
                    Search Ready Strategy
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-blue-600">
                    UX
                  </h4>

                  <p className="mt-2 text-sm text-gray-600">
                    Conversion Driven Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}