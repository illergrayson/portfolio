import Reveal from "./Reveal";
import PhoneFrame from "./PhoneFrame";
import { site } from "@/lib/site";

const contributions = [
  {
    no: "01",
    tag: "Progressive disclosure",
    title: "Tore down the login wall — because the data said to",
    body: "VUE used to gate the feed behind sign-up and a follow step. Before touching it, I ran the retention numbers: visitors who clicked into a product came back at 50%; visitors who didn't returned at 6% — an 8× gap. Following brands predicted nothing. So the wall was filtering out the exact behavior that correlates with people staying. I killed the login/follow gate and opened the feed, brand pages, and discovery to anonymous visitors. Auth moved from the front door to the moment of intent: the first time you follow or save, an inline AuthGate appears and re-runs your action the instant you're in — no lost click, no dead end. I wrote an onboarding investigation doc before committing — “I need more investigation and to really know this is a good move” — then shipped it.",
    points: [
      "Retention analysis: 50% return for product-clickers vs 6% for non-clickers; following predicted nothing.",
      "Removed the sign-up/follow wall — feed, brands, and discover are open to anonymous visitors.",
      "Auth triggers at the point of intent: follow/save opens an inline gate that completes the original action on success.",
    ],
    shots: [
      {
        src: "/vue-mobile-landing.png",
        alt: "The VUE landing on mobile: every new drop in one feed, open to anonymous visitors.",
      },
      {
        src: "/vue-mobile-feed.png",
        alt: "The open feed an anonymous visitor sees — no login wall in front of the product.",
      },
    ],
    caption:
      "Auth moved from the front door to the moment of intent — browse freely, sign in only to act.",
  },
  {
    no: "02",
    tag: "Design system & human factors",
    title: "One accent, one type scale, thumb-sized targets",
    body: "The product had drifted into three different auth screens and half a dozen button styles. I ran a design audit and collapsed it into one system: a single accent (brick rose), a formalized type scale pairing a Cormorant display face with Inter, a letterspaced Inter-caps eyebrow, and one hard rule for shape — squares for containers, pills for actions. Then I tuned it against how hands and attention actually behave. Touch targets went to a 44px minimum (Fitts's Law); the bottom nav sits at 60px with safe-area insets so the home bar never steals a tap. The hero is full-height on your first visits, then collapses to a compact bar after three (a localStorage counter) — first-run users get orientation, returning users get straight to the feed. A persistent Feed / Discover / Brands / Wishlist / Profile nav with icons and labels keeps navigation recognition, not recall; a saved item is a filled brick-rose heart on a stable URL you can always find again.",
    points: [
      "Consolidated three auth designs and 3+ button styles into one system — single accent, one type scale, square-vs-pill radius rule.",
      "44px touch targets, 60px safe-area bottom nav — Fitts's Law applied to a thumb, not a cursor.",
      "Hero collapses after 3 visits; persistent labeled nav — cognitive-load reduction and recognition over recall, by design.",
    ],
    shots: [
      {
        src: "/vue-mobile-feed-cards.png",
        alt: "The feed's consistent card rhythm — one type scale and single accent across every brand.",
      },
      {
        src: "/vue-mobile-brands.png",
        alt: "The brand directory: persistent labeled bottom nav for recognition-over-recall navigation.",
      },
    ],
    caption:
      "One accent, one type scale, and touch targets sized for a thumb — a system, not a pile of screens.",
  },
  {
    no: "03",
    tag: "Accessibility & rigor",
    title: "No dead ends, and it passes AA",
    body: "The unglamorous half of human factors is error states and access. Empty feeds never dead-end — a quiet feed says “your brands are quiet,” and users following zero brands land on Discover instead of a blank screen. Every error announces itself with role=“alert”; the auth modal traps focus, returns it on close, and closes on Escape. I set WCAG 2.1 AA as the bar and drove a remediation pass across 33 files — roughly 158 contrast fixes — plus skip-to-content, main landmarks, and a prefers-reduced-motion override. This is the layer where I'm precise about the split: I specified the standard and the behavior; the contrast-ratio math, the ARIA plumbing, and the React/TypeScript were executed by AI tooling under my direction. The judgment is mine — what's a wall versus an invite, what counts as P0, how the system should behave. The implementation is modern tooling doing what I told it to.",
    points: [
      "No dead-end empty states — a tailored “your brands are quiet”; zero-brand users route to Discover.",
      "Auth modal traps and returns focus, closes on Escape; errors announce via role=“alert”; skip-to-content and reduced-motion support.",
      "WCAG 2.1 AA pass across 33 files (~158 contrast fixes) — standard set by me, math and ARIA executed by AI tooling.",
    ],
    shots: [
      {
        src: "/vue-mobile-feed-scale.png",
        alt: "The feed's weekly roll-up — legible hierarchy and AA-contrast type across dozens of brands.",
      },
    ],
    caption: "Editorial hierarchy that still clears AA contrast — legibility as a requirement, not a finish.",
  },
];

const mine = [
  "The product thesis: a routing layer over 100+ storefronts with native save — every new drop, one feed.",
  "The browse-freely auth model — I framed the problem, ran the retention data, and made the call.",
  "The design system: cream/teal palette, Cormorant + Inter pairing, letterspaced Inter-caps eyebrow, square-vs-pill radius rule, single-accent discipline.",
  "The prioritization: P0/P1 triage, and every call about what's a wall versus an invite.",
  "The PRDs I authored — auth-signin-flow-prd.md, the onboarding stage-1 plan.",
];

const directed = [
  "React / TypeScript implementation.",
  "Contrast-ratio math and ARIA plumbing to hit the AA bar.",
  "Hydration and performance fixes.",
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
                A live fashion-discovery product. I own the product thinking, the
                design system, and the human-factors calls — then direct AI
                tooling to build it in React. It&apos;s in production, with real
                users, monetized.
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
            tracked <span className="px-1.5 text-ink/20">&middot;</span> B.S.
            Human Factors Psychology, applied
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

        {/* honest split: what's mine vs what I directed */}
        <Reveal delay={0.05}>
          <div className="mt-24 rounded-2xl border border-line bg-ink-50 p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
              Where I stop and the tooling starts
            </p>
            <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-ink/70">
              I don&apos;t pretend I hand-coded every line. I do the parts that
              don&apos;t come from a framework — the product thinking, the design
              system, the research, the priority calls — and I direct AI tooling
              to implement them at production quality. Here&apos;s the honest
              split.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-12">
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/70">
                  Mine — and recreatable anywhere
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {mine.map((m) => (
                    <li
                      key={m}
                      className="flex gap-2.5 text-[0.95rem] leading-relaxed text-ink/60"
                    >
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/70">
                  Executed by AI, under my direction
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {directed.map((d) => (
                    <li
                      key={d}
                      className="flex gap-2.5 text-[0.95rem] leading-relaxed text-ink/60"
                    >
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full border border-ink/25" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* live CTA */}
        <Reveal delay={0.05}>
          <a
            href={site.links.vue}
            target="_blank"
            rel="noreferrer"
            className="group mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-ink-50 p-8 transition-all hover:border-accent/40 sm:flex-row sm:items-center sm:p-10"
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
