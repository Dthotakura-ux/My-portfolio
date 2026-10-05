"use client";

import { useState } from "react";

const TOOLTIP_WIDTH = 280;
const CANVAS_W = 420;
const CANVAS_H = 260;

type Mentee = {
  name: string;
  role: string;
  company: string;
  skills: string[];
  initials: string;
  color: string;
  x: number;
  y: number;
  r: number;
  duration: number;
  delay: number;
};

const MENTEES: Mentee[] = [
  { name: "Aditi Rao", role: "Junior UX Designer", company: "Evoke Technologies", skills: ["Wireframing", "User Research"], initials: "AR", color: "#ff5e36", x: 66, y: 82, r: 34, duration: 3.2, delay: 0 },
  { name: "Rohan Mehta", role: "Product Design Intern", company: "Evoke Technologies", skills: ["Prototyping", "Figma"], initials: "RM", color: "#176b00", x: 172, y: 44, r: 28, duration: 2.8, delay: 0.3 },
  { name: "Sneha Kapoor", role: "UX Researcher", company: "ETOE Global", skills: ["User Interviews", "Synthesis"], initials: "SK", color: "#be2bbb", x: 278, y: 78, r: 37, duration: 3.6, delay: 0.6 },
  { name: "Kabir Singh", role: "Visual Designer", company: "Huetint Software", skills: ["Visual Design", "Branding"], initials: "KS", color: "#552ed0", x: 372, y: 50, r: 26, duration: 3.0, delay: 0.9 },
  { name: "Ananya Iyer", role: "Junior Product Designer", company: "Evoke Technologies", skills: ["Design Systems", "Interaction"], initials: "AI", color: "#0891b2", x: 96, y: 190, r: 30, duration: 3.4, delay: 0.2 },
  { name: "Farhan Ali", role: "Interaction Designer", company: "ETOE Global", skills: ["Motion Design", "Prototyping"], initials: "FA", color: "#d97706", x: 208, y: 216, r: 38, duration: 2.6, delay: 0.5 },
  { name: "Meera Nair", role: "UX Design Intern", company: "Evoke Technologies", skills: ["Usability Testing", "Wireframing"], initials: "MN", color: "#0d9488", x: 316, y: 194, r: 25, duration: 3.8, delay: 0.8 },
  { name: "Vikram Joshi", role: "Associate Product Designer", company: "Huetint Software", skills: ["Design Systems", "UX Strategy"], initials: "VJ", color: "#c026d3", x: 396, y: 224, r: 29, duration: 3.1, delay: 1.1 },
];

export function MentorshipOrbit() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="flex flex-1 flex-col items-center justify-center gap-6 border border-hairline px-8 py-14 text-center"
      onMouseLeave={() => setHovered(null)}
    >
      <div className="h-[187px] w-[302px] overflow-hidden sm:h-[260px] sm:w-[420px]">
      <div
        className="relative origin-top-left scale-[0.72] sm:scale-100"
        style={{ width: CANVAS_W, height: CANVAS_H }}
      >
        {MENTEES.map((m, i) => (
          <div
            key={m.name}
            className="mentee-float absolute"
            style={{
              left: m.x,
              top: m.y,
              animationDuration: `${m.duration}s`,
              animationDelay: `${m.delay}s`,
            }}
          >
            <div
              className="mentee-node flex cursor-pointer items-center justify-center rounded-full text-[14px] font-semibold text-white shadow-sm"
              style={{
                width: m.r * 2,
                height: m.r * 2,
                marginLeft: -m.r,
                marginTop: -m.r,
                backgroundColor: m.color,
              }}
              onMouseEnter={() => setHovered(i)}
            >
              {m.initials}
            </div>
          </div>
        ))}

        {MENTEES.map((m, i) => {
          const isTop = m.y < CANVAS_H / 2;
          const top = isTop ? m.y + m.r + 12 : m.y - m.r - 12;
          const translateY = isTop ? "0" : "-100%";

          let translateX = "-50%";
          let left = m.x;
          if (m.x < TOOLTIP_WIDTH / 2 + 16) {
            translateX = "0";
            left = Math.max(m.x - m.r, 0);
          } else if (m.x > CANVAS_W - TOOLTIP_WIDTH / 2 - 16) {
            translateX = "-100%";
            left = Math.min(m.x + m.r, CANVAS_W);
          }

          return (
            <div
              key={`tip-${m.name}`}
              className="pointer-events-none absolute z-20 flex flex-col gap-3 rounded-[12px] border border-hairline bg-paper px-4 py-3 shadow-lg transition-opacity duration-200"
              style={{
                left,
                top,
                width: TOOLTIP_WIDTH,
                transform: `translate(${translateX}, ${translateY})`,
                opacity: hovered === i ? 1 : 0,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex size-[40px] shrink-0 items-center justify-center rounded-full text-[14px] font-semibold text-white"
                  style={{ backgroundColor: m.color }}
                >
                  {m.initials}
                </div>
                <div className="text-left">
                  <p className="text-[12px] font-semibold leading-tight text-ink">{m.name}</p>
                  <p className="mt-[2px] text-[9px] leading-tight text-ink/50">
                    {m.role} · {m.company}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 text-left">
                {m.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full px-2 py-[3px] text-[9px] font-medium text-white"
                    style={{ backgroundColor: m.color }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      </div>

      <div>
        <p className="font-serif text-[15px] italic text-ink">Eight designers, one journey each</p>
        <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45">
          Hover a bubble to meet them
        </p>
      </div>
    </div>
  );
}
