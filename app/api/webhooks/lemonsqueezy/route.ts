import { NextResponse } from "next/server";
import crypto from "crypto";

// Note: Lemon Squeezy handles digital delivery automatically.
// This webhook is for LOGGING + any custom post-purchase logic
// (e.g., tagging buyers in Kit, sending a personal thank-you).

// Node runtime required for the `crypto` module (HMAC verification)
export const runtime = "nodejs";

export async function POST(req: Request) {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook secret not set" }, { status: 500 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get("x-signature");

  // Verify HMAC signature
  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
  const sigBuffer = Buffer.from(signature ?? "", "utf8");

  if (!signature || !crypto.timingSafeEqual(digest, sigBuffer)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(rawBody);
  const eventName = event.meta?.event_name;

  // Handle relevant events
  switch (eventName) {
    case "order_created":
      console.log("New order:", event.data.attributes.user_email);
      // TODO: tag in Kit, log to Sanity for a "recent buyers" section, etc.
      break;
    case "order_refunded":
      console.log("Refund:", event.data.attributes.user_email);
      break;
    default:
      console.log("Unhandled event:", eventName);
  }

  return NextResponse.json({ received: true });
}
