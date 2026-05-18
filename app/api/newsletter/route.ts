import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const apiKey = process.env.KIT_API_KEY;
    const formId = process.env.KIT_FORM_ID;

    if (!apiKey || !formId) {
      console.error("Kit not configured");
      return NextResponse.json({ ok: true, mock: true });
    }

    const headers = {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
    };

    // Step 1: create/upsert the subscriber so we capture first_name
    if (name) {
      const createRes = await fetch("https://api.kit.com/v4/subscribers", {
        method: "POST",
        headers,
        body: JSON.stringify({ email_address: email, first_name: name }),
      });
      if (!createRes.ok) {
        const errText = await createRes.text();
        console.error("Kit create subscriber failed:", createRes.status, errText);
      }
    }

    // Step 2: add subscriber to form (this triggers the incentive/welcome email)
    const formRes = await fetch(
      `https://api.kit.com/v4/forms/${formId}/subscribers`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({ email_address: email }),
      }
    );

    if (!formRes.ok) {
      const errText = await formRes.text();
      console.error("Kit form subscribe failed:", formRes.status, errText);
      throw new Error(`Kit API ${formRes.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
