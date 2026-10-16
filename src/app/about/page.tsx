import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";

const PHOTO = "/images/about-photo.png";
const ACCENT = "#ff5e36";

export const metadata: Metadata = {
  title: "About Me — Dileep Thotakura",
  description:
    "Lead UX Designer at Evoke Technologies with 8+ years crafting intuitive, user-centred digital experiences.",
};

const experience = [
  {
    company: "Evoke Technologies",
    role: "Lead Ux Designer",
    period: "Mar 2020 - Present",
    location: "Hyderabad",
    points: [
      {
        title: "Define and Execute UX Strategy:",
        body: "Develop and implement end-to-end UX strategies that align with business objectives, integrating user needs with product vision to deliver seamless, impactful experiences across digital touchpoints.",
      },
      {
        title: "Lead and Inspire Design Teams:",
        body: "Manage and mentor multidisciplinary UX/UI teams, fostering a collaborative culture rooted in innovation, continuous learning, and design excellence through coaching and structured career development.",
      },
      {
        title: "User-Centered, Data-Driven Design:",
        body: "Advocate for a user-first approach by combining behavioural insights, user research, and business intelligence to influence product direction, drive adoption, and optimise experiences for diverse customer segments.",
      },
      {
        title: "Innovate Through Emerging Trends & Scalable Systems:",
        body: "Stay ahead of industry trends, accessibility standards (WCAG, ADA), and evolving technologies such as AI and voice UX—while establishing scalable design systems and reusable component libraries for consistency and agility.",
      },
      {
        title: "Collaborate Cross-Functionally & Drive Execution:",
        body: "Partner with Product, Engineering, QA, and Marketing teams to align goals, facilitate design sprints and workshops, and ensure successful implementation of user-centric solutions—measured by defined UX KPIs and product success metrics.",
      },
      {
        title: "Proven Business Growth Driver:",
        body: "Successfully converted multiple POCs into profitable long-term engagements, extended billing for a six-member team by eight months, and consistently turned leads into revenue-generating opportunities through strategic thinking and execution.",
      },
      {
        title: "Strong Client & Stakeholder Engagement:",
        body: "Extroverted communicator skilled at building trust, presenting and selling design concepts, and aligning solutions with client goals to secure buy-in, foster lasting relationships, and deliver sustained value.",
      },
    ],
  },
  {
    company: "ETOE Global",
    role: "Ux Designer",
    period: "Aug 2018 - Feb 2020",
    location: "Hyderabad",
    points: [
      {
        title: "Diverse Product Experience:",
        body: "Worked as a UX Designer in a product-based incubator, contributing to various B2B and B2C applications from startups to enterprise-level products.",
      },
      {
        title: "Domain & Platform Versatility:",
        body: "Designed for domains like Education, Healthcare, and Insurance, delivering consistent experiences across web, mobile, and desktop platforms.",
      },
      {
        title: "Stakeholder Collaboration:",
        body: "Engaged with cross-functional teams and stakeholders to align on goals, solve problems, and drive a user-focused design process.",
      },
      {
        title: "Cross-Domain, Scalable Solutions:",
        body: "Handled complex workflows across projects, ensuring design consistency and creating scalable solutions for evolving product needs.",
      },
    ],
  },
  {
    company: "Huetint software Pvt Ltd",
    role: "Jr Ux Designer",
    period: "July 2016 - Aug 2018",
    location: "Hyderabad",
    points: [
      {
        title: "Creating Design systems:",
        body: "Design becomes faster, more consistent, and more aligned with engineering. Teams stop reinventing the wheel, and the user experience becomes unified across every screen.",
      },
      {
        title: "Domain & Platform Versatility:",
        body: "I've also designed for multiple platforms like desktop web apps, responsive mobile-first systems, native mobile apps, and even internal tooling. This cross-platform experience taught me how to adapt design patterns to fit platform behaviours while keeping the experience seamless.",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="bg-paper text-ink">
      <SiteHeader current="about" />

      <section className="mx-auto flex max-w-[1280px] flex-col gap-14 px-6 pb-[82px] pt-6 sm:px-10 lg:flex-row lg:items-center">
        <div className="flex w-full flex-col gap-8 fade-up lg:max-w-[860px]">
          <div className="flex flex-col gap-4">
            <p className="font-serif text-[48px] italic leading-tight sm:text-[64px]">
              Hello! 👋
            </p>
            <p className="max-w-[38ch] text-[22px] leading-[1.35] text-ink/70 sm:text-[26px]">
              I&apos;m currently working as Lead Ux Designer in{" "}
              <span className="font-semibold text-ink">Evoke Technologies</span>
            </p>
          </div>
          <div className="flex flex-col gap-6 border-t border-hairline pt-6 text-[16px] leading-[30px] text-ink/70">
            <p className="font-serif text-[19px] italic text-ink">
              “Every brand has stories to tell—stories that will not only
              engage, inform, surprise, delight, and impact their audience,
              but that will also deliver on measurable business goals.”
            </p>
            <p>
              I&apos;m a results-driven Lead UX Designer with over 8 years of
              experience in crafting intuitive, user-centred digital
              experiences. With a strong foundation in user research, I
              uncover deep insights that inform design decisions and elevate
              product value. I specialise in translating complex problems
              into elegant solutions through wire framing and prototyping,
              ensuring alignment across cross-functional teams. I strive to
              create seamless experiences that truly resonate with users and
              contribute to business success.
            </p>
          </div>
        </div>
        <div className="shrink-0 fade-up lg:ml-auto" style={{ animationDelay: "120ms" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Dileep Thotakura"
            src={PHOTO}
            className="h-[380px] w-full border border-hairline object-cover sm:h-[462px] sm:w-[363px]"
          />
        </div>
      </section>

      <main className="mx-auto flex max-w-[1280px] flex-col gap-20 px-6 pb-20 sm:px-10">
        <section className="flex flex-col gap-6 border-t border-hairline pt-10">
          <h2 className="font-serif text-[28px] italic sm:text-[32px]" style={{ color: ACCENT }}>
            Why Design?
          </h2>
          <div className="flex w-full flex-col gap-5 text-[16px] leading-[30px] text-ink/70">
            <p>
              Growing up as a Computer Science engineer, I was always
              fascinated by how systems work — the logic, the architecture,
              the data. But over time, I realised something was missing —
              the human side of technology. We would build these technically
              perfect systems, but I kept wondering &quot;Does this actually
              help the person using it?&quot;
            </p>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-14">
              <div className="flex flex-col gap-5 lg:max-w-[700px]">
                <p>
                  That question stuck with me. And slowly, I found myself
                  more drawn to the experience than the function. I started
                  paying attention to how people interacted with
                  products—the hesitation before clicking, the confusion in
                  their eyes, the joy when something just worked. That&apos;s
                  when I discovered UX design. It wasn&apos;t just about
                  screens or layouts—it was about empathy, clarity, and
                  creating moments that felt intuitive and meaningful.
                </p>
                <p>
                  Switching from pure engineering to product design felt
                  like finally finding a space where both sides of my brain
                  could breathe. I could use the systems thinking I&apos;d
                  grown up with, but add a layer of humanity to it —
                  designing not just for performance, but for people.
                  Watching someone interact with something I helped design
                  and smile because it makes sense — that feeling is why I
                  keep doing what I do.
                </p>
              </div>
              <div className="hidden shrink-0 flex-col items-center gap-2 pt-4 lg:ml-[120px] lg:-mt-[20px] lg:flex">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-brain.png"
                  alt="A brain split into a warm-toned logical half and a cool-toned intuitive half"
                  className="w-[240px]"
                />
                <div className="flex w-full gap-10">
                  <div className="flex flex-1 flex-col items-center">
                    <p className="whitespace-nowrap font-serif text-[16px] italic text-ink">
                      Logical Thinking
                    </p>
                    <p className="mt-1 whitespace-nowrap text-[13px] leading-[17px] text-ink/50">
                      Structure, systems, data
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col items-center">
                    <p className="whitespace-nowrap font-serif text-[16px] italic text-ink">
                      Intuitive Thinking
                    </p>
                    <p className="mt-1 whitespace-nowrap text-[13px] leading-[17px] text-ink/50">
                      Empathy, design, delight
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Now, I&apos;m driven by this intersection — tech and empathy,
              logic and emotion. I want to create things that aren&apos;t
              just usable, but thoughtful. Tools that make people feel seen,
              supported, and even a little delighted.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-10 border-t border-hairline pt-16 lg:flex-row lg:gap-0">
          <h2
            className="shrink-0 font-serif text-[28px] italic sm:text-[32px] lg:w-[200px]"
            style={{ color: ACCENT }}
          >
            Experience
          </h2>
          <div className="flex max-w-[640px] flex-col gap-14 lg:ml-[450px]">
            {experience.map((job, i) => (
              <div
                key={job.company}
                className={`flex flex-col gap-6 ${i > 0 ? "border-t border-hairline pt-14" : ""}`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-serif text-[22px] italic text-ink sm:text-[24px]">
                      {job.company}
                    </span>
                    <span className="text-[15px] text-ink/50">
                      &quot;{job.role}&quot;
                    </span>
                  </div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink/45">
                    {job.period} &nbsp;—&nbsp; {job.location}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {job.points.map((point) => (
                    <p key={point.title} className="text-[15px] leading-[24px] text-ink/70">
                      <span className="font-semibold text-ink">{point.title}</span>{" "}
                      {point.body}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
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
