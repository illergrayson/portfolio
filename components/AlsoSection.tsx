import Reveal from "./Reveal";

const papers = [
  {
    title: "Pilot-in-the-loop technology for moon landings",
    venue: "IAF / IAA Space Life Sciences Symposium, 2022",
    what: "Fatigue analysis and predictive fatigue models on Android, for crews landing on the Moon. Co-author.",
  },
  {
    title: "The Link Between Spatial Disorientation in Flight and Mild Hypoxia",
    venue: "Reno Aerospace Medicine Convention, 2021",
    what: "Built and tested VR tools to study how pilots lose orientation when oxygen drops. Co-author.",
  },
];

export default function AlsoSection() {
  return (
    <section id="more" className="scroll-mt-24 border-t border-line px-6 py-20">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">Research</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/60">
            Human factors is where I started: how people perform when the
            environment is working against them.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {papers.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="surface h-full p-6 sm:p-7">
                <p className="text-[11px] uppercase tracking-[0.14em] text-accent">{p.venue}</p>
                <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-ink">{p.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/55">{p.what}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-[0.9rem] leading-relaxed text-ink/45">
            Off the clock: NCAA D2 cross country and track, Olympic-distance
            triathlon, PADI diver, working toward a private pilot license.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
