import type { ReactNode } from "react";

import ServiceRelatedLinks from "@/components/seo/ServiceRelatedLinks";

export default function AiSearchVisibilityLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}

      <ServiceRelatedLinks slug="ai-search-visibility" />
    </>
  );
}
