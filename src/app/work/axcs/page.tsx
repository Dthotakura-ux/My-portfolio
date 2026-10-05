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

const ACCENT = "#5c34d1";
const HERO_BG = "#dcd0ff";
const img = (name: string) => `/images/case-studies/${name}`;

export const metadata: Metadata = {
  title: "AxCS — Case Study | Dileep Thotakura",
  description:
    "An enterprise-grade property insurance platform that manages claims and settlements end-to-end, from claim initiation to final payout.",
};

export default function AxcsPage() {
  return (
    <div className="bg-white">
      <CaseStudyHero
        accent={ACCENT}
        heroBg={HERO_BG}
        title="AxCS"
        role="Lead Product Designer"
        platform="B2B Web Application"
        duration="22 - 26 Weeks"
        team="3 Designers"
        heroImage={img("axcs-hero-device.png")}
        heroImageAlt="AxCS claims platform preview"
      />

      <main className="mx-auto flex max-w-[1280px] flex-col gap-20 px-6 py-20 sm:px-10">
        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Project Overview</SectionHeading>
          <Body>
            This project focuses on designing an enterprise-grade insurance
            platform that manages claims and settlements for houses,
            buildings, and commercial properties. The system supports
            insurance claims raised due to natural disasters and unexpected
            accidents, ensuring transparency, accuracy, and faster
            settlements. The platform centralizes the complete claim
            lifecycle — from claim initiation to final payout — while
            maintaining strong auditability and compliance with insurance
            regulations.
          </Body>
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Problem Statement</SectionHeading>
          <Body>
            Property insurance claim processing was largely dependent on
            manual workflows, emails, and disconnected systems, which
            resulted in:
          </Body>
          <Bullets
            items={[
              "Delayed claim assessments and settlements",
              "Lack of real-time visibility into claim status",
              "Inconsistent handling of survey reports and exceptions",
              "High dependency on manual document verification",
              "Increased disputes and audit challenges",
            ]}
          />
          <Body>
            These issues negatively impacted customer trust, operational
            efficiency, and regulatory compliance.
          </Body>
        </CaseStudySection>

        <div className="flex flex-col gap-12 lg:flex-row">
          <CaseStudySection>
            <SectionHeading accent={ACCENT}>Project Goal</SectionHeading>
            <Body>
              The goal of this project was to design a unified platform that
              streamlines property insurance claims for houses, buildings,
              and commercial properties affected by natural disasters and
              accidents. The focus was on reducing settlement time while
              ensuring transparency, accuracy, and regulatory compliance.
              The platform aims to:
            </Body>
            <Bullets
              items={[
                "Digitize the complete property insurance claims lifecycle",
                "Reduce claim processing and settlement time",
                "Improve visibility and tracking for all stakeholders",
                "Ensure consistent assessment and approval workflows",
                "Build a scalable system for disaster and accident scenarios",
              ]}
            />
          </CaseStudySection>
          <CaseStudySection>
            <SectionHeading accent={ACCENT}>Project Solution</SectionHeading>
            <Body>
              A centralized claims and settlement platform was designed to
              manage end-to-end workflows from claim initiation to payout.
              The solution provides guided processes, role-based access, and
              audit-ready tracking to handle complex property damage
              scenarios efficiently.
            </Body>
            <p className="font-bold text-[#343434]">Solution Highlights</p>
            <Bullets
              items={[
                "Guided claim initiation with structured data capture",
                "Centralized document and evidence management",
                "Standardized surveyor assessment and inspection flows",
                "Rule-based approvals with clear exception handling",
                "Transparent settlement calculation and payment tracking",
              ]}
            />
          </CaseStudySection>
        </div>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Design Process</SectionHeading>
          <Body>
            The design process followed a structured, workflow-first
            approach to address the complexity of insurance operations and
            disaster-related edge cases. The focus was on clarity,
            consistency, and scalability across all claim scenarios.
          </Body>
          <Bullets
            items={[
              "We started to analyse the process of existing claims and settlement workflow and noted what can be improved based on the R&D artefacts.",
              "We needed to understand the local body protocols, rules and regulations of insurance policy.",
              "Business side terms and conditions while providing the insurance to the customer at very beginning of the insurance purchase.",
            ]}
          />

          <SubHeading accent={ACCENT}>Challenges & Constraints</SubHeading>
          <NumberedBlock
            items={[
              {
                title:
                  "Designing for property insurance required handling unpredictable damage scenarios, high claim volumes, and strict regulatory requirements.",
                points: [
                  "Supporting diverse damage types such as floods, fire, and earthquakes (every damage type has its own sum-insured-to-settlement ratio)",
                  "Managing complex approval and exception workflows (every approval needs a different set of documents from the authority)",
                  "Ensuring regulatory and audit compliance.",
                  "Accommodating multiple user roles with different responsibilities.",
                ],
              },
              {
                title:
                  "A competitive analysis was conducted to understand how existing insurance platforms manage claims and settlements.",
                points: [
                  "Limited visibility into claim progress and ownership (many companies don't communicate to users at every moment, only at 3 defined steps)",
                  "Poor handling of exceptions and disputes.",
                  "Heavy reliance on manual documentation and emails.",
                  "Complex interfaces not optimized for operational users.",
                ],
              },
              {
                title: "Compliance reviews and user greed are bottlenecks",
                points: [
                  "The team manually needs to review the site and give info to the application — this is where a user can tamper and get high claims.",
                  "Frequent issues of incorrect/wrong data being raised by users for claims.",
                  "A lot of scope for collateral damage to both parties of the claim.",
                ],
              },
            ]}
          />
          <TwoColBox
            leftTitle="Problem"
            leftItems={[
              "Manual verification of the site was mandatory",
              "Claim settlement delays",
              "Regulatory risks",
              "Multiple user roles with different responsibilities",
            ]}
            rightTitle="Opportunity"
            rightItems={[
              "Scheduled visits are introduced for the site by a random team",
              "Fixed time bound to settle the claim when a user raises it.",
              "AI integrated policy proposer and solution provider",
              "Role based application access, clean workflow.",
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
          <Image src={img("axcs-workflow.png")} alt="AxCS workflow draft" />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Design Implementation</SectionHeading>
          <Body>
            Once the core workflows were clear, the focus moved to making
            sure the design could actually work in a real insurance setup.
            This wasn&apos;t just about screens looking good — it was about
            building something teams could use every day, especially during
            high-pressure situations like floods or fire incidents. The
            implementation was done with a strong emphasis on clarity,
            consistency, and scale.
          </Body>
          <NumberedBlock
            items={[
              {
                title: "Building Around Real Workflows",
                points: [
                  "Instead of designing isolated pages, the product was built around how claims actually move in the real world.",
                  "Claims move only through defined stages",
                  "Each stage clearly shows who owns it",
                  "Next actions are always visible",
                  "Exceptions are handled as part of the flow, not outside it",
                ],
              },
              {
                title: "Clear Role-Based Experiences",
                points: [
                  "Different users needed very different things from the system, so the experience was tailored by role.",
                  "Policyholders saw simple status updates and uploads",
                  "Claims officers managed verification and coordination",
                  "Surveyors focused on inspections and evidence",
                  "Finance teams worked only on approved settlement data",
                  "Compliance teams had full visibility and logs",
                ],
              },
              {
                title: "Keeping the UI Consistent and Practical",
                points: [
                  "A small, reusable set of components was used across the platform.",
                  "Same patterns for approvals and exceptions",
                  "Clear status colours and labels",
                  "Layouts designed for heavy data, not decoration",
                ],
              },
              {
                title: "Working Closely With Engineering",
                points: [
                  "Design was developed alongside engineering, not thrown over the wall.",
                  "Clear handoff with interaction notes",
                  "Regular reviews during implementation",
                  "Feedback from UAT fed back into the design",
                ],
              },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Solving pain points</SectionHeading>
          <Body>
            The solution focused on resolving the key operational and
            experience challenges observed across property insurance
            claims, especially during disaster and high-volume scenarios.
          </Body>
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="flex-1">
              <NumberedBlock
                items={[
                  {
                    title: "Lack of claim visibility",
                    points: [
                      "Pain Point: Claims were difficult to track across departments, with no clear visibility into current status, ownership, or next steps.",
                      "Solution: A centralized claim timeline and real-time status indicators were introduced.",
                      "Impact: Reduced internal follow-ups, faster claim movement, and improved SLA adherence.",
                    ],
                  },
                  {
                    title: "Delayed Surveyor Assessments",
                    points: [
                      "Pain Point: Surveyor reports varied in quality and often lacked required evidence, causing rework and approval delays.",
                      "Solution: Standardized surveyor workflows with predefined inspection checklists and damage severity tagging.",
                      "Impact: More consistent assessments and reduced turnaround time.",
                    ],
                  },
                  {
                    title: "Complex Approval & Exception Handling",
                    points: [
                      "Pain Point: High-value and disaster-related claims required multiple approvals, often leading to confusion and escalations.",
                      "Solution: Rule-based approval flows with clearly defined exception states and escalation paths.",
                      "Impact: Faster decision-making and reduced approval bottlenecks.",
                    ],
                  },
                  {
                    title: "User Fatigue from Repetitive Tasks",
                    points: [
                      "Pain Point: Users had to re-enter similar claim information repeatedly across steps.",
                      "Impact: Lack of template or auto-fill capabilities slowed down productivity.",
                    ],
                  },
                ]}
              />
            </div>
            <div className="w-full max-w-[300px] shrink-0">
              <Image src={img("axcs-icon.png")} alt="Illustration" />
            </div>
          </div>

          <SubHeading accent={ACCENT}>
            Major problem solved &quot;Business & User Retention&quot;
          </SubHeading>
          <Bullets
            items={[
              "When buying a policy, users need to select a package type, and the majority are attracted to offers but not to the terms and conditions.",
              <span key="a" className="font-extrabold">
                The solution we provided was to have users read the main
                bullet points and complete a short activity at every
                important term and condition — as they complete it, we
                slowly reveal the offer the user is getting.
              </span>,
              "At the time a user is initiating a claim, they are already in a stressed state due to the damage to their property, and are not in the mood to fill out a lengthy form.",
              <span key="b" className="font-extrabold">
                The solution we provided was to use progressive disclosure
                patterns to collect the data, while communicating the
                maximum time needed for the final settlement.
              </span>,
            ]}
          />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>The Final Design</SectionHeading>
          <Body>
            Once the paper and lo-fi wires were ready with all the problems
            solved, and we got approvals from the dev team that all the
            patterns and components were doable, and confirmation from the
            stakeholder that we were aligned with the requirement — we
            created a smaller design system and started working on visuals.
          </Body>
          <div className="grid gap-6 sm:grid-cols-2">
            <Image src={img("axcs-mockup1.png")} alt="AxCS screen mockup" />
            <Image src={img("axcs-mockup2.png")} alt="AxCS screen mockup" />
          </div>

          <SubHeading accent={ACCENT}>Design rationale</SubHeading>
          <Body>
            The claim submission flow is structured to ensure that every
            claim enters the system with complete, consistent, and
            verifiable information. By guiding users step-by-step and
            standardising inputs, the design removes common delays that
            typically occur during verification, assessment, and approval.
          </Body>
          <Bullets
            items={[
              "Users select from insured properties instead of typing manually.",
              "Guided questions rather than blank fields.",
              "Shows policy status and coverage instantly.",
              "Predefined damage types allow faster routing to the correct processing team.",
              "Information is collected step-by-step instead of all at once.",
              "Reducing cognitive load — users don't need to guess what information is required.",
              "Every action, document, and decision is traceable.",
              "Supports high claim volumes without process breakdown.",
              "The design supports business operations, regulatory requirements, and long-term scalability — not just interface usability.",
            ]}
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <Image src={img("axcs-mockup3.png")} alt="AxCS screen mockup" />
            <Image src={img("axcs-mockup4.png")} alt="AxCS screen mockup" />
          </div>

          <SubHeading accent={ACCENT}>The claim preview & History</SubHeading>
          <Bullets
            items={[
              'The status tracking for the claim initiated for the damage caused by the "X" factor to the property.',
              "Once the claim is raised, we show the user an estimated timeline to settle the claim with the funds.",
              "The tracking of the claim along with the officer currently assigned to the property damage evaluation is shown by default.",
              "The officer also has a fixed time to complete the manual verification and upload images to match the claim.",
              "Users can directly chat with the support team and separately check with the verification officer, but all calls go through the system's connect line.",
              "This shows the clear structure of what is happening and at what stage the claim settlement currently is.",
            ]}
          />

          <SubHeading accent={ACCENT}>The Impact</SubHeading>
          <Body>
            By replacing fragmented manual processes with a structured and
            guided workflow, the organization was able to handle claims
            more efficiently, especially during high-volume disaster
            situations. The platform also strengthened financial accuracy
            and settlement transparency.
          </Body>
          <Bullets
            items={[
              "Faster claim registration and verification cycles",
              "Reduction in processing delays caused by incomplete submissions",
              "Improved assessment consistency across surveyors",
              "Lower number of settlement disputes and re-evaluations",
              "Reduced manual coordination between operational teams",
              "Stronger disaster-response capability during high claim volumes",
              "Improved audit readiness and regulatory compliance",
              "Increased confidence among internal teams and policyholders",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Project Learning</SectionHeading>
          <Body>
            One of the biggest learnings was that clarity is more important
            than speed. Users — both policyholders and internal teams — are
            making decisions that have financial and legal implications.
            They prefer a process that is predictable, transparent, and
            well-explained, even if it takes slightly longer. Ambiguity
            causes more delays than complexity.
          </Body>
          <Bullets
            items={[
              "Structured workflows enable operational scalability",
              "Exception handling is a primary design requirement, not an edge case",
              "Emotional context matters in high-stress user journeys",
              "Compliance must be embedded into system behavior",
              "Systems must be designed for peak demand, not average demand",
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
              slug: "pharmawrap",
              title: "PharmaWrap",
              titleColor: "#be2bbb",
              summary:
                "Optimised the packaging workflow for a Pharma company by streamlining the procurement of branded cardboard used for medicine distribution",
              image: "/images/rectangle2.png",
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
