"use client";

import { useState } from "react";

const TOOLTIP_WIDTH = 280;
const CANVAS_W = 420;
const CANVAS_H = 260;

type HairStyle =
  | "crew"
  | "side-part"
  | "spiky"
  | "buzz"
  | "wavy-short"
  | "quiff"
  | "flat-top"
  | "long-straight";

type Mentee = {
  name: string;
  role: string;
  company: string;
  skills: string[];
  initials: string;
  color: string;
  gender: "male" | "female";
  hair: HairStyle;
  x: number;
  y: number;
  r: number;
  duration: number;
  delay: number;
};

const MENTEES: Mentee[] = [
  { name: "Aditi Rao", role: "Junior UX Designer", company: "Evoke Technologies", skills: ["Wireframing", "User Research"], initials: "AR", color: "#ff5e36", gender: "female", hair: "long-straight", x: 66, y: 82, r: 34, duration: 3.2, delay: 0 },
  { name: "Srikanth Kyatham", role: "Product Design Intern", company: "Evoke Technologies", skills: ["Prototyping", "Figma"], initials: "SK", color: "#176b00", gender: "male", hair: "side-part", x: 172, y: 44, r: 28, duration: 2.8, delay: 0.3 },
  { name: "Sagar", role: "UX Researcher", company: "ETOE Global", skills: ["User Interviews", "Synthesis"], initials: "SG", color: "#be2bbb", gender: "male", hair: "spiky", x: 278, y: 78, r: 37, duration: 3.6, delay: 0.6 },
  { name: "Arun Kumar", role: "Visual Designer", company: "Huetint Software", skills: ["Visual Design", "Branding"], initials: "AK", color: "#552ed0", gender: "male", hair: "crew", x: 372, y: 50, r: 26, duration: 3.0, delay: 0.9 },
  { name: "Hamza Abdhulla", role: "Junior Product Designer", company: "Evoke Technologies", skills: ["Design Systems", "Interaction"], initials: "HA", color: "#0891b2", gender: "male", hair: "quiff", x: 96, y: 190, r: 30, duration: 3.4, delay: 0.2 },
  { name: "Nitheesh Gazool", role: "Interaction Designer", company: "ETOE Global", skills: ["Motion Design", "Prototyping"], initials: "NG", color: "#d97706", gender: "male", hair: "wavy-short", x: 208, y: 216, r: 38, duration: 2.6, delay: 0.5 },
  { name: "Narendra", role: "UX Design Intern", company: "Evoke Technologies", skills: ["Usability Testing", "Wireframing"], initials: "N", color: "#0d9488", gender: "male", hair: "buzz", x: 316, y: 194, r: 25, duration: 3.8, delay: 0.8 },
  { name: "Prasad Punnam", role: "Associate Product Designer", company: "Huetint Software", skills: ["Design Systems", "UX Strategy"], initials: "PP", color: "#c026d3", gender: "male", hair: "flat-top", x: 396, y: 224, r: 29, duration: 3.1, delay: 1.1 },
];

function Hair({ style }: { style: HairStyle }) {
  switch (style) {
    case "crew":
      // round cap hugging close to the head
      return <circle cx="12" cy="8.6" r="4.4" fill="white" />;
    case "flat-top":
      // boxy cap with a straight top edge
      return <rect x="7.6" y="4.3" width="8.8" height="5" rx="1" fill="white" />;
    case "buzz":
      // just a thin shaved strip along the hairline
      return <rect x="7.9" y="5.3" width="8.2" height="1.2" rx="0.6" fill="white" />;
    case "side-part":
      // asymmetric swept cap, higher on one side
      return (
        <path
          d="M7.7 9a4.3 4.3 0 018.3-2.6c.4.8.5 1.7.3 2.6-1.1-.9-2.3-1.3-3.6-1-1.7.4-3.3 1.6-5 1z"
          fill="white"
        />
      );
    case "wavy-short":
      // cap with a scalloped, wavy fringe
      return (
        <path
          d="M7.7 8.6a4.3 4.3 0 018.6 0c0 .4-.1.7-.2 1-.5-.7-1-.7-1.5-.1-.5.6-1.1.6-1.6 0s-1.1-.6-1.6 0c-.5.6-1 .6-1.5.1-.1-.3-.2-.6-.2-1z"
          fill="white"
        />
      );
    case "quiff":
      // single tall swoop rising above the head
      return (
        <path
          d="M10.8 6.2c-.3-2.4.6-4.7 2.2-5.1s2.4 1.7 1.8 3.8c-.4 1.5-1.6 2.4-2.8 2.3-.5 0-.9-.4-1.2-1z"
          fill="white"
        />
      );
    case "spiky":
      // several points sticking up past the hairline
      return (
        <>
          <polygon points="8.3,6.5 9,2.8 9.8,6.2" fill="white" />
          <polygon points="10.6,6 11.3,2.3 12,5.8" fill="white" />
          <polygon points="12.4,5.8 13.1,2.3 13.8,6" fill="white" />
          <polygon points="14.2,6.2 14.9,2.8 15.7,6.5" fill="white" />
        </>
      );
    case "long-straight":
      // round cap plus two strands flowing down past the shoulders
      return (
        <>
          <circle cx="12" cy="8.4" r="4.3" fill="white" />
          <path
            d="M7.6 8.5c-.4 2.9-.7 5.8-.5 8.7.9-.2 1.6-1 1.6-2v-3.3c0-.6.1-1.1.3-1.6z"
            fill="white"
          />
          <path
            d="M16.4 8.5c.4 2.9.7 5.8.5 8.7-.9-.2-1.6-1-1.6-2v-3.3c0-.6-.1-1.1-.3-1.6z"
            fill="white"
          />
        </>
      );
  }
}

function FaceAvatar({ hair, className }: { hair: HairStyle; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 20c.5-4 4-6.5 7.5-6.5s7 2.5 7.5 6.5" />
      <circle cx="12" cy="9.5" r="4.3" />
      <Hair style={hair} />
    </svg>
  );
}

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
              {hovered === i ? <FaceAvatar hair={m.hair} className="h-[55%] w-[55%]" /> : m.initials}
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
                  <FaceAvatar hair={m.hair} className="h-[60%] w-[60%]" />
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
