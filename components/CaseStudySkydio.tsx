import Reveal from "./Reveal";

const journey = ["Unbox and pair", "Pre-flight checks", "Launch", "Mission", "Interrupt and recover", "Return and review"];

const mismatches = [
  { sees: "Green, full bars", is: "Link weak, not yet switched", cost: "Flies further than the link supports" },
  { sees: "Green", is: "Telemetry only, commands dropped", cost: "Inputs ignored, no explanation" },
  { sees: "Green", is: "Media queued, not uploading", cost: "Thinks the evidence is saved" },
  { sees: "Red", is: "Reconnecting, briefly", cost: "Aborts a mission that would have recovered" },
];

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
          <p className="eyebrow">Skydio · controller · 2022 to now</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
            The controller told operators they were connected. They weren&apos;t.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/60">
            The people flying these are police officers, firefighters,
            inspectors, and soldiers. I mapped every link state against what
            the screen showed and found where the two disagreed. Working with
            the design and mobile engineering teams, the UI now shows link
            health instead of link existence.
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

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <Card
              title="The problem: three states, one icon"
              caption="The controller switches between direct radio and cellular automatically. Between a good link and a lost one there are states where the link is weak, or telemetry arrives but commands don't, and the screen showed all of them as connected. I wrote the state model down and shared it, so design, engineering, and test were arguing about the same picture."
            >
              <StateMachine />
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <Card
              title="The evidence: what the operator saw vs. what was true"
              caption="Each row became a scenario with its own expected UI. Severity was argued on operator impact: a wrong green costs more than a dropped frame."
            >
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="text-left text-[10px] uppercase tracking-[0.12em] text-ink/40">
                    <th className="pb-2 pr-3 font-medium">Operator sees</th>
                    <th className="pb-2 pr-3 font-medium">System state</th>
                    <th className="pb-2 font-medium">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {mismatches.map((m) => (
                    <tr key={m.is} className="border-t border-line align-top">
                      <td className="py-2 pr-3 text-ink/75">{m.sees}</td>
                      <td className="py-2 pr-3 font-medium text-accent">{m.is}</td>
                      <td className="py-2 text-ink/55">{m.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card
              title="What I proposed, and what shipped"
              caption="Four controller UI changes came out of proposals I wrote: a lost-link alert for radio interference, a warning before power-cycling mid-flight, hiding stale link stats when the link is down, and clearer update copy. The remaining one, a dedicated state for connected-but-not-controllable, is in the backlog with my sentence as its problem statement."
            >
              <ul className="space-y-2 text-[14px] text-ink/75">
                <li className="flex gap-2.5"><span className="text-accent">1</span>Show link health, not link existence: a degraded state before the failure state, in the same place every time.</li>
                <li className="flex gap-2.5"><span className="text-accent">2</span>Make the switch visible and short: what still works while it happens.</li>
                <li className="flex gap-2.5"><span className="text-accent">3</span>Separate control, telemetry, and media status when they diverge; collapse them when they agree.</li>
                <li className="flex gap-2.5"><span className="text-accent">4</span>When the link returns, say what happened while it was gone.</li>
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.15}>
            <Card
              title="I rebuilt the controller test suite around the operator&apos;s journey"
              caption="Coverage used to be filed by subsystem: radio, power, UI, storage. I rewrote it as the sequence an operator lives through, so each step reads like a user story and the gaps between steps are visible. It's the same map a journey map draws, and it's where most of the 190 critiques came from."
            >
              <div className="space-y-1.5">
                {journey.map((s, i) => (
                  <div key={s} className="flex items-center gap-2.5">
                    <span className="font-serif text-[0.9rem] text-accent/80">{i + 1}</span>
                    <span className="text-[14px] text-ink/80">{s}</span>
                    <span className="h-px flex-1 bg-line" />
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <p className="mt-6 text-[0.85rem] text-ink/45">
            An interface can be technically correct and still lie. The fix is not a better icon; it&apos;s a screen that reports the state the system is actually in.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
