import Reveal from "./Reveal";
import PhoneFrame from "./PhoneFrame";
import { site } from "@/lib/site";

const shots = [
  { src: "/vue-mobile-landing.jpg", alt: "VUE landing page on mobile" },
  { src: "/vue-mobile-feed.jpg", alt: "The VUE feed, open to anyone" },
  { src: "/vue-mobile-brands.jpg", alt: "VUE brand directory" },
];

const wins = [
  { n: "50% vs 6%", t: "Return rate for visitors who opened a product vs. everyone else. So I removed the sign-up wall and ask for an account only at the first follow or save." },
  { n: "44 px", t: "Minimum touch target. One accent, one type scale, WCAG 2.1 AA contrast, bottom nav that clears the home bar." },
  { n: "97 / 98", t: "Lighthouse scores after I built a prerender pipeline so every brand page is indexable." },
];

export default function CaseStudyVue() {
  return (
    <section id="vue" className="scroll-mt-24 border-t border-line px-6 py-20">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">VUE · vueniverse.com</p>
        </Reveal>
        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal delay={0.05}>
            <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              Every new drop from 100+ fashion brands, in one feed. I designed it, built it, and run it.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <a href={site.links.vue} target="_blank" rel="noreferrer" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-[#FAF8F5] hover:bg-accent">
              Open {site.links.vueLabel}
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/60">
            Figma first, then React, TypeScript, and Supabase, with scrapers that
            pull 23,000+ products a day. Live in production, real users, affiliate
            revenue. I write the spec and the design; I build with AI tooling in
            the loop.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-4 sm:gap-8">
            {shots.map((s, i) => (
              <PhoneFrame key={s.src} src={s.src} alt={s.alt} priority={i === 0} />
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {wins.map((w, i) => (
            <Reveal key={w.n} delay={i * 0.05}>
              <div className="surface h-full p-6">
                <p className="text-[2rem] font-semibold leading-none tracking-[-0.03em] text-ink">{w.n}</p>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-ink/60">{w.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
