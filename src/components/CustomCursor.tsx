"use client";

import { useEffect, useRef, useState } from "react";

const CURSOR_COLOR = "#7B68EE";

export function CustomCursor({ label = "You" }: { label?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] will-change-transform"
    >
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M4 2.5L21.5 11.2L13.2 13.2L11.2 21.5L4 2.5Z"
          fill={CURSOR_COLOR}
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="absolute left-[20px] top-[19px] whitespace-nowrap rounded-[8px] rounded-tl-none px-[10px] py-[4px] text-[13px] font-semibold text-white shadow-sm"
        style={{ backgroundColor: CURSOR_COLOR }}
      >
        {label}
      </span>
    </div>
  );
}
