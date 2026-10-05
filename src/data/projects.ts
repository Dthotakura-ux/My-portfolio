export type ProjectCard = {
  slug: string;
  title: string;
  titleColor: string;
  tag: string;
  summary: string;
  image: string;
  cardBg: string;
  tags: string[];
  heroImage: string;
};

export const projects: ProjectCard[] = [
  {
    slug: "smart-scm",
    title: "Smart SCM",
    titleColor: "#176b00",
    tag: "Learning & Research",
    summary:
      "Built a custom Supply Chain Management module to streamline processes, reduce manual effort, and enhance overall operational efficiency.",
    image: "/images/rectangle1.png",
    cardBg: "#ddfed4",
    tags: ["Interaction/UX Design", "B2B SaaS"],
    heroImage: "/images/case-studies/scm-hero.png",
  },
  {
    slug: "pharmawrap",
    title: "PharmaWrap",
    titleColor: "#be2bbb",
    tag: "Exploration & Innovation",
    summary:
      "Optimised the packaging workflow for a Pharma company by streamlining the procurement of branded cardboard used for medicine distribution.",
    image: "/images/rectangle2.png",
    cardBg: "#ffeeff",
    tags: ["Product Design", "Healthcare"],
    heroImage: "/images/case-studies/pharma-hero.png",
  },
  {
    slug: "axcs",
    title: "AxCS",
    titleColor: "#552ed0",
    tag: "Ideation & Problem Solving",
    summary:
      "A legacy system of property Insurance system was made easy and improved the usage of the efficiency of the application.",
    image: "/images/rectangle3.png",
    cardBg: "#dcd0ff",
    tags: ["Product Design", "🏆 Award Winner"],
    heroImage: "/images/case-studies/axcs-hero-device.png",
  },
  {
    slug: "arlanxeo",
    title: "Arlanxeo",
    titleColor: "#0891b2",
    tag: "AI - Insights Native",
    summary:
      "An AI-native workspace that clubs a conversational assistant with a live shipment-tracking dashboard, so asking why a delivery is late and seeing the answer happen in the same breath.",
    image: "/images/case-studies/arlanxeo-thumbnail.png",
    cardBg: "#e0f7fa",
    tags: ["AI / UX", "Logistics"],
    heroImage: "/images/case-studies/arlanxeo-hero.png",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
