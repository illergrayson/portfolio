import Reveal from "./Reveal";
import PhoneFrame from "./PhoneFrame";
import { site } from "@/lib/site";

const contributions = [
  {
    no: "01",
    tag: "Progressive disclosure",
    title: "Tore down the login wall — because the data said to",
    body: "VUE used to gate the feed behind sign-up and a follow step. Before touching it, I ran the retention numbers: visitors who clicked into a product came back at 50%; visitors who didn't returned at 6% — an 8× gap. Following brands predicted nothing. So the wall was filtering out the exact behavior that correlates with people staying. I killed the login/follow gate and opened the feed, brand pages, and discovery to anonymous visitors. Auth moved from the front door to the moment of intent: the first time you follow or save, an inline AuthGate appears and re-runs your action the instant you're in — no lost click, no dead end.",
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
  },
  {
    no: "02",
    tag: "Design system & human factors",
    title: "One accent, one type scale, thumb-sized targets",
    body: "The product had drifted into three different auth screens and half a dozen button styles. I ran a design audit and collapsed it into one system: a single accent (brick rose), a formalized type scale pairing a Cormorant display face with Inter, a letterspaced Inter-caps eyebrow, and one hard rule for shape — squares for containers, pills for actions. Then I tuned it against how hands and attention actually behave. Touch targets went to a 44px minimum (Fitts's Law); the bottom nav sits at 60px with safe-area insets so the home bar never steals a tap. The hero is full-height on your first visits, then collapses to a compact bar after three — first-run users get orientation, returning users get straight to the feed. A persistent labeled nav keeps navigation recognition, not recall.",
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
  },
  {
    no: "03",
    tag: "Accessibility & rigor",
    title: "No dead ends, and it passes AA",
    body: "The unglamorous half of human factors is error states and access. Empty feeds never dead-end — a quiet feed says “your brands are quiet,” and users following zero brands land on Discover instead of a blank screen. Every error announces itself with role=“alert”; the auth modal traps focus, returns it on close, and closes on Escape. I set WCAG 2.1 AA as the bar and drove a remediation pass across 33 files — roughly 158 contrast fixes — plus skip-to-content, main landmarks, and a prefers-reduced-motion override. I specified the standard and the behavior; the AI tooling I direct executed the contrast math, the ARIA plumbing, and the React. The judgment is mine — what's a wall versus an invite, what counts as P0, how the system should behave.",
    shots: [
      {
        src: "/vue-mobile-feed-scale.png",
        alt: "The feed's weekly roll-up — legible hierarchy and AA-contrast type across dozens of brands.",
      },
    ],
  },
];

export default function CaseStudyVue() {
  return (
    <section id="vue" className="scroll-mt-24 border-t border-line px-6 py-20">
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
        <div className="mt-16 space-y-20 sm:space-y-24">
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
            className="group mt-16 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-ink-50 p-8 transition-all hover:border-accent/40 sm:flex-row sm:items-center sm:p-10"
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
