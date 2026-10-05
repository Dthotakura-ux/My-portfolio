import Link from "next/link";
import type { ReactNode } from "react";

export function CaseStudyHero({
  accent,
  heroBg,
  title,
  role,
  platform,
  duration,
  team,
  heroImage,
  heroImageAlt,
  heroContent,
}: {
  accent: string;
  heroBg: string;
  title: string;
  role: string;
  platform: string;
  duration: string;
  team: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroContent?: ReactNode;
}) {
  return (
    <section style={{ backgroundColor: heroBg }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <nav className="flex items-center justify-between py-6">
          <Link href="/" className="font-grand-hotel text-[28px] sm:text-[32px]" style={{ color: accent }}>
            Dileep Thotakura
          </Link>
          <Link
            href="/"
            className="text-[16px] font-medium opacity-50 transition-opacity hover:opacity-100"
            style={{ color: accent }}
          >
            Back to Homepage
          </Link>
        </nav>

        <div className="flex flex-col items-center gap-12 pb-16 pt-8 lg:flex-row">
          <div className="flex-1">
            <h1
              className="font-outfit text-[48px] font-semibold leading-[1.05] sm:text-[72px]"
              style={{ color: accent }}
            >
              {title}
            </h1>
            <div className="mt-8 flex flex-col items-start gap-4">
              <span
                style={{ backgroundColor: accent }}
                className="inline-flex rounded px-5 py-[10px] text-[18px] font-medium text-white sm:text-[20px]"
              >
                Role : {role}
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <span
                  style={{ borderColor: accent, color: accent }}
                  className="inline-flex rounded border px-5 py-[10px] text-[16px] font-semibold"
                >
                  Platform : {platform}
                </span>
                <span
                  style={{ borderColor: accent, color: accent }}
                  className="inline-flex rounded border px-5 py-[10px] text-[16px] font-semibold"
                >
                  Duration : {duration}
                </span>
              </div>
              <span
                style={{ borderColor: accent, color: accent }}
                className="inline-flex rounded border px-5 py-[10px] text-[16px] font-semibold"
              >
                Team : {team}
              </span>
            </div>
          </div>
          <div className="flex-1">
            {heroContent ? (
              heroContent
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="h-auto w-full rounded-[10px] object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseStudySection({ children }: { children: ReactNode }) {
  return <section className="flex flex-col gap-4">{children}</section>;
}

export function SectionHeading({
  accent,
  children,
}: {
  accent: string;
  children: ReactNode;
}) {
  return (
    <h2
      className="text-[24px] font-bold tracking-[-0.02em] sm:text-[28px]"
      style={{ color: accent }}
    >
      {children}
    </h2>
  );
}

export function SubHeading({
  accent,
  children,
}: {
  accent: string;
  children: ReactNode;
}) {
  return (
    <h3
      className="text-[19px] font-semibold tracking-[-0.02em] sm:text-[22px]"
      style={{ color: accent }}
    >
      {children}
    </h3>
  );
}

export function Body({ children }: { children: ReactNode }) {
  return (
    <p className="text-[16px] leading-[28px] tracking-[0.02em] text-[#343434]">
      {children}
    </p>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-6 text-[16px] leading-[28px] tracking-[0.02em] text-[#343434]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function NumberedBlock({
  items,
}: {
  items: { title: string; points: ReactNode[] }[];
}) {
  return (
    <ol className="flex list-decimal flex-col gap-4 pl-6 text-[16px] leading-[28px] tracking-[0.02em] text-[#343434]">
      {items.map((item) => (
        <li key={item.title}>
          <span className="font-semibold text-[#343434]">{item.title}</span>
          <ul className="mt-2 flex list-disc flex-col gap-2 pl-6">
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export function TwoColBox({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: {
  leftTitle: string;
  leftItems: ReactNode[];
  rightTitle: string;
  rightItems: ReactNode[];
}) {
  return (
    <div className="flex flex-col gap-10 rounded-[10px] bg-[#f5f5f5] p-6 sm:flex-row sm:p-10">
      <div className="flex flex-1 flex-col gap-5">
        <p className="border-b border-[#343434]/20 pb-3 text-[18px] font-semibold text-[#343434]">
          {leftTitle}
        </p>
        <div className="flex flex-col gap-5 text-[16px] leading-[24px] tracking-[0.02em] text-[#343434]">
          {leftItems.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <p className="border-b border-[#343434]/20 pb-3 text-[18px] font-semibold text-[#343434]">
          {rightTitle}
        </p>
        <div className="flex flex-col gap-5 text-[16px] leading-[24px] tracking-[0.02em] text-[#343434]">
          {rightItems.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CalloutQuote({
  eyebrow,
  quote,
  name,
  title,
}: {
  eyebrow: string;
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <div className="rounded-[10px] border-2 border-[#e0e0e0] bg-[#fdfdfd] p-8 shadow-[inset_2px_2px_6px_2px_rgba(0,0,0,0.05)] sm:p-14">
      <p className="text-[24px] font-bold text-[#176b00] sm:text-[30px]">
        {eyebrow}
      </p>
      <p className="mt-6 max-w-2xl text-[18px] font-semibold leading-[32px] text-[#737373] sm:text-[20px]">
        {quote}
      </p>
      <div className="mt-8 flex flex-col items-end text-right">
        <p className="text-[18px] font-semibold text-black">{name}</p>
        <p className="text-[14px] font-medium text-[#585858]">{title}</p>
      </div>
    </div>
  );
}

export function Image({ src, alt }: { src: string; alt: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className="h-auto w-full rounded-[10px]" />;
}

export function OtherProjects({
  heading,
  projects,
}: {
  heading?: string;
  projects: {
    slug: string;
    title: string;
    titleColor: string;
    summary: string;
    image: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-[16px] font-semibold tracking-[-0.02em] text-[#474747]">
        {heading ?? "Other Project"}
      </p>
      <div className="flex flex-col gap-10 sm:flex-row sm:gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="flex w-full flex-1 basis-0 flex-col items-start gap-6 sm:min-w-0"
          >
            <div className="h-[200px] w-full overflow-hidden rounded-[10px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p
                className="text-[24px] font-medium tracking-[0.01em] sm:text-[26px]"
                style={{ color: project.titleColor }}
              >
                {project.title}
              </p>
              <p className="text-[16px] font-semibold text-[#b8b8b8]">
                {project.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function CaseStudyFooter({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col gap-10 border-t border-[#e5e5e5] pt-14">
      <p
        className="text-center text-[24px] font-bold tracking-[-0.02em] sm:text-[28px]"
        style={{ color: accent }}
      >
        Thank you!
      </p>
      <div className="flex flex-col gap-2 pb-4 text-[10px] font-semibold text-[#939393] sm:flex-row sm:justify-between">
        <p>Some names and data was changed due to NDA.</p>
        <p>Subject to copyrights. All rights reserved</p>
      </div>
    </div>
  );
}
