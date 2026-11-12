import Reveal from "./Reveal";

const stats = [
  { n: "2022", l: "at Skydio since", d: "intern on mobile UI/UX, full-time since 2023" },
  { n: "[N]", l: "UI and UX issues filed on the controller", d: "[N] closed" },
  { n: "100+", l: "brands on VUE", d: "designed and built solo" },
  { n: "2", l: "published papers", d: "lunar landing, spatial disorientation" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line px-6 py-16">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">At a glance</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
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
            B.S. Human Factors Psychology, Embry-Riddle, 2023. FAA Part 107
            pilot, so I fly what I work on. Flight Test Engineer Lead on the
            Device Platform team at Skydio. I sit in the design team&apos;s
            weekly studio critique. Nights and weekends I run VUE. Based in
            Redwood City, CA.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
