import Reveal from "./Reveal";

const iaBefore = ["Connectivity", "Power", "RF link", "UI screens", "Sensors", "Storage", "Thermals", "Accessories"];
const iaAfter = ["Unbox & pair", "Pre-flight checks", "Launch", "Mission", "Interrupt & recover", "Return & review"];

const programs = [
  { name: "C38 controller bring-up", span: "Alpha → Beta", w: "70%", off: "0%" },
  { name: "GA release validation", span: "every release", w: "100%", off: "0%" },
  { name: "Hardware reliability", span: "RF interference", w: "55%", off: "30%" },
  { name: "First controller-only release", span: "shipped", w: "40%", off: "55%" },
];

const process = ["Observe", "Reproduce", "Isolate", "Measure impact", "Partner with eng", "Validate fix", "Assess risk", "Ship"];

function Card({ title, caption, children }: { title: string; caption: string; children: React.ReactNode }) {
  return (
    <div className="surface flex h-full flex-col p-6 sm:p-7">
      <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
      <div className="my-5 flex-1">{children}</div>
      <p className="text-[0.9rem] leading-relaxed text-ink/55">{caption}</p>
    </div>
  );
}

function StateMachine() {
  // Connected, degraded, lost. The middle state is the one the screen used to hide.
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
    <svg viewBox="0 0 420 130" className="w-full" role="img" aria-label="State diagram: connected, degraded, lost. The degraded state is highlighted because the UI reported it as connected.">
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
            I decide what has to be true before a drone controller ships.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/60">
            The people flying these are police officers, firefighters,
            inspectors, and soldiers. I own release validation for the
            controller platform: what gets tested, in what order, and what the
            evidence says about shipping. Partnered with product, design,
            engineering, and program management the whole way.
          </p>
        </Reveal>

        {/* image row */}
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

        {/* three cards */}
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Reveal>
            <Card
              title="The screen said connected. It wasn't."
              caption="I modeled controller-to-drone connectivity as a state machine and found the states where the link is degraded but the UI still reads normal. Those states are now test cases, and the UI shows link health instead of link existence."
            >
              <StateMachine />
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <Card
              title="5,500 test cases, organized around the operator"
              caption="I built the controller suite as the sequence an operator actually goes through, not as a list of subsystems. When the org restructured it by feature, I wrote the impact assessment: regression went from 3.5 weeks to over 4, and the gaps between steps stopped being visible. I argued it with human factors and data."
            >
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-ink/40">By subsystem</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {iaBefore.map((m) => (
                      <span key={m} className="rounded-md border border-line px-2 py-1 text-[12px] text-ink/60">{m}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-accent">By operator journey (mine)</p>
                  <div className="mt-2 space-y-1">
                    {iaAfter.map((s, i) => (
                      <div key={s} className="flex items-center gap-2.5">
                        <span className="font-serif text-[0.85rem] text-accent/80">{i + 1}</span>
                        <span className="text-[13px] text-ink/75">{s}</span>
                        <span className="h-px flex-1 bg-line" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card
              title="Four programs at once, one test lead"
              caption="New hardware bring-up from Alpha through Beta, GA validation on every release, the radio-interference work behind the controller hardware rework, and the first release that shipped controller software on its own."
            >
              <div className="space-y-3">
                {programs.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-baseline justify-between text-[12.5px]">
                      <span className="font-medium text-ink/80">{p.name}</span>
                      <span className="text-ink/40">{p.span}</span>
                    </div>
                    <div className="relative mt-1 h-2 rounded-full bg-ink-100">
                      <div className="absolute top-0 h-2 rounded-full bg-accent/70" style={{ width: p.w, left: p.off }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-6 surface p-6 sm:px-8">
            <p className="text-[11px] uppercase tracking-[0.16em] text-accent">How I work an issue</p>
            <div className="mt-4 flex flex-wrap items-center gap-y-2">
              {process.map((step, i) => (
                <span key={step} className="flex items-center">
                  <span className="text-[0.95rem] font-medium tracking-tight text-ink/80">{step}</span>
                  {i < process.length - 1 ? <span className="px-2.5 text-accent/60" aria-hidden>→</span> : null}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[0.85rem] text-ink/45">Most issues die at &ldquo;reproduce.&rdquo; The ones that survive earn engineering time.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
