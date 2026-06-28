import Reveal from "./Reveal";

const facts = [
  {
    k: "Education",
    v: "B.S. Human Factors Psychology (HCI focus), Minor in Aerospace Physiology — Embry-Riddle Aeronautical University",
  },
  {
    k: "Now",
    v: "Device Platform Lead, Controller UI/UX — Skydio (since 2023)",
  },
  {
    k: "Building",
    v: "VUE — vueniverse.com, a fashion drop platform designed and built solo",
  },
  {
    k: "Published",
    v: "Pilot-in-the-loop technology for moon landings (IAF/IAA, 2022) · Spatial disorientation & mild hypoxia in flight (2021)",
  },
  {
    k: "Also",
    v: "NCAA Division I athlete",
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
    <section id="about" className="scroll-mt-24 border-t border-line px-6 py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <h2 className="max-w-3xl text-balance text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-gradient">
                I&apos;m not transitioning into design engineering. I&apos;ve
                been doing the whole job all along.
              </h2>
            </Reveal>

            <div className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-white/60 sm:text-[1.05rem]">
              <Reveal delay={0.05}>
                <p>
                  My foundation is human factors psychology — the study of how
                  people actually perceive, decide, and act under load. It
                  taught me to treat an interface as a system the user is part
                  of, not a surface to decorate. That lens runs through
                  everything I make.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  At <span className="text-white/85">Skydio</span> I work across
                  drone platforms on controller UI/UX, where the &ldquo;test
                  engineering&rdquo; label undersells the work: I restructure how
                  complex systems are modeled, documented, and experienced —
                  mapping operator workflows, exposing where the UI and the
                  system disagree, and embedding with the design team during
                  hardware bring-up.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Then I built <span className="text-white/85">VUE</span> to
                  close the loop. One person, end to end: the product strategy,
                  the component system, the conversion UX, the database, the
                  scrapers, the deploys. It tracks fashion drops from{" "}
                  <span className="text-white/85">100+ brands</span> into a
                  single feed, and it&apos;s live in production with real users.
                  Design taste and engineering depth aren&apos;t two skills I
                  toggle between — they&apos;re one practice.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-2">
                {disciplines.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-line bg-white/[0.02] px-3 py-1.5 text-[13px] text-white/65"
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
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-accent/80">
                      {f.k}
                    </dt>
                    <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-white/75">
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
