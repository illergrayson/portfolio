import Reveal from "./Reveal";

const facts = [
  {
    k: "Education",
    v: "B.S. Human Factors Engineering in Aerospace Physiology, Embry-Riddle Aeronautical University (2019–2023)",
  },
  {
    k: "Now",
    v: "Flight Test Engineer Lead, Device Platform, Skydio (3+ years)",
  },
  {
    k: "Building",
    v: "VUE (vueniverse.com): a fashion drop-tracking platform I designed and built solo, end to end",
  },
  {
    k: "Published",
    v: "Pilot-in-the-Loop Technology for Moon Landings (Dr. John French, Feb 2023) · 73rd International Astronautical Congress, IAF/IAA Space Life Sciences Symposium (2022) · The Link Between Spatial Disorientation in Flight and Mild Hypoxia (Embry-Riddle SRS, Nov 2021)",
  },
  {
    k: "Also",
    v: "NCAA Division II athlete: Women’s Cross Country & Track and Field. FAA-certified UAV pilot. PADI Open Water Diver.",
  },
];

const disciplines = [
  "Product design",
  "Front-end engineering",
  "Design systems",
  "Information architecture",
  "Interaction & motion",
  "Human factors research",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line px-6 py-20">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <h2 className="max-w-3xl text-balance text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-gradient">
                Human factors psychology trained. Ships production code. Treats
                design and engineering as one discipline.
              </h2>
            </Reveal>

            <div className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-ink/55 sm:text-[1.05rem]">
              <Reveal delay={0.05}>
                <p>
                  My foundation is human factors psychology, the study of how
                  people perceive, decide, and act under load. At{" "}
                  <span className="text-ink/85">Skydio</span> I work across drone
                  platforms on controller UI/UX, restructuring how complex systems
                  are modeled, documented, and experienced. I map operator workflows,
                  expose where the UI and the system disagree, and embed with the
                  design team during hardware bring-up.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Then I built <span className="text-ink/85">VUE</span> to close
                  the loop. One person, end to end: product strategy, component
                  system, conversion UX, database, scrapers, deploys. It tracks
                  fashion drops from{" "}
                  <span className="text-ink/85">100+ brands</span> into a single
                  feed, live in production with real users. Design taste and
                  engineering depth aren&apos;t two skills I toggle between.
                  They&apos;re one practice.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-2">
                {disciplines.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-line bg-ink-50 px-3 py-1.5 text-[13px] text-ink/60"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="surface p-6 sm:p-7">
              <dl className="divide-y divide-line">
                {facts.map((f) => (
                  <div key={f.k} className="py-4 first:pt-0 last:pb-0">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-accent">
                      {f.k}
                    </dt>
                    <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/65">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
