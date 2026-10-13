import type { ReactNode } from "react";

import ServiceRelatedLinks from "@/components/seo/ServiceRelatedLinks";

export default function AiVisibilityFrameworkRelatedLinksLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}

      <ServiceRelatedLinks slug="ai-visibility-framework" />
    </>
  );
}
