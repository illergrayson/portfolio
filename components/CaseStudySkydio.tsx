import Reveal from "./Reveal";
import FsmDiagram from "./FsmDiagram";

const contributions = [
  {
    no: "01",
    title: "Redesigned the test information architecture across drone platforms",
    body: "I inherited 5,500+ test cases organized the way the system was built, not the way it's used. I restructured them into flow-based user journeys — grouped around what an operator actually does, in sequence — so coverage maps to real workflows instead of internal module boundaries. The result reads like a map of the product's behavior, and gaps in the experience became visible for the first time.",
    tag: "Information architecture",
  },
  {
    no: "02",
    title: "Modeled Fusion connectivity as a finite state machine",
    body: "Connectivity bugs kept slipping through because nobody had a shared model of the states the system could be in. I built one — a finite state machine of controller-to-drone connectivity — and used it to document where the UI and the underlying system state quietly disagree. The most important finding: states where the system is degraded while the interface still tells the operator everything is fine.",
    tag: "Systems modeling",
    diagram: true,
  },
  {
    no: "03",
    title: "Embedded with the design team during controller bring-up",
    body: "During hardware bring-up for a new controller, I sat with the design team and evaluated operator workflows on real devices — pressure-testing interaction flows against how people behave under load, where my human factors background does its sharpest work. Design decisions got grounded in observed operator behavior, not assumptions.",
    tag: "Design research",
  },
];

export default function CaseStudySkydio() {
  return (
    <section id="skydio" className="scroll-mt-24 border-t border-line px-6 py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">Case Study 02 — Systems thinking &amp; design impact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-none tracking-[-0.03em] text-gradient">
            Skydio
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-2xl text-lg text-white/55">
            Device Platform Lead, Controller UI/UX. The title says test
            engineering. The work is design — modeling how complex systems
            behave, then making that behavior legible and humane.
          </p>
        </Reveal>

        <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
          {contributions.map((c, i) => (
            <Reveal key={c.no} delay={i * 0.06}>
              <div className="bg-ink-50 p-7 sm:p-10">
                <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-9">
                  <span className="font-serif text-3xl text-accent/70">
                    {c.no}
                  </span>
                  <div>
                    <span className="inline-block rounded-full border border-line bg-white/[0.02] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-white/45">
                      {c.tag}
                    </span>
                    <h3 className="mt-3 max-w-2xl text-xl font-semibold tracking-tight text-white">
                      {c.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[1.0rem] leading-relaxed text-white/55">
                      {c.body}
                    </p>

                    {c.diagram && (
                      <div className="mt-7">
                        <FsmDiagram />
                        <p className="mt-2.5 text-xs text-white/30">
                          A reconstructed model of the connectivity state machine
                          — the accent path marks where UI and system state
                          desync.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-prose text-[1.05rem] leading-relaxed text-white/55">
            The through-line: I don&apos;t see &ldquo;the UI&rdquo; and
            &ldquo;the system&rdquo; as separate concerns. Modeling the system is
            how you design an interface that tells the truth — and that&apos;s
            the same instinct that built VUE.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
