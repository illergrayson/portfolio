import Reveal from "./Reveal";

const questions = [
  "How should validation be organized?",
  "What should decision-makers see?",
  "What deserves engineering time?",
  "What creates customer risk?",
  "How do we know we're ready to ship?",
];

const phases = [
  { name: "Bring-up", q: "Does the hardware behave?" },
  { name: "Regression", q: "Did we break anything?" },
  { name: "Bug scrub", q: "What actually matters?" },
  { name: "Fix validation", q: "Did the fixes hold?" },
  { name: "Smoke & sanity", q: "Is the build stable?" },
  { name: "Ship decision", q: "Is the evidence there?" },
];

const iaBefore = [
  "Connectivity",
  "Power & battery",
  "RF & link",
  "UI screens",
  "Sensors",
  "Storage",
  "Thermals",
  "Accessories",
];

const iaAfter = [
  "Unbox & pair",
  "Pre-flight checks",
  "Launch",
  "Mission",
  "Interrupt & recover",
  "Return & review",
];

const loop = [
  { name: "Field use", d: "dogfooding real workflows" },
  { name: "Capture", d: "logs · steps · user impact" },
  { name: "Triage", d: "pattern vs. one-off" },
  { name: "Bug scrub", d: "severity argued on evidence" },
  { name: "Priority", d: "what deserves engineering time" },
  { name: "Fix validation", d: "did it hold? back to the field" },
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

function ArtifactShell({
  label,
  caption,
  children,
}: {
  label: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 rounded-xl border border-line bg-[#FAF8F5] p-6 sm:p-7">
      <p className="text-[10px] uppercase tracking-[0.16em] text-ink/35">
        {label}
      </p>
      <div className="mt-5">{children}</div>
      <p className="mt-5 text-[0.85rem] leading-relaxed text-ink/45">
        {caption}
      </p>
    </div>
  );
}

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
            The title says flight test engineering. The work is designing how an
            organization ships with confidence — across controller platforms,
            hardware generations, and parallel release programs, for operators
            flying public-safety, inspection, and defense missions.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
              The questions I own
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {questions.map((q) => (
                <span
                  key={q}
                  className="font-serif text-[1.15rem] italic text-ink/60"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 space-y-6">
          {/* 01 — Validation strategy */}
          <Reveal>
            <div className="rounded-2xl border border-line bg-ink-50 p-7 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-9">
                <span className="font-serif text-3xl text-accent/70">01</span>
                <div>
                  <span className="inline-block rounded-full border border-line bg-[#FAF8F5] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-ink/45">
                    Validation strategy & release readiness
                  </span>
                  <h3 className="mt-3 max-w-2xl text-xl font-semibold tracking-tight text-ink">
                    Owned the path from prototype to confident ship
                  </h3>
                  <p className="mt-3 max-w-2xl text-[1.0rem] leading-relaxed text-ink/55">
                    I own validation strategy for Skydio&apos;s controller
                    platforms — defining release phases, running four parallel
                    release programs at once, and deciding what evidence a ship
                    decision needs. The job isn&apos;t finding bugs. It&apos;s
                    turning messy pre-release reality into a truthful picture
                    engineering and leadership can act on: what&apos;s
                    reproduced, what&apos;s a pattern, what&apos;s customer
                    risk, and what blocks the release. The hardware outcome —
                    controller RMA under 1% — matters less than the decision
                    quality behind it: the team ships what it understands.
                  </p>

                  <ArtifactShell
                    label="Recreated artifact · Release readiness flow"
                    caption="The release phases I define and run. Each gate exists to answer a question with evidence — recreated shape, not internal detail."
                  >
                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                      {phases.map((p, i) => (
                        <div key={p.name} className="relative">
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-sm text-accent/80">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="hidden h-px flex-1 bg-line lg:block" />
                          </div>
                          <p className="mt-1.5 text-[0.9rem] font-semibold tracking-tight text-ink">
                            {p.name}
                          </p>
                          <p className="mt-0.5 text-[0.8rem] leading-snug text-ink/45">
                            {p.q}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ArtifactShell>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 02 — Information architecture */}
          <Reveal>
            <div className="rounded-2xl border border-line bg-ink-50 p-7 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-9">
                <span className="font-serif text-3xl text-accent/70">02</span>
                <div>
                  <span className="inline-block rounded-full border border-line bg-[#FAF8F5] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-ink/45">
                    Information architecture
                  </span>
                  <h3 className="mt-3 max-w-2xl text-xl font-semibold tracking-tight text-ink">
                    Restructured how the product is understood
                  </h3>
                  <p className="mt-3 max-w-2xl text-[1.0rem] leading-relaxed text-ink/55">
                    The strongest design work I&apos;ve done isn&apos;t visual.
                    I inherited 5,500+ test cases shaped like the engineering
                    org — complete, and illegible. I rebuilt the architecture
                    around operator journeys: what a person actually does, in
                    sequence, across drone platforms. Reshaping the information
                    exposed experience gaps the old structure hid, and the
                    journey model became the template for how coverage is
                    organized. The same instinct runs deeper: I modeled
                    controller-to-drone connectivity as a finite state machine
                    to pin down where the interface&apos;s story and the
                    system&apos;s actual state diverge — the mental-model breaks
                    that cost operators trust.
                  </p>

                  <ArtifactShell
                    label="Recreated artifact · Information architecture, before / after"
                    caption="Same 5,500+ cases, two shapes. Organized by subsystem, the experience is invisible; organized by journey, the gaps between steps become visible — and testable."
                  >
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-line p-5">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-ink/40">
                          Before · shaped like the system
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {iaBefore.map((m) => (
                            <span
                              key={m}
                              className="rounded-md border border-line bg-ink-50 px-2 py-1 text-[0.8rem] text-ink/55"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-lg border border-accent/30 p-5">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-accent">
                          After · shaped like the operator
                        </p>
                        <div className="mt-3 space-y-1.5">
                          {iaAfter.map((s, i) => (
                            <div key={s} className="flex items-center gap-2.5">
                              <span className="font-serif text-[0.8rem] text-accent/80">
                                {i + 1}
                              </span>
                              <span className="text-[0.85rem] text-ink/70">
                                {s}
                              </span>
                              {i < iaAfter.length - 1 ? (
                                <span className="h-px flex-1 bg-line" />
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ArtifactShell>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 03 — Feedback systems */}
          <Reveal>
            <div className="rounded-2xl border border-line bg-ink-50 p-7 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-9">
                <span className="font-serif text-3xl text-accent/70">03</span>
                <div>
                  <span className="inline-block rounded-full border border-line bg-[#FAF8F5] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-ink/45">
                    Feedback systems
                  </span>
                  <h3 className="mt-3 max-w-2xl text-xl font-semibold tracking-tight text-ink">
                    Built the feedback loop behind ship decisions
                  </h3>
                  <p className="mt-3 max-w-2xl text-[1.0rem] leading-relaxed text-ink/55">
                    Dogfooding and bug scrubs read like calendar events; I treat
                    them as product systems. I built the loop that moves an
                    observation from a real workflow into an engineering
                    priority: capture it with logs, steps, and user impact;
                    separate patterns from one-offs; argue severity against
                    evidence; validate the fix; put it back in the field.
                    Partnering across product, design, engineering, program
                    management, and flight test, the loop gives decision-makers
                    a truthful picture of the product — and gives me the grounds
                    to call what&apos;s cosmetic, what&apos;s
                    shippable-but-ugly, and what breaks operator trust and
                    blocks the release.
                  </p>

                  <ArtifactShell
                    label="Recreated artifact · How feedback becomes a ship decision"
                    caption="Not a meeting — a system. Each pass through the loop raises release confidence; what comes out is priority and evidence, not a bug list."
                  >
                    <div className="flex flex-wrap items-center gap-y-3">
                      {loop.map((n, i) => (
                        <div key={n.name} className="flex items-center">
                          <div className="rounded-lg border border-line bg-ink-50 px-3 py-2">
                            <p className="text-[0.85rem] font-semibold tracking-tight text-ink">
                              {n.name}
                            </p>
                            <p className="mt-0.5 text-[0.75rem] leading-snug text-ink/45">
                              {n.d}
                            </p>
                          </div>
                          <span className="px-2 text-accent/70" aria-hidden>
                            {i < loop.length - 1 ? "→" : "↺"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </ArtifactShell>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-line">
            <div className="border-b border-line bg-ink-50 p-7 sm:px-10 sm:py-8">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                Field notes · anonymized
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                Where mental models break: expectation vs. system
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
            The through-line: modeling how a system actually behaves is how you
            design an interface that tells the truth — and designing how a team
            learns about its product is how you ship one people can trust.
            That&apos;s the same instinct that built VUE.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
