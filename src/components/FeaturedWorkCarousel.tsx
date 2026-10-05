"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ProjectCard } from "@/data/projects";

const CARD_WIDTH = 560;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;

export function FeaturedWorkCarousel({ projects }: { projects: ProjectCard[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const drag = useRef<{ down: boolean; startX: number; startScroll: number; moved: boolean }>({
    down: false,
    startX: 0,
    startScroll: 0,
    moved: false,
  });

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * STEP, behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * STEP, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / STEP);
      setActive(Math.max(0, Math.min(projects.length - 1, i)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [projects.length]);

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
  };

  const onDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = scrollerRef.current;
      if (!el || !drag.current.down) return;
      const delta = e.clientX - drag.current.startX;
      if (Math.abs(delta) > 4) drag.current.moved = true;
      el.scrollLeft = drag.current.startScroll - delta;
    };
    const onUp = () => {
      drag.current.down = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="relative w-full max-w-[1280px]">
      <div
        ref={scrollerRef}
        onMouseDown={onMouseDown}
        onDragStart={onDragStart}
        onClickCapture={onClickCapture}
        className="flex cursor-grab gap-[24px] overflow-x-auto active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex shrink-0 select-none flex-col gap-6 overflow-hidden rounded-[28px] p-9"
            style={{ width: CARD_WIDTH, backgroundColor: project.cardBg }}
          >
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/70 px-4 py-[6px] text-[13px] font-medium text-ink/75"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <h3 className="font-serif text-[26px] font-semibold leading-tight text-ink">
                {project.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[23px] text-ink/60">
                {project.summary}
              </p>
            </div>

            <div className="relative -mx-9 -mb-9 mt-2 min-h-[230px] flex-1 overflow-hidden rounded-t-[18px]">
              <img
                alt={project.title}
                draggable={false}
                className="absolute inset-0 size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                src={project.heroImage}
              />
            </div>
          </Link>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous project"
        onClick={() => scrollByCard(-1)}
        className="absolute -left-5 top-[100px] flex size-[44px] items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-opacity hover:opacity-80"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next project"
        onClick={() => scrollByCard(1)}
        className="absolute -right-5 top-[100px] flex size-[44px] items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-opacity hover:opacity-80"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="mt-8 flex items-center gap-2">
        {projects.map((project, i) => (
          <button
            key={project.slug}
            type="button"
            aria-label={`Go to ${project.title}`}
            onClick={() => scrollToIndex(i)}
            className="group/dot py-2"
          >
            <span
              className={`block h-[3px] rounded-full transition-all duration-300 ${
                i === active ? "w-[28px] bg-ink" : "w-[10px] bg-ink/25 group-hover/dot:bg-ink/50"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
