export function GoogleMapsEmbed({ embedUrl }: { embedUrl: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200">
      <iframe
        src={embedUrl}
        title="Office location map"
        className="aspect-[4/3] w-full min-h-[280px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
