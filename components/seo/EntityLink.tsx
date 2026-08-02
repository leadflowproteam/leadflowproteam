import Link from "next/link";

import { entities } from "@/data/entities";

type EntityLinkProps = {
  entity: string;
  className?: string;
};

export default function EntityLink({
  entity,
  className = "",
}: EntityLinkProps) {
  const matchedEntity = entities.find(
    (item) =>
      item.name.toLowerCase() === entity.toLowerCase(),
  );

  if (!matchedEntity) {
    return <>{entity}</>;
  }

  return (
    <Link
      href={`/entities/${matchedEntity.slug}`}
      className={`font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline ${className}`}
      title={matchedEntity.name}
    >
      {matchedEntity.name}
    </Link>
  );
}