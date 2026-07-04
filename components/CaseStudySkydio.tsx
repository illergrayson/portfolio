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
            The title says test engineering. The work is taking a new device from
            prototype to production and making complex systems behave the way
            people expect.
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
