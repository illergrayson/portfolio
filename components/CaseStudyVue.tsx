import Reveal from "./Reveal";
import VueMockup from "./VueMockup";
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
                Designed, built, and shipped solo.
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

        {/* the product, front and center */}
        <Reveal delay={0.1} className="mt-12">
          <VueMockup />
        </Reveal>

        {/* scale, stated plainly */}
        <Reveal delay={0.05}>
          <p className="mt-7 text-center text-[13px] tracking-wide text-white/40">
            100+ brands{" "}
            <span className="px-1.5 text-white/20">·</span> 23.5K+ products
            tracked <span className="px-1.5 text-white/20">·</span> refreshed
            every 6 hours
          </p>
        </Reveal>

        {/* one deep dive: the hardest design problem */}
        <div className="mt-24 grid gap-10 sm:grid-cols-[0.85fr_1.15fr] sm:gap-14">
          <Reveal>
            <div className="sm:sticky sm:top-28">
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
            </div>
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
      </div>
    </section>
  );
}
