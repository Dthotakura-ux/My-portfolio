import type { ReactNode } from "react";

const BOX = "rounded-[10px] border-2 border-[#e0e0e0] bg-white";

function FlowNode({
  accent,
  label,
  sub,
  time,
}: {
  accent: string;
  label: string;
  sub: string;
  time?: string;
}) {
  return (
    <div className={`${BOX} flex w-[168px] shrink-0 flex-col items-center gap-2 px-4 py-5 text-center`}>
      <span
        className="flex size-[40px] items-center justify-center rounded-full text-[13px] font-bold text-white"
        style={{ backgroundColor: accent }}
      >
        {sub}
      </span>
      <p className="text-[13px] font-semibold leading-[18px] text-[#343434]">{label}</p>
      {time && (
        <span
          className="rounded-full px-2 py-[2px] text-[10px] font-bold uppercase tracking-[0.06em]"
          style={{ backgroundColor: `${accent}1a`, color: accent }}
        >
          {time}
        </span>
      )}
    </div>
  );
}

function Arrow({ accent }: { accent: string }) {
  return (
    <svg width="28" height="16" viewBox="0 0 28 16" fill="none" className="shrink-0">
      <path d="M0 8h22" stroke={accent} strokeWidth="2" />
      <path d="M17 2l7 6-7 6" stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AgentDetectionFlowMockup({ accent }: { accent: string }) {
  return (
    <div className={`${BOX} flex flex-col gap-6 p-8`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#9a9a9a]">
          Detect, validate, generate
        </p>
        <span className="text-[12px] font-semibold" style={{ color: accent }}>
          Signal → validated Purchase Order
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:flex-nowrap sm:justify-between sm:gap-2">
        <FlowNode accent={accent} sub="CRM" label="Salesforce — order & account data" time="Continuous" />
        <Arrow accent={accent} />
        <FlowNode accent={accent} sub="AGT" label="AI agent, watching against its instructions" time="Real-time" />
        <Arrow accent={accent} />
        <FlowNode accent={accent} sub="!" label="Abnormal signal pushed to Arlanxeo" time="On trigger" />
        <Arrow accent={accent} />
        <FlowNode accent={accent} sub="VAL" label="Validated against S/4HANA or Oracle" time="Seconds" />
        <Arrow accent={accent} />
        <FlowNode accent={accent} sub="PO" label="Purchase Order generated" time="Auto" />
      </div>
    </div>
  );
}

export function AgentInstructionsTable({ accent }: { accent: string }) {
  const rules = [
    {
      signal: "Order volume change",
      threshold: "Drops more than 25% week-over-week",
      action: "Push to Arlanxeo → validate → generate replenishment PO",
    },
    {
      signal: "Account health score",
      threshold: "Falls below 60 / 100",
      action: "Push to Arlanxeo → validate against Oracle",
    },
    {
      signal: "Delivery delay pattern",
      threshold: "3+ late shipments in 30 days",
      action: "Push to Arlanxeo → validate against S/4HANA",
    },
    {
      signal: "Support ticket volume",
      threshold: "Spikes above 3× weekly average",
      action: "Push to Arlanxeo → flagged for review",
    },
  ];

  return (
    <div className={`${BOX} overflow-x-auto`}>
      <table className="w-full min-w-[620px] border-collapse text-left text-[13px]">
        <thead>
          <tr className="bg-[#f5f5f5]">
            <th className="px-5 py-3 font-semibold text-[#343434]">Signal the agent watches</th>
            <th className="px-5 py-3 font-semibold text-[#343434]">Instruction</th>
            <th className="px-5 py-3 font-semibold" style={{ color: accent }}>
              What happens next
            </th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule, i) => (
            <tr key={rule.signal} className={i !== rules.length - 1 ? "border-b border-[#ececec]" : ""}>
              <td className="px-5 py-4 font-medium text-[#343434]">{rule.signal}</td>
              <td className="px-5 py-4 text-[#8a8a8a]">{rule.threshold}</td>
              <td className="px-5 py-4 font-semibold" style={{ color: accent }}>
                {rule.action}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SystemFlowMockup({ accent }: { accent: string }) {
  return (
    <div className={`${BOX} flex flex-col gap-6 p-8`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#9a9a9a]">
          A document&apos;s journey, timestamped
        </p>
        <span className="text-[12px] font-semibold" style={{ color: accent }}>
          Upload to Ask-ready: ~5 seconds
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:flex-nowrap sm:justify-between sm:gap-2">
        <FlowNode accent={accent} sub="DOC" label="Document lands — SAP or non-SAP" time="T + 0s" />
        <Arrow accent={accent} />
        <FlowNode accent={accent} sub="IDX" label="Indexed & linked to its order" time="T + 5s" />
        <Arrow accent={accent} />
        <FlowNode accent={accent} sub="AI" label="Available to Ask, grounded per order" time="Instant" />
        <Arrow accent={accent} />
        <FlowNode accent={accent} sub="CHK" label="Checked against the assigned rule" time="On save" />
        <Arrow accent={accent} />
        <FlowNode accent={accent} sub="RDY" label="Shown in Readiness, by RBAC role" time="Live" />
      </div>
    </div>
  );
}

export function PortalDashboardMockup({ accent }: { accent: string }) {
  const rows = [
    { ref: "4500001001", sub: "Acme Manufacturing GmbH", status: "Ready" },
    { ref: "PO-3001", sub: "Raw materials · Q3 replenishment", status: "Missing 1" },
    { ref: "PO-3003", sub: "Spare parts · line 4", status: "Missing 1" },
  ];

  return (
    <div className={`${BOX} flex flex-col gap-6 p-8`}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ececec] pb-5">
        <p className="text-[16px] font-semibold text-[#343434]">Readiness — Overview</p>
        <span
          className="rounded-full px-3 py-[6px] text-[12px] font-semibold text-white"
          style={{ backgroundColor: accent }}
        >
          Role: Ops Lead (RBAC)
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { label: "Tracked orders", value: "7" },
          { label: "Ready", value: "4" },
          { label: "Exceptions", value: "3" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-[8px] bg-[#f7f7f7] p-4">
            <p className="text-[24px] font-bold text-[#343434]">{stat.value}</p>
            <p className="text-[12px] font-medium text-[#8a8a8a]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {rows.map((row) => (
          <div
            key={row.ref}
            className="flex flex-col gap-1 rounded-[8px] border border-[#ececec] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-[14px] font-semibold text-[#343434]">{row.ref}</p>
              <p className="text-[12px] text-[#8a8a8a]">{row.sub}</p>
            </div>
            <span
              className="w-fit rounded-full px-3 py-[4px] text-[11px] font-semibold"
              style={
                row.status === "Ready"
                  ? { backgroundColor: "#e6f6ea", color: "#1f8a4c" }
                  : { backgroundColor: "#fdf1dc", color: "#b8860b" }
              }
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImpactStatsStrip({ accent }: { accent: string }) {
  const stats = [
    { value: "1,000+", label: "Documents unified per portal" },
    { value: "3", label: "Source systems, one order view" },
    { value: "100%", label: "Orders checked against a rule" },
    { value: "< 10s", label: "Median time to a grounded answer" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className={`${BOX} flex flex-col gap-1 p-6`}>
          <p className="text-[28px] font-bold" style={{ color: accent }}>
            {stat.value}
          </p>
          <p className="text-[12px] font-medium leading-[16px] text-[#8a8a8a]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function BeforeAfterTable({ accent }: { accent: string }) {
  const rows = [
    { metric: "Detecting an abnormal Salesforce signal", before: "Noticed manually, often days late", after: "Flagged by the agent in real time" },
    { metric: "Acting on a flagged signal", before: "Taken at face value, or ignored", after: "Cross-validated against S/4HANA or Oracle first" },
    { metric: "Raising the resulting Purchase Order", before: "Re-keyed by hand after manual checks", after: "Generated automatically once validated" },
    { metric: "Confirming an order's documents are complete", before: "Manual check across SAP + inboxes", after: "Instant — the Readiness view" },
    { metric: "Answering 'what's the delivery date on this order?'", before: "Search across systems and email threads", after: "Seconds, via the grounded Ask assistant" },
    { metric: "Purchase Orders with unclear document status", before: "Common — no single view existed", after: "0 — every PO checked against its rule" },
    { metric: "Visibility into a multi-source PO's child orders", before: "Manual, opening each source in turn", after: "One AI-generated summary per child order" },
    { metric: "Changing a document requirement", before: "Re-explained per person, per team", after: "Update one rule — applies everywhere it's assigned" },
  ];

  return (
    <div className={`${BOX} overflow-x-auto`}>
      <table className="w-full min-w-[560px] border-collapse text-left text-[13px]">
        <thead>
          <tr className="bg-[#f5f5f5]">
            <th className="px-5 py-3 font-semibold text-[#343434]">Metric</th>
            <th className="px-5 py-3 font-semibold text-[#8a8a8a]">Before Arlanxeo</th>
            <th className="px-5 py-3 font-semibold" style={{ color: accent }}>
              After Arlanxeo
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.metric} className={i !== rows.length - 1 ? "border-b border-[#ececec]" : ""}>
              <td className="px-5 py-4 font-medium text-[#343434]">{row.metric}</td>
              <td className="px-5 py-4 text-[#8a8a8a]">{row.before}</td>
              <td className="px-5 py-4 font-semibold" style={{ color: accent }}>
                {row.after}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RBACMatrix({ accent }: { accent: string }) {
  const rows = [
    { role: "Sales Manager", docs: "Own accounts' orders only", ask: "Yes, own orders", readiness: "Sales view", rules: "—" },
    { role: "Ops Lead", docs: "All orders, read + upload", ask: "Yes, all orders", readiness: "Ops view", rules: "—" },
    { role: "Compliance Admin", docs: "All, read-only", ask: "Yes, all orders", readiness: "All views", rules: "View only" },
    { role: "Platform Admin", docs: "All, full access", ask: "Yes, all orders", readiness: "All views", rules: "Create & assign" },
  ];

  return (
    <div className={`${BOX} overflow-x-auto`}>
      <table className="w-full min-w-[640px] border-collapse text-left text-[13px]">
        <thead>
          <tr className="bg-[#f5f5f5]">
            <th className="px-5 py-3 font-semibold" style={{ color: accent }}>
              Role (RBAC)
            </th>
            <th className="px-5 py-3 font-semibold text-[#343434]">Order documents</th>
            <th className="px-5 py-3 font-semibold text-[#343434]">Ask (AI Q&amp;A)</th>
            <th className="px-5 py-3 font-semibold text-[#343434]">Readiness view</th>
            <th className="px-5 py-3 font-semibold text-[#343434]">Rule management</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.role} className={i !== rows.length - 1 ? "border-b border-[#ececec]" : ""}>
              <td className="px-5 py-4 font-semibold" style={{ color: accent }}>
                {row.role}
              </td>
              <td className="px-5 py-4 text-[#8a8a8a]">{row.docs}</td>
              <td className="px-5 py-4 text-[#8a8a8a]">{row.ask}</td>
              <td className="px-5 py-4 text-[#8a8a8a]">{row.readiness}</td>
              <td className="px-5 py-4 text-[#8a8a8a]">{row.rules}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DetectionTrendChart({ accent }: { accent: string }) {
  const points = [
    { label: "Month 1", value: "20%", y: 20 },
    { label: "Month 2", value: "55%", y: 55 },
    { label: "Month 3", value: "80%", y: 80 },
    { label: "Month 4", value: "100%", y: 98 },
  ];
  const w = 1100;
  const h = 160;
  const padX = 60;
  const padTop = 28;
  const plotW = w - padX * 2;
  const stepX = plotW / (points.length - 1);
  const coords = points.map((p, i) => ({ x: padX + i * stepX, y: padTop + h - (p.y / 100) * h }));
  const path = coords.map((c, i) => `${i === 0 ? "M" : "L"}${c.x},${c.y}`).join(" ");

  return (
    <div className={`${BOX} flex flex-col gap-6 p-8`}>
      <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#9a9a9a]">
        Share of orders covered by an assigned document rule, by month
      </p>
      <svg
        width="100%"
        viewBox={`0 0 ${w} ${padTop + h + 36}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={padX}
            x2={w - padX}
            y1={padTop + (h / 3) * i}
            y2={padTop + (h / 3) * i}
            stroke="#ececec"
            strokeWidth={1}
          />
        ))}
        <path d={path} fill="none" stroke={accent} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
        {coords.map((c, i) => (
          <g key={i}>
            <circle cx={c.x} cy={c.y} r={5} fill={accent} />
            <text x={c.x} y={c.y - 12} textAnchor="middle" fontSize="12" fontWeight={700} fill={accent}>
              {points[i].value}
            </text>
            <text x={c.x} y={padTop + h + 22} textAnchor="middle" fontSize="11" fill="#8a8a8a">
              {points[i].label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function DocumentIntelligenceMockup({ accent }: { accent: string }) {
  const docs = [
    { name: "so-1001-quality-cert.txt", type: "Other", source: "Non-SAP", system: "Vendor Portal" },
    { name: "so-1001-packing-slip.txt", type: "Other", source: "Non-SAP", system: "Email" },
    { name: "so-1001-invoice.txt", type: "Invoice", source: "Non-SAP", system: "Email" },
    { name: "so-1001-confirmation.txt", type: "Sales Order", source: "SAP", system: "S/4HANA" },
  ];
  const total = docs.length;
  const sap = docs.filter((d) => d.source === "SAP").length;
  const nonSap = total - sap;

  return (
    <div className={`${BOX} flex flex-col gap-6 p-8`}>
      <div>
        <p className="text-[16px] font-semibold text-[#343434]">4500001001</p>
        <p className="text-[13px] text-[#8a8a8a]">Acme Manufacturing GmbH</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-[8px] bg-[#f7f7f7] p-4">
          <p className="text-[24px] font-bold text-[#343434]">{total}</p>
          <p className="text-[12px] font-medium text-[#8a8a8a]">Total documents</p>
        </div>
        <div className="rounded-[8px] bg-[#f7f7f7] p-4">
          <p className="text-[24px] font-bold" style={{ color: accent }}>
            {sap}
          </p>
          <p className="text-[12px] font-medium text-[#8a8a8a]">From SAP / S4HANA</p>
        </div>
        <div className="rounded-[8px] bg-[#f7f7f7] p-4">
          <p className="text-[24px] font-bold text-[#343434]">{nonSap}</p>
          <p className="text-[12px] font-medium text-[#8a8a8a]">From non-SAP sources</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-left text-[12px]">
            <thead>
              <tr className="border-b border-[#ececec]">
                <th className="py-2 pr-3 font-semibold text-[#343434]">Document</th>
                <th className="py-2 pr-3 font-semibold text-[#343434]">Type</th>
                <th className="py-2 pr-3 font-semibold text-[#343434]">Source</th>
                <th className="py-2 pr-3 font-semibold text-[#343434]">System</th>
              </tr>
            </thead>
            <tbody>
              {docs.map((d, i) => (
                <tr key={d.name} className={i !== docs.length - 1 ? "border-b border-[#f3f3f3]" : ""}>
                  <td className="py-2.5 pr-3 font-medium text-[#343434]">{d.name}</td>
                  <td className="py-2.5 pr-3 text-[#8a8a8a]">{d.type}</td>
                  <td className="py-2.5 pr-3">
                    <span
                      className="rounded-full px-2 py-[2px] text-[10px] font-semibold"
                      style={
                        d.source === "SAP"
                          ? { backgroundColor: "#ede9fe", color: "#6d28d9" }
                          : { backgroundColor: "#e6f6ea", color: "#1f8a4c" }
                      }
                    >
                      {d.source}
                    </span>
                  </td>
                  <td className="py-2.5 pr-3 text-[#8a8a8a]">{d.system}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 rounded-[10px] border border-[#ececec] bg-[#fafafa] p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a9a9a]">
            Ask — grounded in this order&apos;s documents
          </p>
          <div className="flex justify-end">
            <span
              className="rounded-[10px] rounded-tr-none px-3 py-2 text-[12px] font-medium text-white"
              style={{ backgroundColor: accent }}
            >
              What is the delivery date?
            </span>
          </div>
          <div className="rounded-[10px] rounded-tl-none border border-[#ececec] bg-white p-3 text-[11px] leading-[17px] text-[#4a4a4a]">
            <p className="font-semibold text-[#343434]">From so-1001-confirmation.txt</p>
            <p className="mt-1">Order Number: 4500001001</p>
            <p>Customer: Acme Manufacturing GmbH</p>
            <p>Requested Delivery: 2026-07-15</p>
            <p>Line Items: 10× Industrial Coating Unit — EUR 1,250.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DocumentMetadataMockup({ accent }: { accent: string }) {
  const groups: { heading: string; rows: [string, ReactNode][] }[] = [
    {
      heading: "Belongs to",
      rows: [
        ["Document type", "Other"],
        ["Sales Order", <span key="so" style={{ color: accent }}>4500001001</span>],
        ["Customer", "Acme Manufacturing GmbH"],
      ],
    },
    {
      heading: "Identity",
      rows: [
        ["Document ID", "db6b13cf-d523-4007-8ced-b6643d239fe7"],
        ["Blob path", "sales_order/so-1001/db6b13cf…-quality-cert.txt"],
      ],
    },
    {
      heading: "Origin",
      rows: [
        [
          "Source",
          <span
            key="src"
            className="rounded-full px-2 py-[2px] text-[10px] font-semibold"
            style={{ backgroundColor: "#e6f6ea", color: "#1f8a4c" }}
          >
            Non-SAP
          </span>,
        ],
        ["Source system", "Vendor Portal"],
        ["Language", "English (EN)"],
      ],
    },
    {
      heading: "File",
      rows: [
        ["Content type", "text/plain"],
        ["Size", "187 B"],
        ["Uploaded", "16/09/2026, 11:49:55"],
      ],
    },
  ];

  return (
    <div className={`${BOX} flex flex-col gap-6 p-8`}>
      <div className="flex items-center gap-3 border-b border-[#ececec] pb-5">
        <span className="flex size-[32px] shrink-0 items-center justify-center rounded-[6px] bg-[#f5f5f5] text-[13px]">
          📄
        </span>
        <div>
          <p className="text-[14px] font-semibold text-[#343434]">so-1001-quality-cert.txt</p>
          <p className="text-[11px] text-[#8a8a8a]">Document metadata</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.heading} className="flex flex-col gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#9a9a9a]">
              {group.heading}
            </p>
            {group.rows.map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-3 border-b border-[#f3f3f3] py-2">
                <span className="text-[12px] text-[#8a8a8a]">{label}</span>
                <span className="text-right text-[12px] font-medium text-[#343434]">{value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 border-t border-[#ececec] pt-5">
        <span className="rounded-[8px] border border-[#d8d8d8] px-4 py-[8px] text-[12px] font-semibold text-[#5a5a5a]">
          Translate
        </span>
        <span
          className="rounded-[8px] px-4 py-[8px] text-[12px] font-semibold text-white"
          style={{ backgroundColor: accent }}
        >
          View / download original
        </span>
      </div>
    </div>
  );
}

export function POBundleMockup({ accent }: { accent: string }) {
  const orders = [
    { ref: "SO-CN-2291", source: "SAP · S/4HANA", insight: "On track — confirmed for delivery on Aug 14." },
    { ref: "SO-VP-0087", source: "Vendor Portal", insight: "Flagged — packing-slip quantity doesn't match PO line 2." },
    { ref: "SO-EM-1042", source: "Email (manual upload)", insight: "Missing invoice — automatic reminder sent to vendor." },
  ];

  return (
    <div className={`${BOX} flex flex-col gap-6 p-8`}>
      <div>
        <p className="text-[16px] font-semibold text-[#343434]">PO-3001 — Raw materials, Q3 replenishment</p>
        <p className="text-[13px] text-[#8a8a8a]">3 orders bundled from 3 different sources</p>
      </div>

      <div className="flex flex-col gap-3">
        {orders.map((o) => (
          <div
            key={o.ref}
            className="flex flex-col gap-2 rounded-[8px] border border-[#ececec] p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
          >
            <div className="flex shrink-0 items-center gap-3">
              <span className="text-[13px] font-semibold text-[#343434]">{o.ref}</span>
              <span className="w-fit rounded-full bg-[#f7f7f7] px-2 py-[3px] text-[10px] font-semibold text-[#8a8a8a]">
                {o.source}
              </span>
            </div>
            <p className="text-[12px] leading-[18px] text-[#4a4a4a] sm:text-right">
              <span className="font-semibold" style={{ color: accent }}>
                AI insight —{" "}
              </span>
              {o.insight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DocumentRuleMockup({ accent }: { accent: string }) {
  const required = ["PO Confirmation", "Invoice", "Inventory Sheet"];
  const optional = ["Quality Certificate"];
  const assignedTo = ["ACC-2001", "ACC-2002", "All Vendor Portal sources"];

  return (
    <div className={`${BOX} flex flex-col gap-6 p-8`}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ececec] pb-5">
        <div>
          <p className="text-[16px] font-semibold text-[#343434]">
            Workflow Rule — Purchase Order Standard Set
          </p>
          <p className="mt-1 text-[13px] text-[#8a8a8a]">
            Defined once, assigned to every matching Purchase Order
          </p>
        </div>
        <span
          className="rounded-full px-3 py-[6px] text-[12px] font-semibold text-white"
          style={{ backgroundColor: accent }}
        >
          Active
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#9a9a9a]">
            Required documents
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {required.map((doc) => (
              <div key={doc} className="flex items-center gap-2 text-[13px] text-[#343434]">
                <span
                  className="flex size-[16px] shrink-0 items-center justify-center rounded-full text-[10px] text-white"
                  style={{ backgroundColor: accent }}
                >
                  ✓
                </span>
                {doc}
              </div>
            ))}
            {optional.map((doc) => (
              <div key={doc} className="flex items-center gap-2 text-[13px] text-[#b8b8b8]">
                <span className="flex size-[16px] shrink-0 items-center justify-center rounded-full border border-[#d8d8d8] text-[10px]">
                  –
                </span>
                {doc} <span className="text-[10px]">(optional)</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#9a9a9a]">Assigned to</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {assignedTo.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-[5px] text-[11px] font-medium"
                style={{ backgroundColor: `${accent}14`, color: accent }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReadinessTable({ accent }: { accent: string }) {
  const rows = [
    { ref: "4500001001", sub: "Acme Manufacturing GmbH", type: "Sales Order", docs: ["Sales Order", "Invoice"], status: "Ready" },
    { ref: "4500001002", sub: "Northwind Traders Ltd", type: "Sales Order", docs: ["Sales Order", "Invoice"], status: "Ready" },
    { ref: "4500001003", sub: "Globex Industrial S.A.", type: "Sales Order", docs: ["Sales Order", "Invoice"], status: "Ready" },
    { ref: "PO-3001", sub: "Raw materials · Q3 replenishment · ACC-2001", type: "Purchase Order", docs: ["Purchase Order", "Invoice", "Inventory"], status: "Missing 1" },
    { ref: "PO-3002", sub: "Packaging components · ACC-2001", type: "Purchase Order", docs: ["Purchase Order", "Invoice", "Inventory"], status: "Ready" },
    { ref: "PO-3003", sub: "Spare parts - line 4 · ACC-2001", type: "Purchase Order", docs: ["Purchase Order", "Invoice", "Inventory"], status: "Missing 1" },
    { ref: "PO-3004", sub: "Warehouse equipment · ACC-2002", type: "Purchase Order", docs: ["Purchase Order", "Invoice", "Inventory"], status: "Missing 1" },
  ];
  const tracked = rows.length;
  const ready = rows.filter((r) => r.status === "Ready").length;
  const exceptions = tracked - ready;

  return (
    <div className={`${BOX} flex flex-col gap-6 p-8`}>
      <div>
        <p className="text-[16px] font-semibold text-[#343434]">Readiness</p>
        <p className="mt-1 text-[13px] text-[#8a8a8a]">
          Which Sales Orders and Purchase Orders have their required document set complete.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-[8px] bg-[#f7f7f7] p-4">
          <p className="text-[24px] font-bold text-[#343434]">{tracked}</p>
          <p className="text-[12px] font-medium text-[#8a8a8a]">Tracked orders</p>
        </div>
        <div className="rounded-[8px] bg-[#f7f7f7] p-4">
          <p className="text-[24px] font-bold" style={{ color: accent }}>
            {ready}
          </p>
          <p className="text-[12px] font-medium text-[#8a8a8a]">Ready</p>
        </div>
        <div className="rounded-[8px] bg-[#f7f7f7] p-4">
          <p className="text-[24px] font-bold text-[#b8860b]">{exceptions}</p>
          <p className="text-[12px] font-medium text-[#8a8a8a]">Exceptions</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left text-[13px]">
          <thead>
            <tr className="border-b border-[#ececec]">
              <th className="py-3 pr-4 font-semibold text-[#343434]">Reference</th>
              <th className="py-3 pr-4 font-semibold text-[#343434]">Type</th>
              <th className="py-3 pr-4 font-semibold text-[#343434]">Required documents</th>
              <th className="py-3 pr-4 font-semibold text-[#343434]">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.ref} className={i !== rows.length - 1 ? "border-b border-[#ececec]" : ""}>
                <td className="py-3 pr-4">
                  <p className="font-semibold text-[#343434]">{row.ref}</p>
                  <p className="text-[11px] text-[#8a8a8a]">{row.sub}</p>
                </td>
                <td className="py-3 pr-4 text-[#8a8a8a]">{row.type}</td>
                <td className="py-3 pr-4">
                  <div className="flex flex-wrap gap-1.5">
                    {row.docs.map((doc) => (
                      <span
                        key={doc}
                        className="rounded-full px-2 py-[3px] text-[11px] font-medium"
                        style={{ backgroundColor: `${accent}14`, color: accent }}
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3 pr-4">
                  <span
                    className="rounded-full px-2 py-[3px] text-[11px] font-semibold"
                    style={
                      row.status === "Ready"
                        ? { backgroundColor: "#e6f6ea", color: "#1f8a4c" }
                        : { backgroundColor: "#fdf1dc", color: "#b8860b" }
                    }
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
