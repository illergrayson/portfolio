import Reveal from "./Reveal";

const seatVariants = [
  {
    who: "Children",
    need: "Integrated harness and a raised base, so the same rail carries a car seat instead of a bolt-on.",
  },
  {
    who: "Elderly",
    need: "Higher hip point and firmer bolsters, tuned for getting in and out without a struggle.",
  },
  {
    who: "Wheelchair users",
    need: "A seat that releases and rolls away, leaving the rail clear for a chair to lock in its place.",
  },
  {
    who: "Big and tall",
    need: "Wider span and deeper travel, occupying two rail positions without touching the interface.",
  },
  {
    who: "Business travelers",
    need: "A fold-out desk and a private display angle, the cabin turned into a seat that works.",
  },
];

export default function CaseStudyZephyr() {
  return (
    <section
      id="zephyr"
      className="scroll-mt-24 border-t border-line px-6 py-28"
    >
      <div className="mx-auto max-w-content">
        {/* header */}
        <Reveal>
          <p className="eyebrow">Case Study 02: Zephyr Aire</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-none tracking-[-0.03em] text-gradient">
            Zephyr Aire
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/55">
            Cabin experience design for Supernal&apos;s eVTOL concept. Modular
            seating, in-flight displays, and a companion app, designed around
            the people inside.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-white/35">
            A team concept project. My work centered on the seat system and the
            display and companion-app interactions.
          </p>
        </Reveal>

        {/* one deep dive: the hardest design problem */}
        <div className="mt-24 grid gap-10 sm:grid-cols-[0.85fr_1.15fr] sm:gap-14">
          <Reveal>
            <div className="sm:sticky sm:top-28 sm:self-start">
              <p className="eyebrow">The hard part</p>
              <h3 className="mt-4 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
                One rail, every body
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-white/65">
              <p>
                A four-seat cabin has to carry a toddler in a harness, a
                traveler who uses a wheelchair, an executive who wants to work,
                and an elderly passenger who just needs to sit down without a
                fight. Bolt in a fixed row and you serve none of them well. So
                the seats attach and detach like Lego bricks: every one clicks
                onto the same standardized rail interface, and the cabin gets
                reconfigured on the ground between flights.
              </p>
              <p>
                The tension sits in that sentence. The connection has to be
                universal, one rail geometry, one latch, one load path, so any
                seat drops into any position. But the seat itself has to be
                deeply specialized: a child needs a harness and a raised base, a
                wheelchair user needs the seat gone entirely and the floor left
                clear, a business traveler needs a desk and a display angle. The
                interface can never change. Everything above it has to.
              </p>
              <p>
                And it all has to fly. Every variant answers to the same weight
                budget, the same load case, the same certification math, because
                this is an aircraft, not a lounge. The design job was drawing the
                one line that stays fixed, then letting real bodies and real
                needs shape everything on the other side of it.
              </p>
              <p className="text-white/80">
                Universal where it connects, specialized where it meets a
                person. That split is the whole product.
              </p>
            </div>
          </Reveal>
        </div>

        {/* the seat variants: one rail, many specializations */}
        <div className="mt-16 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
          {seatVariants.map((v, i) => (
            <Reveal key={v.who} delay={i * 0.05}>
              <div className="bg-ink-50 p-6 sm:p-8">
                <div className="grid gap-3 sm:grid-cols-[0.8fr_2.2fr] sm:gap-9 sm:items-baseline">
                  <p className="text-[1.05rem] font-semibold tracking-tight text-white">
                    {v.who}
                  </p>
                  <p className="text-[0.98rem] leading-relaxed text-white/55">
                    {v.need}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.05}>
          <p className="mt-4 text-[12px] text-white/30">
            Different seat, same rail. The interface underneath never moves.
          </p>
        </Reveal>

        {/* companion app + display */}
        <div className="mt-24 grid gap-10 sm:grid-cols-[0.85fr_1.15fr] sm:gap-14">
          <Reveal>
            <div className="sm:sticky sm:top-28 sm:self-start">
              <p className="eyebrow">On the phone, overhead</p>
              <h3 className="mt-4 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
                You are: Seat 2B
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-white/65">
              <p>
                Because a seat can sit anywhere on the rail, the cabin has to
                tell you where you are. The companion app opens to it plainly:
                <span className="text-white/85"> You are: Seat 2B</span>. From
                there, climate, lighting, and your own display live in your hand,
                tied to the exact position you are sitting in, not a generic
                cabin panel.
              </p>
              <p>
                The app carries the whole trip, preflight, inflight, and
                post-flight: book the seat and configuration you need, watch
                flight status before you board, adjust your space in the air,
                and close out on the ground. Overhead, an ultrawide cabin display
                runs the shared layer, real-time flight data everyone can see,
                while the personal controls stay on the personal device.
              </p>
            </div>
          </Reveal>
        </div>

        {/* quiet scale line */}
        <Reveal className="mt-24">
          <p className="text-center text-[13px] tracking-wide text-white/40">
            5 population-specific seat variants{" "}
            <span className="px-1.5 text-white/20">·</span> companion app with
            preflight, inflight, and post-flight modes{" "}
            <span className="px-1.5 text-white/20">·</span> ultrawide cabin
            display system
          </p>
        </Reveal>
      </div>
    </section>
  );
}
