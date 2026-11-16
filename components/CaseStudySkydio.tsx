import Reveal from "./Reveal";

const journey = ["Unbox and pair", "Pre-flight", "Launch", "Mission", "Interrupt and recover", "Return and review"];

export default function CaseStudySkydio() {
  return (
    <section id="skydio" className="scroll-mt-24 border-t border-line px-6 py-20">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">Skydio · 2022 to now</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
            Where the screen and the system disagree.
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

        {/* 4c: journey, option A, past tense */}
        <Reveal delay={0.1}>
          <div className="surface mt-4 p-6 sm:p-7">
            <h3 className="text-lg font-semibold tracking-tight text-ink">Critical user journeys on the controller</h3>
            <div className="mt-4 flex flex-wrap items-center gap-y-2">
              {journey.map((step, i) => (
                <span key={step} className="flex items-center">
                  <span className="text-[0.95rem] font-medium tracking-tight text-ink/80">{step}</span>
                  {i < journey.length - 1 ? <span className="px-2.5 text-accent/60" aria-hidden>→</span> : null}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-ink/55">
              I built the controller test suite in the order an operator meets
              the product: unbox and pair, pre-flight, launch, mission,
              interrupt and recover, return and review. Written that way, the
              gaps between steps are visible.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 text-[0.9rem] text-ink/45">
            Alongside this I lead controller release validation and manage one direct report.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-3 text-[0.9rem] text-ink/45">
            Two case studies with real product screens are shared privately with interviewers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
