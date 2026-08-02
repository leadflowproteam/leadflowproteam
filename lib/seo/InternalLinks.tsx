import Link from "next/link";

type LinkItem = {
  title: string;
  href: string;
};

type Props = {
  title: string;
  links: LinkItem[];
};

export default function InternalLinks({
  title,
  links,
}: Props) {
  return (
    <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-blue-700 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}