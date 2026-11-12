"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-[#FAF8F5]/95 backdrop-blur-xl"
          : "border-b border-transparent bg-[#FAF8F5]/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-medium tracking-tight"
        >
          <span
            className="grid h-7 w-7 place-items-center rounded-lg border border-line bg-ink-50 text-[13px] font-semibold text-accent transition-colors group-hover:border-accent/50"
            aria-hidden
          >
            G
          </span>
          <span className="text-ink/90">Grayson Iller</span>
        </a>

        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-ink/55 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.links.email}
          className="rounded-full border border-line bg-ink-50 px-4 py-1.5 text-sm text-ink/75 transition-all hover:border-accent/40 hover:text-ink"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
