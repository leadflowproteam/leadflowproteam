import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Brain,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const optimizationTypes = [
  {
    icon: Bot,
    title: "AEO",
    subtitle: "Answer Engine Optimization",
    description:
      "Optimize your business information so AI answer engines like ChatGPT, Gemini, and Claude can accurately cite and recommend your business when answering customer queries.",
    benefits: [
      "Direct citations in AI-generated answers",
      "Visibility in AI assistant conversations",
      "Featured when answering customer questions",
    ],
    color: "bg-blue-50 text-blue-600",
    accent: "border-blue-200",
  },
  {
    icon: Brain,
    title: "GEO",
    subtitle: "Generative Engine Optimization",
    description:
      "Structure your content so generative AI systems can confidently synthesize, summarize, and deliver your information in AI-generated search results and overviews across search engines.",
    benefits: [
      "Appear in AI Overviews and similar features",
      "Included in AI-synthesized comparisons",
      "Featured in generated summaries",
    ],
    color: "bg-violet-50 text-violet-600",
    accent: "border-violet-200",
  },
  {
    icon: Sparkles,
    title: "AIO",
    subtitle: "AI Optimization",
    description:
      "Comprehensive optimization across all AI-driven discovery systems. Ensures your business is visible, discoverable, and accurately represented wherever AI systems are used to answer questions or provide recommendations.",
    benefits: [
      "Visibility across multiple AI platforms",
      "Consistent representation across systems",
      "Long-term AI discovery strategy",
    ],
    color: "bg-amber-50 text-amber-600",
    accent: "border-amber-200",
  },
];

export default function AeoGeoAioExplainer() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="The New Visibility Landscape"
          title="AEO, GEO & AIO: Answer Engine Optimization"
          description="As AI becomes central to how customers search and discover businesses, traditional SEO alone isn't enough. Learn how Answer Engine Optimization, Generative Engine Optimization, and AI Optimization work together to ensure your business is visible where customers are looking."
          align="center"
        />

        {/* Three optimization types */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {optimizationTypes.map((type) => {
            const Icon = type.icon;

            return (
              <div
                key={type.title}
                className={`group h-full rounded-3xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8 ${type.accent}`}
              >
                {/* Icon and title */}
                <div className={`inline-flex rounded-2xl p-3 ${type.color}`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-950">
                  {type.title}
                </h3>

                <p className="mt-1 text-sm font-semibold text-slate-500">
                  {type.subtitle}
                </p>

                {/* Description */}
                <p className="mt-5 leading-7 text-slate-600">
                  {type.description}
                </p>

                {/* Benefits */}
                <div className="mt-7 border-t border-slate-100 pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    Key Benefits
                  </p>

                  <ul className="mt-4 space-y-2">
                    {type.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                      >
                        <div className={`mt-1.5 h-1.5 w-1.5 rounded-full ${type.color.split(" ")[1]}`} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison section */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-600 p-2.5">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wide text-slate-600">
                Why It Matters
              </p>
            </div>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
              Traditional SEO + Answer Engine Optimization = Complete Visibility
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              While traditional SEO (ranking in blue links) remains important, AI is transforming how customers discover businesses. ChatGPT has 200+ million weekly users, Gemini reaches billions through Google Search, and Perplexity is growing rapidly. Businesses that optimize only for traditional search miss the fastest-growing discovery channels. AEO, GEO, and AIO ensure your business is visible across the entire modern visibility landscape — from traditional search results to AI-generated answers and recommendations.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800"
              >
                Audit Your AI Visibility
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services/ai-visibility-framework"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Learn Our Framework
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
