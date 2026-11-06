import Reveal from "./Reveal";

const tiles = [
  { big: "NCAA D2", small: "Cross country and track at Embry-Riddle" },
  { big: "Olympic tri", small: "1.5 km swim, 40 km bike, 10 km run. Finished." },
  { big: "Part 107", small: "FAA-certified drone pilot" },
  { big: "PADI", small: "Open Water diver" },
  { big: "JAX → Bay Area", small: "Jacksonville, FL raised. Redwood City now." },
  { big: "Next up", small: "Private pilot license, seaplane rating" },
];

const papers = [
  {
    title: "Pilot-in-the-loop technology for moon landings",
    venue: "IAF / IAA Space Life Sciences Symposium, 2022",
    what: "Fatigue analysis and predictive fatigue models on Android, for crews landing on the Moon.",
  },
  {
    title: "The Link Between Spatial Disorientation in Flight and Mild Hypoxia",
    venue: "Reno Aerospace Medicine Convention, 2021",
    what: "Built and tested VR tools to study how pilots lose orientation when oxygen drops.",
  },
];

export default function AlsoSection() {
  return (
    <section id="more" className="scroll-mt-24 border-t border-line px-6 py-20">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">Off the clock</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {tiles.map((t, i) => (
            <Reveal key={t.big} delay={i * 0.04}>
              <div className="surface h-full p-5 sm:p-6">
                <p className="text-[clamp(1.3rem,2.6vw,1.8rem)] font-semibold leading-none tracking-[-0.03em] text-ink">{t.big}</p>
                <p className="mt-2 text-[13px] leading-snug text-ink/50">{t.small}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="eyebrow mt-16">Published research</p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
