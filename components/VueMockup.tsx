/* A brand-accurate, code-built recreation of the live VUE feed (vueniverse.com).
   Real product imagery, VUE's actual design tokens (cream / deep teal /
   Cormorant-style serif). Rendered in CSS, no screenshot. */

const products = [
  { img: "/assets/vue/p2.jpg", name: "Embroidered Drawstring Shorts", price: "$90" },
  { img: "/assets/vue/p3.jpg", name: "Tiered Babydoll Mini Dress", price: "$148" },
  { img: "/assets/vue/p4.jpg", name: "Faux Leather Crop Jacket", price: "$188" },
  { img: "/assets/vue/p6.jpg", name: "Pilcro Wide-Leg Trousers", price: "$128" },
  { img: "/assets/vue/p1.jpg", name: "Ryder Pintuck Shorts", price: "$88" },
  { img: "/assets/vue/p5.webp", name: "Colette Cropped Cardigan", price: "$110" },
  { img: "/assets/vue/p7.jpg", name: "Daily Practice Ribbed Tank", price: "$48" },
  { img: "/assets/vue/p2.jpg", name: "Maeve Linen Wrap Top", price: "$98" },
];

function Heart() {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/85 backdrop-blur">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 20s-7-4.35-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.65 12 20 12 20Z"
          stroke="#1E1C1A"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function VueMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-[#0e0e10] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
      {/* browser chrome */}
      <div className="flex items-center gap-3 border-b border-white/5 bg-[#141416] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex w-full max-w-sm items-center justify-center gap-2 rounded-md bg-black/30 px-3 py-1 text-[11px] text-white/45">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M12 1a5 5 0 0 0-5 5v4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm3 9H9V6a3 3 0 0 1 6 0v4Z" fill="currentColor"/>
          </svg>
          vueniverse.com
        </div>
      </div>

      {/* VUE app, light editorial surface */}
      <div className="bg-vue-cream text-vue-char">
        {/* top teal bar */}
        <div className="flex items-center justify-between bg-vue-teal px-5 py-2.5 text-white">
          <div className="flex items-baseline gap-3">
            <span className="vue-serif text-lg font-medium tracking-[0.08em]">
              VUE
            </span>
            <span className="hidden text-[9px] uppercase tracking-[0.22em] text-white/60 sm:inline">
              Every new drop. One feed.
            </span>
          </div>
          <span className="grid h-6 w-6 place-items-center rounded-full border border-white/30 text-[10px]">
            ◍
          </span>
        </div>

        {/* tabs */}
        <div className="flex items-center justify-center gap-6 border-b border-black/[0.06] bg-vue-cream px-5 py-2.5 text-[11px]">
          <span className="border-b-2 border-vue-char pb-1.5 font-medium text-vue-char">
            New Arrivals
          </span>
          <span className="pb-1.5 text-vue-gray">Discover</span>
          <span className="pb-1.5 text-vue-gray">Your Brands</span>
          <span className="pb-1.5 text-vue-gray">Wishlist</span>
        </div>

        {/* hero band */}
        <div className="relative overflow-hidden bg-gradient-to-r from-vue-teal to-[#0a3a3a] px-5 py-7 text-center text-white">
          <p className="vue-serif text-[clamp(1.1rem,2.4vw,1.6rem)] leading-tight">
            Your brands dropped 275 new styles
          </p>
          <p className="mx-auto mt-2 max-w-md text-[10px] leading-relaxed text-white/65">
            Edikted · Free People · Zara · Patagonia · Anthropologie · Lululemon
            · Aritzia · Farm Rio · and more
          </p>
          <span className="mt-3 inline-block rounded-full bg-white px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-vue-teal">
            See what dropped
          </span>
        </div>

        {/* today / this week */}
        <div className="flex items-center gap-4 px-5 pt-4 text-[11px]">
          <span className="border-b-2 border-vue-char pb-1 font-medium">Today</span>
          <span className="pb-1 text-vue-gray">This Week</span>
        </div>

        {/* brand section header */}
        <div className="flex items-center justify-between px-5 pt-4">
          <div className="flex items-baseline gap-2">
            <h4 className="vue-serif text-xl">Anthropologie</h4>
            <span className="text-[10px] text-vue-taupe">10 styles</span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="rounded-full border border-[#C0453E]/40 px-2.5 py-1 text-[#C0453E]">
              ♥ Following
            </span>
            <span className="rounded-full border border-black/15 px-2.5 py-1 text-vue-char">
              View All →
            </span>
          </div>
        </div>

        {/* product grid */}
        <div className="relative px-5 pb-6 pt-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {products.map((p, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-vue-cream2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute right-1.5 top-1.5">
                    <Heart />
                  </div>
                </div>
                <p className="mt-1.5 text-[8px] uppercase tracking-[0.14em] text-vue-taupe">
                  New Arrival
                </p>
                <p className="text-[10px] text-vue-char/80">Anthropologie</p>
                <p className="truncate text-[11px] font-medium leading-snug">
                  {p.name}
                </p>
                <p className="text-[11px] text-vue-char/70">{p.price}</p>
              </div>
            ))}
          </div>
          {/* fade the second row like the real infinite feed */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-vue-cream to-transparent" />
        </div>
      </div>
    </div>
  );
}
