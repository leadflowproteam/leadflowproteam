import type { ReactNode } from "react";

import ComparisonBlock from "@/components/seo/ComparisonBlock";
import ServiceRelatedLinks from "@/components/seo/ServiceRelatedLinks";

export default function AiSearchVisibilityLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}

      <ComparisonBlock serviceSlug="ai-search-visibility" />

      <ServiceRelatedLinks slug="ai-search-visibility" />
    </>
  );
}
