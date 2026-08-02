import Link from "next/link";

type TopicClusterItem = {
  title: string;
  href: string;
};

type TopicClusterProps = {
  title?: string;
  items: readonly TopicClusterItem[];
};

export default function TopicCluster({
  title = "Topic Cluster",
  items,
}: TopicClusterProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
      <h2 className="text-3xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 text-slate-600 leading-7">
        Explore related resources, services, entities, and industry pages to
        build a complete understanding of this topic.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-500 hover:bg-blue-50"
          >
            <span className="font-semibold text-slate-900">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}