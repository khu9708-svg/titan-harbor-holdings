# Titan Harbor Holdings Platform

Luxury AI-powered holding company website and operating platform for `titanharborholdings.com`.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn-style local UI primitives
- Lucide icons
- Supabase-ready backend placeholders
- OpenAI, Stripe, Calendly, Zapier, Make, Resend/SendGrid, and Twilio environment placeholders

## Routes

- `/` cinematic public platform
- `/admin` hidden admin command center placeholder
- `/api/leads` validated lead intake endpoint

## Setup

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill only the services being activated. Do not expose server keys in client code.

Set `ADMIN_PREVIEW_TOKEN` to protect `/admin`. Visit `/admin?token=YOUR_TOKEN` once to create an HTTP-only preview cookie.

## Supabase

Run `supabase/schema.sql` in a Supabase project to create the placeholder tables:

- leads
- chatbot_messages
- service_requests
- consultations
- divisions
- automation_events
- client_accounts
- uploaded_documents
- affiliate_links
- payments

Row-level security is enabled for each table. Add policies according to the final auth and admin model before production.

## Visual Asset

The homepage hero uses a generated cinematic Houston AI headquarters image saved at:

`public/images/titan-harbor-houston-command-center.png`
