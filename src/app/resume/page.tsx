"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Icon, IconBadge } from "@/components/resume/Icons";
import {
  NAVY,
  approach,
  certifications,
  experience,
  expertise,
  skills,
  tools,
} from "@/components/resume/data";

function SectionHeading({
  icon,
  color,
  children,
}: {
  icon: Parameters<typeof Icon>[0]["name"];
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 print:break-after-avoid">
      <span
        className="flex size-[30px] items-center justify-center rounded-[8px]"
        style={{ backgroundColor: `${color}1f`, color }}
      >
        <Icon name={icon} className="h-[60%] w-[60%]" />
      </span>
      <h2 className="text-[15px] font-bold uppercase tracking-[0.08em] text-[#1c2536]">{children}</h2>
    </div>
  );
}

export default function ResumePage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Thotakura Dileep — Resume";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#e7ebf3] py-10 print:bg-white print:py-0">
      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 10mm;
          }
          html, body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
      <div className="mx-auto mb-6 flex max-w-[1050px] items-center justify-between px-2 print:hidden">
        <Link href="/" className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#0b1e3f] hover:opacity-70">
          ← Back to home
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-[8px] bg-[#0b1e3f] px-5 py-[10px] text-[13px] font-semibold text-white transition-opacity hover:opacity-85"
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="mx-auto flex max-w-[1050px] overflow-hidden rounded-[18px] bg-white shadow-2xl print:max-w-none print:rounded-none print:shadow-none">
        {/* Sidebar */}
        <aside className="flex w-[300px] shrink-0 flex-col gap-8 p-8 text-white" style={{ backgroundColor: NAVY }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-photo.png"
              alt="Thotakura Dileep"
              className="h-[230px] w-full rounded-[10px] object-cover"
            />
            <h1 className="mt-5 text-[26px] font-bold leading-tight">Thotakura Dileep</h1>
            <p className="mt-1 text-[15px] font-medium text-[#8fb4ff]">Associate UX Architect</p>
            <p className="mt-2 text-[11px] leading-[17px] text-white/55">
              Enterprise UX &nbsp;|&nbsp; AI-Assisted Design &nbsp;|&nbsp; Design Systems &nbsp;|&nbsp; User-Centered
              Solutions
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px]">
            <div className="flex items-center gap-3 text-white/80">
              <Icon name="pin" className="size-[15px] shrink-0 text-[#8fb4ff]" />
              Hyderabad, India
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Icon name="mail" className="size-[15px] shrink-0 text-[#8fb4ff]" />
              dileepthotakura2@outlook.com
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Icon name="phone" className="size-[15px] shrink-0 text-[#8fb4ff]" />
              +91 9989554354 / 7670937716
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="flex size-[15px] shrink-0 items-center justify-center rounded-[3px] bg-[#8fb4ff] text-[9px] font-bold text-[#0b1e3f]">
                in
              </span>
              linkedin.com/in/dileepchowdary
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">Key Skills</p>
            <div className="mt-3 flex flex-col gap-2">
              {skills.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5 rounded-[8px] bg-white/5 px-2.5 py-2">
                  <IconBadge name={s.icon} color={s.color} size={26} />
                  <span className="text-[12px] leading-[15px] text-white/85">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">Tools &amp; Technology</p>
            <div className="mt-3 flex flex-col gap-3">
              {tools.map((t) => (
                <div key={t.label} className="flex items-start gap-3">
                  <span
                    className="mt-[2px] flex size-[26px] shrink-0 items-center justify-center rounded-[7px] text-[11px] font-bold text-white"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.label[0]}
                  </span>
                  <div>
                    <p className="text-[12.5px] font-semibold text-white/90">{t.label}</p>
                    <p className="text-[10.5px] leading-[14px] text-white/45">{t.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">Certifications</p>
            <div className="mt-3 flex flex-col gap-3">
              {certifications.map((c) => (
                <div key={c.title} className="flex items-start gap-3">
                  <IconBadge name={c.icon} color={c.color} size={26} className="mt-[2px]" />
                  <div>
                    <p className="text-[12px] font-semibold leading-[15px] text-white/90">{c.title}</p>
                    <p className="text-[10.5px] text-white/45">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex flex-1 flex-col gap-9 bg-[#f7f8fb] p-9">
          {/* Professional Summary */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <SectionHeading icon="user" color="#3b82f6">
                Professional Summary
              </SectionHeading>
              <span className="rounded-full bg-[#eaf2ff] px-3 py-[5px] text-[11px] font-bold text-[#3b82f6]">
                9+ YEARS OF EXPERIENCE
              </span>
            </div>

            <div className="rounded-[12px] bg-white p-5 text-[13px] leading-[22px] text-[#3a4356] shadow-sm">
              <p>
                <span className="font-semibold text-[#1c2536]">Associate UX Architect</span> with{" "}
                <span className="font-semibold text-[#1c2536]">9+ years</span> of experience designing intuitive,
                accessible, and data-driven digital experiences across{" "}
                <span className="font-semibold text-[#1c2536]">enterprise, B2B and B2C</span> products in
                healthcare, insurance, education and other complex business domains.
              </p>
              <p className="mt-3">
                I combine conventional UX practices with{" "}
                <span className="font-semibold text-[#1c2536]">AI-assisted design workflows (Claude, Figma Make)</span>{" "}
                to accelerate ideation, create high-fidelity mockups, build interactive prototypes and deliver
                scalable, accessible and business-focused solutions. Experienced in{" "}
                <span className="font-semibold text-[#1c2536]">
                  user research, information architecture, wireframing, prototyping, design systems, usability
                  testing
                </span>{" "}
                and analytics-driven UX optimization that improve engagement, conversion and customer satisfaction.
              </p>
            </div>
          </section>

          {/* My UX Approach */}
          <section className="flex flex-col gap-4">
            <SectionHeading icon="sparkle" color="#8b5cf6">
              My UX Approach
            </SectionHeading>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch print:flex-row print:items-stretch">
              {approach.map((step, i) => (
                <div key={step.title} className="flex flex-1 items-stretch gap-2 print:break-inside-avoid">
                  <div className="flex flex-1 flex-col gap-3 rounded-[12px] p-4" style={{ backgroundColor: step.bg }}>
                    <div className="flex items-center gap-2">
                      <IconBadge name={step.icon} color={step.color} size={26} />
                      <p className="text-[13px] font-bold text-[#1c2536]">{step.title}</p>
                    </div>

                    <ul className="flex flex-col gap-1">
                      {step.points.map((p) => (
                        <li key={p} className="flex gap-1.5 text-[11px] leading-[15px] text-[#4a5468]">
                          <span className="mt-[6px] size-[3px] shrink-0 rounded-full" style={{ backgroundColor: step.color }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < approach.length - 1 && (
                    <div className="hidden w-[18px] shrink-0 items-center justify-center text-[#b7bfcf] lg:flex print:flex">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Core Expertise */}
          <section className="flex flex-col gap-4">
            <SectionHeading icon="grid" color="#10b981">
              Core Expertise
            </SectionHeading>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 print:grid-cols-3">
              {expertise.map((e) => (
                <div
                  key={e.label}
                  className="flex items-center gap-3 rounded-[10px] border border-[#eceff5] bg-white px-3 py-3 shadow-sm print:break-inside-avoid"
                >
                  <IconBadge name={e.icon} color={e.color} size={30} />
                  <span className="text-[12.5px] font-medium leading-[16px] text-[#2b3346]">{e.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="flex flex-col gap-5">
            <SectionHeading icon="building" color="#3b82f6">
              Professional Experience
            </SectionHeading>

            <div className="flex flex-col gap-7">
              {experience.map((job, i) => (
                <div
                  key={job.company}
                  className={`flex gap-4 ${i > 0 ? "border-t border-[#eceff5] pt-7" : ""}`}
                >
                  <div className="flex flex-col items-center pt-1">
                    <span className="size-[10px] shrink-0 rounded-full" style={{ backgroundColor: "#3b82f6" }} />
                  </div>
                  <div className="flex-1">
                    <div className="print:break-inside-avoid">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="text-[16px] font-bold text-[#1c2536]">{job.company}</p>
                          <p className="text-[13px] text-[#6b7488]">{job.role}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[12px] font-semibold text-[#1c2536]">{job.period}</p>
                          <p className="text-[11px] text-[#8891a3]">{job.location}</p>
                        </div>
                      </div>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#eaf2ff] px-2.5 py-[3px] text-[10.5px] font-semibold text-[#3b82f6]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {job.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-[12.5px] leading-[19px] text-[#4a5468] print:break-inside-avoid"
                        >
                          <span className="mt-[7px] size-[3px] shrink-0 rounded-full bg-[#b7bfcf]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
