import type { ReactNode } from "react";

import ServiceRelatedLinks from "@/components/seo/ServiceRelatedLinks";

type WebsiteAuditLayoutProps = {
  children: ReactNode;
};

export default function WebsiteAuditLayout({
  children,
}: WebsiteAuditLayoutProps) {
  return (
    <>
      {children}

      <ServiceRelatedLinks slug="website-audit" />
    </>
  );
}
