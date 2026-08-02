import { company } from "@/config/company";

export function organizationReference() {
  return {
    "@type": "Organization",

    name: company.name,

    url: company.url,

    logo: `${company.url}${company.logo}`,
  };
}