import type { ReactNode } from "react";

import ServicePageSchema from "@/components/seo/ServicePageSchema";
import ServiceRelatedLinks from "@/components/seo/ServiceRelatedLinks";

type AiVisibilityFrameworkLayoutProps = {
  children: ReactNode;
};

export default function AiVisibilityFrameworkLayout({
  children,
}: AiVisibilityFrameworkLayoutProps) {
  return (
    <>
      <ServicePageSchema slug="ai-visibility-framework" />

      {children}

      <ServiceRelatedLinks slug="ai-visibility-framework" />
    </>
  );
}
