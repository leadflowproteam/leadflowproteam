import type { Metadata } from "next";

import ProofOfWork, {
  type PublicEvidenceItem,
} from "@/components/sections/ProofOfWork";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Proof of Work | AI Search Visibility Evidence",
  description:
    "Explore approved LeadFlowProTeam AI Search Visibility findings, gaps, improvements, and evidence from ongoing research and implementation work.",
  path: "/proof-of-work",
  keywords: [
    "AI Search Visibility Case Studies",
    "AI Visibility Evidence",
    "AI Search Audit Examples",
    "AI Visibility Proof",
  ],
});

async function getPublicEvidence(): Promise<
  PublicEvidenceItem[]
> {
  const scriptUrl =
    process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!scriptUrl) {
    return [];
  }

  try {
    const response = await fetch(
      `${scriptUrl}?action=publicEvidence`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    if (!data?.ok || !Array.isArray(data.items)) {
      return [];
    }

    return data.items as PublicEvidenceItem[];
  } catch {
    return [];
  }
}

export default async function ProofOfWorkPage() {
  const items = await getPublicEvidence();

  return (
    <main className="bg-white">
      <ProofOfWork items={items} />
    </main>
  );
}