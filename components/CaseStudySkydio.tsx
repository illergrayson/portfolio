import Reveal from "./Reveal";

const questions = [
  "How should validation be organized?",
  "What should decision-makers see?",
  "What deserves engineering time?",
  "What creates customer risk?",
  "How do we know we're ready to ship?",
];

const pipeline = [
  { name: "Product concept", note: "Field findings shape what gets built next", own: false },
  { name: "Bring-up", note: "First hardware: operator workflows on real devices", own: false },
  { name: "Validation strategy", note: "What gets validated, in what order, against what risk", own: true },
  { name: "Dogfooding", note: "Pre-release builds in real workflows", own: true },
  { name: "Bug scrubs", note: "Severity argued on evidence", own: true },
  { name: "Release risk review", note: "The picture leadership reads — risk, honestly stated", own: true },
  { name: "Final pack", note: "Regression, smoke, sanity — the final bar", own: true },
  { name: "Ship", note: "A decision made on evidence, not optimism", own: false },
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

const process = [
  "Observe",
  "Reproduce",
  "Isolate",
  "Measure customer impact",
  "Partner with engineering",
  "Validate fix",
  "Assess release risk",
  "Ship",
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

const decisions = [
  {
    finding: "Breaks operator trust in the field",
    bar: "Reproduced with logs, steps, and user impact",
    call: "Blocks the release",
  },
  {
    finding: "Ugly but recoverable",
    bar: "Pattern across builds, no data or mission loss",
    call: "Ships with a fix scheduled — and said out loud",
  },
  {
    finding: "Cosmetic, one-off",
    bar: "No reproduction after honest effort",
    call: "Ships, tracked — engineering time goes elsewhere",
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

function Principle({
  no,
  tag,
  title,
  children,
}: {
  no: string;
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-line bg-ink-50 p-7 sm:p-10">
        <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-9">
          <span className="font-serif text-3xl text-accent/70">{no}</span>
          <div>
            <span className="inline-block rounded-full border border-line bg-[#FAF8F5] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-ink/45">
              {tag}
            </span>
            <h3 className="mt-3 max-w-2xl text-xl font-semibold tracking-tight text-ink">
              {title}
            </h3>
            {children}
          </div>
        </div>
      </div>
    </Reveal>
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
          <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-gradient">
            Building trustworthy products
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-lg text-ink/55">
            Four years of flight test at Skydio — across drone platforms,
            multiple controller hardware generations, and four parallel release
            programs, for operators flying public-safety, inspection, and
            defense missions. I own release validation for the controller
            platform: the strategy, the structure, and the evidence behind ship
            decisions. These are the principles underneath that work.
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

        {/* Hero artifact: how a feature becomes trusted */}
        <Reveal delay={0.14}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-line">
            <div className="border-b border-line bg-ink-50 p-7 sm:px-10 sm:py-8">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
                Recreated artifact
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                How a feature becomes trusted
              </h3>
              <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-ink/50">
                The path from idea to shipped, as I work it. Filled markers are
                the stages I own; open markers are the stages my evidence
                informs.
              </p>
            </div>
            <div className="bg-[#FAF8F5] p-7 sm:px-10 sm:py-8">
              <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
                {pipeline.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex items-center gap-2.5">
                      <span
                        className={
                          s.own
                            ? "h-2.5 w-2.5 shrink-0 rounded-full bg-accent"
                            : "h-2.5 w-2.5 shrink-0 rounded-full border border-accent/60 bg-transparent"
                        }
                        aria-hidden
                      />
                      <span className="font-serif text-sm text-accent/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-line" aria-hidden />
                    </div>
                    <p className="mt-2 text-[0.95rem] font-semibold tracking-tight text-ink">
                      {s.name}
                    </p>
                    <p className="mt-1 text-[0.82rem] leading-snug text-ink/50">
                      {s.note}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5 text-[0.8rem] text-ink/45">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
                  stages I own
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full border border-accent/60" aria-hidden />
                  stages my evidence informs
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 space-y-6">
          <Principle no="01" tag="Operator trust" title="Design for operator trust">
            <>
              <p className="mt-3 max-w-2xl text-[1.0rem] leading-relaxed text-ink/55">
                An interface can be technically correct and still lie. I modeled
                controller-to-drone connectivity as a finite state machine and
                documented every state where the screen says
                &ldquo;connected&rdquo; while the link underneath is degraded —
                then made those states testable, so ambiguity gets caught before
                an operator meets it mid-mission. An operator who&apos;s been
                surprised by the screen once stops trusting it and starts
                second-guessing the aircraft. That&apos;s the failure I validate
                against.
              </p>
              <ArtifactShell
                label="Recreated artifact · Where mental models break"
                caption="An anonymized pattern, not product internals — the moments I watch for when validating an operator-facing build."
              >
                <div className="space-y-4">
                  {frictions.map((f) => (
                    <div
                      key={f.moment}
                      className="grid gap-2 border-b border-line pb-4 last:border-b-0 last:pb-0 md:grid-cols-[1fr_1.4fr_1.2fr] md:gap-6"
                    >
                      <div>
                        <p className="text-[0.9rem] font-semibold tracking-tight text-ink">
                          {f.moment}
                        </p>
                        <p className="mt-0.5 text-[0.82rem] leading-snug text-ink/45">
                          expects: {f.expects}
                        </p>
                      </div>
                      <p className="text-[0.88rem] leading-relaxed text-ink/55">
                        {f.breaks}
                      </p>
                      <p className="text-[0.88rem] leading-relaxed text-accent">
                        {f.call}
                      </p>
                    </div>
                  ))}
                </div>
              </ArtifactShell>
            </>
          </Principle>

          <Principle
            no="02"
            tag="Information architecture"
            title="Organize around users, not architecture"
          >
            <>
              <p className="mt-3 max-w-2xl text-[1.0rem] leading-relaxed text-ink/55">
                I inherited 5,500+ test cases organized the way the engineering
                org is organized — by subsystem. Complete coverage, no view of
                the experience. I reorganized validation around how operators
                actually work: journeys, in sequence, across drone platforms.
                The gaps between steps became visible — and the gaps are where
                products fail. The journey structure is now the template for
                how coverage is organized across platforms.
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
                          <span className="text-[0.85rem] text-ink/70">{s}</span>
                          {i < iaAfter.length - 1 ? (
                            <span className="h-px flex-1 bg-line" />
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ArtifactShell>
            </>
          </Principle>

          <Principle no="03" tag="Release judgment" title="Ship with evidence">
            <>
              <p className="mt-3 max-w-2xl text-[1.0rem] leading-relaxed text-ink/55">
                A release is hundreds of judgment calls made under deadline. I
                built the cadence that grounds those calls in evidence: bug
                scrubs where severity is argued against reproduction, logs, and
                user impact — not volume — and program reviews that give
                leadership an honest picture of risk. I&apos;ve run this across
                four programs at once: new hardware bring-up, GA validation,
                hardware reliability, and the first controller-only software
                release. The work is separating what&apos;s cosmetic, what
                ships with a known fix, and what should block.
              </p>
              <ArtifactShell
                label="Recreated artifact · Release decision matrix"
                caption="Simplified from practice: the same finding earns a different call depending on the evidence behind it. The judgment is knowing which row you're in."
              >
                <div className="space-y-4">
                  {decisions.map((d) => (
                    <div
                      key={d.finding}
                      className="grid gap-2 border-b border-line pb-4 last:border-b-0 last:pb-0 md:grid-cols-[1.1fr_1.3fr_1.2fr] md:gap-6"
                    >
                      <p className="text-[0.9rem] font-semibold tracking-tight text-ink">
                        {d.finding}
                      </p>
                      <p className="text-[0.88rem] leading-relaxed text-ink/55">
                        {d.bar}
                      </p>
                      <p className="text-[0.88rem] leading-relaxed text-accent">
                        {d.call}
                      </p>
                    </div>
                  ))}
                </div>
              </ArtifactShell>
            </>
          </Principle>

          <Principle
            no="04"
            tag="Feedback systems"
            title="Validation is product design"
          >
            <>
              <p className="mt-3 max-w-2xl text-[1.0rem] leading-relaxed text-ink/55">
                Dogfooding isn&apos;t a calendar event — it&apos;s how the
                product learns. I run the loop that puts pre-release builds into
                real workflows and moves what we observe into engineering
                priorities: captured with logs and user impact, triaged pattern
                from one-off, validated, and back into the field. I run it with
                product, design, engineering, and program management — it&apos;s
                how ambiguous feedback becomes an engineering priority instead
                of a Slack thread.
              </p>
              <ArtifactShell
                label="Recreated artifact · How feedback becomes a ship decision"
                caption="Each pass through the loop raises release confidence; what comes out is priority and evidence, not a bug list."
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
            </>
          </Principle>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-12 rounded-2xl border border-line bg-ink-50 p-7 sm:px-10 sm:py-8">
            <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
              How I work an issue
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-y-3">
              {process.map((step, i) => (
                <span key={step} className="flex items-center">
                  <span className="text-[0.95rem] font-medium tracking-tight text-ink/80">
                    {step}
                  </span>
                  {i < process.length - 1 ? (
                    <span className="px-2.5 text-accent/60" aria-hidden>
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-2xl text-[0.85rem] leading-relaxed text-ink/45">
              The same discipline every time, whether the observation comes from
              a dogfooding session, a field report, or my own pre-flight. Most
              issues die at &ldquo;reproduce.&rdquo; The ones that survive earn
              engineering time.
            </p>
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
