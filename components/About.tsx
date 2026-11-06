import Reveal from "./Reveal";

const stats = [
  { n: "5,500+", l: "test cases written", d: "S2, X2, and X10 Enterprise drones" },
  { n: "4", l: "release programs at once", d: "bring-up, GA, reliability, controller-only" },
  { n: "<1%", l: "controller RMA rate", d: "hardware reliability work I contributed to" },
  { n: "100+", l: "brands on VUE", d: "scraped daily into one feed, built solo" },
  { n: "2", l: "published papers", d: "lunar landing, spatial disorientation" },
  { n: "3", l: "years at Skydio", d: "intern in 2022, lead today" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line px-6 py-16">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">At a glance</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.04}>
              <div className="surface h-full p-5">
                <p className="text-[clamp(2rem,4vw,2.6rem)] font-semibold leading-none tracking-[-0.03em] text-ink">
                  {s.n}
                </p>
                <p className="mt-2 text-[13px] font-medium text-ink/80">{s.l}</p>
                <p className="mt-1 text-[12px] leading-snug text-ink/45">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-prose text-base leading-relaxed text-ink/60 sm:text-[1.05rem]">
            B.S. Human Factors Psychology, Embry-Riddle, 2023. Flight Test
            Engineer Lead on the Device Platform team at Skydio, where I own
            controller validation and manage a direct report. Nights and
            weekends I run VUE. Based in Redwood City, CA.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
