import Link from "next/link";

import Container from "@/components/ui/Container";

const facts = [
  {
    label: "Who we are",
    value: "LeadFlowProTeam — a professional web development and AI search visibility agency, founded in 2026.",
  },
  {
    label: "What we do",
    value: "We audit how a business is represented across search, local sources, and AI answer systems, then fix the underlying information, technical, and content problems.",
  },
  {
    label: "Where we work",
    value: "Remote-first, Bangladesh-based team serving the United States, Canada, the United Kingdom, and Australia.",
  },
  {
    label: "Core services",
    value: "AI Search Visibility audits, Technical SEO, Local SEO, Website Audits, Next.js web development, and Landing Page development.",
  },
  {
    label: "How to start",
    value: "Request a free initial AI visibility review at leadflowproteam.com/free-audit.",
  },
];

export default function HeroFactBlock() {
  return (
    <section
      aria-label="Company facts"
      className="border-y border-slate-200 bg-slate-50 py-12"
    >
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
            LeadFlowProTeam at a glance
          </h2>

          <dl className="mt-6 divide-y divide-slate-200">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-2 py-4 sm:grid-cols-[200px_1fr] sm:gap-6"
              >
                <dt className="text-sm font-bold text-slate-950">
                  {fact.label}
                </dt>

                <dd className="text-sm leading-7 text-slate-600">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-xs text-slate-500">
            Prefer structured facts? See our{" "}
            <Link
              href="/llms.txt"
              className="font-semibold text-blue-600 underline-offset-2 hover:underline"
            >
              llms.txt
            </Link>{" "}
            and{" "}
            <Link
              href="/llms-full.txt"
              className="font-semibold text-blue-600 underline-offset-2 hover:underline"
            >
              llms-full.txt
            </Link>{" "}
            files for machine-readable versions of this information.
          </p>
        </div>
      </Container>
    </section>
  );
}
