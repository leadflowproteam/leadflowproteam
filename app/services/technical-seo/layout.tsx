import type { ReactNode } from "react";

import ServiceRelatedLinks from "@/components/seo/ServiceRelatedLinks";

export default function TechnicalSeoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}

      <ServiceRelatedLinks slug="technical-seo" />
    </>
  );
}
