import Link from "next/link";

import type { Entity } from "@/data/entities";

type EntityCardProps = {
  entity: Entity;
};

export default function EntityCard({
  entity,
}: EntityCardProps) {
  return (
    <Link
      href={`/entities/${entity.slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-lg"
    >
      <div className="mb-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
          {entity.type}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700">
        {entity.name}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {entity.description}
      </p>

      <div className="mt-5 text-sm font-semibold text-blue-600">
        Explore →
      </div>
    </Link>
  );
}