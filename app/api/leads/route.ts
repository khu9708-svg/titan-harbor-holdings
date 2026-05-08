import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid lead payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const supabase = getSupabaseServerClient();
  const payload = {
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    business_type: parsed.data.businessType,
    service_interest: parsed.data.serviceInterest,
    budget_range: parsed.data.budgetRange,
    timeline: parsed.data.timeline,
    project_details: parsed.data.projectDetails,
    preferred_contact_method: parsed.data.preferredContactMethod,
    source: parsed.data.source,
  };

  if (supabase) {
    const { error } = await supabase.from("leads").insert(payload);
    if (error) {
      return NextResponse.json(
        { ok: false, error: "Lead could not be stored" },
        { status: 500 },
      );
    }
  }

  const webhookUrls = [
    process.env.ZAPIER_LEAD_WEBHOOK_URL,
    process.env.MAKE_LEAD_WEBHOOK_URL,
  ].filter(Boolean);

  await Promise.allSettled(
    webhookUrls.map((url) =>
      fetch(url as string, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, received_at: new Date().toISOString() }),
      }),
    ),
  );

  return NextResponse.json({
    ok: true,
    stored: Boolean(supabase),
    routedTo: routeDivision(parsed.data.serviceInterest),
  });
}

function routeDivision(service: string) {
  const normalized = service.toLowerCase();
  if (normalized.includes("clean")) return "Prestige Clean Co.";
  if (normalized.includes("website") || normalized.includes("brand")) return "Titan Harbor Digital";
  if (normalized.includes("automation") || normalized.includes("crm") || normalized.includes("chatbot")) return "Titan Harbor AI / Titan Harbor Automation";
  if (normalized.includes("consumer") || normalized.includes("credit")) return "Titan Harbor Consumer Solutions";
  if (normalized.includes("mobility")) return "Titan Harbor Mobility";
  if (normalized.includes("affiliate") || normalized.includes("investment")) return "Titan Harbor Ventures / Titan Harbor Investments";
  return "Titan Harbor Holdings";
}
