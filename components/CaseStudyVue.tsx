import Reveal from "./Reveal";
import BrowserFrame from "./BrowserFrame";
import { site } from "@/lib/site";

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
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/55">
                Every new arrival from the brands you follow, in one feed.
                Designed, built, and shipped solo, live at {site.links.vueLabel}.
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

        {/* LEAD WITH THE PRODUCT — the live feed, front and center */}
        <Reveal delay={0.1} className="mt-12">
          <BrowserFrame
            src="/vue-feed.png"
            alt="The VUE feed: the day's drop up top, then every new arrival grouped by brand, newest first."
            priority
          />
          <p className="mt-4 text-center text-[13px] text-white/35">
            The feed. One place for every new drop across the brands you follow.
          </p>
        </Reveal>

        {/* scale, stated plainly */}
        <Reveal delay={0.05}>
          <p className="mt-9 text-center text-[13px] tracking-wide text-white/40">
            100+ brands{" "}
            <span className="px-1.5 text-white/20">·</span> 23.5K+ products
            tracked <span className="px-1.5 text-white/20">·</span> refreshed
            every 6 hours
          </p>
        </Reveal>

        {/* one deep dive: the hardest design problem */}
        <div className="mt-24 grid gap-10 sm:grid-cols-[0.85fr_1.15fr] sm:gap-14">
          <Reveal>
            <div className="sm:sticky sm:top-28 sm:self-start">
              <p className="eyebrow">The hard part</p>
              <h3 className="mt-4 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
                One feed, a hundred different data shapes
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-white/65">
              <p>
                Every brand publishes its catalog its own way. Image ratios are
                inconsistent, product names range from &ldquo;Ryder Pintuck
                Shorts&rdquo; to bare SKU strings, and prices sit in markup that
                shifts from one storefront to the next. None of it arrives ready
                to display next to anything else.
              </p>
              <p>
                The design system normalizes all of it into a single rhythm: one
                card shape, one typographic hierarchy, one scannable cadence, so
                a drop from Anthropologie reads cleanly beside one from Zara. The
                real constraint was doing that without flattening the brands into
                sameness. Each keeps its name, its imagery, its point of view,
                while the structure around it stays consistent enough to scan a
                hundred of them in a single scroll.
              </p>
              <p className="text-white/80">
                That consistency is the product. It is a design decision and an
                engineering one at the same time.
              </p>
            </div>
          </Reveal>
        </div>

        {/* the same system, two more surfaces — staggered real views */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 sm:items-start">
          <Reveal delay={0.06}>
            <BrowserFrame
              src="/vue-landing.png"
              alt="The VUE landing page: Every new drop, one feed, above a preview grid of normalized product cards."
            />
            <p className="mt-3 text-[12px] text-white/30">
              The front door: one normalized grid, many sources.
            </p>
          </Reveal>
          <Reveal delay={0.14} className="sm:mt-16">
            <BrowserFrame
              src="/vue-brands.png"
              alt="The VUE brand directory: a fashion drop calendar organized by tier across 100+ brands."
            />
            <p className="mt-3 text-[12px] text-white/30">
              The drop calendar: 100+ brands, one directory.
            </p>
          </Reveal>
        </div>

        {/* engineering scale, factual */}
        <Reveal className="mt-24">
          <div className="surface p-8 sm:p-10">
            <p className="max-w-3xl text-[1.05rem] leading-relaxed text-white/70">
              Behind the feed, 100+ scrapers run on six-hour intervals, keeping
              roughly 23.5K products live and current. The pipeline is automated
              end to end, from scrape to feed, with new arrivals surfacing
              without anyone touching them. Built with Next.js and Supabase,
              deployed on Vercel.
            </p>
          </div>
        </Reveal>

        {/* live CTA */}
        <Reveal delay={0.05}>
          <a
            href={site.links.vue}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-white/[0.02] p-8 transition-all hover:border-accent/40 sm:flex-row sm:items-center sm:p-10"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent/80">
                See it live
              </p>
              <p className="mt-3 max-w-md text-[1.15rem] leading-snug text-white/85">
                The product is in production with real users. Open it, follow a
                brand, and watch the feed fill in.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-transform group-hover:translate-x-0.5">
              {site.links.vueLabel}
              <span>↗</span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
