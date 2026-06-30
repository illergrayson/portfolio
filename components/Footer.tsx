import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Grayson Iller · {site.location}
        </p>
        <div className="flex items-center gap-5 text-sm text-white/45">
          <a href={site.links.email} className="transition-colors hover:text-white">
            Email
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={site.links.vue}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            VUE
          </a>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-content text-xs text-white/25">
        Designed &amp; built by Grayson Iller in Next.js, TypeScript, Tailwind,
        and Framer Motion.
      </p>
    </footer>
  );
}
