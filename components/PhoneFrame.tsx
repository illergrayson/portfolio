type PhoneFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

// A restrained, editorial phone mockup: charcoal bezel, rounded screen,
// soft shadow. Screenshots already include the VUE app chrome, so there is
// no fake status bar / notch overlaying real content.
export default function PhoneFrame({
  src,
  alt,
  priority = false,
  className = "",
}: PhoneFrameProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="rounded-[2rem] border border-ink/15 bg-ink p-[5px] shadow-[0_36px_80px_-38px_rgba(28,25,23,0.5)]">
        <div className="overflow-hidden rounded-[1.65rem] bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            className="block w-full"
          />
        </div>
      </div>
    </div>
  );
}
