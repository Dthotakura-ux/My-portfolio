import type { Metadata } from "next";
import {
  Body,
  Bullets,
  CaseStudyFooter,
  CaseStudyHero,
  CaseStudySection,
  Image,
  NumberedBlock,
  OtherProjects,
  SectionHeading,
  SubHeading,
  TwoColBox,
} from "@/components/case-study/CaseStudyParts";

const ACCENT = "#be2bbb";
const HERO_BG = "#ffeeff";
const img = (name: string) => `/images/case-studies/${name}`;

export const metadata: Metadata = {
  title: "PharmaWrap — Case Study | Dileep Thotakura",
  description:
    "PharmaWrap centralises procurement, customisation, compliance and inventory tracking of specialised cardboard packaging across the pharma R&D lifecycle.",
};

export default function PharmaWrapPage() {
  return (
    <div className="bg-white">
      <CaseStudyHero
        accent={ACCENT}
        heroBg={HERO_BG}
        title="PharmaWrap"
        role="Lead Product Designer"
        platform="B2B Web Application"
        duration="22 - 26 Weeks"
        team="2 Designers"
        heroImage={img("pharma-hero.png")}
        heroImageAlt="PharmaWrap dashboard preview"
      />

      <main className="mx-auto flex max-w-[1280px] flex-col gap-20 px-6 py-20 sm:px-10">
        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Project Overview</SectionHeading>
          <Body>
            To build a centralised digital platform PharmaWrap focused on
            managing the procurement, customisation, compliance, and
            inventory tracking of various types of specialised cardboard
            packaging that are essential throughout the company&apos;s drug
            research, development, clinical testing, production, packaging,
            storage, and disposal lifecycle of drug development.
          </Body>
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Problem Statement</SectionHeading>
          <Body>
            The pharmaceutical research and development (R&D) process
            involves the handling, transportation, and disposal of a wide
            range of chemical compounds, experimental drugs, and clinical
            materials — each with unique storage, safety, and compliance
            requirements. Despite the critical role of customised cardboard
            packaging in these operations, the current procurement and
            inventory management systems are fragmented, manual, and poorly
            optimised.
          </Body>
        </CaseStudySection>

        <div className="flex flex-col gap-12 lg:flex-row">
          <CaseStudySection>
            <SectionHeading accent={ACCENT}>Project Goal</SectionHeading>
            <Body>
              To develop a platform that streamlines the procurement,
              customisation, compliance, and inventory management of
              specialised cardboard packaging required across the
              pharmaceutical research and development lifecycle. The
              platform aims to:
            </Body>
            <Bullets
              items={[
                "Standardise cardboard selection based on specific R&D use cases (e.g., hazardous material, cold-chain storage, waste disposal)",
                "Enable end-to-end customisation for branding, sizing, and labelling in compliance with regulatory standards",
                "Ensure packaging traceability and compliance, reducing the risk of safety violations or delays",
                "Enhance collaboration between procurement teams, R&D departments, packaging designers, and external vendors",
              ]}
            />
          </CaseStudySection>
          <CaseStudySection>
            <SectionHeading accent={ACCENT}>Project Solution</SectionHeading>
            <Body>
              To address the challenges in managing specialised cardboard
              packaging within the pharmaceutical R&D lifecycle, PharmaWrap
              was developed as a comprehensive digital platform that brings
              together all stakeholders — from procurement to compliance —
              under one centralised, intelligent system.
            </Body>
            <Bullets
              items={[
                "Auto-checks for regulatory compliance based on selected use case (e.g., GxP, WHO, or local health standards)",
                "Ensures inclusion of correct labelling, hazard markers, and disposal codes",
                "The platform auto-recommends suitable cardboard types based on material properties, size, and compliance needs.",
              ]}
            />
          </CaseStudySection>
        </div>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Design Process</SectionHeading>
          <Body>
            To deeply understand the user needs, business goals, operational
            workflows, packaging constraints, and regulatory requirements
            associated with cardboard procurement and usage in
            pharmaceutical R&D. We did research that says
          </Body>
          <Bullets
            items={[
              "We did heuristic evaluation to the existing portal and got some valuable Insights with high priority number 4.",
              "For our better understanding we had interviews with scientists, technicians, and transport team.",
              "We did survey with logistics manager and compliance officer and got some valuable insights about the drawback of the package and how they raise a request.",
            ]}
          />

          <SubHeading accent={ACCENT}>Research Finding</SubHeading>
          <NumberedBlock
            items={[
              {
                title: "Lack of Standardisation in Box Selection",
                points: [
                  "Users across R&D, procurement, and warehouse teams select packaging types in non-uniform ways.",
                  "There's no centralised system to guide selection based on use case (hazardous, cold storage, waste, etc.).",
                  "Leads to wrong box types being ordered or over-reliance on a few standard options",
                ],
              },
              {
                title: "Customisation & Branding is Manual and Error-Prone",
                points: [
                  "Custom printing of branding, regulatory symbols, and hazard labels is handled outside the system, usually via email threads and PDF attachments.",
                  "Missing, outdated, or unapproved artwork causes delays or compliance issues.",
                  "There's no visual preview or version control of artwork.",
                ],
              },
              {
                title: "Compliance Reviews are Bottlenecks",
                points: [
                  "Compliance officers manually review all packaging label content and formats.",
                  "Frequent issues: incorrect hazard symbols, missing compliance stamps, wrong disposal instructions.",
                  "No embedded rules or automated checks during request/customisation phase.",
                ],
              },
            ]}
          />
          <TwoColBox
            leftTitle="Problem"
            leftItems={[
              "Manual packaging selection",
              "Printing & branding delays",
              "Regulatory risks",
              "Vendor friction",
            ]}
            rightTitle="Opportunity"
            rightItems={[
              "Use-case-driven box configurator",
              "Visual customisation + preview tool",
              "Built-in compliance validation",
              "Vendor portal with artwork, delivery & PO tracking",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Workflow</SectionHeading>
          <Body>
            We created a lo-level workflow for our understanding based on
            the artefacts we collected and had a brainstorming session with
            our customer for enhancing the application with all necessary
            modules and navigation to it. This is just the 1st level draft
            can&apos;t show final consolidated Information architecture due
            to NDA.
          </Body>
          <div className="mx-auto w-full max-w-[420px]">
            <Image src={img("pharma-workflow.png")} alt="PharmaWrap workflow draft" />
          </div>
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Addressing pain points</SectionHeading>
          <Body>
            While started working on the paper we figured out the pain
            points of the application and that degrades the efficacy of the
            usage of the application, and those need to be addressed in
            research phase.
          </Body>
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="flex-1">
              <NumberedBlock
                items={[
                  {
                    title: "Compliance & Regulatory Sensitivity",
                    points: [
                      "Pain Point: Packaging design must comply with specific regulatory requirements (e.g., FDA, UN hazard codes).",
                      "Impact: Even small UI mistakes can lead to non-compliance — which has legal and safety consequences.",
                    ],
                  },
                  {
                    title: "Customisation & Labelling UX",
                    points: [
                      "Pain Point: Users must customise boxes with artwork, hazard symbols, and branding — a technically complex UX area involving file uploads, drag-and-drop, and previewing.",
                      "Impact: High learning curve, potential for human error, and friction if not visually intuitive.",
                    ],
                  },
                  {
                    title: "Disconnected Systems & Data Sources",
                    points: [
                      "Pain Point: Packaging, inventory, approvals, and compliance are often tracked in different tools (Excel, email, SAP, etc.).",
                      "Impact: Designing a centralised UX without creating data duplication or loss of fidelity is difficult.",
                    ],
                  },
                  {
                    title: "User Fatigue from Repetitive Tasks",
                    points: [
                      "Pain Point: Scientists or warehouse staff request the same packaging repeatedly but must start from scratch each time.",
                      "Impact: Lack of template or auto-fill capabilities slows down productivity.",
                    ],
                  },
                ]}
              />
            </div>
            <div className="w-full max-w-[300px] shrink-0">
              <Image src={img("pharma-icon.png")} alt="Illustration" />
            </div>
          </div>

          <SubHeading accent={ACCENT}>
            Major problem solved &quot;Accessibility&quot;
          </SubHeading>
          <Bullets
            items={[
              "The scientists using gloves and working, If they want to order something they need to remove their gloves and need to order, so that they are not interested and making mistakes while selection of cardboard.",
              <span key="a" className="font-extrabold">
                The solution we provided was that we increased the size of
                the button so that their touch targets can easily work, by
                this accessible issues we reduced the wastage.
              </span>,
              "The Hazardous cardboard needed to be kept safe and should be built strong, and that need to be very easy to select from the warehouse immediately whenever they need",
              <span key="b" className="font-extrabold">
                The solution we provided was to have it in different colour
                ratio so that it can be easily identified and kept untouched
                until it is needed.
              </span>,
            ]}
          />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Visual Design</SectionHeading>
          <Body>
            Once the usability issues were resolved, I moved on to design
            the final screens in Figma. My goal was to create a visual
            identity that&apos;s aligned with the brand&apos;s values and
            message. I also checked the competition and took a deep dive
            into my catalog of references for inspiration.
          </Body>
          <Image src={img("pharma-visual.png")} alt="PharmaWrap visual design mockups" />

          <SubHeading accent={ACCENT}>Key performance</SubHeading>
          <Body>
            We agreed that the most important task was to increase the
            conversion rate while maintaining customer retention, since
            these are the product&apos;s most important KPIs. We
            collaborated with the marketing team to review existing data and
            to set up a measurement system in Google Tag Manager, Google
            Analytics, and Google Data Studio.
          </Body>
          <Bullets
            items={[
              "Reduce task completion time by 30% for key user journeys (e.g., submitting drug reports, accessing research data).",
              "Increase user satisfaction score (CSAT) to at least 85% within the first quarter of launch.",
              "Decrease support tickets related to navigation and usability by 40%.",
              "Stakeholder workshops to understand business priorities and KPIs.",
              "Heuristic evaluation to identify usability issues that could directly impact performance",
              "Pre and post-launch usability testing to track changes in task completion time and success rate.",
              "Portal usage analytics to track engagement, adoption, and frequency of use across roles and departments.",
              "Support ticket data categorised and analysed by type and frequency.",
              "Redesigned the navigation using a more intuitive IA and consistent labelling to reduce time to task.",
              "Introduced role-based dashboards, showing users the most relevant data upfront.",
              "Improved system feedback and guidance with tooltips, loaders, and progress indicators.",
              "Simplified complex workflows by breaking them into smaller, guided steps with inline validation",
            ]}
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <Image src={img("pharma-screenshot1.png")} alt="PharmaWrap screen" />
            <Image src={img("pharma-screenshot2.png")} alt="PharmaWrap screen" />
          </div>

          <SubHeading accent={ACCENT}>New Framework</SubHeading>
          <Body>
            To problems faced in creating the request we changed the layout
            and showing the system status to the user at every point in
            time, so that the user need not focus on remembering the
            updates. This helps in reducing the cognitive load.
          </Body>
          <Bullets
            items={[
              "Edit order Feature: The placed order can be edited until the vendor accepts the request, provided that after accepting also user can edit the order but it needs the approval of vendor.",
              "Add License: If the order is about hazardous or harmful chemicals, here we provided a provision to add the license to the order.",
              "Clone Feature: The order can be cloned i.e. copied for re-use with the existing data, so that user need not enter the redundant data all the time if placing a similar order.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Project Learnings</SectionHeading>
          <Bullets
            items={[
              "We recognised that a few use cases drove our client's KPIs.",
              "The new solution helped users to start with a desired action and complete the task successfully.",
              "A personalised approach was made by us for a better and more delightful experience — and getting to know how the Pharma industry works and what they expect from us in terms of experience.",
            ]}
          />
        </CaseStudySection>

        <OtherProjects
          projects={[
            {
              slug: "smart-scm",
              title: "Smart SCM",
              titleColor: "#176b00",
              summary:
                "Built a custom Supply Chain Management module to streamline processes, reduce manual effort, and enhance overall operational efficiency.",
              image: "/images/rectangle1.png",
            },
            {
              slug: "axcs",
              title: "AxCS",
              titleColor: "#552ed0",
              summary:
                "A legacy system of Property Insurance system was made easy and improved the usage of the efficiency of the application.",
              image: "/images/rectangle3.png",
            },
            {
              slug: "arlanxeo",
              title: "Arlanxeo",
              titleColor: "#0891b2",
              summary:
                "An AI-native workspace that clubs a conversational assistant with a live shipment-tracking dashboard, so asking why a delivery is late and seeing the answer happen in the same breath.",
              image: "/images/case-studies/arlanxeo-thumbnail.png",
            },
          ]}
        />

        <CaseStudyFooter accent={ACCENT} />
      </main>
    </div>
  );
}
