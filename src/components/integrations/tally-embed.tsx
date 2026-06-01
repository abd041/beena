export function TallyEmbed({
  formId,
  title = "Contact form",
}: {
  formId: string;
  title?: string;
}) {
  const src = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  return (
    <iframe
      src={src}
      title={title}
      className="min-h-[500px] w-full rounded-xl border border-neutral-200 bg-white"
      loading="lazy"
    />
  );
}
