import type { ReactNode } from "react";

import ServicePageSchema from "@/components/seo/ServicePageSchema";

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
    </>
  );
}
