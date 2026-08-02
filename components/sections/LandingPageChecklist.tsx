import {
  CheckCircle2,
  Search,
  Gauge,
  ShieldCheck,
  Smartphone,
  MousePointerClick,
  BarChart3,
  BrainCircuit,
  Rocket,
  Globe,
  Lock,
  TrendingUp,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const checklist = [
  {
    icon: MousePointerClick,
    title: "Conversion-Focused Layout",
    description:
      "Every section is designed to guide visitors toward submitting a form, requesting a quote, or booking your service.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Responsive Design",
    description:
      "Optimized for phones, tablets, and desktops to deliver a seamless experience on every device.",
  },
  {
    icon: Gauge,
    title: "Fast Loading Performance",
    description:
      "Built with Next.js and Core Web Vitals best practices to reduce loading time and improve user engagement.",
  },
  {
    icon: Search,
    title: "Technical SEO Foundation",
    description:
      "Includes metadata, structured headings, crawlability improvements, and search engine best practices.",
  },
  {
    icon: BrainCircuit,
    title: "AI Search Optimization",
    description:
      "Structured content prepared for modern AI-powered search engines and answer engines.",
  },
  {
    icon: Globe,
    title: "Schema Markup",
    description:
      "Structured data helps search engines understand your business and improve visibility.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation Strategy",
    description:
      "Every page is built to maximize inquiries, phone calls, and qualified business leads.",
  },
  {
    icon: BarChart3,
    title: "Analytics Ready",
    description:
      "Prepared for Google Analytics 4, Microsoft Clarity, and conversion tracking integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Accessibility Best Practices",
    description:
      "Clean semantic structure and user-friendly design for better usability and compliance.",
  },
  {
    icon: Lock,
    title: "Security Best Practices",
    description:
      "Modern development standards with secure coding principles and HTTPS-ready deployment.",
  },
  {
    icon: Rocket,
    title: "Deployment Ready",
    description:
      "Optimized for Vercel deployment with scalable architecture for future business growth.",
  },
  {
    icon: CheckCircle2,
    title: "Professional Quality Assurance",
    description:
      "Every landing page is tested for responsiveness, performance, SEO, and conversion readiness before launch.",
  },
];

export default function LandingPageChecklist() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="Everything Included"
        title="What Every Landing Page Project Includes"
        description="Every landing page is built using a professional framework that combines high-performance development, Technical SEO, AI Search Optimization, and conversion-focused design."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {checklist.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}