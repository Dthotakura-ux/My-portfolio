"use client";

import { useState } from "react";

const ACCENT = "#ff5e36";
const TOOLTIP_WIDTH = 240;
const CANVAS_W = 340;
const CANVAS_H = 600;

type Step = {
  number: string;
  label: string;
  points: string[];
  x: number;
  y: number;
  r: number;
  fill: string;
  isTarget?: boolean;
};

const STEPS: Step[] = [
  {
    number: "01",
    label: "Scaling Product Design",
    points: [
      "Started out as an individual contributor, shipping screens end to end",
      "Grew into defining roles & responsibilities across a design team",
      "Learned to sit with ambiguity — turn a vague ask into a scoped plan",
      "Presented to stakeholders, defending decisions with research & data",
    ],
    x: 100,
    y: 60,
    r: 30,
    fill: "rgba(255,94,54,0.55)",
  },
  {
    number: "02",
    label: "Practice Initiatives",
    points: [
      "Set up repeatable design processes across pods, not just single projects",
      "Lightweight rituals to track project health without slowing teams down",
      "Owned governance — from QA checklists to handoff standards",
      "Rolled up practice-level metrics to leadership",
    ],
    x: 250,
    y: 155,
    r: 30,
    fill: "rgba(255,94,54,0.68)",
  },
  {
    number: "03",
    label: "POC → Billing",
    points: [
      "Discover: understand the real ask behind the RFP",
      "POC: ship a proof-of-concept fast enough to prove the value",
      "Win: convert the POC into a signed, scoped project",
      "Bill: scale delivery into sustained, recurring billing",
    ],
    x: 100,
    y: 250,
    r: 30,
    fill: "rgba(255,94,54,0.8)",
  },
  {
    number: "04",
    label: "Every Screen, Every Scale",
    points: [
      "B2B and B2C — CRMs to consumer mobile apps",
      "Shipped across web, mobile, and connected-TV experiences",
      "From compact handhelds to large-format displays",
      "One system, adapted across every surface",
    ],
    x: 250,
    y: 345,
    r: 30,
    fill: "rgba(255,94,54,0.9)",
  },
  {
    number: "05",
    label: "AI-Native Practice",
    points: [
      "Hands-on with LLMs, RAG pipelines, and MCP connectors",
      "Builds with Claude — Claude Code, Claude-to-React, Figma Make",
      "Explores orchestration & agent-to-agent workflows (Bedrock, Azure AI Foundry)",
      "Wires AI into real systems — CRM & workflow connectors, not just demos",
    ],
    x: 175,
    y: 430,
    r: 34,
    fill: ACCENT,
  },
  {
    number: "06",
    label: "The Goal",
    points: [
      "Head of Design, India — owning practice strategy at a country level",
      "A seat at the leadership table, as VP or President of Design",
      "Shaping business direction through design, not just executing it",
      "Building the next generation of practice leads who carry this forward",
    ],
    x: 270,
    y: 505,
    r: 30,
    fill: "transparent",
    isTarget: true,
  },
];

const PATH_D =
  "M100,60 C100,115 250,100 250,155 " +
  "C250,195 100,210 100,250 " +
  "C100,290 250,305 250,345 " +
  "C250,385 175,395 175,430";

const PATH_D_FUTURE = "M175,430 C175,462 270,472 270,505";

export function PracticeJourney() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-2" onMouseLeave={() => setHovered(null)}>
      <p className="font-serif text-[15px] italic text-ink/70">What I&apos;ve learned</p>
      <p className="max-w-[260px] text-center text-[12px] leading-[17px] text-ink/45">
        A decade-long path from junior designer to AI-native practice lead
      </p>

      <div className="relative mt-3" style={{ width: CANVAS_W, height: CANVAS_H }}>
        <p className="absolute left-[6px] top-[6px] text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/35">
          8+ years ago
        </p>
        <p
          className="absolute text-[10px] font-semibold uppercase tracking-[0.14em]"
          style={{ left: 175 + 44, top: 430 - 6, color: ACCENT }}
        >
          ● Today
        </p>
        <p
          className="absolute text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/45"
          style={{ left: 270 - 28, top: 505 + 40 }}
        >
          🎯 Goal
        </p>

        <svg
          className="absolute inset-0"
          width={CANVAS_W}
          height={CANVAS_H}
          viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
        >
          <path
            d={PATH_D}
            fill="none"
            stroke={ACCENT}
            strokeOpacity={0.35}
            strokeWidth={2.5}
            strokeDasharray="1 10"
            strokeLinecap="round"
          />
          <path
            d={PATH_D_FUTURE}
            fill="none"
            stroke={ACCENT}
            strokeOpacity={0.25}
            strokeWidth={2}
            strokeDasharray="1 14"
            strokeLinecap="round"
          />
        </svg>

        {STEPS.map((step, i) => (
          <div
            key={step.label}
            className="absolute"
            style={{ left: step.x, top: step.y }}
          >
            <div
              className="mentee-node relative z-10 flex cursor-pointer items-center justify-center rounded-full text-[13px] font-bold shadow-sm"
              style={{
                width: step.r * 2,
                height: step.r * 2,
                marginLeft: -step.r,
                marginTop: -step.r,
                backgroundColor: step.fill,
                color: step.isTarget ? ACCENT : "white",
                border: step.isTarget ? `2px dashed ${ACCENT}` : undefined,
                boxShadow: step.isTarget
                  ? undefined
                  : i === STEPS.length - 2
                    ? `0 0 0 5px rgba(255,94,54,0.18)`
                    : undefined,
              }}
              onMouseEnter={() => setHovered(i)}
            >
              {step.number}
            </div>

            <p
              className="absolute z-0 text-center font-serif text-[12px] italic leading-[15px] text-ink/70"
              style={{
                width: 130,
                left: -65,
                top: step.y < CANVAS_H / 2 ? step.r + 10 : -(step.r + 10),
                transform: step.y < CANVAS_H / 2 ? "none" : "translateY(-100%)",
              }}
            >
              {step.label}
            </p>
          </div>
        ))}

        {STEPS.map((step, i) => {
          const isTop = step.y < CANVAS_H / 2;
          const top = isTop ? step.y + step.r + 12 : step.y - step.r - 12;
          const translateY = isTop ? "0" : "-100%";

          let translateX = "-50%";
          let left = step.x;
          if (step.x < TOOLTIP_WIDTH / 2 + 16) {
            translateX = "0";
            left = Math.max(step.x - step.r, 0);
          } else if (step.x > CANVAS_W - TOOLTIP_WIDTH / 2 - 16) {
            translateX = "-100%";
            left = Math.min(step.x + step.r, CANVAS_W);
          }

          return (
            <div
              key={`tip-${step.label}`}
              className="pointer-events-none absolute z-20 rounded-[12px] border border-hairline bg-paper px-4 py-3 text-left shadow-lg transition-opacity duration-200"
              style={{
                left,
                top,
                width: TOOLTIP_WIDTH,
                transform: `translate(${translateX}, ${translateY})`,
                opacity: hovered === i ? 1 : 0,
              }}
            >
              <p className="text-[12px] font-semibold text-ink">
                {step.number} · {step.label}
              </p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {step.points.map((point) => (
                  <li key={point} className="flex gap-2 text-[11px] leading-[15px] text-ink/60">
                    <span className="mt-[5px] size-[3px] shrink-0 rounded-full" style={{ backgroundColor: ACCENT }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
