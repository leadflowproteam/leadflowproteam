import type { ReactNode } from "react";

import ServicePageSchema from "@/components/seo/ServicePageSchema";
import ServiceRelatedLinks from "@/components/seo/ServiceRelatedLinks";

type AiSearchVisibilityAuditLayoutProps = {
  children: ReactNode;
};

export default function AiSearchVisibilityAuditLayout({
  children,
}: AiSearchVisibilityAuditLayoutProps) {
  return (
    <>
      <ServicePageSchema slug="ai-search-visibility-audit" />

      {children}

      <ServiceRelatedLinks slug="ai-search-visibility-audit" />
    </>
  );
}
