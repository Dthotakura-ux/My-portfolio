import type { IconName } from "./Icons";

export const NAVY = "#0b1e3f";

export const skills: { icon: IconName; label: string; color: string }[] = [
  { icon: "compass", label: "UX Architecture", color: "#60a5fa" },
  { icon: "layers", label: "Product Design", color: "#a78bfa" },
  { icon: "grid", label: "Design Systems", color: "#34d399" },
  { icon: "search", label: "User Research", color: "#f472b6" },
  { icon: "map", label: "Information Architecture", color: "#38bdf8" },
  { icon: "grid", label: "Wireframing & Prototyping", color: "#818cf8" },
  { icon: "cursor", label: "Interaction Design", color: "#fbbf24" },
  { icon: "user", label: "Accessibility (WCAG)", color: "#fb923c" },
  { icon: "check", label: "Usability Testing", color: "#f87171" },
  { icon: "chart", label: "Analytics-driven UX", color: "#22d3ee" },
  { icon: "sparkle", label: "AI-Assisted Design & Mockups", color: "#c084fc" },
  { icon: "users", label: "Stakeholder Collaboration", color: "#4ade80" },
];

export const tools: { label: string; description: string; color: string }[] = [
  {
    label: "Figma",
    description: "Components, Variables, Auto Layout, Prototyping, Design Systems",
    color: "#a855f7",
  },
  {
    label: "Figma Make",
    description: "AI-assisted UI generation, rapid mockups, interactive prototypes",
    color: "#8b5cf6",
  },
  {
    label: "Claude",
    description: "AI ideation, requirements analysis, UX flows, mockups and design documentation",
    color: "#ff5e36",
  },
  { label: "Adobe XD", description: "UI design and prototyping", color: "#ec4899" },
  { label: "Sketch", description: "UI design and interaction design", color: "#fbbf24" },
];

export const certifications: { icon: IconName; title: string; issuer: string; color: string }[] = [
  { icon: "check", title: "Google UX Design Certificate", issuer: "Google", color: "#4285f4" },
  { icon: "compass", title: "Design Thinking and Innovation", issuer: "IIT Bombay", color: "#60a5fa" },
  { icon: "sparkle", title: "Human Computer Interaction", issuer: "Interaction Design Foundation", color: "#a78bfa" },
  { icon: "search", title: "User Research Methods", issuer: "Interaction Design Foundation", color: "#34d399" },
];

export const approach: {
  title: string;
  icon: IconName;
  color: string;
  bg: string;
  points: string[];
}[] = [
  {
    title: "Research",
    icon: "search",
    color: "#3b82f6",
    bg: "#eaf2ff",
    points: [
      "User interviews & surveys",
      "Stakeholder workshops",
      "Analytics & behavioural review",
      "Claude-assisted synthesis of raw research data",
    ],
  },
  {
    title: "Interaction Design",
    icon: "cursor",
    color: "#8b5cf6",
    bg: "#f2ecff",
    points: [
      "Wireframes & user flows",
      "Hand-built Figma prototypes",
      "Figma Make for rapid UI generation",
      "Interaction patterns explored with Claude",
    ],
  },
  {
    title: "Analytics",
    icon: "chart",
    color: "#10b981",
    bg: "#e8faf1",
    points: [
      "Heuristic evaluation",
      "Manual funnel & drop-off review",
      "AI-surfaced behaviour patterns",
      "Automated insight summaries",
    ],
  },
  {
    title: "Validate & Iterate",
    icon: "check",
    color: "#f97316",
    bg: "#fff1e6",
    points: [
      "Usability testing sessions",
      "Stakeholder feedback loops",
      "AI-generated design variants for faster iteration",
      "Continuous improvement from data",
    ],
  },
];

export const expertise: { icon: IconName; label: string; color: string }[] = [
  { icon: "compass", label: "UX Architecture & Strategy", color: "#8b5cf6" },
  { icon: "building", label: "Information Architecture", color: "#f87171" },
  { icon: "grid", label: "Design Systems & Tokens", color: "#14b8a6" },
  { icon: "search", label: "User Research & Insights", color: "#ec4899" },
  { icon: "map", label: "Wireframing & Prototyping", color: "#3b82f6" },
  { icon: "cursor", label: "Interaction Design", color: "#f97316" },
  { icon: "user", label: "Accessibility (WCAG)", color: "#84cc16" },
  { icon: "check", label: "Usability Testing & Validation", color: "#38bdf8" },
  { icon: "chart", label: "Analytics-driven UX Optimization", color: "#22c55e" },
  { icon: "sparkle", label: "AI-Assisted Design (Claude, Figma Make)", color: "#ef4444" },
  { icon: "users", label: "Stakeholder Collaboration", color: "#a855f7" },
  { icon: "target", label: "UX Strategy & Mentoring", color: "#fb923c" },
];

export const experience: {
  company: string;
  role: string;
  period: string;
  location: string;
  tags: string[];
  bullets: string[];
}[] = [
  {
    company: "Evoke Technologies Pvt Ltd",
    role: "Associate UX Architect",
    period: "Mar 2020 — Present",
    location: "Hyderabad",
    tags: ["Enterprise Products", "B2B", "Web & Mobile", "AI-enabled Products"],
    bullets: [
      "Define and execute end-to-end UX strategy aligned with business goals, user needs and product vision.",
      "Design enterprise web applications, dashboards and complex workflows for insurance, healthcare, manufacturing and other domains.",
      "Conduct user research, stakeholder interviews and usability testing to identify pain points and validate solutions.",
      "Use AI tools (Claude, Figma Make) to generate mockups, explore design directions and accelerate design exploration.",
      "Create information architecture, user journeys, wireframes, high-fidelity designs and interactive prototypes.",
      "Build and evolve scalable design systems using Figma components, variables and tokens.",
      "Ensure accessibility (WCAG) and inclusive design across products.",
      "Collaborate with Product, Engineering, QA, Business and Marketing teams to drive successful implementation.",
      "Mentor and guide UX/UI designers and establish design processes and best practices.",
      "Explore emerging technologies including AI-powered experiences and conversational UX.",
    ],
  },
  {
    company: "Yark5 Entertainment LLP",
    role: "UX Designer",
    period: "Aug 2018 — Feb 2020",
    location: "Hyderabad",
    tags: ["B2B", "B2C", "Education", "Healthcare", "Insurance"],
    bullets: [
      "Designed user experiences for web and mobile products across multiple domains.",
      "Translated business requirements into user flows, wireframes, prototypes and visual designs.",
      "Conducted user and stakeholder research and validated concepts through usability testing.",
      "Created reusable design patterns and workflows to maintain consistency across products.",
      "Collaborated with product managers, developers and stakeholders throughout the product lifecycle.",
      "Used AI tools to quickly explore design concepts and create interactive prototypes for stakeholder discussions.",
    ],
  },
  {
    company: "Huetint Software Pvt Ltd",
    role: "Junior UX Designer",
    period: "Jul 2016 — Aug 2018",
    location: "Hyderabad",
    tags: ["Web Applications", "Digital Products"],
    bullets: [
      "Designed user workflows and interfaces for web-based digital products.",
      "Created wireframes, user flows, prototypes and visual designs based on business requirements.",
      "Worked with senior designers and developers to translate concepts into implementable experiences.",
      "Participated in usability validation and design iterations.",
      "Built a strong foundation in interaction design, information architecture, visual design and user-centered design.",
    ],
  },
];
