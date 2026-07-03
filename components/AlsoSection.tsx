import Reveal from "./Reveal";

export default function AlsoSection() {
  return (
    <section id="more" className="scroll-mt-24 border-t border-line px-6 py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">Also</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-xl text-lg text-ink/55">
            Other work and published research.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Reveal delay={0.06}>
            <div className="surface h-full p-7">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                Concept project
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
                Zephyr Aire
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/55">
                Cabin experience design for Supernal&apos;s eVTOL concept.
                Modular seating system and companion app, designed around the
                people inside.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="surface h-full p-7">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                Published research
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
                Aerospace human factors
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/55">
                Co-authored two papers: spatial disorientation in flight and
                mild hypoxia (2021) and pilot-in-the-loop technology for moon
                landings (2022, IAF/IAA).
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
