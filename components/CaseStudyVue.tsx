import Reveal from "./Reveal";
import PhoneFrame from "./PhoneFrame";
import { site } from "@/lib/site";

const shots = [
  { src: "/vue-mobile-landing.jpg", alt: "VUE landing page on mobile" },
  { src: "/vue-mobile-feed.jpg", alt: "The VUE feed, open to anyone" },
  { src: "/vue-mobile-brands.jpg", alt: "VUE brand directory" },
];

export default function CaseStudyVue() {
  return (
    <section id="vue" className="scroll-mt-24 border-t border-line px-6 py-20">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">VUE · vueniverse.com · 2024 to now</p>
        </Reveal>
        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal delay={0.05}>
            <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              Every new drop from 100+ fashion brands, in one feed. Designed in Figma, built and run solo.
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
            Scrapers pull 23,000+ products a day into one recency-ordered feed.
            Live in production, real users, affiliate revenue. Every screen
            started in Figma; I write the spec and the design, then build it.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-4 sm:gap-8">
            {shots.map((s, i) => (
              <PhoneFrame key={s.src} src={s.src} alt={s.alt} priority={i === 0} />
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="surface h-full p-6 sm:p-7">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">The decision</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">I tore down the login wall because the data said to</h3>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[2.2rem] font-semibold leading-none tracking-[-0.03em] text-ink">50%</p>
                  <p className="mt-1.5 text-[13px] text-ink/55">of visitors who opened a product came back</p>
                </div>
                <div>
                  <p className="text-[2.2rem] font-semibold leading-none tracking-[-0.03em] text-ink/40">6%</p>
                  <p className="mt-1.5 text-[13px] text-ink/55">of everyone else did</p>
                </div>
              </div>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/60">
                The wall stood between people and the one thing that made them
                return. So the feed is open to anyone, and the account ask
                moves to the first follow or save, then runs that action the
                instant you&apos;re in. No lost click, no dead end. Three auth
                screens became one.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-2">
            <div className="surface h-full p-6 sm:p-7">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">The system</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">One accent, one type scale, one shape rule</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/60">
                A design audit collapsed six button styles and three auth
                screens into one system: squares for containers, pills for
                actions, a persistent labeled nav that clears the home bar.
                Empty feeds never dead-end; a quiet feed points you to brands
                to follow.
              </p>
              <p className="mt-4 text-[12px] leading-relaxed text-ink/40">
                Hygiene, for the record: 44 px minimum targets, WCAG 2.1 AA
                contrast, Lighthouse 97/98. React, TypeScript, Supabase, Vercel.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
