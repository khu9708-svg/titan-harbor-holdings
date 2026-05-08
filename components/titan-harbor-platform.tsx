"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  Car,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wand2,
  X,
} from "lucide-react";

const businesses = [
  {
    title: "AI Business Automation",
    text: "Prompt systems, workflow automation, customer intake, lead routing, dashboards, CRM flows, and repeatable AI operations.",
    icon: Wand2,
  },
  {
    title: "Affiliate & Digital Products",
    text: "Niche digital offers, monetized content engines, prompt libraries, landing pages, funnels, and creator commerce.",
    icon: TrendingUp,
  },
  {
    title: "Credit & Consumer Solutions",
    text: "AI-assisted education, document organization, dispute workflow support, and client-facing intake experiences.",
    icon: ShieldCheck,
  },
  {
    title: "Prestige Cleaning Services",
    text: "Premium residential, move-in, move-out, deep cleaning, commercial cleaning, and automated booking experiences.",
    icon: Sparkles,
  },
  {
    title: "Luxury Mobility & Rentals",
    text: "Premium vehicle booking flows, automated verification, fleet availability, deposits, and reservation pages.",
    icon: Car,
  },
  {
    title: "Investment Idea Pipeline",
    text: "A structured submission system for evaluating ventures, partnerships, operators, and scalable local opportunities.",
    icon: Building2,
  },
];

const automationSteps = [
  "Lead captured",
  "AI qualifies intent",
  "Offer matched",
  "Workflow triggered",
  "Follow-up automated",
  "Dashboard updated",
];

const stats = [
  ["$42M", "PIPELINE VALUE"],
  ["18", "ACTIVE SYSTEMS"],
  ["247", "AUTOMATED TASKS"],
  ["92%", "AI ROUTING ACCURACY"],
];

export function TitanHarborPlatform() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Welcome to Titan Harbor Holdings. Tell me what you want to build, automate, acquire, or scale.",
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
          text: "Received. Titan AI would route this into the right venture pipeline, summarize the opportunity, and prepare the next best action.",
        },
      ]);
    }, 450);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <CinematicBackground />

      <nav className="fixed left-4 right-4 top-4 z-40 flex items-center justify-between rounded-2xl border border-white/10 bg-black/55 px-5 py-4 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-2xl md:left-6 md:right-6 md:top-6 md:px-8 md:py-5">
        <div className="min-w-0">
          <div className="truncate text-sm font-bold tracking-[0.22em] md:text-xl md:tracking-[0.35em]">
            TITAN HARBOR HOLDINGS
          </div>
          <div className="mt-1 text-xs tracking-[0.16em] text-white/45 md:text-sm md:tracking-[0.18em]">
            AI HOLDING COMPANY
          </div>
        </div>

        <div className="hidden gap-10 text-sm tracking-widest text-white/75 md:flex">
          <a href="#ventures" className="transition hover:text-white">
            VENTURES
          </a>
          <a href="#automation" className="transition hover:text-white">
            AUTOMATION
          </a>
          <a href="#submit" className="transition hover:text-white">
            SUBMIT IDEA
          </a>
          <a href="#contact" className="transition hover:text-white">
            CONTACT
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-xl border border-white/10 bg-white/[.04] p-2 md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed left-4 right-4 top-24 z-40 rounded-2xl border border-white/10 bg-black/80 p-5 text-sm tracking-widest text-white/75 backdrop-blur-2xl md:hidden">
          <a href="#ventures" className="block py-2">
            VENTURES
          </a>
          <a href="#automation" className="block py-2">
            AUTOMATION
          </a>
          <a href="#submit" className="block py-2">
            SUBMIT IDEA
          </a>
          <a href="#contact" className="block py-2">
            CONTACT
          </a>
        </div>
      )}

      <section className="relative z-20 flex min-h-screen items-center px-6 pt-28 md:px-8">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex rounded-lg border border-cyan-300/20 bg-black/55 px-5 py-3 text-xs tracking-[0.28em] text-cyan-100 shadow-[0_0_45px_rgba(34,211,238,.16)] backdrop-blur-xl md:tracking-[0.45em]"
          >
            HOUSTON HEADQUARTERS | AI INFRASTRUCTURE | PRIVATE VENTURE EXECUTION
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="max-w-6xl text-6xl font-black leading-[0.92] tracking-normal text-white md:text-8xl"
          >
            AI Infrastructure For High-Growth Companies.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 max-w-2xl text-xl leading-8 text-white/70"
          >
            The operating system behind modern ventures. Titan Harbor Holdings
            acquires, automates, and scales AI-powered business empires across
            real-world verticals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
            className="mt-8 max-w-xl rounded-2xl border border-amber-200/20 bg-black/45 p-5 shadow-[0_0_55px_rgba(251,191,36,.12)] backdrop-blur-2xl"
          >
            <div className="text-xs uppercase tracking-[0.32em] text-amber-100/70">
              Founded by Kevin Hunter
            </div>
            <div className="mt-2 text-lg font-semibold text-white">
              Owner, Titan Harbor Holdings
            </div>
            <div className="mt-3 text-sm leading-6 text-white/58">
              Started as an idea. Now building globally.
            </div>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#ventures"
              className="rounded-xl bg-gradient-to-r from-amber-200 to-yellow-500 px-8 py-4 font-bold text-black shadow-[0_0_40px_rgba(251,191,36,.28)] transition hover:scale-[1.02]"
            >
              EXPLORE VENTURES
            </a>
            <a
              href="#submit"
              className="rounded-xl border border-white/15 bg-black/45 px-8 py-4 font-bold text-white backdrop-blur-xl transition hover:border-cyan-300/35 hover:bg-white/10"
            >
              SUBMIT AN IDEA
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-30 mx-auto -mt-28 max-w-7xl px-6 pb-24 md:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-black/52 shadow-[0_35px_120px_rgba(0,0,0,.5)] backdrop-blur-2xl md:grid-cols-4">
          {stats.map(([num, label]) => (
            <div key={label} className="border-white/10 p-8 md:border-r">
              <div className="text-4xl font-bold">{num}</div>
              <div className="mt-2 text-xs tracking-[0.28em] text-white/45">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="ventures" className="relative z-20 px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
              Venture Portfolio
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              One AI operating layer. Multiple scalable business lanes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/58">
              Every unit is designed around automation, data capture, customer
              experience, repeatable systems, and high-speed execution.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business, index) => {
              const Icon = business.icon;
              return (
                <motion.div
                  key={business.title}
                  className="group rounded-3xl border border-white/10 bg-black/48 p-7 shadow-[0_28px_100px_rgba(0,0,0,.36)] backdrop-blur-2xl transition hover:border-cyan-200/35 hover:bg-white/[0.07]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100 shadow-[0_0_30px_rgba(103,232,249,.12)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">{business.title}</h3>
                  <p className="mt-4 leading-7 text-white/58">{business.text}</p>
                  <div className="mt-7 h-px w-full bg-gradient-to-r from-cyan-200/50 to-transparent opacity-30 transition group-hover:opacity-80" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="automation" className="relative z-20 px-6 py-28 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/70">
              Automation Engine
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Built to reduce manual work and increase execution speed.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/58">
              Customers click, submit, ask, book, or request. Titan AI routes
              intent into the correct system with minimal human friction.
            </p>
          </motion.div>

          <div className="rounded-3xl border border-white/10 bg-black/50 p-6 shadow-[0_35px_110px_rgba(0,0,0,.45)] backdrop-blur-2xl">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                  AI Command Layer
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  Live Venture Operating System
                </h3>
              </div>
              <Bot className="h-6 w-6 text-cyan-200" />
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {automationSteps.map((step, index) => (
                <motion.div
                  key={step}
                  className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04] p-4 text-center text-sm text-white/80"
                  animate={{
                    y: [0, -4, 0],
                    borderColor: [
                      "rgba(103,232,249,.15)",
                      "rgba(251,191,36,.35)",
                      "rgba(103,232,249,.15)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                >
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="submit" className="relative z-20 px-6 py-28 md:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-black/52 p-6 shadow-[0_35px_120px_rgba(0,0,0,.45)] backdrop-blur-2xl md:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
                Opportunity Intake
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Submit a venture, partnership, or investment idea.
              </h2>
              <p className="mt-5 leading-8 text-white/58">
                Use this intake for business opportunities, automation requests,
                affiliate ideas, cleaning leads, rental concepts, or strategic
                partnerships. No financing or investment return is promised.
              </p>
            </div>

            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                event.currentTarget.reset();
              }}
            >
              <input
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none placeholder:text-white/35"
                placeholder="Name"
                required
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none placeholder:text-white/35"
                placeholder="Email or phone"
                required
              />
              <select
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Business / Investment Category
                </option>
                <option>AI Automation</option>
                <option>Affiliate Marketing</option>
                <option>Credit Workflow</option>
                <option>Cleaning Service</option>
                <option>Car Rental</option>
                <option>Partnership</option>
              </select>
              <textarea
                className="min-h-32 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none placeholder:text-white/35"
                placeholder="Describe the idea, opportunity, or request"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-200 to-amber-200 px-7 py-4 font-semibold text-black transition hover:bg-white"
              >
                Send to AI Review Pipeline
              </button>
              {submitted && (
                <p className="text-sm text-emerald-300">
                  Received. Titan AI logged this opportunity for the review
                  pipeline.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {chatOpen && (
        <motion.div
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-3xl border border-cyan-300/20 bg-black/82 shadow-[0_0_70px_rgba(34,211,238,.22)] backdrop-blur-2xl"
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[.04] p-4">
            <div>
              <div className="text-sm font-bold">AI CONCIERGE</div>
              <div className="text-xs text-white/45">Private venture intake</div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="rounded-xl p-2 text-white/60 hover:bg-white/10"
              aria-label="Close AI concierge"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="h-72 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-2xl p-3 text-sm ${
                  message.role === "ai"
                    ? "bg-white/10 text-white"
                    : "ml-8 bg-cyan-300/15 text-cyan-50"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2 border-t border-white/10 p-3">
            <input
              value={chatInput}
              onChange={(event) => setChatInput(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && sendMessage()}
              placeholder="Type your idea..."
              className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none placeholder:text-white/35"
            />
            <button
              onClick={sendMessage}
              className="rounded-2xl bg-cyan-200 p-2 text-black"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}

      <button
        onClick={() => setChatOpen((value) => !value)}
        className="fixed bottom-6 right-6 z-50 rounded-2xl border border-cyan-300/20 bg-black/65 px-5 py-4 text-left backdrop-blur-xl shadow-[0_0_35px_rgba(34,211,238,.25)]"
      >
        <div className="flex items-center gap-3">
          <MessageCircle className="h-5 w-5 text-cyan-200" />
          <div>
            <div className="text-sm font-bold">AI CONCIERGE</div>
            <div className="text-xs text-white/45">How can I help today?</div>
          </div>
        </div>
      </button>

      <div className="fixed bottom-6 left-6 z-50 hidden rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-xs tracking-widest text-white/60 backdrop-blur-xl md:block">
        CINEMATIC MODE | LIVE SKYLINE
      </div>

      <footer
        id="contact"
        className="relative z-20 border-t border-white/10 bg-black/30 px-6 py-12 backdrop-blur-xl md:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold tracking-[0.25em]">
              TITAN HARBOR HOLDINGS
            </p>
            <p className="mt-2 text-sm text-white/45">
              AI infrastructure. Automated growth. Real-world execution.
            </p>
          </div>
          <a
            href="mailto:info@titanharborholdings.com"
            className="text-sm text-cyan-200"
          >
            info@titanharborholdings.com
          </a>
        </div>
      </footer>
    </main>
  );
}

function CinematicBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 22,
        y: (event.clientY / window.innerHeight - 0.5) * 14,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">
      <div className="absolute inset-0 animate-[titan-drift_24s_ease-in-out_infinite]">
        <motion.div
          className="absolute -inset-[7%]"
          style={{ x: mouse.x * -0.42, y: mouse.y * -0.24 }}
        >
          <Image
            src="/images/titan-harbor-rendered-houston-skyline.png"
            alt="Rendered Houston-inspired skyline at night with red arena lighting"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-95"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute -inset-[9%] opacity-40 mix-blend-screen"
        style={{ x: mouse.x * 0.22, y: mouse.y * 0.12 }}
        animate={{ opacity: [0.28, 0.46, 0.28] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/titan-harbor-rendered-houston-skyline.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center blur-[1px]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(56,189,248,.22),transparent_34%),radial-gradient(circle_at_82%_48%,rgba(239,68,68,.22),transparent_18%),radial-gradient(circle_at_80%_35%,rgba(251,191,36,.16),transparent_28%),linear-gradient(to_bottom,rgba(0,0,0,.08)_0%,rgba(2,4,10,.18)_48%,rgba(0,0,0,.76)_100%)]" />

      <ToyotaCenterGlow />

      <motion.div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          x: mouse.x * 0.25,
          y: mouse.y * 0.25,
        }}
      />

      <BuildingLightMap />
      <HudLayer />

      <div className="absolute inset-0 animate-[titan-fog_18s_linear_infinite] bg-[radial-gradient(ellipse_at_30%_58%,rgba(148,163,184,.22),transparent_35%),radial-gradient(ellipse_at_70%_45%,rgba(56,189,248,.14),transparent_30%)] blur-2xl" />

      <div className="absolute inset-0 opacity-25">
        {Array.from({ length: 45 }).map((_, index) => (
          <div
            key={index}
            className="absolute h-[140px] w-px animate-[titan-rain_3.2s_linear_infinite] bg-gradient-to-b from-transparent via-cyan-100/35 to-transparent"
            style={{
              left: `${(index * 7.3) % 100}%`,
              top: `${(index * 13.1) % 100}%`,
              animationDelay: `${index * 0.12}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-[13vh] left-0 h-[2px] w-[20vw] animate-[titan-traffic_8s_linear_infinite] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_18px_rgba(239,68,68,.9)]" />
      <div className="absolute bottom-[17vh] left-0 h-[2px] w-[24vw] animate-[titan-traffic_11s_linear_infinite] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_18px_rgba(34,211,238,.9)]" />

      <div className="absolute inset-y-0 left-0 w-[35vw] animate-[titan-lightSweep_12s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-cyan-200/10 to-transparent blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/58 via-black/10 to-black/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/35" />
    </div>
  );
}

function BuildingLightMap() {
  const lights = Array.from({ length: 72 }, (_, index) => ({
    left: (index * 17) % 100,
    top: 18 + ((index * 29) % 58),
    color: index % 9 === 0 ? "bg-red-400" : index % 4 === 0 ? "bg-cyan-200" : "bg-amber-200",
    delay: `${index * 0.07}s`,
  }));

  return (
    <div className="absolute inset-0 opacity-80 mix-blend-screen">
      {lights.map((light, index) => (
        <span
          key={index}
          className={`city-window absolute h-[3px] w-[10px] rounded-full ${light.color} shadow-[0_0_14px_currentColor]`}
          style={{
            left: `${light.left}%`,
            top: `${light.top}%`,
            animationDelay: light.delay,
          }}
        />
      ))}
    </div>
  );
}

function HudLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-80">
      {[18, 36, 54, 72].map((top, index) => (
        <div
          key={top}
          className="absolute h-px w-[46vw] animate-[titan-dataStream_9s_linear_infinite] bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent shadow-[0_0_16px_rgba(34,211,238,.55)]"
          style={{
            top: `${top}%`,
            left: `${index % 2 === 0 ? -25 : 70}%`,
            animationDelay: `${index * 1.2}s`,
          }}
        />
      ))}
      <motion.div
        className="absolute right-[8vw] top-[20vh] hidden w-72 rounded-xl border border-cyan-200/15 bg-black/35 p-4 backdrop-blur-xl lg:block"
        animate={{ y: [0, -10, 0], opacity: [0.72, 0.95, 0.72] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-3 text-[10px] uppercase tracking-[0.35em] text-cyan-100/70">
          City Intelligence
        </div>
        <div className="grid gap-2">
          {["Portfolio Signals", "AI Routing", "Market Heat"].map((label, index) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-[11px] text-white/55">
                <span>{label}</span>
                <span className="text-cyan-100">{88 + index * 3}%</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-amber-200"
                  animate={{ width: [`${35 + index * 8}%`, `${78 + index * 6}%`, `${35 + index * 8}%`] }}
                  transition={{ duration: 4 + index, repeat: Infinity }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function ToyotaCenterGlow() {
  return (
    <div className="absolute bottom-[17vh] right-[5vw] h-[18vh] w-[36vw] min-w-[280px] max-w-[720px] opacity-95 mix-blend-screen">
      <div className="absolute inset-x-0 top-[10%] h-[5px] rounded-full bg-red-500 shadow-[0_0_32px_rgba(239,68,68,1)]" />
      <div className="absolute inset-x-[8%] top-[32%] h-[3px] rounded-full bg-red-500/90 shadow-[0_0_24px_rgba(239,68,68,1)]" />
      <div className="absolute left-[2%] top-[10%] h-[72%] w-[5px] rounded-full bg-red-500 shadow-[0_0_28px_rgba(239,68,68,1)]" />
      <div className="absolute right-[2%] top-[10%] h-[72%] w-[5px] rounded-full bg-red-500 shadow-[0_0_28px_rgba(239,68,68,1)]" />
      <div className="absolute inset-0 rounded-t-[2.5rem] border border-red-400/35 shadow-[0_0_80px_rgba(248,113,113,.45)]" />
      <div className="absolute bottom-0 left-[8%] right-[8%] grid h-[42%] grid-cols-16 gap-1 opacity-80">
        {Array.from({ length: 80 }).map((_, index) => (
          <span key={index} className="city-window h-[4px] rounded-sm bg-amber-200/70" style={{ animationDelay: `${index * 0.04}s` }} />
        ))}
      </div>
    </div>
  );
}
