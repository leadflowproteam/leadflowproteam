import Link from "next/link";

import { company } from "@/config/company";

type LogoProps = {
  showTagline?: boolean;
};

export default function Logo({
  showTagline = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={company.name}
      className="inline-flex flex-col"
    >
      <span className="text-2xl font-bold tracking-tight text-gray-900">
        {company.name}
      </span>

      {showTagline && (
        <span className="text-xs text-gray-500">
          {company.slogan}
        </span>
      )}
    </Link>
  );
}