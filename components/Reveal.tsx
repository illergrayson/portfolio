"use client";

import {
  motion,
  useAnimationControls,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
      });
    }
  }, [inView, controls, delay]);

  // Reliability fallback: if the in-view trigger never fires (tab backgrounded,
  // loaded out of focus, IntersectionObserver quirks), snap to the final state.
  // framer-motion pauses its render loop while the document is hidden, so we
  // also write the final style straight to the DOM — that applies even while
  // hidden. controls.set keeps framer's internal state in sync so it doesn't
  // re-hide the element when its loop resumes.
  useEffect(() => {
    const t = setTimeout(() => {
      controls.set({ opacity: 1, y: 0 });
      const el = ref.current;
      if (el) {
        el.style.opacity = "1";
        el.style.transform = "none";
      }
    }, 1500);
    return () => clearTimeout(t);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
