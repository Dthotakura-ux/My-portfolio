import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { MagneticLink } from "@/components/MagneticLink";

const ACCENT = "#ff5e36";

export const metadata: Metadata = {
  title: "Contact — Dileep Thotakura",
  description: "Get in touch with Dileep Thotakura — Lead UX Designer at Evoke Technologies.",
};

export default function ContactPage() {
  return (
    <div className="bg-paper text-ink">
      <header className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-8 sm:px-10">
        <Link href="/" className="font-grand-hotel text-[28px] sm:text-[32px]">
          Dileep Thotakura
        </Link>
        <nav className="flex items-center gap-10">
          <Link
            href="/"
            className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45 transition-colors hover:text-ink"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45 transition-colors hover:text-ink"
          >
            About Me
          </Link>
          <Link
            href="/resume"
            className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45 transition-colors hover:text-ink"
          >
            Resume
          </Link>
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink">Contact</span>
        </nav>
      </header>

      <main className="mx-auto flex max-w-[1280px] flex-col gap-14 px-6 pb-24 pt-6 sm:px-10">
        <div className="flex flex-col gap-4 fade-up">
          <p className="font-serif text-[48px] italic leading-tight sm:text-[64px]">Let&apos;s Talk</p>
          <p className="max-w-[60ch] text-[18px] leading-[1.6] text-ink/70">
            Have a project in mind, a question, or just want to say hello? Fill out the form
            below and I&apos;ll get back to you as soon as I can.
          </p>
        </div>

        <div className="flex flex-col gap-16 border-t border-hairline pt-14 lg:flex-row">
          <div className="flex-1 fade-up" style={{ animationDelay: "80ms" }}>
            <ContactForm />
          </div>

          <div className="flex w-full flex-col gap-10 fade-up lg:w-[300px] lg:shrink-0" style={{ animationDelay: "140ms" }}>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/45">Email</p>
              <MagneticLink
                href="mailto:dileepthotakura2@outlook.com"
                className="link-underline mt-2 inline-block text-[17px] font-semibold"
                style={{ color: ACCENT }}
              >
                dileepthotakura2@outlook.com
              </MagneticLink>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/45">Phone</p>
              <p className="mt-2 text-[16px] text-ink/70">+91 9989554354 / 7670937716</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/45">Location</p>
              <p className="mt-2 text-[16px] text-ink/70">Hyderabad, India</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/45">LinkedIn</p>
              <MagneticLink
                href="https://linkedin.com/in/dileepchowdary"
                className="link-underline mt-2 inline-block text-[16px] text-ink/70"
              >
                linkedin.com/in/dileepchowdary
              </MagneticLink>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-8 text-[11px] text-ink/40 sm:flex-row sm:justify-between sm:px-10">
          <p>Some names and data was changed due to NDA.</p>
          <p>Subject to copyrights. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
