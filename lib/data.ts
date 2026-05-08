import {
  Activity,
  Bot,
  BriefcaseBusiness,
  Building2,
  Car,
  ChartCandlestick,
  CircuitBoard,
  ClipboardCheck,
  FileSearch,
  Gem,
  Globe2,
  Handshake,
  Layers3,
  LockKeyhole,
  MailCheck,
  Network,
  Radar,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Division = {
  name: string;
  summary: string;
  cta: string;
  icon: LucideIcon;
};

export const divisions: Division[] = [
  {
    name: "Titan Harbor AI",
    summary:
      "AI automation, chatbots, workflow systems, AI tools, business automation, and intelligent customer experiences.",
    cta: "Deploy AI Systems",
    icon: Bot,
  },
  {
    name: "Prestige Clean Co.",
    summary:
      "Premium cleaning services powered by automated booking, AI follow-up, customer routing, and service operations.",
    cta: "Request Service",
    icon: Sparkles,
  },
  {
    name: "Titan Harbor Digital",
    summary:
      "Websites, funnels, branding, landing pages, lead systems, SEO-ready content, and digital infrastructure.",
    cta: "Build Digital Assets",
    icon: Globe2,
  },
  {
    name: "Titan Harbor Consumer Solutions",
    summary:
      "Consumer document support, credit education, dispute organization, financial profile review, and structured client intake.",
    cta: "Start Intake",
    icon: ClipboardCheck,
  },
  {
    name: "Titan Harbor Mobility",
    summary:
      "Vehicle rental, executive mobility, premium transportation services, booking systems, and future fleet operations.",
    cta: "Check Mobility",
    icon: Car,
  },
  {
    name: "Titan Harbor Ventures",
    summary:
      "Business development, strategic partnerships, affiliate systems, digital products, and scalable venture opportunities.",
    cta: "Explore Ventures",
    icon: BriefcaseBusiness,
  },
  {
    name: "Titan Harbor Automation",
    summary:
      "CRM automation, Zapier, Make, email workflows, lead routing, appointment systems, and process automation.",
    cta: "Automate Operations",
    icon: Workflow,
  },
  {
    name: "Titan Harbor Media",
    summary:
      "AI-enhanced content, brand visuals, promotional campaigns, short-form content, digital ads, and business storytelling.",
    cta: "Launch Media",
    icon: Radar,
  },
  {
    name: "Titan Harbor Investments",
    summary:
      "AI-assisted market research, venture tracking, opportunity analysis, investment dashboards, and business intelligence.",
    cta: "View Intelligence",
    icon: ChartCandlestick,
  },
];

export const services = [
  "AI Automation",
  "Custom Websites",
  "Business Branding",
  "AI Chatbots",
  "Lead Generation",
  "CRM Integration",
  "Booking Systems",
  "Affiliate Systems",
  "Digital Products",
  "Consumer Solutions",
  "Cleaning Operations",
  "Mobility Services",
  "Investment Research",
  "Workflow Automation",
  "Client Portals",
  "Content Automation",
];

export const commandMetrics = [
  ["AI Systems Online", "24"],
  ["Automations Active", "128"],
  ["Leads Routed", "4,860"],
  ["Workflows Running", "312"],
  ["Client Requests Processed", "18.4k"],
  ["Consultations Scheduled", "740"],
];

export const commandPanels = [
  ["Live Lead Capture", "Inbound forms validated and routed"],
  ["AI Chat Activity", "Conversation summaries prepared"],
  ["CRM Sync Status", "Pipeline fields aligned"],
  ["Workflow Automations", "Operational triggers monitored"],
  ["Appointment Bookings", "Calendar placeholders ready"],
  ["Payment Activity", "Stripe integration prepared"],
  ["Affiliate Tracking", "Partner performance mapped"],
  ["Customer Pipeline", "Stages, owners, and next steps"],
  ["Service Routing", "Division matching active"],
  ["Analytics", "Dashboards awaiting data"],
  ["System Health", "Infrastructure status online"],
  ["AI Model Status", "OpenAI API placeholder configured"],
];

export const workflowSteps = [
  "New lead submitted",
  "AI qualifies lead",
  "CRM updates",
  "Email confirmation sent",
  "SMS notification sent",
  "Consultation booked",
  "Internal dashboard updated",
  "Follow-up sequence starts",
];

export const integrations = [
  "OpenAI",
  "Zapier",
  "Make",
  "Calendly",
  "Stripe",
  "Google Sheets",
  "Gmail",
  "Outlook",
  "Twilio",
  "Supabase",
  "Airtable",
  "HubSpot",
  "Notion",
];

export const infrastructureItems = [
  "Artificial intelligence",
  "Workflow automation",
  "CRM systems",
  "AI chatbots",
  "Lead generation systems",
  "Intelligent routing",
  "Email automation",
  "Scheduling automation",
  "Payment integrations",
  "Analytics dashboards",
  "Business intelligence",
  "Customer journey automation",
  "AI-enhanced operations",
  "Scalable digital infrastructure",
];

export const trustItems: Array<[string, LucideIcon]> = [
  ["Secure SSL", ShieldCheck],
  ["Professional business email", MailCheck],
  ["AI-powered workflows", CircuitBoard],
  ["Encrypted forms", LockKeyhole],
  ["Privacy-minded intake", Gem],
  ["Corporate contact", Building2],
  ["Modern infrastructure", Network],
  ["Structured operations", Layers3],
  ["Transparent process", FileSearch],
];

export const adminRows: Array<[string, string, LucideIcon]> = [
  ["Leads", "1,284", Activity],
  ["Chatbot Conversations", "8,420", Bot],
  ["Form Submissions", "2,016", ReceiptText],
  ["Service Interests", "16 categories", Layers3],
  ["Budget Ranges", "Segmented", ChartCandlestick],
  ["Booking Requests", "Active queue", ClipboardCheck],
  ["Automation Status", "Online", Zap],
  ["Division Routing", "9 divisions", Network],
  ["Analytics", "Preview mode", Radar],
];
