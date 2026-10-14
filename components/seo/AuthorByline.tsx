import { getAuthor, authorSchema } from "@/lib/author-engine";
import JsonLd from "@/components/seo/JsonLd";

type Props = {
  authorSlug: string;
};

/**
 * Visible author byline card with Person structured data —
 * signals E-E-A-T (who wrote this and why trust them).
 */
export default function AuthorByline({ authorSlug }: Props) {
  const author = getAuthor(authorSlug);

  if (!author) {
    return null;
  }

  const schema = authorSchema(authorSlug);

  return (
    <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
      {schema && <JsonLd data={schema} />}

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700">
          LFPT
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Written by
          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-900">
            {author.name}
          </h2>

          <p className="mt-1 text-sm font-medium text-slate-600">
            {author.jobTitle}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            {author.bio}
          </p>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Areas of expertise
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {author.expertise.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
