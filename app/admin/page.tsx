import { Download, LockKeyhole, ShieldCheck } from "lucide-react";
import { adminRows } from "@/lib/data";

export const metadata = {
  title: "Admin | Titan Harbor Holdings",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-titan-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-titan-gold/35 bg-titan-gold/10 px-3 py-2 text-xs uppercase tracking-[.2em] text-titan-gold">
              <LockKeyhole className="h-4 w-4" />
              Protected Route Placeholder
            </div>
            <h1 className="font-display text-4xl font-semibold">Titan Admin Command Center</h1>
            <p className="mt-4 max-w-2xl text-slate-400">
              Prepared for Supabase Auth, admin roles, lead review, chatbot conversation history, submissions, service routing, analytics, and export workflows.
            </p>
          </div>
          <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-titan-blue/40 bg-titan-blue/10 px-5 text-sm font-semibold text-titan-blue">
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {adminRows.map(([label, value, Icon]) => (
            <section key={label} className="glass-panel rounded-md p-5">
              <Icon className="mb-5 h-6 w-6 text-titan-gold" />
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-2 font-display text-2xl font-semibold">{value}</p>
            </section>
          ))}
        </div>

        <section className="glass-panel mt-8 rounded-md p-6">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-300" />
            <h2 className="font-display text-2xl font-semibold">Security Roadmap</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Supabase Auth admin login",
              "Role-based access policies",
              "Environment-only API keys",
              "Server-side form validation",
              "Sanitized lead payloads",
              "Private document storage",
              "Webhook audit log",
              "CSV export permission gate",
            ].map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[.035] p-4 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
