"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function Hero() {
  const controls = useAnimationControls();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start("show");
    // If the tab loads out of focus framer can leave the hero blank; snap to final state.
    const t = setTimeout(() => {
      controls.set("show");
      const el = ref.current;
      if (el) {
        for (const child of Array.from(el.children)) {
          const c = child as HTMLElement;
          c.style.opacity = "1";
          c.style.transform = "none";
        }
      }
    }, 1500);
    return () => clearTimeout(t);
  }, [controls]);

  return (
    <section id="top" className="relative overflow-hidden px-6 pt-28 pb-10">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className="relative mx-auto w-full max-w-content"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center rounded-full border border-line bg-ink-50 px-3.5 py-1.5 text-xs text-ink/55">
            Product design · Human factors · FAA Part 107
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-7 text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-ink"
        >
          Grayson Iller
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-3xl text-[clamp(1.15rem,2.6vw,1.75rem)] font-medium leading-snug tracking-tight text-ink/70"
        >
          I design for operators under pressure. Human factors by training.
          Since 2022 I&apos;ve worked on the Skydio controller, finding where
          the interface and reality disagree. I also designed and built{" "}
          <a
            href={site.links.vue}
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-accent/50 underline-offset-4 hover:text-accent"
          >
            VUE
          </a>
          , a fashion-drop feed, solo.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href="#skydio"
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-sm font-semibold tracking-tight text-[#FAF8F5] transition-all hover:bg-accent"
          >
            See the work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="border-b border-ink/20 pb-0.5 text-sm text-ink/55 hover:border-accent hover:text-ink">
            LinkedIn ↗
          </a>
          <a href={site.links.email} className="border-b border-ink/20 pb-0.5 text-sm text-ink/55 hover:border-accent hover:text-ink">
            Email
          </a>
          <a href="/grayson-iller-resume.pdf" download className="border-b border-ink/20 pb-0.5 text-sm text-ink/55 hover:border-accent hover:text-ink">
            Résumé (PDF)
          </a>
        </motion.div>

        <motion.figure variants={item} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-line">
            <img
              src="/press/skydio-officer-controller.jpg"
              alt="A police officer flying a Skydio X10 from the handheld controller"
              className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]"
            />
          </div>
          <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-[13px] text-ink/45">
            <span>
              The Skydio X10 and its controller in the field.
            </span>
            <span>Photo: Skydio</span>
          </figcaption>
        </motion.figure>
      </motion.div>
    </section>
  );
}
