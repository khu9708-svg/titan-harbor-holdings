"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Database,
  FileText,
  Lightbulb,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";

type Card = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type ChatMessage = {
  role: "ai" | "user";
  text: string;
};

const navItems = [
  ["Company", "#company"],
  ["Investment Focus", "#focus"],
  ["AI Ideas", "#ideas"],
  ["Ecosystem", "#ecosystem"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

const focusAreas: Card[] = [
  {
    title: "AI Software Ideas",
    text: "We evaluate AI tools, automation platforms, vertical software, internal operating systems, and business productivity concepts.",
    icon: Sparkles,
  },
  {
    title: "Workflow Automation",
    text: "We look for businesses and ideas that reduce manual work, improve execution, and turn repeated processes into scalable systems.",
    icon: Workflow,
  },
  {
    title: "Digital Infrastructure",
    text: "We build websites, funnels, dashboards, intake systems, CRM flows, and data layers that help AI ideas become real products.",
    icon: Database,
  },
  {
    title: "Local Service Technology",
    text: "We explore AI-enabled ideas for cleaning, logistics, mobility, field services, property services, and other execution-heavy markets.",
    icon: Building2,
  },
  {
    title: "Affiliate & Digital Products",
    text: "We research niche markets, digital offers, comparison engines, content systems, and AI-assisted acquisition channels.",
    icon: Target,
  },
  {
    title: "Business Intelligence",
    text: "We study opportunities where AI can surface signals, monitor operations, organize knowledge, and help leaders make faster decisions.",
    icon: BarChart3,
  },
];

const ecosystem = [
  "Titan Harbor AI",
  "Titan Harbor Automation",
  "Titan Harbor Digital",
  "Titan Harbor Ventures",
  "Titan Harbor Media",
  "Titan Harbor Investments",
  "Prestige Clean Co.",
  "Titan Harbor Mobility",
  "Titan Harbor Consumer Solutions",
];

const process = [
  ["Discover", "Review ideas, markets, pain points, operators, software concepts, and AI automation opportunities."],
  ["Validate", "Study demand, competition, workflow value, technical feasibility, and realistic paths to launch."],
  ["Build", "Create brand systems, landing pages, dashboards, intake flows, AI workflows, and MVP infrastructure."],
  ["Automate", "Connect forms, CRM systems, email, scheduling, reporting, payments, follow-up, and business intelligence."],
  ["Scale", "Improve conversion, operations, content, partnerships, analytics, and repeatable growth systems."],
];

const trust = [
  "Private idea intake",
  "No guaranteed investment returns",
  "Structured review process",
  "AI-assisted market research",
  "Real-world execution focus",
  "Founder-led evaluation",
];

export function TitanHarborPlatform() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "ai",
      text: "Welcome to Titan Harbor Holdings. Tell me the AI idea, business problem, or opportunity you want reviewed.",
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
          text: "Received. Titan Harbor would classify the idea, summarize the opportunity, identify the likely business model, and prepare it for review.",
        },
      ]);
    }, 450);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
    // Backend integration point: send validated idea submissions to Supabase, Airtable, HubSpot, or a private CRM pipeline.
  }

  return (
    <main id="company" className="relative min-h-screen overflow-hidden bg-black text-white">
      <CinematicBackground />
      <div className="noise" />

      <nav className="fixed left-4 right-4 top-4 z-40 flex items-center justify-between rounded-2xl border border-white/10 bg-[#05070a]/74 px-4 py-4 shadow-[0_30px_100px_rgba(0,0,0,.52)] backdrop-blur-2xl md:left-6 md:right-6 md:top-6 md:px-7">
        <a href="#company" className="min-w-0" aria-label="Titan Harbor Holdings home">
          <div className="truncate text-sm font-black tracking-[0.18em] md:text-lg md:tracking-[0.28em]">
            TITAN HARBOR HOLDINGS
          </div>
          <div className="mt-1 hidden text-xs uppercase tracking-[0.16em] text-white/48 sm:block">
            AI ideas. Venture systems. Real execution.
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
          href="#ideas"
          className="hidden rounded-xl border border-[#d8c38a]/30 bg-[#d8c38a]/12 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f4dfaa] transition hover:bg-[#d8c38a]/20 md:inline-flex"
        >
          Submit AI Idea
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
          className="fixed left-4 right-4 top-24 z-40 rounded-2xl border border-white/10 bg-[#05070a]/94 p-5 text-sm uppercase tracking-[0.16em] text-white/75 shadow-2xl backdrop-blur-2xl lg:hidden"
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
                AI Holding Company | Houston Built | Execution Focused
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-normal text-white md:text-7xl">
                We Invest In AI Ideas And Build Them Into Real Businesses.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                Titan Harbor Holdings is an AI-powered holding company focused
                on discovering, building, automating, and scaling practical AI
                business ideas across software, automation, digital products,
                local services, and venture infrastructure.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#ideas"
                  className="group inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-black shadow-[0_0_52px_rgba(255,255,255,.18)] transition hover:bg-[#f2d997]"
                >
                  Submit An AI Idea
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#focus"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/45 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl transition hover:border-[#8fb6d8]/40 hover:bg-white/10"
                >
                  View Investment Focus
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
                {["AI ideas", "Automated growth", "Real execution"].map((tagline) => (
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
            <InvestorCommandPanel />
          </Reveal>
        </div>
      </section>

      <section id="focus" className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Investment focus"
            title="Practical AI ideas with real business utility."
            text="We are interested in AI concepts that solve specific problems, reduce manual work, improve customer experience, organize information, create useful automation, or open new revenue channels."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={index * 0.04}>
                  <GlassCard className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8fb6d8]/35">
                    <Icon className="mb-6 h-6 w-6 text-[#a9c7e5]" />
                    <h3 className="text-xl font-bold text-white">{area.title}</h3>
                    <p className="mt-4 leading-7 text-white/58">{area.text}</p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <SectionHeader
            eyebrow="Holding company thesis"
            title="Modern companies need more than ideas. They need intelligent infrastructure."
            text="Titan Harbor Holdings turns fragmented AI concepts into structured business systems: brand, product direction, automation, intake, CRM, analytics, workflow design, and launch-ready execution."
          />
          <GlassCard className="p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Ideas Reviewed", "AI concepts, operators, niches, software tools, service models"],
                ["Systems Built", "Dashboards, forms, automation flows, sites, content engines"],
                ["Venture Paths", "MVPs, partnerships, internal brands, affiliate systems, acquisitions"],
                ["Execution Layer", "Research, validation, launch, optimization, and scale support"],
              ].map(([title, text], index) => (
                <motion.div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-black/38 p-5"
                  animate={{ opacity: [0.76, 1, 0.76] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.25 }}
                >
                  <p className="text-lg font-bold text-white">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/56">{text}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section id="ideas" className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-white/10 bg-[#05070a]/72 p-6 shadow-[0_35px_120px_rgba(0,0,0,.48)] backdrop-blur-2xl md:p-9 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8c38a]/80">
              AI idea intake
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
              Submit an AI idea for review.
            </h2>
            <p className="mt-5 leading-8 text-white/62">
              Share the business problem, market, audience, workflow, or AI
              product concept. We evaluate ideas for practicality, execution
              potential, and whether intelligent infrastructure can make them
              scalable.
            </p>
            <div className="mt-6 rounded-2xl border border-[#d8c38a]/18 bg-[#d8c38a]/8 p-5 text-sm leading-6 text-white/62">
              We do not promise funding, investment returns, or guaranteed
              outcomes. This is a structured opportunity review pipeline.
            </div>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <InputField label="Name" name="name" required />
              <InputField label="Email" name="email" type="email" required />
            </div>
            <InputField label="Company or project name" name="company" />
            <InputField label="AI idea category" name="category" required />
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-white/72">
                Describe the AI idea or business opportunity
              </span>
              <textarea
                name="idea"
                required
                className="min-h-36 w-full rounded-2xl border border-white/10 bg-black/42 px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#8fb6d8]/55"
                placeholder="What problem does it solve? Who is it for? How could AI make it better, faster, or more scalable?"
              />
            </label>
            <button
              type="submit"
              className="rounded-2xl bg-white px-7 py-4 font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#f2d997]"
            >
              Send Idea To Titan Harbor
            </button>
            {submitted && (
              <p className="text-sm text-emerald-300">
                Idea received. Titan Harbor logged it for review.
              </p>
            )}
          </form>
        </div>
      </section>

      <section id="ecosystem" className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Ecosystem"
            title="One holding company. Multiple AI-powered business lanes."
            text="Titan Harbor Holdings operates as a venture ecosystem for AI automation, digital infrastructure, media, investments, local services, mobility concepts, and consumer workflow support."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((division, index) => (
              <Reveal key={division} delay={index * 0.035}>
                <div className="rounded-2xl border border-white/10 bg-[#05070a]/62 p-5 backdrop-blur-xl transition hover:border-[#8fb6d8]/35">
                  <div className="flex items-center gap-4">
                    <BriefcaseBusiness className="h-5 w-5 shrink-0 text-[#d8c38a]" />
                    <span className="font-semibold text-white/82">{division}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Execution process"
            title="From raw AI idea to launch-ready business system."
            text="The strongest ideas need a disciplined path from insight to validation, buildout, automation, and scale. Titan Harbor Holdings focuses on the infrastructure that makes ideas executable."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {process.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <GlassCard className="h-full p-5">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#8fb6d8]/18 bg-[#8fb6d8]/8 text-sm font-black text-[#d8e8ff]">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/56">{text}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8fb6d8]">
                Founder story
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
                Built from vision. Powered by AI. Driven by execution.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/64">
                Titan Harbor Holdings was founded by Kevin Hunter to turn
                practical business ideas into intelligent, automated,
                execution-ready systems. The mission is simple: find real
                opportunities, build the infrastructure, and move with discipline.
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
            <GlassCard className="p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d8c38a]/80">
                Trust principles
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {trust.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/35 p-4">
                    <CheckCircle2 className="mb-4 h-5 w-5 text-[#d8c38a]" />
                    <p className="font-semibold text-white/78">{item}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
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
            <p className="text-lg font-black tracking-[0.18em]">Titan Harbor Holdings</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/48">
              AI ideas. Venture infrastructure. Automated growth. Real-world execution.
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

function InvestorCommandPanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-[#8fb6d8]/10 blur-3xl" />
      <GlassCard className="relative overflow-hidden p-4 md:p-6">
        <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8fb6d8]">
              Venture intelligence layer
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">AI Idea Review Pipeline</h2>
          </div>
          <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold text-emerald-200">
            Active
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Ideas Under Review", "12"],
            ["Automation Concepts", "8"],
            ["MVP Builds", "4"],
            ["Market Signals", "31"],
          ].map(([label, value], index) => (
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
              Current thesis
            </p>
            <Lightbulb className="h-4 w-4 text-[#d8c38a]" />
          </div>
          <div className="space-y-3">
            {[
              "AI ideas must solve a real business problem.",
              "Infrastructure matters more than hype.",
              "Execution determines whether an idea becomes valuable.",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#8fb6d8] shadow-[0_0_18px_rgba(143,182,216,.72)]" />
                <span className="text-sm text-white/70">{item}</span>
                <motion.span
                  className="ml-auto hidden h-px w-20 bg-gradient-to-r from-[#8fb6d8] to-transparent sm:block"
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
                <div className="text-sm font-bold text-white">Ask Titan AI</div>
                <div className="text-xs text-white/45">AI idea intake assistant</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-xl p-2 text-white/60 hover:bg-white/10"
              aria-label="Close AI idea assistant"
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
              placeholder="Describe your AI idea..."
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
        aria-label="Open AI idea assistant"
      >
        <div className="flex items-center gap-3">
          <MessageCircle className="h-5 w-5 text-[#d8e8ff]" />
          <div>
            <div className="text-sm font-bold">Ask Titan AI</div>
            <div className="text-xs text-white/45">Submit an idea</div>
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

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">
      <div className="absolute inset-0 animate-[titan-drift_28s_ease-in-out_infinite]">
        <motion.div
          className="absolute -inset-[7%]"
          animate={{ x: ["-1.2%", "1.2%", "-1.2%"], y: ["0%", "-0.8%", "0%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
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
        animate={{ opacity: [0.16, 0.3, 0.16], x: ["1%", "-1%", "1%"] }}
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

      <div className="absolute inset-0 opacity-[0.16]">
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
