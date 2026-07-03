type BrowserFrameProps = {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  priority?: boolean;
};

export default function BrowserFrame({
  src,
  alt,
  url = "vueniverse.com",
  className = "",
  priority = false,
}: BrowserFrameProps) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-ink/10 bg-white shadow-[0_50px_140px_-50px_rgba(28,25,23,0.15)] ${className}`}
    >
      {/* chrome */}
      <div className="flex items-center gap-3 border-b border-ink/5 bg-ink-50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-1.5 rounded-md bg-ink/[0.04] px-3 py-1 text-[11px] text-ink/45">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 1a5 5 0 0 0-5 5v4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm3 9H9V6a3 3 0 0 1 6 0v4Z"
              fill="currentColor"
            />
          </svg>
          {url}
        </div>
      </div>
      {/* real screenshot */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="block w-full"
      />
    </figure>
  );
}
