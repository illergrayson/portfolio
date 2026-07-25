import Reveal from "./Reveal";

const contributions = [
  {
    no: "01",
    title: "Took a new device from prototype to production",
    body: "Test lead on Skydio’s next-generation enterprise controller from early bring-up through Beta. Led validation across four parallel release programs simultaneously — new product bring-up, GA release validation, hardware reliability testing, and the first-ever controller-only software release. Embedded with the design team to pressure-test interaction flows against real operator behavior under load. Contributed to reducing the controller RMA rate to under 1%.",
    tag: "Hardware bring-up",
  },
  {
    no: "02",
    title: "Made a complex system legible",
    body: "Inherited 5,500+ test cases organized around internal system architecture. Restructured them into flow-based user journeys — what an operator actually does, in sequence. This exposed gaps in the experience that the old structure hid. When the UI and the real system state disagreed (connectivity showing “connected” while telemetry was degraded), the new architecture made those lies visible and testable.",
    tag: "Information architecture",
  },
  {
    no: "03",
    title: "Turned field friction into ship decisions",
    body: "Pre-release builds run through dogfooding on real workflows and structured bug scrubs before anything ships. I put builds in front of internal operators, separate one-off bugs from UX patterns, and reproduce the high-risk issues with logs, steps, and user impact so severity arguments are grounded in evidence. Then comes the judgment testing exists to inform: what’s cosmetic, what’s ugly-but-shippable, and what will cost an operator’s trust in the field — and blocks the release.",
    tag: "Operator trust & release judgment",
  },
];

const frictions = [
  {
    moment: "Connection handoff",
    expects: "Status reflects the link that’s actually carrying telemetry",
    breaks: "UI reads “connected” while the data link degrades underneath it",
    call: "Surface link health, not link existence",
  },
  {
    moment: "Pre-flight readiness",
    expects: "A clear go / no-go",
    breaks: "Ambiguous state between checks — waiting, working, or stuck?",
    call: "Name the state and show what’s blocking it",
  },
  {
    moment: "Error recovery",
    expects: "A next step",
    breaks: "An alert with no action attached",
    call: "Every error carries its recovery path",
  },
];

export default function CaseStudySkydio() {
  return (
    <section id="skydio" className="scroll-mt-24 border-t border-line px-6 py-20">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">Case Study 02: Skydio</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-none tracking-[-0.03em] text-gradient">
            Skydio
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-2xl text-lg text-ink/55">
            The title says test engineering. The work is designing confidence
            for autonomous flight: Skydio’s drones fly public-safety,
            inspection, and defense missions, where an operator under pressure
            has to know what the aircraft is doing and trust what the screen
            says. I validate that experience on real hardware before it ships.
          </p>
        </Reveal>

        <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-line">
          {contributions.map((c, i) => (
            <Reveal key={c.no} delay={i * 0.06}>
              <div className="bg-ink-50 p-7 sm:p-10">
                <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-9">
                  <span className="font-serif text-3xl text-accent/70">
                    {c.no}
                  </span>
                  <div>
                    <span className="inline-block rounded-full border border-line bg-[#FAF8F5] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-ink/45">
                      {c.tag}
                    </span>
                    <h3 className="mt-3 max-w-2xl text-xl font-semibold tracking-tight text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[1.0rem] leading-relaxed text-ink/55">
                      {c.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-line">
            <div className="border-b border-line bg-ink-50 p-7 sm:px-10 sm:py-8">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                Field notes · anonymized
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                Where experiences break: expectation vs. system
              </h3>
              <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-ink/50">
                A recreated pattern, not product internals — the moments I
                watch for when validating an operator-facing build.
              </p>
            </div>

            {/* Desktop header row */}
            <div className="hidden border-b border-line bg-ink-100 px-10 py-3 md:grid md:grid-cols-[1fr_1.3fr_1.3fr_1.1fr] md:gap-6">
              {["Moment", "Operator expects", "What breaks", "The design call"].map(
                (h) => (
                  <span
                    key={h}
                    className="text-[11px] uppercase tracking-[0.14em] text-ink/40"
                  >
                    {h}
                  </span>
                )
              )}
            </div>

            <div className="divide-y divide-line">
              {frictions.map((f) => (
                <div
                  key={f.moment}
                  className="grid gap-3 p-7 md:grid-cols-[1fr_1.3fr_1.3fr_1.1fr] md:gap-6 md:px-10 md:py-6"
                >
                  <p className="text-[0.95rem] font-semibold tracking-tight text-ink">
                    {f.moment}
                  </p>
                  <p className="text-[0.95rem] leading-relaxed text-ink/55">
                    <span className="text-[11px] uppercase tracking-[0.14em] text-ink/35 md:hidden">
                      Operator expects
                      <br />
                    </span>
                    {f.expects}
                  </p>
                  <p className="text-[0.95rem] leading-relaxed text-ink/55">
                    <span className="text-[11px] uppercase tracking-[0.14em] text-ink/35 md:hidden">
                      What breaks
                      <br />
                    </span>
                    {f.breaks}
                  </p>
                  <p className="text-[0.95rem] leading-relaxed text-accent">
                    {f.call}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-prose text-[1.05rem] leading-relaxed text-ink/55">
            The through-line: I don&apos;t see &ldquo;the UI&rdquo; and
            &ldquo;the system&rdquo; as separate concerns. Modeling the system is
            how you design an interface that tells the truth, and that&apos;s
            the same instinct that built VUE.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
