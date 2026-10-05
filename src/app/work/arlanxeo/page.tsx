import type { Metadata } from "next";
import {
  Body,
  Bullets,
  CaseStudyFooter,
  CaseStudyHero,
  CaseStudySection,
  NumberedBlock,
  OtherProjects,
  SectionHeading,
  SubHeading,
} from "@/components/case-study/CaseStudyParts";
import {
  AgentDetectionFlowMockup,
  AgentInstructionsTable,
  BeforeAfterTable,
  DetectionTrendChart,
  DocumentIntelligenceMockup,
  DocumentMetadataMockup,
  DocumentRuleMockup,
  ImpactStatsStrip,
  POBundleMockup,
  PortalDashboardMockup,
  RBACMatrix,
  ReadinessTable,
  SystemFlowMockup,
} from "@/components/case-study/ArlanxeoMockups";

const ACCENT = "#0891b2";
const HERO_BG = "#e0f7fa";

export const metadata: Metadata = {
  title: "Arlanxeo — Case Study | Dileep Thotakura",
  description:
    "An AI-native portal that watches Salesforce for abnormal account signals, validates them against S/4HANA or Oracle, generates the resulting Purchase Order, and then governs its entire document trail — grounded Q&A, full lineage, and configurable document rules. Designed and built end to end with Claude.",
};

export default function ArlanxeoPage() {
  return (
    <div className="bg-white">
      <CaseStudyHero
        accent={ACCENT}
        heroBg={HERO_BG}
        title="Arlanxeo"
        role="Product Designer & AI Solution Builder"
        platform="Enterprise Web Portal"
        duration="Ongoing — 4+ Months"
        team="Solo, built entirely with Claude"
        heroContent={<PortalDashboardMockup accent={ACCENT} />}
      />

      <main className="mx-auto flex max-w-[1280px] flex-col gap-20 px-6 py-20 sm:px-10">
        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Project Overview</SectionHeading>
          <Body>
            Arlanxeo starts before an order even exists. An AI agent watches
            Salesforce account and order data around the clock, working
            against a set of instructions I configured for it — if an
            account starts behaving abnormally, push it to Arlanxeo. The
            portal takes that flagged signal and validates it against a
            second source of truth, S/4HANA or Oracle, before it generates
            the resulting Purchase Order. From there, the portal becomes an
            AI-native order and document intelligence system: every Sales
            Order and Purchase Order — whether agent-generated or not —
            pulls together documents from SAP/S4HANA and from every non-SAP
            channel a vendor actually uses, an AI assistant grounded in
            exactly that order&apos;s own documents answers plain-language
            questions about it, full document lineage makes every answer
            verifiable, and a configurable rules engine defines exactly
            which documents an order needs — surfaced live as a Readiness
            view. I designed and built the entire portal solo,
            conversationally, using Claude — as much a case study in
            AI-native product building as it is in the product itself.
          </Body>
          <ImpactStatsStrip accent={ACCENT} />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Problem Statement</SectionHeading>
          <Body>
            Two problems sit back to back. First: nobody watches Salesforce
            account and order data for abnormal behaviour in real time —
            someone notices a drop in orders or a slipping account late,
            manually cross-checks it against S/4HANA or Oracle, and only
            then raises a Purchase Order by hand, if they raise one at all.
            Second, and downstream of the first: once a PO exists — however
            it was created — its documentation comes from everywhere. SAP
            confirmations, vendor-portal uploads, emailed invoices and
            packing slips, with nobody owning pulling them into one place.
            Answering something as simple as &quot;is this PO
            complete?&quot; or &quot;what&apos;s the delivery date on this
            order?&quot; means opening multiple systems by hand. Worse, a
            Purchase Order is rarely one clean record — it often bundles
            several child orders from different vendors and systems, each
            in its own state, invisible until someone manually checks every
            source. And what documents are even &quot;required&quot; for a
            given order type is usually tribal knowledge, not an enforced,
            auditable rule.
          </Body>
        </CaseStudySection>

        <div className="flex flex-col gap-12 lg:flex-row">
          <CaseStudySection>
            <SectionHeading accent={ACCENT}>Project Goal</SectionHeading>
            <Body>
              Catch an abnormal account signal the moment it happens, verify
              it against a second source before acting on it, and generate
              the resulting Purchase Order automatically. Then, for every
              order regardless of how it was created, keep its documents in
              one place, answer questions about it in plain language, and
              enforce document completeness by a configurable rule instead
              of institutional memory.
            </Body>
          </CaseStudySection>
          <CaseStudySection>
            <SectionHeading accent={ACCENT}>Project Solution</SectionHeading>
            <Body>
              An AI agent watches Salesforce against a set of configured
              instructions and pushes abnormal signals to Arlanxeo, which
              validates them against S/4HANA or Oracle and generates the
              Purchase Order. That PO — like every other order in the
              system — then unifies its SAP and non-SAP documents, is
              answerable through a grounded AI assistant, tracks full
              lineage, and is checked against a configurable document rule —
              surfaced live in a Readiness view.
            </Body>
          </CaseStudySection>
        </div>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>How It Works</SectionHeading>
          <Body>
            The story runs in two acts: an agent that catches an abnormal
            signal and turns it into a Purchase Order, and a document
            system that then governs that PO — and every other order — from
            end to end.
          </Body>

          <SubHeading accent={ACCENT}>Act one: detect, validate, generate</SubHeading>
          <Body>
            An AI agent watches Salesforce continuously, working against
            instructions I set for it. The moment an account crosses one of
            those thresholds, the agent pushes the signal to Arlanxeo — the
            portal doesn&apos;t act on it blindly, it validates the signal
            against a second source, S/4HANA or Oracle, and only then
            generates the Purchase Order.
          </Body>
          <AgentDetectionFlowMockup accent={ACCENT} />
          <NumberedBlock
            items={[
              {
                title: "Watch",
                points: [
                  "The agent continuously reads Salesforce account and order data — no one is manually scanning reports for a problem.",
                ],
              },
              {
                title: "Detect",
                points: [
                  "Configured instructions define what 'abnormal' means for that signal — an order-volume drop, a falling account-health score, a delivery-delay pattern.",
                ],
              },
              {
                title: "Validate",
                points: [
                  "Before anything is generated, the flagged signal is cross-checked against S/4HANA or Oracle — a second source of truth, not a single system's word for it.",
                ],
              },
              {
                title: "Generate",
                points: [
                  "Once validated, the portal generates the Purchase Order automatically — no one re-keys the same data the agent and the validation step already confirmed.",
                ],
              },
            ]}
          />

          <SubHeading accent={ACCENT}>What the agent is told to watch for</SubHeading>
          <Body>
            The agent&apos;s instructions are explicit and configurable —
            not a black box guessing at what counts as abnormal:
          </Body>
          <AgentInstructionsTable accent={ACCENT} />

          <SubHeading accent={ACCENT}>Act two: govern the document trail</SubHeading>
          <Body>
            Whether a Purchase Order came from the agent or from anywhere
            else, it enters the same pipeline. Every document that lands in
            the portal travels through the same five stages, fully
            automated end to end:
          </Body>
          <SystemFlowMockup accent={ACCENT} />
          <NumberedBlock
            items={[
              {
                title: "Collect",
                points: [
                  "The portal pulls documents for every Sales Order and Purchase Order from SAP/S4HANA and every non-SAP channel — vendor portal, email, manual upload.",
                ],
              },
              {
                title: "Index",
                points: [
                  "Each document is linked to its parent order and given full metadata — source, system, language, size, timestamp — so nothing arrives untraceable.",
                ],
              },
              {
                title: "Ground",
                points: [
                  "An AI assistant, built on Claude, answers plain-language questions about that one order, using only its own documents as context.",
                ],
              },
              {
                title: "Check",
                points: [
                  "Every order is checked against its assigned document rule — the exact set of documents that order type requires.",
                ],
              },
              {
                title: "Deliver",
                points: [
                  "Completeness is surfaced live in the Readiness view, scoped by role so each department only sees what concerns it.",
                ],
              },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Design Process</SectionHeading>
          <Body>
            I designed this the same way I built it — conversationally.
            Every screen, every document-rule interaction, and the
            RBAC-gated Readiness view started as a conversation with Claude:
            describing the document-to-answer flow in plain language, and
            iterating on the layout and logic together until the portal felt
            like one connected system instead of scattered document
            sources.
          </Body>
          <Bullets
            items={[
              "Started from the real workflow gap on both ends — nobody watching Salesforce for an abnormal account in real time, and nobody owning an order's documents once it existed — and designed one portal to close both.",
              "Used Claude for the full loop: the agent's watch instructions, the S/4HANA and Oracle validation logic, first-pass layouts, the document-indexing and lineage model, the Ask assistant's grounding logic, and the document-rule and Readiness structure.",
              "Designed the RBAC model early, not as an afterthought — every screen was built against 'who is allowed to see this' from day one, since the whole point of the portal was safe, department-scoped visibility.",
            ]}
          />

          <SubHeading accent={ACCENT}>An AI-native build, top to bottom</SubHeading>
          <Body>
            This project is a genuine AI-native build rather than an
            AI-assisted one — the watch-agent&apos;s instructions, the
            validation logic, the interface, the document-lineage model, the
            Ask assistant, and the rules engine were all designed and
            reasoned through in conversation with Claude. The role shifted
            from producing every screen by hand to directing what the system
            should do and validating that Claude&apos;s output matched the
            real enterprise workflow.
          </Body>

          <SubHeading accent={ACCENT}>Designing for trust in document intelligence</SubHeading>
          <Body>
            The document-level design problem was its own challenge: making
            an AI answer over an order&apos;s paper trail feel trustworthy,
            not just fast.
          </Body>
          <Bullets
            items={[
              "Grounded every 'Ask' answer in the specific order's own documents, not a general model response — so an answer always traces back to a named source file, never a guess.",
              "Designed a full metadata and lineage view for every document — source, source system, upload time, blob path — so a user can verify an AI answer instead of just trusting it.",
              "Treated 'which documents are required' as configurable data, not hardcoded logic — a workflow rule defined once and assigned to accounts or sources, so the rule scales without a design or engineering change per exception.",
              "Designed around the real shape of a Purchase Order — a bundle of child orders arriving from different systems in different states — rather than assuming one PO means one clean record from one source.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>AI Document Intelligence</SectionHeading>
          <SubHeading accent={ACCENT}>Ask the documents, not a dashboard</SubHeading>
          <Body>
            Instead of teaching people a new reporting tool, every order
            screen has an &quot;Ask&quot; panel. A department user types a
            plain question — &quot;what&apos;s the delivery date?&quot; —
            and gets an answer sourced directly from that order&apos;s own
            documents, with the source document cited alongside it.
          </Body>
          <DocumentIntelligenceMockup accent={ACCENT} />

          <SubHeading accent={ACCENT}>Full lineage on every document</SubHeading>
          <Body>
            Every document carries its own identity and origin — where it
            came from, what system it left behind, when it landed — so
            nothing is ever a mystery file sitting in a folder.
          </Body>
          <DocumentMetadataMockup accent={ACCENT} />

          <SubHeading accent={ACCENT}>One Purchase Order, many sources</SubHeading>
          <Body>
            In practice, a single Purchase Order is rarely one clean record
            — it&apos;s a bundle of orders arriving from SAP, vendor
            portals, and email, each in its own state. AI reads across all
            of them and surfaces what&apos;s actually happening inside each
            one, instead of leaving someone to open every source
            separately.
          </Body>
          <POBundleMockup accent={ACCENT} />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Configurable Document Rules</SectionHeading>
          <Body>
            Which documents an order needs isn&apos;t hardcoded — it&apos;s
            a rule, defined once and assigned wherever it applies.
          </Body>

          <SubHeading accent={ACCENT}>Define the rule once, assign it everywhere</SubHeading>
          <Body>
            A workflow rule sets out exactly which documents a Purchase
            Order of a given type must have. Once defined, it&apos;s
            assigned to the accounts or sources it governs — and every
            future PO from that source is automatically checked against it.
          </Body>
          <DocumentRuleMockup accent={ACCENT} />

          <SubHeading accent={ACCENT}>Readiness, measured against the rule</SubHeading>
          <Body>
            The Readiness view is that rule in action — every tracked Sales
            Order and Purchase Order checked against its assigned document
            rule in real time, so a department sees exactly what&apos;s
            missing, not just a completion percentage.
          </Body>
          <ReadinessTable accent={ACCENT} />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Design Implementation</SectionHeading>
          <Body>
            The implementation focused on making scattered document sources
            feel like one governed, trustworthy system.
          </Body>
          <NumberedBlock
            items={[
              {
                title: "Validate before you act",
                points: [
                  "An agent-flagged signal is never turned straight into a Purchase Order — it's cross-checked against S/4HANA or Oracle first, so automation doesn't mean acting on noise.",
                ],
              },
              {
                title: "One order, every source",
                points: [
                  "SAP and non-SAP documents are unified per order, so no one context-switches across systems to understand a single Sales Order or Purchase Order.",
                ],
              },
              {
                title: "Grounded, not generic",
                points: [
                  "The Ask assistant answers strictly from that order's own documents — never from a general model response untethered to a source.",
                ],
              },
              {
                title: "Rules as data, not tribal knowledge",
                points: [
                  "Document requirements live as a configurable rule, assigned to accounts or sources — not hardcoded per screen or remembered by a person.",
                ],
              },
              {
                title: "Role-based, not role-blind",
                points: [
                  "RBAC is built into every screen, so Sales sees its own accounts' orders, Ops sees fulfillment-wide status, and only Platform Admins can create or edit a rule.",
                ],
              },
            ]}
          />

          <SubHeading accent={ACCENT}>Access, mapped by role</SubHeading>
          <Body>
            The access matrix below is the actual design artifact that drove
            every screen&apos;s visibility rules — worked out before a single
            layout was built:
          </Body>
          <RBACMatrix accent={ACCENT} />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Business Impact</SectionHeading>
          <Body>
            Arlanxeo is still an active, evolving build — but it already
            changes how fast an abnormal account gets caught, how a
            resulting Purchase Order gets created, and how confidently a
            department can trust an answer about any order afterward. The
            numbers, measured before and after the portal went live:
          </Body>
          <BeforeAfterTable accent={ACCENT} />

          <SubHeading accent={ACCENT}>Rule coverage grew every month</SubHeading>
          <Body>
            Rolling the document-rule engine out account by account, rather
            than all at once, meant coverage — and trust in the Readiness
            view — grew steadily instead of arriving as one risky
            switch-over:
          </Body>
          <DetectionTrendChart accent={ACCENT} />

          <Bullets
            items={[
              "An abnormal account signal is caught by the agent in real time instead of being noticed days later, protecting revenue and the relationship behind it before either is actually at risk.",
              "Cross-validating every flagged signal against S/4HANA or Oracle before generating a Purchase Order means automation doesn't mean acting on noise — a second source has to agree first.",
              "Every Sales Order and Purchase Order's documents now live in one place regardless of source, cutting the manual hunt across SAP and inboxes.",
              "Plain-language answers grounded in an order's own documents replaced ad hoc searching, cutting minutes of lookup down to seconds.",
              "Document completeness became a rule-driven, auditable check instead of tribal knowledge — with every tracked order now covered by an assigned rule.",
              "Purchase Orders that bundle multiple child orders from different sources are no longer a manual reconciliation job — AI surfaces the state of every child order automatically.",
              "Full document lineage means every AI answer and every readiness status is independently verifiable, not just trusted.",
              "Because rules are data, not code, extending document requirements to a new order type or vendor source is a configuration change, not a redesign — a foundation built to scale.",
            ]}
          />
        </CaseStudySection>

        <CaseStudySection>
          <SectionHeading accent={ACCENT}>Project Learnings</SectionHeading>
          <Bullets
            items={[
              "An agent that can act — like generating a Purchase Order — needs a second source to agree with it first; validation against S/4HANA or Oracle is what turned 'detected' into 'trusted.'",
              "Grounding AI answers in an order's own documents — not a general model — is what made the Ask feature trustworthy enough for people to actually rely on it.",
              "Treating document requirements as configurable rules instead of hardcoded logic meant the biggest scaling lever wasn't more engineering — it was assigning an existing rule to a new source.",
              "A Purchase Order is rarely one clean record; designing around bundled, multi-source child orders from day one avoided a costly redesign later.",
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
              slug: "axcs",
              title: "AxCS",
              titleColor: "#552ed0",
              summary:
                "A legacy system of Property Insurance system was made easy and improved the usage of the efficiency of the application.",
              image: "/images/rectangle3.png",
            },
          ]}
        />

        <CaseStudyFooter accent={ACCENT} />
      </main>
    </div>
  );
}
