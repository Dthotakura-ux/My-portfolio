import { CustomCursor } from "@/components/CustomCursor";
import { FeaturedWorkCarousel } from "@/components/FeaturedWorkCarousel";
import { MagneticLink } from "@/components/MagneticLink";
import { MentorshipOrbit } from "@/components/MentorshipOrbit";
import { PracticeJourney } from "@/components/PracticeJourney";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/data/projects";
import { awards, certifications, companies } from "@/data/credentials";

const ACCENT = "#ff5e36";

const heroLines = [
  ["Think,", "Research,"],
  ["Design,", "Re-Iterate."],
];

const tickerWords = [
  "UX Strategy",
  "User Research",
  "Design Systems",
  "Prototyping",
  "Mentorship",
  "Product Thinking",
  "LLMs",
  "RAG",
  "MCP",
  "AI Orchestration",
  "Azure AI Foundry",
  "Design Governance",
  "RFP to Delivery",
  "Stakeholder Buy-in",
  "QA Checklists",
  "Proof of Concept",
  "Recurring Billing",
  "Team Structuring",
];

function Eyebrow({ index, children }: { index: string; children: string }) {
  return (
    <p className="flex items-baseline gap-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45">
      <span style={{ color: ACCENT }}>{index}</span>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="relative cursor-none bg-paper text-ink">
      <CustomCursor />
      <div className="grain-overlay" />

      {/* Nav */}
      <div id="top">
        <SiteHeader current="home" />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16 pt-10 sm:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="fade-up flex items-center gap-3 text-[18px] text-ink/60 sm:text-[20px]">
              <span>👋 Hey, I&apos;m</span>
              <span className="font-serif italic" style={{ color: ACCENT }}>
                Dileep Chowdary Thotakura
              </span>
            </p>

            <h1 className="mt-6 font-serif text-[38px] italic leading-[1.05] tracking-[-0.02em] sm:text-[70px] md:text-[82px] lg:text-[57px] xl:text-[70px]">
              {heroLines.map((line, lineIndex) => (
                <span key={lineIndex} className="flex flex-nowrap gap-x-4 whitespace-nowrap">
                  {line.map((word, wordIndex) => (
                    <span
                      key={word}
                      className="fade-up inline-block"
                      style={{ animationDelay: `${(lineIndex * line.length + wordIndex) * 90}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p
              className="fade-up mt-10 max-w-[700px] text-[16px] leading-[30px] text-ink/70"
              style={{ animationDelay: "420ms" }}
            >
              With <span className="font-semibold text-ink">8+ years of experience</span>,
              I specialise in uncovering and solving complex design and real
              problems across digital ecosystems. I work closely with Product
              Owners and cross-functional teams, often as an SME, to define UX
              strategies grounded in business goals and user needs. Beyond
              execution, I build design practice — scaling AI-native
              workflows with tools like Claude, and converting early leads
              and POCs into signed, recurring business.
            </p>

            <div
              className="fade-up mt-14 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/40"
              style={{ animationDelay: "520ms" }}
            >
              <span className="flex h-[28px] w-[16px] items-start justify-center rounded-full border border-ink/25 pt-[6px]">
                <span className="size-[4px] animate-bounce rounded-full bg-ink/50" />
              </span>
              Scroll
            </div>
          </div>

          <div className="hidden shrink-0 items-center justify-center lg:ml-20 lg:flex">
            <PracticeJourney />
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="overflow-hidden border-y border-hairline py-5">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {[...tickerWords, ...tickerWords].map((word, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-serif text-[20px] italic text-ink/70">{word}</span>
              <span className="size-[5px] rounded-full" style={{ backgroundColor: ACCENT }} />
            </span>
          ))}
        </div>
      </div>

      {/* Companies */}
      <section className="border-b border-hairline">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-14 sm:px-10">
          <Eyebrow index="—">Crafted Experience At</Eyebrow>
          <div className="flex flex-wrap items-center gap-10 sm:gap-16">
            {companies.map((company) => (
              <div
                key={company.name}
                className="group flex items-center gap-3 opacity-70 transition-opacity hover:opacity-100"
              >
                <div
                  className={`relative shrink-0 overflow-hidden grayscale transition-[filter] duration-300 group-hover:grayscale-0 ${company.boxClass}`}
                >
                  <img
                    alt={`${company.name} logo`}
                    className={company.imgClass}
                    src={company.logo}
                  />
                </div>
                <p className="whitespace-nowrap text-[15px] font-semibold text-ink">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="featured-work" className="border-b border-hairline">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 py-20 sm:px-10">
          <Eyebrow index="01">Featured Work</Eyebrow>
          <FeaturedWorkCarousel projects={projects} />
        </div>
      </section>

      {/* Mentorship */}
      <section id="mentorship" className="border-b border-hairline">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 py-20 sm:px-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <Eyebrow index="02">Mentorship Experience</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-serif text-[32px] italic leading-[1.15] sm:text-[40px]">
              Nurturing talent with the young minds and the innovators.
            </h2>
            <p className="mt-6 max-w-[60ch] text-[16px] leading-[28px] text-ink/70">
              I&apos;ve had the chance to mentor eight amazing young minds,
              and it&apos;s been such a rewarding experience. Interacting
              with them, sharing ideas, and guiding them through the world of
              design really made me excited about mentoring. From discussing
              big ideas to reviewing their work and watching them grow into
              confident problem-solvers—it felt like a true win-win. I loved
              every bit of it, and it reminded me why I enjoy sharing what
              I&apos;ve learned and learning from others in return.
            </p>
          </div>
          <MentorshipOrbit />
        </div>
      </section>

      {/* Rewards & Awards */}
      <section className="border-b border-hairline">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-14 px-6 py-20 sm:px-10">
          <Eyebrow index="03">Rewards &amp; Awards</Eyebrow>
          <div className="grid gap-6 sm:grid-cols-3">
            {awards.map((award, i) => (
              <div
                key={award.title}
                className="group flex flex-col gap-6 rounded-[6px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_-28px_rgba(255,94,54,0.45)]"
                style={{ backgroundColor: `rgba(255,94,54,${0.05 + i * 0.035})` }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: ACCENT }}
                  >
                    Award
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.3">
                    <path d="M9 10L6.5 3M15 10L17.5 3" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="15" r="5.5" />
                    <path d="M10 15l1.3 1.3L14 13.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div>
                  <p className="flex flex-wrap items-center gap-2 font-serif text-[21px] italic leading-snug text-ink">
                    {award.title}
                    {award.suffix && (
                      <span className="rounded-full bg-ink/10 px-2 py-[2px] text-[10px] font-sans not-italic font-semibold text-ink/55">
                        {award.suffix}
                      </span>
                    )}
                  </p>
                  <p className="mt-3 text-[14px] leading-[22px] text-ink/60">{award.quote}</p>
                </div>

                <p className="mt-auto border-t border-ink/10 pt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                  {award.attribution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learnings & Certifications */}
      <section className="border-b border-hairline">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 py-20 sm:px-10">
          <Eyebrow index="04">Learnings &amp; Certifications</Eyebrow>
          <div className="flex flex-col divide-y divide-hairline border-y border-hairline">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className="group flex flex-col gap-4 py-9 transition-colors duration-300 hover:bg-ink/[0.02] sm:flex-row sm:items-center sm:gap-12"
              >
                <p className="font-serif text-[44px] italic leading-none text-ink/15 transition-colors duration-300 group-hover:text-[#ff5e36] sm:w-[64px]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="flex-1">
                  <p className="font-serif text-[19px] italic text-ink transition-colors duration-300 group-hover:text-[#ff5e36]">
                    {cert.title}
                  </p>
                  <p className="mt-2 max-w-[620px] text-[14px] leading-[22px] text-ink/60">
                    {cert.quote}
                  </p>
                </div>
                <p className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/40 transition-colors duration-300 group-hover:text-[#ff5e36] sm:w-[190px] sm:text-right">
                  {cert.attribution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="border-b border-hairline">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-14 px-6 py-20 sm:px-10">
          <Eyebrow index="05">Success Stories</Eyebrow>

          <div className="border-l-2 pl-8 sm:pl-10" style={{ borderColor: ACCENT }}>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45">
              Efficiency of the application
            </p>
            <p className="mt-5 max-w-3xl font-serif text-[24px] italic leading-[36px] text-ink sm:text-[28px]">
              “It is exceptional to work with Dileep Chowdary. The solutions
              he cooks towards the problems is exceptional, his design
              patterns used in our portal made to boost the efficiency of the
              portal. My one stop go to solution for ideas is him. Thank you
              Dileep!!”
            </p>
            <p className="mt-6 text-[15px] font-semibold text-ink">Christhope</p>
            <p className="text-[13px] text-ink/50">IT Manager, Axalta</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-4 border-t border-hairline pt-6 sm:col-span-1">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                Lead Generation
              </p>
              <p className="text-[15px] leading-[24px] text-ink/70">
                “The turnaround time for the designs was excellent, the
                validations for his design thoughts was also truly
                appreciated. The collaboration with new customer with his
                idea selling was phenomenal. Keep up the hard work, and long
                way to go.”
              </p>
              <div className="mt-auto">
                <p className="text-[14px] font-semibold text-ink">Sridhar koppula</p>
                <p className="text-[12px] text-ink/50">Vice President, Evoke Technologies</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t border-hairline pt-6">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                Design Thinking
              </p>
              <p className="text-[15px] leading-[24px] text-ink/70">
                “I&apos;m extremely happy to work with Dileep Thotakura. The
                way he provides mockups with design rationale was super.
                There is a lot to learn from him.”
              </p>
              <div className="mt-auto">
                <p className="text-[14px] font-semibold text-ink">Jessica Marie</p>
                <p className="text-[12px] text-ink/50">Head of Design, PDInstore</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t border-hairline pt-6">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                Research, Research, Research…
              </p>
              <p className="text-[15px] leading-[24px] text-ink/70">
                “The research you do is next level, I&apos;ve never seen a
                person like you, who talks with the stats and data. I call
                him the data-master. I believe blindly if anything comes from
                Dileep is valid.”
              </p>
              <div className="mt-auto">
                <p className="text-[14px] font-semibold text-ink">JD Frank</p>
                <p className="text-[12px] text-ink/50">President, CIO, BMS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-6 py-24 text-center sm:px-10">
          <Eyebrow index="06">Contact Me</Eyebrow>
          <p className="max-w-2xl font-serif text-[28px] italic leading-[40px] text-ink sm:text-[36px]">
            Thank you for looking into my profile — if this finds you
            interesting, please reach out to me 🤞
          </p>
          <div className="flex flex-col items-center gap-3">
            <MagneticLink
              href="mailto:dileepthotakura2@outlook.com"
              className="link-underline text-[20px] font-semibold"
              style={{ color: ACCENT }}
            >
              dileepthotakura2@outlook.com
            </MagneticLink>
            <p className="text-[16px] text-ink/60">+91 9989955434 / 7670937716</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-8 text-[11px] text-ink/40 sm:flex-row sm:justify-between sm:px-10">
          <p>Some names and data was changed due to NDA.</p>
          <p>Subject to copyrights. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
