import type { ReactNode } from "react";

import ServicePageSchema from "@/components/seo/ServicePageSchema";

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
    </>
  );
}
