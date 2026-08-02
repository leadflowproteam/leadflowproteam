type JsonLdProps = {
  data: object;
};

export default function JsonLd({
  data,
}: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}