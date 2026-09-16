"use client";

import { useEffect, useMemo, useState } from "react";

export type PublicEvidenceItem = {
  id?: string | number;
  slug?: string;
  title?: string;
  industry?: string;
  market?: string;

  problemGap?: string;
  problem?: string;
  gap?: string;

  whatWeDid?: string;
  workDone?: string;

  resultImprovement?: string;
  result?: string;
  improvement?: string;

  status?: string;
  publishedDate?: string;
  lastReviewed?: string;
  publicSource?: string;
  evidenceType?: string;
};

type ProofOfWorkProps = {
  items?: PublicEvidenceItem[];
};

const APPS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_PUBLIC_EVIDENCE_URL?.trim() || "";

const exampleEvidence: PublicEvidenceItem[] = [
  {
    id: "example-1",
    title: "Business is present online, but weakly represented in AI answers",
    industry: "Hospitality",
    market: "Texas, USA",
    evidenceType: "Audit Finding Example",
    problemGap:
      "The business may appear in traditional search and local listings, yet relevant AI queries can fail to surface it or may provide incomplete business context.",
    whatWeDid:
      "Tested business-name, service, and location-focused queries and compared AI responses with the business's verified website and local information.",
    resultImprovement:
      "Identified the information gaps that should be addressed across the website, local profiles, structured data, and supporting sources before re-testing visibility.",
    status: "Example",
  },
  {
    id: "example-2",
    title: "Website and local information are not fully consistent",
    industry: "Local Services",
    market: "United States",
    evidenceType: "Audit Finding Example",
    problemGap:
      "Important business details such as services, hours, location information, or positioning can differ between the website and external business listings.",
    whatWeDid:
      "Compared the website's business information against publicly available local and business-profile sources and documented each material inconsistency.",
    resultImprovement:
      "Created a prioritized consistency checklist showing which information should be corrected, where it should be updated, and what should be verified afterward.",
    status: "Example",
  },
  {
    id: "example-3",
    title: "Customer questions reveal an information gap",
    industry: "Hospitality",
    market: "Texas, USA",
    evidenceType: "Query Test Example",
    problemGap:
      "A business can have a functioning website while still providing insufficient information for customer questions such as services, pricing guidance, location, availability, or comparisons.",
    whatWeDid:
      "Built a repeatable customer-query set and compared expected answers with what AI and search systems were able to discover from available public information.",
    resultImprovement:
      "Converted the findings into a prioritized action plan for content, service information, structured data, local signals, and future visibility re-testing.",
    status: "Example",
  },
];

function formatDate(value?: string) {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function normalizeItems(data: unknown): PublicEvidenceItem[] {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((item, index) => {
    const source =
      typeof item === "object" && item !== null
        ? (item as Record<string, unknown>)
        : {};

    return {
      id:
        typeof source.id === "string" || typeof source.id === "number"
          ? source.id
          : index + 1,

      slug:
        typeof source.slug === "string"
          ? source.slug
          : undefined,

      title:
        typeof source.title === "string"
          ? source.title
          : undefined,

      industry:
        typeof source.industry === "string"
          ? source.industry
          : undefined,

      market:
        typeof source.market === "string"
          ? source.market
          : undefined,

      problemGap:
        typeof source.problemGap === "string"
          ? source.problemGap
          : typeof source["Problem / Gap"] === "string"
            ? source["Problem / Gap"]
            : undefined,

      problem:
        typeof source.problem === "string"
          ? source.problem
          : undefined,

      gap:
        typeof source.gap === "string"
          ? source.gap
          : undefined,

      whatWeDid:
        typeof source.whatWeDid === "string"
          ? source.whatWeDid
          : typeof source["What We Did"] === "string"
            ? source["What We Did"]
            : undefined,

      workDone:
        typeof source.workDone === "string"
          ? source.workDone
          : undefined,

      resultImprovement:
        typeof source.resultImprovement === "string"
          ? source.resultImprovement
          : typeof source["Result / Improvement"] === "string"
            ? source["Result / Improvement"]
            : undefined,

      result:
        typeof source.result === "string"
          ? source.result
          : undefined,

      improvement:
        typeof source.improvement === "string"
          ? source.improvement
          : undefined,

      status:
        typeof source.status === "string"
          ? source.status
          : typeof source["Status"] === "string"
            ? source["Status"]
            : undefined,

      publishedDate:
        typeof source.publishedDate === "string"
          ? source.publishedDate
          : typeof source["Published Date"] === "string"
            ? source["Published Date"]
            : undefined,

      lastReviewed:
        typeof source.lastReviewed === "string"
          ? source.lastReviewed
          : typeof source["Last Reviewed"] === "string"
            ? source["Last Reviewed"]
            : undefined,

      publicSource:
        typeof source.publicSource === "string"
          ? source.publicSource
          : typeof source["Public Source"] === "string"
            ? source["Public Source"]
            : undefined,

      evidenceType:
        typeof source.evidenceType === "string"
          ? source.evidenceType
          : typeof source["Evidence Type"] === "string"
            ? source["Evidence Type"]
            : undefined,
    };
  });
}

export default function ProofOfWork({
  items = [],
}: ProofOfWorkProps) {
  const [remoteItems, setRemoteItems] = useState<PublicEvidenceItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadPublicEvidence() {
      if (!APPS_SCRIPT_URL || items.length > 0) {
        return;
      }

      try {
        setLoading(true);

        const separator = APPS_SCRIPT_URL.includes("?")
          ? "&"
          : "?";

        const response = await fetch(
          `${APPS_SCRIPT_URL}${separator}action=publicEvidence`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
            cache: "no-store",
          },
        );

        if (!response.ok) {
          throw new Error("Unable to load public evidence.");
        }

        const data: unknown = await response.json();

        if (!cancelled) {
          setRemoteItems(normalizeItems(data));
        }
      } catch {
        if (!cancelled) {
          setRemoteItems([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadPublicEvidence();

    return () => {
      cancelled = true;
    };
  }, [items.length]);

  const displayItems = useMemo(() => {
    /*
     * Priority:
     * 1. Explicit items passed by the parent
     * 2. Approved Public Evidence from Google Apps Script
     * 3. Clearly-labelled audit examples
     */
    if (items.length > 0) {
      return {
        data: items,
        examples: false,
      };
    }

    if (remoteItems.length > 0) {
      return {
        data: remoteItems,
        examples: false,
      };
    }

    return {
      data: exampleEvidence,
      examples: true,
    };
  }, [items, remoteItems]);

  return (
    <section
      aria-labelledby="proof-of-work-heading"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm">
            Evidence &amp; Proof
          </span>

          <h2
            id="proof-of-work-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            See What an AI Visibility Audit Looks For
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We look beyond rankings to examine how a business is represented,
            discovered, understood, and trusted across search, local sources,
            and AI answer systems.
          </p>
        </div>

        {loading && (
          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />

            <p className="text-sm text-slate-600">
              Checking approved public evidence…
            </p>
          </div>
        )}

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {displayItems.data.map((item, index) => {
            const problemText =
              item.problemGap ||
              item.problem ||
              item.gap;

            const workText =
              item.whatWeDid ||
              item.workDone;

            const resultText =
              item.resultImprovement ||
              item.result ||
              item.improvement;

            return (
              <article
                key={item.id ?? item.slug ?? index}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {item.industry && (
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {item.industry}
                      </span>
                    )}

                    {item.market && (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {item.market}
                      </span>
                    )}
                  </div>

                  <span
                    className="shrink-0 rounded-xl bg-slate-950 p-2 text-white"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z"
                        strokeLinecap="round"
                      />

                      <path
                        d="M8 8h8M8 12h8M8 16h5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>

                <div className="mt-5">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {item.evidenceType ||
                      (displayItems.examples
                        ? "Audit Finding Example"
                        : "Evidence")}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                    {item.title || "Visibility finding"}
                  </h3>
                </div>

                <div className="mt-6 space-y-5">
                  {problemText && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        Gap Identified
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {problemText}
                      </p>
                    </div>
                  )}

                  {workText && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        Investigation
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {workText}
                      </p>
                    </div>
                  )}

                  {resultText && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        Recommended Outcome
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {resultText}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-6">
                  <div className="border-t border-slate-100 pt-5">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                      {item.status && (
                        <span>
                          <span className="font-semibold text-slate-700">
                            Status:
                          </span>{" "}
                          {item.status}
                        </span>
                      )}

                      {item.publishedDate && (
                        <span>
                          <span className="font-semibold text-slate-700">
                            Published:
                          </span>{" "}
                          {formatDate(item.publishedDate)}
                        </span>
                      )}

                      {item.lastReviewed && (
                        <span>
                          <span className="font-semibold text-slate-700">
                            Reviewed:
                          </span>{" "}
                          {formatDate(item.lastReviewed)}
                        </span>
                      )}
                    </div>

                    {item.publicSource && (
                      <a
                        href={item.publicSource}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900"
                      >
                        View public source
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Evidence-first by design
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Public examples show the type of evidence we evaluate. Verified
                client findings will replace examples only after review and
                approval.
              </p>
            </div>

            <a
              href="/free-audit"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Request an Audit
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
