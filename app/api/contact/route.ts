import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, brand, email, type, message, turnstileToken } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Anti-spam — Turnstile check (only if configured)
    if (process.env.TURNSTILE_SECRET_KEY && turnstileToken) {
      const verify = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
        }
      );
      const verifyJson = await verify.json();
      if (!verifyJson.success) {
        return NextResponse.json({ error: "Spam check failed" }, { status: 403 });
      }
    }

    // Send via Resend
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set — contact form not sending");
      return NextResponse.json({ ok: true, mock: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.CONTACT_FORM_FROM_EMAIL ?? "contact@essynotes.com",
      to: process.env.CONTACT_FORM_TO_EMAIL ?? "estera@essynotes.com",
      replyTo: email,
      subject: `New brand inquiry from ${name}${brand ? ` (${brand})` : ""}`,
      text: [
        `From: ${name} <${email}>`,
        brand && `Brand: ${brand}`,
        type && `Type: ${type}`,
        "",
        message ?? "(no message)",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
