import Reveal from "./Reveal";
import PhoneFrame from "./PhoneFrame";
import { site } from "@/lib/site";

const contributions = [
  {
    no: "01",
    tag: "Product design",
    title: "Designed a personalized feed experience",
    body: "The feed is the product. Anonymous visitors see every brand's newest arrivals; the moment you follow the labels you actually care about, the feed collapses to just those drops — grouped by brand, newest first, with real names and real prices pulled straight from each storefront. I designed the whole flow in Figma and shipped it in React.",
    points: [
      "Follow to personalize — anonymous sees everything, followed brands float to the top.",
      "Real products, real prices, direct brand links. Nothing mocked, nothing stale.",
      "Save anywhere: the native VUE wishlist, or route a piece to Pinterest, ShopMy, or LTK.",
    ],
    shots: [
      {
        src: "/vue-mobile-feed.png",
        alt: "The VUE feed on mobile: New Arrivals, dated, with brand sections and real product cards.",
      },
      {
        src: "/vue-mobile-feed-cards.png",
        alt: "The feed scrolled to show the consistent product-card rhythm across brands.",
      },
    ],
    caption: "One feed, grouped by brand — a single card rhythm across every label.",
  },
  {
    no: "02",
    tag: "Data architecture",
    title: "Built a system that scales itself",
    body: "Behind the feed, 100+ scrapers run on six-hour intervals, keeping roughly 23.5K products live and current. It launched tracking 28 brands; adding the next one is now a config entry, not an engineering project. A dual pipeline — Deno and Playwright on Supabase Edge Functions — normalizes a hundred different catalog shapes (inconsistent image ratios, names from “Ryder Pintuck Shorts” to bare SKUs, prices buried in shifting markup) into the one card shape the feed renders. The hard part was never scraping. It was designing a system where the hundredth brand costs the same as the second.",
    points: [
      "100+ brands, ~23.5K products, refreshed every 6 hours — automated end to end, scrape to feed.",
      "Dual pipeline: Deno + Playwright on Supabase Edge Functions.",
      "Onboarding a brand is a config entry, not a rebuild — the calendar grows itself.",
    ],
    shots: [
      {
        src: "/vue-mobile-feed-scale.png",
        alt: "The feed's weekly roll-up: dozens of brands with live new-style counts.",
      },
      {
        src: "/vue-mobile-brands.png",
        alt: "The fashion drop calendar: 100+ brands organized by tier in one directory.",
      },
    ],
    caption: "Live style counts and a tiered drop calendar — the surface of a self-refreshing pipeline.",
  },
  {
    no: "03",
    tag: "Interaction design",
    title: "Made mobile feel native",
    body: "VUE is mobile-first. Every surface is designed for a thumb first and a desktop second — a single-column feed with a consistent card cadence, an editorial type system that lets a hundred brands scan cleanly in one scroll, and a layout that reflows into a directory and multi-column grid on larger screens. It reads like a native shopping app, not a website squeezed onto a phone.",
    points: [
      "Mobile-first single column, thumb-scaled cards and tap targets.",
      "One typographic system normalizes 100+ brands into a scannable cadence.",
      "Responsive by design — the phone feed reflows into a desktop directory.",
    ],
    shots: [
      {
        src: "/vue-mobile-landing.png",
        alt: "The VUE landing on mobile: Every new drop, one feed, with a live product carousel.",
      },
    ],
    caption: "The front door, built for the phone first.",
  },
];

export default function CaseStudyVue() {
  return (
    <section id="vue" className="scroll-mt-24 border-t border-line px-6 py-28">
      <div className="mx-auto max-w-content">
        {/* header */}
        <Reveal>
          <p className="eyebrow">Case Study 01: VUE</p>
        </Reveal>
        <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal delay={0.05}>
              <h2 className="text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-none tracking-[-0.03em] text-gradient">
                VUE
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/55">
                A fashion-intelligence platform I designed in Figma and shipped
                in code. Solo. It&apos;s live, it&apos;s monetized, and people
                use it.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href={site.links.vue}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-ink-50 px-5 py-2.5 text-sm text-ink/75 transition-all hover:border-accent/40 hover:text-ink"
            >
              Visit {site.links.vueLabel}
              <span className="transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </Reveal>
        </div>

        {/* scale line */}
        <Reveal delay={0.05}>
          <p className="mt-8 text-[13px] tracking-wide text-ink/40">
            100+ brands{" "}
            <span className="px-1.5 text-ink/20">&middot;</span> 23.5K+ products
            tracked <span className="px-1.5 text-ink/20">&middot;</span> refreshed
            every 6 hours
          </p>
        </Reveal>

        {/* contributions */}
        <div className="mt-20 space-y-24 sm:space-y-32">
          {contributions.map((c, i) => {
            const phonesRight = i % 2 === 0;
            return (
              <Reveal key={c.no}>
                <div className="grid items-center gap-12 sm:grid-cols-2 sm:gap-16">
                  {/* text */}
                  <div className={phonesRight ? "sm:order-1" : "sm:order-2"}>
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-3xl text-accent/70">
                        {c.no}
                      </span>
                      <span className="inline-block rounded-full border border-line bg-[#FAF8F5] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-ink/45">
                        {c.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[clamp(1.4rem,3vw,1.9rem)] font-semibold leading-tight tracking-[-0.02em] text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/55">
                      {c.body}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {c.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-2.5 text-[0.95rem] leading-relaxed text-ink/55"
                        >
                          <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* phones */}
                  <div className={phonesRight ? "sm:order-2" : "sm:order-1"}>
                    {c.shots.length > 1 ? (
                      <div className="flex justify-center gap-4 sm:gap-5">
                        <PhoneFrame
                          src={c.shots[0].src}
                          alt={c.shots[0].alt}
                          priority={i === 0}
                          className="max-w-[195px]"
                        />
                        <PhoneFrame
                          src={c.shots[1].src}
                          alt={c.shots[1].alt}
                          className="mt-10 max-w-[195px] sm:mt-14"
                        />
                      </div>
                    ) : (
                      <PhoneFrame
                        src={c.shots[0].src}
                        alt={c.shots[0].alt}
                        className="mx-auto max-w-[258px]"
                      />
                    )}
                    <p className="mt-6 text-center text-[12px] leading-relaxed text-ink/35">
                      {c.caption}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* live CTA */}
        <Reveal delay={0.05}>
          <a
            href={site.links.vue}
            target="_blank"
            rel="noreferrer"
            className="group mt-24 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-ink-50 p-8 transition-all hover:border-accent/40 sm:flex-row sm:items-center sm:p-10"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                See it live
              </p>
              <p className="mt-3 max-w-md text-[1.15rem] leading-snug text-ink/80">
                The product is in production with real users. Open it, follow a
                brand, and watch the feed become yours.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-[#FAF8F5] transition-transform group-hover:translate-x-0.5">
              {site.links.vueLabel}
              <span>↗</span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
