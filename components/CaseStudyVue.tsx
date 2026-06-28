import Reveal from "./Reveal";
import VueMockup from "./VueMockup";
import { site } from "@/lib/site";

const stats = [
  { n: "100+", l: "brands in one feed" },
  { n: "1", l: "person, end to end" },
  { n: "Live", l: "in production, real users" },
  { n: "97/98", l: "mobile / desktop PageSpeed" },
];

const decisions = [
  {
    no: "01",
    title: "A component system with taste built in",
    body: "I built the UI on Radix primitives and shadcn for accessible, unstyled foundations, then layered an editorial design system on top — a Cormorant-and-Inter type pairing, a warm cream-and-deep-teal palette, glassmorphic surfaces. Accessibility from the primitives, point of view from the design language.",
  },
  {
    no: "02",
    title: "Conversion UX through intent-based auth gating",
    body: "Early on, a login wall sat at the front door and killed acquisition. I reframed it to the brand-site model: anyone browses the full feed freely, and auth is requested only at the moment of intent — follow a brand, save an item. The pending action re-runs the instant you sign in, so you never lose your place.",
  },
  {
    no: "03",
    title: "Information architecture for 100+ brands",
    body: "With hundreds of brands dropping daily, ordering is the product. The feed is recency-first — the brand with the freshest drop rises to the top — wrapped in flow-based journeys: Daily Drops, per-brand hubs, a Discover directory, and a Wishlist. A 14-day product lifecycle keeps the feed honest about what's actually new.",
  },
];

const stack = [
  "React 18",
  "TypeScript",
  "Tailwind v4",
  "Radix / shadcn",
  "Supabase (Postgres · Auth · Edge Functions)",
  "Vercel",
];

export default function CaseStudyVue() {
  return (
    <section id="vue" className="scroll-mt-24 border-t border-line px-6 py-28">
      <div className="mx-auto max-w-content">
        {/* header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">Case Study 01 — Product, design &amp; engineering</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-none tracking-[-0.03em] text-gradient">
                VUE
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 max-w-xl text-lg text-white/55">
                A fashion drop-tracking platform — designed, built, and shipped
                solo. Every new arrival from the brands you follow, in one feed.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href={site.links.vue}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-white/[0.03] px-5 py-2.5 text-sm text-white/80 transition-all hover:border-accent/40 hover:text-white"
            >
              Visit {site.links.vueLabel}
              <span className="transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </Reveal>
        </div>

        {/* mockup */}
        <Reveal delay={0.1} className="mt-12">
          <VueMockup />
          <p className="mt-3 text-center text-xs text-white/30">
            The VUE feed, recreated in code from the live product at vueniverse.com.
          </p>
        </Reveal>

        {/* stats */}
        <Reveal delay={0.05}>
          <div className="mt-12 grid grid-cols-2 divide-x divide-y divide-line overflow-hidden rounded-2xl border border-line sm:grid-cols-4 sm:divide-y-0">
            {stats.map((s) => (
              <div key={s.l} className="bg-white/[0.015] p-5 sm:p-6">
                <div className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {s.n}
                </div>
                <div className="mt-1 text-[13px] leading-snug text-white/45">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* problem / solution */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          <Reveal>
            <div className="surface h-full p-7">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                The problem
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-white/70">
                Fashion drops are scattered across hundreds of individual brand
                sites. There&apos;s no single place to see what dropped today
                across the brands you actually care about — so shoppers tab-hop
                between a dozen newsletters and Instagrams, or miss launches
                entirely.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="surface h-full p-7">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent/80">
                The solution
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-white/70">
                One feed. Follow the brands you love and VUE surfaces every new
                arrival the day it drops, newest first. Save items natively or
                route them to the wishlist you already use. A drop calendar for
                the brands you love — no tab-hopping, no missed launches.
              </p>
            </div>
          </Reveal>
        </div>

        {/* design decisions */}
        <Reveal className="mt-20">
          <p className="eyebrow">Design decisions</p>
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {decisions.map((d, i) => (
            <Reveal key={d.no} delay={i * 0.06}>
              <div className="grid gap-4 bg-ink-50 p-7 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-9">
                <span className="font-serif text-3xl text-accent/70">{d.no}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {d.title}
                  </h3>
                  <p className="mt-2.5 max-w-2xl text-[0.98rem] leading-relaxed text-white/55">
                    {d.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* tech */}
        <div className="mt-16 grid gap-10 sm:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div>
              <p className="eyebrow">Under the hood</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-white/[0.02] px-3 py-1.5 text-[13px] text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[1.02rem] leading-relaxed text-white/60">
              VUE runs a dual-scraper architecture — cloud edge functions for
              standard storefronts and a local residential pipeline for
              anti-bot-protected brands — writing into a Supabase Postgres
              database with row-level security. On top sits an affiliate redirect
              layer and an SEO prerender pipeline that puts fully-rendered HTML in
              front of crawlers, landing a 97/98 Lighthouse score. The whole
              thing auto-deploys to Vercel on every push.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
