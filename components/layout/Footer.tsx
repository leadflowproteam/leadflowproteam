import Link from "next/link";
import Container from "@/components/ui/Container";

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function CheckBadgeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-emerald-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 5 6v5c0 4.5 2.8 8.3 7 10 4.2-1.7 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  {
    label: "Website Development",
    href: "/services/web-development",
  },
  {
    label: "Technical SEO",
    href: "/services/technical-seo",
  },
  {
    label: "AI Search Visibility",
    href: "/services/ai-search-visibility",
  },
  {
    label: "Website Audit",
    href: "/services/website-audit",
  },
  {
    label: "Landing Page Development",
    href: "/services/landing-page-development",
  },
];

const resourceLinks = [
  {
    label: "Knowledge Center",
    href: "/resources",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Service Locations",
    href: "/locations/new-york-ny",
  },
];

const featureItems = [
  "Next.js Development",
  "Technical SEO",
  "AI Search Visibility",
  "Core Web Vitals Optimization",
];

const technologyTags = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Vercel",
  "Technical SEO",
  "AI Search Visibility",
  "Core Web Vitals",
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        {/* =========================================================
            MAIN FOOTER
        ========================================================= */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight text-slate-950"
            >
              LeadFlowProTeam
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-600">
              LeadFlowProTeam engineers AI-ready websites for service-based
              businesses with modern Next.js development, Technical SEO, AI
              Search Visibility, and performance optimization.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-base font-semibold text-slate-950">
              Navigation
            </h2>

            <nav className="mt-6" aria-label="Footer navigation">
              <ul className="space-y-4">
                {navigationLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-base font-semibold text-slate-950">
              Services
            </h2>

            <nav className="mt-6" aria-label="Footer services">
              <ul className="space-y-4">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-slate-600 transition-colors hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-base font-semibold text-slate-950">
              Resources
            </h2>

            <nav className="mt-6" aria-label="Footer resources">
              <ul className="space-y-4">
                {resourceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-base font-semibold text-slate-950">
              Contact
            </h2>

            <div className="mt-6 space-y-5">
              <a
                href="mailto:info@leadflowproteam.com"
                className="flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600"
              >
                <MailIcon />

                <span className="break-all">
                  info@leadflowproteam.com
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-600">
                <MapPinIcon />

                <span>Bangladesh</span>
              </div>

              <div className="rounded-2xl bg-slate-50 px-5 py-4">
                <p className="text-sm font-semibold text-slate-950">
                  Working Hours
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Monday – Friday
                  <br />
                  9:00 AM – 6:00 PM (EST)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            FEATURE STRIP
        ========================================================= */}
        <div className="border-t border-slate-200">
          <div className="grid grid-cols-1 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {featureItems.map((item, index) => (
              <div
                key={item}
                className={[
                  "flex items-center gap-3 px-0 py-3 text-sm font-medium text-slate-700",
                  "lg:justify-center lg:px-6",
                  index !== 0 ? "border-slate-200 lg:border-l" : "",
                ].join(" ")}
              >
                <CheckBadgeIcon />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            TECHNOLOGY TAGS
        ========================================================= */}
        <div className="border-t border-slate-200 py-8">
          <div className="flex flex-wrap justify-center gap-3">
            {technologyTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-100 bg-blue-50/60 px-4 py-2 text-xs font-medium text-blue-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* =========================================================
            LEGAL FOOTER
        ========================================================= */}
        <div className="border-t border-slate-200 py-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Copyright */}
            <p className="text-center text-sm text-slate-500 lg:text-left">
              © 2026 LeadFlowProTeam. All rights reserved.
            </p>

            {/* Legal Links */}
            <nav aria-label="Legal navigation">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    Terms
                  </Link>
                </li>

                <li>
                  <Link
                    href="/resources"
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    Resources
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}