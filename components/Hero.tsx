"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pt-24"
    >
      {/* faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(60% 60% at 50% 40%, black, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(60% 60% at 50% 40%, black, transparent 100%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-content"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/65">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-7 max-w-5xl text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-gradient"
        >
          Grayson Iller
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 text-[clamp(1.1rem,2.6vw,1.65rem)] font-medium tracking-tight text-white/55"
        >
          <span className="text-gradient-accent">Design engineer</span>
          {" "}who designs the product and ships the code.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-7 max-w-prose text-base leading-relaxed text-white/55 sm:text-lg"
        >
          By day I lead device platform testing at Skydio, validating controller
          UI/UX and embedded middleware on autonomous drones. By night I built{" "}
          <a
            href={site.links.vue}
            target="_blank"
            rel="noreferrer"
            className="text-white/85 underline decoration-white/25 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/60"
          >
            VUE
          </a>
          , a fashion drop-tracking platform with 100+ brands, from a blank
          Figma file to production. Human factors degree, systems engineering
          experience, and a side project that proves I can do both.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
        >
          <a
            href="#vue"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink tracking-tight transition-all hover:bg-accent hover:text-white"
          >
            See the work
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-b border-white/20 pb-0.5 text-sm text-white/60 transition-colors hover:border-accent hover:text-white"
          >
            LinkedIn ↗
          </a>
          <a
            href={site.links.email}
            className="inline-flex items-center gap-2 border-b border-white/20 pb-0.5 text-sm text-white/60 transition-colors hover:border-accent hover:text-white"
          >
            Email
          </a>
          <a
            href={site.links.vue}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-b border-white/20 pb-0.5 text-sm text-white/60 transition-colors hover:border-accent hover:text-white"
          >
            {site.links.vueLabel} ↗
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-14 max-w-prose text-sm text-white/35"
        >
          Every project starts the same way: a real problem, research into how
          people actually use it, a component system designed from scratch, then
          engineered and shipped to production. This portfolio is built the same
          way.
        </motion.p>
      </motion.div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="h-10 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
