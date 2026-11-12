import Reveal from "./Reveal";

const journey = ["Unbox and pair", "Pre-flight", "Launch", "Mission", "Interrupt and recover", "Return and review"];

function Card({ title, caption, children, tag }: { title: string; caption?: string; children?: React.ReactNode; tag?: string }) {
  return (
    <div className="surface flex h-full flex-col p-6 sm:p-7">
      {tag ? <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-accent">{tag}</p> : null}
      <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
      {children ? <div className="my-5 flex-1">{children}</div> : null}
      {caption ? <p className="text-[0.9rem] leading-relaxed text-ink/55">{caption}</p> : null}
    </div>
  );
}

function ImageSlot({ label }: { label: string }) {
  return (
    <div className="flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-dashed border-ink/20 bg-ink-50 text-center text-[12px] text-ink/40" role="img" aria-label={label}>
      <span className="px-4">{label}</span>
    </div>
  );
}

function ConnectionDiagram() {
  const node = (x: number, label: string, sub: string, hot?: boolean) => (
    <g>
      <rect x={x} y={34} width={120} height={56} rx={12} fill={hot ? "rgba(194,114,78,0.12)" : "rgba(28,25,23,0.03)"} stroke={hot ? "#C2724E" : "rgba(28,25,23,0.18)"} strokeWidth={hot ? 1.5 : 1} />
      <text x={x + 60} y={57} textAnchor="middle" fontSize="13" fontWeight="600" fill="#1C1917">{label}</text>
      <text x={x + 60} y={75} textAnchor="middle" fontSize="11" fill={hot ? "#C2724E" : "rgba(28,25,23,0.5)"}>{sub}</text>
    </g>
  );
  const arrow = (x1: number, x2: number, y: number, label: string, up?: boolean) => (
    <g>
      <path d={`M${x1} ${y} C ${x1 + 30} ${y + (up ? -34 : 34)}, ${x2 - 30} ${y + (up ? -34 : 34)}, ${x2} ${y}`} fill="none" stroke="rgba(28,25,23,0.35)" strokeWidth={1.2} markerEnd="url(#a)" />
      <text x={(x1 + x2) / 2} y={y + (up ? -30 : 40)} textAnchor="middle" fontSize="10.5" fill="rgba(28,25,23,0.55)">{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 420 130" className="w-full" role="img" aria-label="Connection diagram: connected, degraded, lost. The degraded state is highlighted because the screen showed it as connected.">
      <defs>
        <marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="rgba(28,25,23,0.35)" />
        </marker>
      </defs>
      {node(10, "Connected", "UI: green")}
      {node(150, "Degraded", "UI said: green", true)}
      {node(290, "Lost", "UI: red")}
      {arrow(130, 150, 46, "link weakens", true)}
      {arrow(270, 290, 46, "drops", true)}
      {arrow(150, 130, 82, "recovers")}
      {arrow(290, 270, 82, "reconnects")}
    </svg>
  );
}

export default function CaseStudySkydio() {
  return (
    <section id="skydio" className="scroll-mt-24 border-t border-line px-6 py-20">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">Skydio · 2022 to now</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
            The controller said connected. It wasn&apos;t.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/60">
            The people flying these are police officers, firefighters,
            inspectors, and soldiers. My job puts me on the controller before
            they are. I look for the moments where what the screen says and
            what the system is doing come apart, and I work with design and
            engineering to close them.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          <Reveal className="sm:col-span-2">
            <img src="/press/skydio-officer-field.jpg" alt="Officer holding the Skydio controller outdoors" className="aspect-[16/10] w-full rounded-2xl border border-line object-cover" loading="lazy" />
          </Reveal>
          <div className="grid gap-3">
            <Reveal delay={0.05}>
              <img src="/press/skydio-controller-case.jpg" alt="Skydio controller in its hard case, screen on" className="aspect-[16/9] w-full rounded-2xl border border-line object-cover" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1}>
              <img src="/press/skydio-x10-top.jpg" alt="Skydio X10 drone, top view" className="aspect-[16/9] w-full rounded-2xl border border-line bg-white object-cover" loading="lazy" />
            </Reveal>
          </div>
        </div>
        <p className="mt-2 text-right text-[12px] text-ink/35">Photos: Skydio</p>

        {/* 4a: connection state */}
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <Card
              tag="Case study 1"
              title="Connection state"
              caption="The link between controller and drone has more than two states, but parts of the UI only showed two. I found and documented the cases where the screen showed a drone as on or connected when it was off, unpaired, or out of reach, including one where an offline drone could still be selected to fly. Each one was filed with repro steps and closed. The connection state model itself belongs to the wireless team. My part was showing where the interface didn't reflect it."
            >
              <ConnectionDiagram />
            </Card>
          </Reveal>

          {/* 4d: warnings under stress */}
          <Reveal delay={0.05}>
            <Card
              tag="Case study 3"
              title="Warnings under stress"
              caption="When the controller detects strong radio interference it disables some buttons and warns the pilot. I documented exactly how that alert behaves in flight: when it appears, when it clears, and what happens after it's dismissed. I also tracked down cases where it fired with no radio nearby. A warning that cries wolf teaches people to ignore it."
            />
          </Reveal>
        </div>

        {/* 4b: pairing redesign, the design piece, most room */}
        <Reveal delay={0.08}>
          <div className="surface mt-4 p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[10px] uppercase tracking-[0.16em] text-accent">Case study 2 · Self-initiated concept, not shipped work</p>
            </div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">Redesigning the pairing success and failure states</h3>

            <div className="mt-6 grid gap-6 lg:grid-cols-5">
              <div className="space-y-5 lg:col-span-2">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">Problem</p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/65">
                    Pairing a drone ends in one of two unclear places. On success,
                    nothing clearly says it worked. On failure, the message reads
                    &ldquo;Unable to connect to drone&rdquo;, which sends operators
                    troubleshooting the wrong thing.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">Evidence</p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/65">
                    [PLACEHOLDER: evidence, 1 to 2 sentences]
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">Why</p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/65">
                    [PLACEHOLDER: 2 to 3 sentences on the decisions, written after the Figma work]
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-ink/40">Before</p>
                  <ImageSlot label="[PLACEHOLDER: Figma export, before]" />
                </div>
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-accent">After</p>
                  <ImageSlot label="[PLACEHOLDER: Figma export, after]" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4c: journey, option B */}
        <Reveal delay={0.1}>
          <div className="surface mt-4 p-6 sm:p-7">
            <h3 className="text-lg font-semibold tracking-tight text-ink">How I walk a new feature</h3>
            <div className="mt-4 flex flex-wrap items-center gap-y-2">
              {journey.map((step, i) => (
                <span key={step} className="flex items-center">
                  <span className="text-[0.95rem] font-medium tracking-tight text-ink/80">{step}</span>
                  {i < journey.length - 1 ? <span className="px-2.5 text-accent/60" aria-hidden>→</span> : null}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-ink/55">
              When I review a new controller feature I walk it the way an
              operator meets it: unbox and pair, pre-flight, launch, mission,
              interrupt and recover, return and review. Most of the problems I
              find live in the gaps between those steps.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 text-[0.9rem] text-ink/45">
            Alongside this I lead controller release validation and manage one direct report.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
