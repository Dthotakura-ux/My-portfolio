"use client";

import Link from "next/link";
import { useState } from "react";

type PageKey = "home" | "about" | "resume" | "contact";

const LINKS: { key: PageKey; href: string; label: string }[] = [
  { key: "home", href: "/", label: "Home" },
  { key: "about", href: "/about", label: "About Me" },
  { key: "resume", href: "/resume", label: "Resume" },
  { key: "contact", href: "/contact", label: "Contact" },
];

export function SiteHeader({ current }: { current: PageKey }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative mx-auto max-w-[1280px] px-6 py-8 sm:px-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-grand-hotel text-[28px] sm:text-[32px]">
          Dileep Thotakura
        </Link>

        <nav className="hidden items-center gap-10 sm:flex">
          {LINKS.map((link) =>
            link.key === current ? (
              <span
                key={link.key}
                className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink"
              >
                {link.label}
              </span>
            ) : (
              <Link
                key={link.key}
                href={link.href}
                target={link.key === "resume" ? "_blank" : undefined}
                rel={link.key === "resume" ? "noopener noreferrer" : undefined}
                className="link-underline text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-[36px] shrink-0 items-center justify-center text-ink sm:hidden"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="absolute inset-x-0 top-full z-50 flex flex-col gap-1 border-b border-hairline bg-paper px-6 py-4 sm:hidden">
          {LINKS.map((link) =>
            link.key === current ? (
              <span
                key={link.key}
                className="py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink"
              >
                {link.label}
              </span>
            ) : (
              <Link
                key={link.key}
                href={link.href}
                target={link.key === "resume" ? "_blank" : undefined}
                rel={link.key === "resume" ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
