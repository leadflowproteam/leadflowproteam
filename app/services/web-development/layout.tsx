import type { ReactNode } from "react";

import ServiceRelatedLinks from "@/components/seo/ServiceRelatedLinks";

export default function WebDevelopmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}

      <ServiceRelatedLinks slug="web-development" />
    </>
  );
}
