import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";

const ACCENT = "#ff5e36";

export const metadata: Metadata = {
  title: "AI Usage — Dileep Thotakura",
  description: "How I use AI tools like Claude in my design and documentation workflow.",
};

const documents = [
  {
    title: "Building Ledgerly DS, step by step",
    tag: "Worked example",
    description:
      "A full build report with proof: one design system package built from scratch and installed into real Angular, React, Bootstrap, Tailwind, Material UI and plain HTML apps — every step documented, every claim tested.",
    file: "/documents/Ledgerly-DS-Build-Report.pdf",
  },
  {
    title: "One Design System, Every Stack",
    tag: "Plain-language guide",
    description:
      "A step-by-step guide for UX architects and dev teams on turning a single design system into one package that works across Angular, React, Vue, Tailwind, Bootstrap and Material UI, written without assuming technical background.",
    file: "/documents/One-Design-System-Every-Stack.pdf",
  },
  {
    title: "Build your Figma design system in ten minutes",
    tag: "Designer guide",
    description:
      "Colors, text styles, spacing and eight ready components, created automatically by a small plugin — a step-by-step guide for designers with no drawing by hand and no coding needed.",
    file: "/documents/Figma-Design-System-Guide.pdf",
  },
];

export default function AIUsagePage() {
  return (
    <div className="bg-paper text-ink">
      <SiteHeader current="ai-usage" />

      <main className="mx-auto flex max-w-[1280px] flex-col gap-14 px-6 pb-24 pt-6 sm:px-10">
        <div className="flex flex-col gap-4 fade-up">
          <p className="font-serif text-[48px] italic leading-tight sm:text-[64px]">AI Usage</p>
          <p className="max-w-[60ch] text-[18px] leading-[1.6] text-ink/70">
            A look at how I use AI tools like Claude alongside conventional UX practice — turning
            design systems, guides and documentation into something a team can actually pick up
            and run with. Each document below was built and verified with Claude as part of that
            workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 border-t border-hairline pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <div
              key={doc.file}
              className="flex flex-col gap-4 rounded-[12px] border border-hairline p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_-28px_rgba(255,94,54,0.35)]"
            >
              <span
                className="w-fit rounded-full px-3 py-[5px] text-[11px] font-semibold uppercase tracking-[0.1em]"
                style={{ backgroundColor: "rgba(255,94,54,0.1)", color: ACCENT }}
              >
                {doc.tag}
              </span>
              <p className="font-serif text-[22px] italic leading-snug text-ink">{doc.title}</p>
              <p className="flex-1 text-[14px] leading-[22px] text-ink/60">{doc.description}</p>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex w-fit items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em]"
                style={{ color: ACCENT }}
              >
                <span className="link-underline">View PDF</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8">
                  <path d="M14 10l6-6M20 4h-5M20 4v5" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M11 6H7a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3v-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
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
