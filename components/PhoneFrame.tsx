type PhoneFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

/**
 * Realistic iPhone 15 Pro mockup.
 *
 * All geometry is expressed in container-query width units (`cqw`) so the
 * proportions — corner radii, titanium bezel, Dynamic Island — stay correct at
 * any rendered width and shrink responsively with the layout. The outer wrapper
 * is the query container; every nested value reads off its inline size.
 *
 *   frame corner  ≈ 14.5% of width  (Apple's ~13–15% ratio)
 *   titanium band ≈ 1.4%  (the thin ~2–3px bezel)
 *   black screen border ≈ 2%
 *   Dynamic Island ≈ 30% wide, pill, centered near the top
 *
 * The screenshots are pure app content (no status bar), so the Island floats
 * over the top of the screen exactly as it does on a real device.
 */
export default function PhoneFrame({
  src,
  alt,
  priority = false,
  className = "",
}: PhoneFrameProps) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ containerType: "inline-size" }}
    >
      {/* side buttons — sit behind the titanium band, protruding at the edge */}
      {/* left: action button + volume up/down */}
      <span
        aria-hidden
        className="absolute left-0 z-0"
        style={{
          top: "17%",
          width: "1.1cqw",
          height: "6cqw",
          transform: "translateX(-45%)",
          borderRadius: "1cqw",
          background: "linear-gradient(90deg,#8f8a84,#c8c3bd)",
        }}
      />
      <span
        aria-hidden
        className="absolute left-0 z-0"
        style={{
          top: "28%",
          width: "1.1cqw",
          height: "9cqw",
          transform: "translateX(-45%)",
          borderRadius: "1cqw",
          background: "linear-gradient(90deg,#8f8a84,#c8c3bd)",
        }}
      />
      <span
        aria-hidden
        className="absolute left-0 z-0"
        style={{
          top: "41%",
          width: "1.1cqw",
          height: "9cqw",
          transform: "translateX(-45%)",
          borderRadius: "1cqw",
          background: "linear-gradient(90deg,#8f8a84,#c8c3bd)",
        }}
      />
      {/* right: side/power button */}
      <span
        aria-hidden
        className="absolute right-0 z-0"
        style={{
          top: "30%",
          width: "1.1cqw",
          height: "13cqw",
          transform: "translateX(45%)",
          borderRadius: "1cqw",
          background: "linear-gradient(270deg,#8f8a84,#c8c3bd)",
        }}
      />

      {/* titanium frame */}
      <div
        className="relative z-10"
        style={{
          borderRadius: "14.5cqw",
          padding: "1.4cqw",
          background:
            "linear-gradient(135deg,#e2ded9 0%,#b9b4ae 20%,#d7d2cc 40%,#a49f99 60%,#cbc6c0 80%,#9c9791 100%)",
          boxShadow:
            "0 2px 4px rgba(28,25,23,0.10), 0 10px 20px rgba(28,25,23,0.12), 0 30px 60px -18px rgba(28,25,23,0.38), inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -1px 1px rgba(0,0,0,0.28)",
        }}
      >
        {/* black screen border */}
        <div
          style={{
            borderRadius: "13.1cqw",
            padding: "2cqw",
            background: "#050505",
            boxShadow: "inset 0 0 0.6cqw rgba(0,0,0,0.9)",
          }}
        >
          {/* screen — clips the screenshot */}
          <div
            className="relative overflow-hidden bg-white"
            style={{ borderRadius: "11cqw" }}
          >
            {/* Dynamic Island */}
            <div
              aria-hidden
              className="absolute left-1/2 z-20 flex items-center justify-end"
              style={{
                top: "2.6cqw",
                width: "30cqw",
                height: "8.4cqw",
                transform: "translateX(-50%)",
                borderRadius: "999px",
                background: "#050505",
                paddingRight: "2.4cqw",
              }}
            >
              {/* front camera lens */}
              <span
                style={{
                  width: "2.4cqw",
                  height: "2.4cqw",
                  borderRadius: "999px",
                  background:
                    "radial-gradient(circle at 35% 30%, #2b2b3a 0%, #0a0a12 60%, #050505 100%)",
                }}
              />
            </div>

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
    </div>
  );
}
