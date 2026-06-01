export function ArticleProse({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-forest prose-a:text-forest prose-a:no-underline hover:prose-a:text-gold">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
