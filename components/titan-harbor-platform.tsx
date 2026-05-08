"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Database,
  FileText,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Pause,
  Play,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";

type ChatMessage = {
  role: "ai" | "user";
  text: string;
};

type TheaterScene = {
  label: string;
  problem: string;
  output: string;
  metric: string;
  stage: string;
  cards: string[];
};

type Feature = [string, string, LucideIcon];

const navItems = [
  ["TitanOS", "#home"],
  ["Demo", "#demo"],
  ["Solutions", "#solutions"],
  ["Industries", "#industries"],
  ["Ventures", "#ventures"],
  ["Submit Idea", "#waitlist"],
  ["Contact", "#contact"],
];

const heroMetrics = [
  ["AI Systems Online", "24/7"],
  ["Tasks Routed Today", "186"],
  ["Customer Issues Flagged", "3"],
  ["Reports Generated", "14"],
  ["Revenue Signals Detected", "4"],
];

const painPoints = [
  ["Scattered communication", "Updates disappear across texts, email threads, chats, calls, and memory."],
  ["Missed follow-ups", "Important customer and internal actions go quiet until they become escalations."],
  ["Manual reporting", "Managers lose hours rebuilding what should already be visible."],
  ["Weak accountability", "Teams work hard, but ownership and completion status stay unclear."],
  ["Lost business memory", "Past decisions, issues, and context become impossible to find quickly."],
  ["Slow decision-making", "Leadership reacts late because operational signals arrive too slowly."],
];

const features: Feature[] = [
  ["AI Daily Briefing", "Creates a leadership-ready morning view of urgent issues, overdue work, KPI movement, and operational risk.", ClipboardCheck],
  ["AI Task Router", "Turns requests, complaints, and internal updates into assigned actions with clear ownership and priority.", Workflow],
  ["AI Report Generator", "Drafts daily, weekly, and department reports from operational activity instead of manual status chasing.", FileText],
  ["AI Business Memory", "Preserves decisions, customer history, issue patterns, documents, and follow-up context in one searchable layer.", Database],
  ["AI Customer Issue Tracker", "Flags complaints, negative sentiment, missed callbacks, and recurring service breakdowns before they escalate.", BellRing],
  ["AI KPI Monitor", "Tracks execution signals across tasks, customer issues, employee patterns, reporting, revenue, and workflow completion.", BarChart3],
  ["AI Workflow Automation", "Connects repetitive business actions into monitored workflows with status, routing, and completion visibility.", CheckCircle2],
  ["AI Internal Search", "Lets teams ask operational questions across documents, reports, conversations, and account history.", Search],
  ["AI Concierge", "Guides team members, customers, and operators to the correct workflow, form, answer, or escalation path.", Sparkles],
  ["AI Opportunity Scanner", "Finds missed quotes, inactive customers, upsell gaps, and follow-up opportunities hidden in daily activity.", Target],
];

const demoStats = [
  ["Customer complaints need follow-up", "3"],
  ["Tasks overdue", "7"],
  ["Employees trending late", "2"],
  ["Reports generated this week", "14"],
  ["Workflow completion", "92%"],
  ["Revenue opportunities detected", "4"],
];

const demoTabs = {
  Today: [
    "Morning execution brief generated at 7:15 AM.",
    "Three urgent customer issues need leadership visibility.",
    "Seven overdue tasks were routed to department owners.",
  ],
  Operations: [
    "Maintenance issue assigned to operations lead.",
    "Two recurring workflow gaps detected in opening procedures.",
    "End-of-day report scheduled for 5:30 PM.",
  ],
  Customers: [
    "Negative review detected and summarized.",
    "Two missed callbacks escalated to customer success.",
    "Follow-up response drafted for approval.",
  ],
  Employees: [
    "Two employees trending late this week.",
    "Incomplete task pattern found across Monday openings.",
    "Accountability notes prepared for manager review.",
  ],
  Revenue: [
    "Four inactive customers are ready for reactivation.",
    "Two quotes are pending follow-up.",
    "Upsell opportunity found in recurring service account.",
  ],
  Reports: [
    "Daily operations report ready.",
    "Customer issue summary generated.",
    "Weekly leadership briefing draft available.",
  ],
};

const promptResponses: Record<string, string> = {
  "What is broken today?":
    "TitanOS found 3 customer issues, 7 overdue tasks, and 2 recurring opening procedure gaps. The highest risk is a missed customer callback that has already been routed for escalation.",
  "Summarize this week's customer issues.":
    "This week shows 11 customer issues. The pattern is delayed callbacks and unclear handoffs after service completion. TitanOS recommends a same-day follow-up workflow and manager review on Friday.",
  "Which tasks are overdue?":
    "Seven tasks are overdue. Three are customer-facing, two are operations tasks, and two are internal reporting items. Owners have been assigned and the leadership summary is ready.",
  "Create my end-of-day report.":
    "End-of-day report drafted: operational risks, completed work, unresolved issues, late trends, revenue opportunities, and next-day priorities are ready for leadership review.",
  "What should leadership know right now?":
    "Leadership should review one customer escalation, two employee punctuality trends, and four revenue follow-up opportunities. Workflow completion remains strong at 92%.",
};

const theaterScenes: TheaterScene[] = [
  {
    label: "Morning Briefing",
    problem: "Emails, tasks, schedules, and KPIs are scattered before the day starts.",
    output: "3 urgent issues detected. 7 overdue tasks. 2 customer complaints need follow-up.",
    metric: "7:15 AM brief ready",
    stage: "Scanning business activity",
    cards: ["Email scan", "Task audit", "KPI review"],
  },
  {
    label: "Task Routing",
    problem: "Work stalls when nobody knows who owns the next action.",
    output: "Maintenance issue routed to operations. Customer callback assigned. End-of-day report scheduled.",
    metric: "3 workflows assigned",
    stage: "Routing work",
    cards: ["Operations", "Customer success", "Leadership"],
  },
  {
    label: "Customer Issue Detection",
    problem: "Complaints and negative reviews become expensive when leaders see them late.",
    output: "High-priority customer issue found. Drafting response and escalation summary.",
    metric: "Escalation detected",
    stage: "Flagging issues",
    cards: ["Complaint", "Review", "Missed callback"],
  },
  {
    label: "Employee Accountability",
    problem: "Performance patterns stay hidden inside schedules and incomplete tasks.",
    output: "2 employees trending late this week. Pattern detected across Monday openings.",
    metric: "2 trends flagged",
    stage: "Monitoring accountability",
    cards: ["Attendance", "Open tasks", "Recurring gaps"],
  },
  {
    label: "Report Generation",
    problem: "Managers lose time manually rebuilding reports from disconnected updates.",
    output: "Daily operations report generated and ready to send.",
    metric: "Report drafted",
    stage: "Drafting reports",
    cards: ["Risks", "Wins", "Next actions"],
  },
  {
    label: "Business Memory Search",
    problem: "Teams forget prior context and repeat the same investigation work.",
    output: "What happened with this customer last month? Prior issue, notes, manager action, and follow-up history found.",
    metric: "Context retrieved",
    stage: "Remembering context",
    cards: ["Customer history", "Past notes", "Follow-up log"],
  },
  {
    label: "Revenue Opportunity Scanner",
    problem: "Quotes, dormant accounts, and upsells are missed during daily pressure.",
    output: "4 revenue opportunities found this week.",
    metric: "4 opportunities",
    stage: "Finding revenue",
    cards: ["Missed quote", "Dormant account", "Upsell gap"],
  },
];

const impactCards = [
  "Faster issue detection",
  "Improved workflow accountability",
  "Reduced reporting time",
  "Better leadership visibility",
  "Fewer missed follow-ups",
  "Faster operational response",
  "More consistent execution",
  "Centralized business intelligence",
];

const issuePreventionSteps = [
  "Customer complaint detected",
  "TitanOS flags it immediately",
  "Task routed automatically",
  "Response drafted",
  "Leadership escalated",
  "Follow-up marked complete",
];

const industries = [
  "Logistics",
  "Cleaning companies",
  "Field services",
  "Dealerships",
  "Contractors",
  "Warehouses",
  "Sales teams",
  "Property services",
  "Local service businesses",
  "Multi-location operators",
];

const integrations = [
  "Gmail",
  "Outlook",
  "Slack",
  "Microsoft Teams",
  "Google Drive",
  "Excel",
  "QuickBooks",
  "CRM systems",
  "Scheduling tools",
  "GPS / routing platforms",
];

const pricing = [
  [
    "Starter Intelligence",
    "For small businesses that need AI reporting, task tracking, and daily summaries.",
  ],
  [
    "Growth Command",
    "For teams that need workflows, accountability, customer tracking, and business memory.",
  ],
  [
    "Enterprise Infrastructure",
    "For custom AI systems, integrations, dashboards, and private operational intelligence.",
  ],
];

export function TitanHarborPlatform() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<keyof typeof demoTabs>("Today");
  const [promptResponse, setPromptResponse] = useState(promptResponses["What is broken today?"]);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "ai",
      text: "Welcome to TitanOS. Tell me what is slowing down your operations, and I will route the issue into the right execution path.",
    },
  ]);

  function sendMessage() {
    const clean = chatInput.trim();
    if (!clean) return;

    setMessages((current) => [...current, { role: "user", text: clean }]);
    setChatInput("");

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          role: "ai",
          text: "TitanOS would classify this as an operational signal, identify the likely owner, draft the next action, and add it to the business memory layer.",
        },
      ]);
    }, 420);
  }

  function handleWaitlistSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setWaitlistStatus("Your TitanOS demo request is ready for review.");
    event.currentTarget.reset();
    // Backend integration point: send the validated payload to Supabase, Airtable, HubSpot, or a private CRM workflow.
  }

  return (
    <main id="home" className="relative min-h-screen overflow-hidden bg-black text-white">
      <CinematicBackground />
      <div className="noise" />

      <nav className="fixed left-4 right-4 top-4 z-40 flex items-center justify-between rounded-2xl border border-white/10 bg-[#05070a]/72 px-4 py-4 shadow-[0_30px_100px_rgba(0,0,0,.52)] backdrop-blur-2xl md:left-6 md:right-6 md:top-6 md:px-7">
        <a href="#home" className="min-w-0" aria-label="Titan Harbor Holdings home">
          <div className="truncate text-sm font-black tracking-[0.2em] md:text-lg md:tracking-[0.32em]">
            TITAN HARBOR HOLDINGS
          </div>
          <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/48">
            TitanOS Execution Infrastructure
          </div>
        </a>

        <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-white/68 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <a
          href="#waitlist"
          className="hidden rounded-xl border border-[#d8c38a]/30 bg-[#d8c38a]/12 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f4dfaa] transition hover:bg-[#d8c38a]/20 md:inline-flex"
        >
          Request Demo
        </a>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-xl border border-white/10 bg-white/[.04] p-2 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          className="fixed left-4 right-4 top-24 z-40 rounded-2xl border border-white/10 bg-[#05070a]/92 p-5 text-sm uppercase tracking-[0.18em] text-white/75 shadow-2xl backdrop-blur-2xl lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="block py-2"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}

      <section className="relative z-20 flex min-h-screen items-center px-5 pb-16 pt-32 md:px-8 md:pt-36">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex rounded-lg border border-[#8fb6d8]/20 bg-black/50 px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-[#d7e9ff] backdrop-blur-xl">
                AI infrastructure for operational execution
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-normal text-white md:text-7xl">
                TitanOS: The AI Operating System For Business Execution.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                Unify tasks, reports, workflows, customer issues, employee
                accountability, documents, KPIs, and operational intelligence
                inside one private AI command layer.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#waitlist"
                  className="group inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-black shadow-[0_0_52px_rgba(255,255,255,.18)] transition hover:bg-[#f2d997]"
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/45 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl transition hover:border-[#8fb6d8]/40 hover:bg-white/10"
                >
                  Try Live Demo
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
                {["Reduce friction", "Improve execution", "See problems sooner"].map((tagline) => (
                  <div
                    key={tagline}
                    className="rounded-xl border border-white/10 bg-black/42 px-4 py-3 text-xs uppercase tracking-[0.16em] text-white/62 backdrop-blur-xl"
                  >
                    {tagline}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <HeroCommandPanel />
          </Reveal>
        </div>
      </section>

      <TitanOSTheater />

      <section className="relative z-20 px-5 py-20 md:px-8" id="solutions">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Execution failure detection"
            title="Execution breaks down long before businesses realize it."
            text="Most companies do not fail because people are not working hard. They fail because communication becomes fragmented, issues go unnoticed, follow-ups are missed, reporting is delayed, and leadership loses visibility into what is actually happening day to day. TitanOS continuously monitors operational activity, flags issues early, routes tasks intelligently, and creates a centralized operational memory layer so companies can execute faster with fewer failures."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <GlassCard className="h-full p-6">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#8fb6d8]/18 bg-[#8fb6d8]/8">
                    <span className="text-sm font-bold text-[#d8c38a]">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-white/58">{text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Operational impact"
            title="Built to reduce friction across daily operations."
            text="Visibility creates accountability. TitanOS is designed to expose blind spots, route work, reduce manual management overhead, and help leaders respond before small issues become expensive breakdowns."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactCards.map((impact, index) => (
              <Reveal key={impact} delay={index * 0.035}>
                <div className="rounded-2xl border border-white/10 bg-[#05070a]/60 p-5 shadow-[0_24px_80px_rgba(0,0,0,.28)] backdrop-blur-xl">
                  <CheckCircle2 className="mb-5 h-5 w-5 text-[#d8c38a]" />
                  <p className="text-base font-semibold text-white">{impact}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Product features"
            title="One AI command layer for the entire business."
            text="TitanOS is not just an assistant. It is execution infrastructure for issue detection, workflow accountability, leadership visibility, business memory, and operational coordination."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {features.map(([title, text, Icon], index) => (
              <Reveal key={title as string} delay={index * 0.03}>
                <GlassCard className="group h-full p-5 transition duration-300 hover:-translate-y-1 hover:border-[#8fb6d8]/35">
                  {typeof Icon !== "string" && <Icon className="mb-6 h-6 w-6 text-[#a9c7e5]" />}
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/56">{text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Interactive product demo"
            title="Ask TitanOS what leadership needs to know."
            text="Use the simulated dashboard to see how TitanOS converts operational activity into priorities, accountability, issue summaries, and daily business execution."
          />
          <LiveTitanOSDemo
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            promptResponse={promptResponse}
            setPromptResponse={setPromptResponse}
          />
        </div>
      </section>

      <section className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Issue prevention"
            title="From issue detection to resolution automatically."
            text="Every business has blind spots. TitanOS exposes them by detecting operational friction early, assigning the next action, drafting response work, and keeping leadership informed."
          />
          <IssuePreventionDemo />
        </div>
      </section>

      <section className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <GlassCard className="p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d8c38a]/80">Business memory</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
                Your company should not forget what happened yesterday.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/64">
                TitanOS creates an operational memory layer across decisions,
                customer issues, employee patterns, recurring problems, reports,
                and documents so leaders can find context instantly and act faster.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {["Prior issue found", "Manager note recovered", "Follow-up history attached", "Leadership summary drafted"].map((item, index) => (
                <motion.div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#05070a]/68 p-5 backdrop-blur-xl"
                  animate={{ x: [0, 8, 0], opacity: [0.82, 1, 0.82] }}
                  transition={{ duration: 4.6, repeat: Infinity, delay: index * 0.35 }}
                >
                  <div className="flex items-center gap-4">
                    <Database className="h-5 w-5 text-[#8fb6d8]" />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="industries" className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Industries"
            title="Built for businesses that run on execution."
            text="TitanOS is made for operators who need follow-through, visibility, customer issue reduction, and faster coordination across real work."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry, index) => (
              <Reveal key={industry} delay={index * 0.025}>
                <div className="rounded-2xl border border-white/10 bg-black/45 px-5 py-5 text-sm font-semibold text-white/80 backdrop-blur-xl">
                  {industry}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Integration-ready architecture"
            title="Connect the tools your business already uses."
            text="TitanOS is designed to sit above the tools your team already touches, turning fragmented activity into one operational command layer."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {integrations.map((integration, index) => (
              <Reveal key={integration} delay={index * 0.025}>
                <div className="rounded-2xl border border-white/10 bg-[#05070a]/62 p-5 text-center backdrop-blur-xl">
                  <Lock className="mx-auto mb-4 h-4 w-4 text-[#d8c38a]" />
                  <p className="text-sm font-semibold text-white/80">{integration}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="ventures" className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8fb6d8]">Founder story</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
                Built from real operational pressure.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/64">
                TitanOS was created from firsthand experience inside high-pressure
                business operations where leaders lose hours every week chasing
                updates, building reports, tracking accountability, and trying to
                understand what is actually happening across the business.
              </p>
              <div className="mt-7 rounded-2xl border border-[#d8c38a]/18 bg-[#d8c38a]/8 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[#d8c38a]/80">
                  Founded by Kevin Hunter
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Owner, Titan Harbor Holdings
                </p>
                <p className="mt-2 text-white/58">Started as an idea. Now building globally.</p>
              </div>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <TransformationPanel />
          </Reveal>
        </div>
      </section>

      <section className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Pricing preview"
            title="Execution infrastructure for every stage of operation."
            text="Exact pricing is private during the TitanOS MVP rollout. Join the waitlist or request a private demo to map the right command layer for your business."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {pricing.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.07}>
                <GlassCard className="flex h-full flex-col p-7">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#d8c38a]/78">
                    Tier 0{index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-white/58">{text}</p>
                  <a
                    href="#waitlist"
                    className="mt-7 inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
                  >
                    {index === 2 ? "Request Private Demo" : "Join Waitlist"}
                  </a>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-white/10 bg-[#05070a]/72 p-6 shadow-[0_35px_120px_rgba(0,0,0,.48)] backdrop-blur-2xl md:p-9 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8c38a]/80">TitanOS access</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
              Request a TitanOS Demo
            </h2>
            <p className="mt-5 leading-8 text-white/62">
              Tell us where execution is breaking down. Titan Harbor Holdings
              will use this intake to understand your workflow blind spots,
              reporting pressure, and operational coordination needs.
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleWaitlistSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <InputField label="Name" name="name" required />
              <InputField label="Company" name="company" required />
            </div>
            <InputField label="Email" name="email" type="email" required />
            <InputField label="Industry" name="industry" required />
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-white/72">
                Biggest operational problem
              </span>
              <textarea
                name="problem"
                required
                className="min-h-32 w-full rounded-2xl border border-white/10 bg-black/42 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#8fb6d8]/55"
                placeholder="Example: missed follow-ups, manual reports, employee accountability, customer complaints..."
              />
            </label>
            <button
              type="submit"
              className="rounded-2xl bg-white px-7 py-4 font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#f2d997]"
            >
              Request TitanOS Demo
            </button>
            {waitlistStatus && <p className="text-sm text-emerald-300">{waitlistStatus}</p>}
          </form>
        </div>
      </section>

      <AIConcierge
        open={chatOpen}
        setOpen={setChatOpen}
        input={chatInput}
        setInput={setChatInput}
        messages={messages}
        sendMessage={sendMessage}
      />

      <footer id="contact" className="relative z-20 border-t border-white/10 bg-black/35 px-5 py-12 backdrop-blur-xl md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-black tracking-[0.25em]">TITAN HARBOR HOLDINGS</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/48">
              TitanOS: AI infrastructure for operational execution. Reduce
              friction. Improve execution. See problems sooner. Respond faster.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/55 md:text-right">
            <a href="mailto:info@titanharborholdings.com" className="text-[#d8e8ff]">
              info@titanharborholdings.com
            </a>
            <span>titanharborholdings.com</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function HeroCommandPanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-[#8fb6d8]/10 blur-3xl" />
      <GlassCard className="relative overflow-hidden p-4 md:p-6">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8fb6d8]">
              Private command layer
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">TitanOS Operations View</h2>
          </div>
          <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold text-emerald-200">
            Online
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {heroMetrics.map(([label, value], index) => (
            <motion.div
              key={label}
              className="rounded-2xl border border-white/10 bg-black/42 p-4"
              animate={{ opacity: [0.78, 1, 0.78] }}
              transition={{ duration: 4.2, repeat: Infinity, delay: index * 0.28 }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/44">{label}</p>
              <p className="mt-3 text-3xl font-black text-white">{value}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/42 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.22em] text-white/48">
              Execution signal stream
            </p>
            <BarChart3 className="h-4 w-4 text-[#d8c38a]" />
          </div>
          <div className="space-y-3">
            {["Customer escalation summarized", "Overdue tasks routed", "Revenue follow-up detected"].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#8fb6d8] shadow-[0_0_18px_rgba(143,182,216,.72)]" />
                <span className="text-sm text-white/70">{item}</span>
                <motion.span
                  className="ml-auto h-px w-20 bg-gradient-to-r from-[#8fb6d8] to-transparent"
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.35 }}
                />
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function TitanOSTheater() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const scene = theaterScenes[sceneIndex];

  useEffect(() => {
    if (paused) return;
    const interval = window.setInterval(() => {
      setSceneIndex((current) => (current + 1) % theaterScenes.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <section className="relative z-20 px-5 py-20 md:px-8" aria-label="TitanOS Live Automation Theater">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="TitanOS Live Automation Theater"
            title="Watch TitanOS Work Before You Ever Log In."
            text="A continuous AI operations demo showing how TitanOS scans, routes, remembers, reports, and finds business opportunities automatically."
          />
          <button
            onClick={() => setPaused((value) => !value)}
            className="inline-flex w-fit items-center gap-3 rounded-xl border border-white/12 bg-white/[0.06] px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
            aria-label={paused ? "Play TitanOS automation demo" : "Pause TitanOS automation demo"}
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            {paused ? "Play" : "Pause"}
          </button>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {["Scans business activity", "Routes work", "Flags issues", "Drafts reports", "Remembers context", "Finds revenue"].map((label) => (
            <span key={label} className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs text-white/62 backdrop-blur-xl">
              {label}
            </span>
          ))}
        </div>

        <GlassCard className="overflow-hidden">
          <div className="grid lg:grid-cols-[0.32fr_0.68fr]">
            <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d8c38a]/80">Autoplay sequence</p>
              <div className="mt-5 space-y-3">
                {theaterScenes.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => setSceneIndex(index)}
                    className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                      index === sceneIndex
                        ? "border-[#8fb6d8]/45 bg-[#8fb6d8]/10 text-white"
                        : "border-white/10 bg-black/25 text-white/52 hover:text-white"
                    }`}
                  >
                    <span className="text-xs uppercase tracking-[0.18em]">0{index + 1}</span>
                    <span className="mt-1 block text-sm font-semibold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative min-h-[560px] overflow-hidden p-5 md:p-7">
              <motion.div
                key={`progress-${sceneIndex}-${paused}`}
                className="absolute left-0 top-0 h-1 bg-gradient-to-r from-[#8fb6d8] via-white to-[#d8c38a]"
                initial={{ width: "0%" }}
                animate={{ width: paused ? "18%" : "100%" }}
                transition={{ duration: paused ? 0.1 : 5.2, ease: "linear" }}
              />
              <motion.div
                key={scene.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="grid h-full gap-5 xl:grid-cols-[1fr_0.85fr]"
              >
                <div className="rounded-3xl border border-white/10 bg-black/38 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#8fb6d8]">{scene.stage}</p>
                      <h3 className="mt-2 text-3xl font-black text-white">{scene.label}</h3>
                    </div>
                    <motion.div
                      className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_22px_rgba(110,231,183,.9)]"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                  </div>
                  <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 leading-7 text-white/62">
                    <span className="font-semibold text-white">Problem: </span>
                    {scene.problem}
                  </p>
                  <div className="mt-5 rounded-2xl border border-[#8fb6d8]/18 bg-[#8fb6d8]/8 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#d8e8ff]/72">TitanOS output</p>
                    <TypeLine text={scene.output} />
                  </div>
                  <div className="relative mt-6 h-36 overflow-hidden rounded-2xl border border-white/10 bg-black/45">
                    <motion.div
                      className="absolute top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[#8fb6d8]/65 to-transparent"
                      animate={{ x: ["-40%", "40%", "-40%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute h-4 w-4 rounded-full border border-white bg-[#d8c38a]"
                      animate={{ left: ["8%", "82%", "28%", "68%"], top: ["24%", "42%", "70%", "32%"] }}
                      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 grid grid-cols-3 gap-3 p-4">
                      {scene.cards.map((card, index) => (
                        <motion.div
                          key={card}
                          className="flex items-end rounded-xl border border-white/10 bg-white/[0.04] p-3 text-xs font-semibold text-white/62"
                          animate={{ y: [0, index === 1 ? -10 : 6, 0], opacity: [0.55, 1, 0.55] }}
                          transition={{ duration: 3.4, repeat: Infinity, delay: index * 0.3 }}
                        >
                          {card}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-5">
                  <div className="rounded-3xl border border-white/10 bg-black/38 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Live metric</p>
                    <p className="mt-3 text-4xl font-black text-white">{scene.metric}</p>
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#8fb6d8] to-[#d8c38a]"
                        animate={{ width: ["36%", "84%", "56%"] }}
                        transition={{ duration: 4.2, repeat: Infinity }}
                      />
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/38 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Work queue</p>
                    <div className="mt-4 space-y-3">
                      {["Pending", "Assigned", "Complete"].map((status, index) => (
                        <motion.div
                          key={status}
                          className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                          animate={{ x: index === sceneIndex % 3 ? [0, 10, 0] : 0 }}
                          transition={{ duration: 2.4, repeat: Infinity }}
                        >
                          <span className="text-sm font-semibold text-white/72">{status}</span>
                          <span className="text-xs text-[#d8c38a]">{index === 2 ? "Verified" : "Routing"}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function LiveTitanOSDemo({
  activeTab,
  setActiveTab,
  promptResponse,
  setPromptResponse,
}: {
  activeTab: keyof typeof demoTabs;
  setActiveTab: (tab: keyof typeof demoTabs) => void;
  promptResponse: string;
  setPromptResponse: (response: string) => void;
}) {
  const tabs = Object.keys(demoTabs) as Array<keyof typeof demoTabs>;

  return (
    <GlassCard className="mt-12 overflow-hidden">
      <div className="grid lg:grid-cols-[0.62fr_0.38fr]">
        <div className="border-b border-white/10 p-5 md:p-7 lg:border-b-0 lg:border-r">
          <div className="mb-5 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] transition ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/[0.04] text-white/58 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {demoStats.map(([label, value], index) => (
              <motion.div
                key={label}
                className="rounded-2xl border border-white/10 bg-black/38 p-5"
                animate={{ opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.22 }}
              >
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="mt-2 text-sm leading-5 text-white/52">{label}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-white/10 bg-black/38 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[#8fb6d8]">{activeTab} signals</p>
            <div className="mt-4 space-y-3">
              {demoTabs[activeTab].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#d8c38a]" />
                  <p className="text-sm leading-6 text-white/68">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 md:p-7">
          <label className="block">
            <span className="mb-3 block text-sm font-semibold text-white/72">
              Ask TitanOS anything...
            </span>
            <div className="rounded-2xl border border-white/10 bg-black/45 px-4 py-4 text-white/40">
              Example prompts below
            </div>
          </label>
          <div className="mt-4 flex flex-col gap-2">
            {Object.keys(promptResponses).map((prompt) => (
              <button
                key={prompt}
                onClick={() => setPromptResponse(promptResponses[prompt])}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left text-sm text-white/64 transition hover:border-[#8fb6d8]/35 hover:text-white"
              >
                {prompt}
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-[#8fb6d8]/18 bg-[#8fb6d8]/8 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[#d8e8ff]/70">TitanOS response</p>
            <p className="mt-4 leading-7 text-white/72">{promptResponse}</p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function IssuePreventionDemo() {
  return (
    <GlassCard className="p-5 md:p-7">
      <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#d8c38a]/80">
        From issue detection to resolution automatically.
      </p>
      <div className="space-y-4">
        {issuePreventionSteps.map((step, index) => (
          <motion.div
            key={step}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/38 p-4"
            animate={{ borderColor: ["rgba(255,255,255,.10)", "rgba(143,182,216,.38)", "rgba(255,255,255,.10)"] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.32 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#8fb6d8]/24 bg-[#8fb6d8]/10 text-sm font-black text-white">
                {index + 1}
              </div>
              <p className="font-semibold text-white/78">{step}</p>
            </div>
            <motion.div
              className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#8fb6d8] to-[#d8c38a]"
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.32 }}
            />
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}

function TransformationPanel() {
  return (
    <GlassCard className="p-7 md:p-9">
      <p className="text-xs uppercase tracking-[0.28em] text-[#d8c38a]/80">
        From scattered operations to intelligent execution
      </p>
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold text-white">Before TitanOS</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/58">
            {["Reports built manually", "Follow-ups missed", "Issues buried in texts and emails", "Leaders react late", "No central memory"].map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-black/35 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">After TitanOS</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/68">
            {["Daily briefs generated automatically", "Issues routed instantly", "Leadership updates drafted by AI", "Patterns detected early", "Business knowledge searchable"].map((item) => (
              <li key={item} className="rounded-xl border border-[#8fb6d8]/18 bg-[#8fb6d8]/8 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GlassCard>
  );
}

function AIConcierge({
  open,
  setOpen,
  input,
  setInput,
  messages,
  sendMessage,
}: {
  open: boolean;
  setOpen: (open: boolean | ((value: boolean) => boolean)) => void;
  input: string;
  setInput: (input: string) => void;
  messages: ChatMessage[];
  sendMessage: () => void;
}) {
  return (
    <>
      {open && (
        <motion.div
          className="fixed bottom-24 right-5 z-50 w-[370px] max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-3xl border border-[#8fb6d8]/22 bg-[#05070a]/92 shadow-[0_0_70px_rgba(143,182,216,.2)] backdrop-blur-2xl"
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[.04] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#8fb6d8]/25 bg-[#8fb6d8]/10">
                <MessageCircle className="h-5 w-5 text-[#d8e8ff]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Ask TitanOS</div>
                <div className="text-xs text-white/45">Operational intake concierge</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-xl p-2 text-white/60 hover:bg-white/10"
              aria-label="Close TitanOS concierge"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="h-72 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-2xl p-3 text-sm leading-6 ${
                  message.role === "ai"
                    ? "bg-white/10 text-white"
                    : "ml-8 bg-[#8fb6d8]/14 text-[#e8f3ff]"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && sendMessage()}
              placeholder="Describe an operational issue..."
              className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#8fb6d8]/55"
            />
            <button
              onClick={sendMessage}
              className="rounded-2xl bg-white p-2 text-black transition hover:bg-[#f2d997]"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}

      <button
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-5 right-5 z-50 rounded-2xl border border-[#8fb6d8]/22 bg-[#05070a]/75 px-5 py-4 text-left backdrop-blur-xl shadow-[0_0_35px_rgba(143,182,216,.22)]"
        aria-label="Open TitanOS concierge"
      >
        <div className="flex items-center gap-3">
          <MessageCircle className="h-5 w-5 text-[#d8e8ff]" />
          <div>
            <div className="text-sm font-bold">Ask TitanOS</div>
            <div className="text-xs text-white/45">Route an issue</div>
          </div>
        </div>
      </button>
    </>
  );
}

function InputField({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white/72">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-black/42 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#8fb6d8]/55"
      />
    </label>
  );
}

function TypeLine({ text }: { text: string }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setDisplay("");
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setDisplay(text.slice(0, index));
      if (index >= text.length) window.clearInterval(interval);
    }, 18);
    return () => window.clearInterval(interval);
  }, [text]);

  return (
    <p className="mt-4 min-h-[88px] text-xl font-semibold leading-8 text-white">
      {display}
      <motion.span
        className="ml-1 inline-block h-5 w-2 bg-[#d8c38a]"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </p>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <Reveal>
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8fb6d8]">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">{title}</h2>
        <p className="mt-5 text-lg leading-8 text-white/62">{text}</p>
      </div>
    </Reveal>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-white/10 bg-[#05070a]/62 shadow-[0_30px_110px_rgba(0,0,0,.42)] backdrop-blur-2xl ${className}`}
      style={{ borderRadius: "28px" }}
    >
      {children}
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CinematicBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const lightPoints = useMemo(
    () =>
      Array.from({ length: 72 }, (_, index) => ({
        left: (index * 17) % 100,
        top: 18 + ((index * 29) % 58),
        delay: index * 0.07,
        gold: index % 5 === 0,
      })),
    [],
  );

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 20,
        y: (event.clientY / window.innerHeight - 0.5) * 12,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">
      <div className="absolute inset-0 animate-[titan-drift_28s_ease-in-out_infinite]">
        <motion.div
          className="absolute -inset-[7%]"
          style={{ x: mouse.x * -0.38, y: mouse.y * -0.18 }}
        >
          <Image
            src="/images/titan-harbor-rendered-houston-skyline.png"
            alt="Rendered Houston-inspired skyline at night"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-88"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute -inset-[9%] opacity-28 mix-blend-screen"
        style={{ x: mouse.x * 0.18, y: mouse.y * 0.1 }}
        animate={{ opacity: [0.16, 0.3, 0.16] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/titan-harbor-rendered-houston-skyline.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center blur-[1px]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(143,182,216,.20),transparent_34%),radial-gradient(circle_at_80%_36%,rgba(216,195,138,.13),transparent_28%),linear-gradient(to_bottom,rgba(0,0,0,.06)_0%,rgba(2,4,10,.18)_48%,rgba(0,0,0,.82)_100%)]" />

      <div className="absolute bottom-[17vh] right-[5vw] h-[16vh] w-[34vw] min-w-[250px] max-w-[700px] opacity-40 mix-blend-screen">
        <div className="absolute inset-x-0 top-[10%] h-[4px] rounded-full bg-[#b84a4a] shadow-[0_0_26px_rgba(184,74,74,.72)]" />
        <div className="absolute inset-x-[8%] top-[32%] h-[2px] rounded-full bg-[#b84a4a]/90 shadow-[0_0_18px_rgba(184,74,74,.65)]" />
        <div className="absolute inset-0 rounded-t-[2.5rem] border border-[#b84a4a]/22" />
      </div>

      <div className="absolute inset-0 opacity-70 mix-blend-screen">
        {lightPoints.map((light, index) => (
          <span
            key={index}
            className={`city-window absolute h-[3px] w-[10px] rounded-full ${
              light.gold ? "bg-[#d8c38a]" : "bg-[#8fb6d8]"
            } shadow-[0_0_14px_currentColor]`}
            style={{ left: `${light.left}%`, top: `${light.top}%`, animationDelay: `${light.delay}s` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-35">
        {[20, 38, 56, 74].map((top, index) => (
          <div
            key={top}
            className="absolute h-px w-[46vw] animate-[titan-dataStream_11s_linear_infinite] bg-gradient-to-r from-transparent via-[#8fb6d8]/55 to-transparent"
            style={{ top: `${top}%`, left: `${index % 2 === 0 ? -25 : 70}%`, animationDelay: `${index * 1.3}s` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 animate-[titan-fog_22s_linear_infinite] bg-[radial-gradient(ellipse_at_30%_58%,rgba(148,163,184,.18),transparent_35%),radial-gradient(ellipse_at_70%_45%,rgba(143,182,216,.11),transparent_30%)] blur-2xl" />

      <div className="absolute inset-0 opacity-[0.18]">
        {Array.from({ length: 42 }).map((_, index) => (
          <div
            key={index}
            className="absolute h-[140px] w-px animate-[titan-rain_3.6s_linear_infinite] bg-gradient-to-b from-transparent via-white/30 to-transparent"
            style={{
              left: `${(index * 7.3) % 100}%`,
              top: `${(index * 13.1) % 100}%`,
              animationDelay: `${index * 0.12}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-[14vh] left-0 h-[2px] w-[20vw] animate-[titan-traffic_9s_linear_infinite] bg-gradient-to-r from-transparent via-[#d8c38a] to-transparent shadow-[0_0_18px_rgba(216,195,138,.65)]" />
      <div className="absolute bottom-[18vh] left-0 h-[2px] w-[24vw] animate-[titan-traffic_12s_linear_infinite] bg-gradient-to-r from-transparent via-[#8fb6d8] to-transparent shadow-[0_0_18px_rgba(143,182,216,.65)]" />

      <div className="absolute inset-y-0 left-0 w-[35vw] animate-[titan-lightSweep_14s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/8 to-transparent blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/66 via-black/20 to-black/34" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/28 to-black/38" />
    </div>
  );
}
