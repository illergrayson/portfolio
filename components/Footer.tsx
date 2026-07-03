import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-ink/35">
          &copy; {new Date().getFullYear()} Grayson Iller &middot; {site.location}
        </p>
        <div className="flex items-center gap-5 text-sm text-ink/45">
          <a href={site.links.email} className="transition-colors hover:text-ink">
            Email
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={site.links.vue}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            VUE
          </a>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-content text-xs text-ink/25">
        Designed &amp; built by Grayson Iller in Next.js, TypeScript, Tailwind,
        and Framer Motion.
      </p>
    </footer>
  );
}
