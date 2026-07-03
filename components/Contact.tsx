import Reveal from "./Reveal";
import { site } from "@/lib/site";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: site.links.email,
    icon: (
      <path
        d="M3 6h18v12H3z M3 7l9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    label: "LinkedIn",
    value: site.links.linkedinLabel,
    href: site.links.linkedin,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </>
    ),
  },
  {
    label: "VUE",
    value: site.links.vueLabel,
    href: site.links.vue,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line px-6 py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow">Contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-3xl text-balance text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-gradient">
            Looking for someone who can design it{" "}
            <span className="text-gradient-accent">and</span> build it?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-prose text-lg text-ink/55">
            I&apos;m open to design engineering roles. Based in {site.location},
            open to remote. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                className="surface surface-hover group flex items-center gap-4 p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-ink-50 text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    {c.icon}
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.14em] text-ink/35">
                    {c.label}
                  </span>
                  <span className="block truncate text-sm text-ink/75 transition-colors group-hover:text-ink">
                    {c.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.links.email}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-[#FAF8F5] transition-transform hover:-translate-y-0.5"
            >
              Say hello
            </a>
            <a
              href="/grayson-iller-resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-ink-50 px-5 py-2.5 text-sm text-ink/75 transition-all hover:border-accent/40 hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download r&eacute;sum&eacute;
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
