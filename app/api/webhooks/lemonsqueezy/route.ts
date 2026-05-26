import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook secret not set" }, { status: 500 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get("x-signature");

  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
  const sigBuffer = Buffer.from(signature ?? "", "utf8");

  if (!signature || !crypto.timingSafeEqual(digest, sigBuffer)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(rawBody);
  const eventName = event.meta?.event_name;

  switch (eventName) {
    case "order_created": {
      const attrs = event.data?.attributes;
      if (!attrs || attrs.status !== "paid") break;

      const customerEmail: string = attrs.user_email;
      const firstName = (attrs.user_name as string | undefined)?.split(" ")[0] ?? "there";
      const productName: string = attrs.first_order_item?.product_name ?? "your purchase";
      const receiptUrl: string = attrs.urls?.receipt ?? "https://app.lemonsqueezy.com/my-orders";

      if (process.env.RESEND_API_KEY && customerEmail) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: `essynotes <${process.env.CONTACT_FORM_FROM_EMAIL ?? "hello@essynotes.com"}>`,
          to: customerEmail,
          subject: `Your download is ready — ${productName}`,
          html: orderEmail({ firstName, productName, receiptUrl }),
        });
      }
      break;
    }

    case "order_refunded":
      console.log("Refund:", event.data?.attributes?.user_email);
      break;

    default:
      console.log("Unhandled LS event:", eventName);
  }

  return NextResponse.json({ received: true });
}

function orderEmail({
  firstName,
  productName,
  receiptUrl,
}: {
  firstName: string;
  productName: string;
  receiptUrl: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your download is ready</title>
</head>
<body style="margin:0;padding:0;background:#f2ead6;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2ead6;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#2b3a2c;padding:40px 48px;text-align:center;">
              <p style="margin:0;font-family:Georgia,serif;font-size:36px;color:#b08a50;letter-spacing:2px;">
                essynotes
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:48px;border-left:1px solid #e8dfc8;border-right:1px solid #e8dfc8;">
              <p style="margin:0 0 8px;font-family:Georgia,serif;font-size:13px;color:#495c3f;letter-spacing:3px;text-transform:uppercase;">
                your order
              </p>
              <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-size:28px;font-weight:400;color:#14110d;line-height:1.2;">
                Hi ${firstName} — your file<br/>is <em>ready to download.</em>
              </h1>
              <p style="margin:0 0 24px;font-family:Georgia,serif;font-size:16px;color:#3d2a1b;line-height:1.7;">
                Thank you for your order of <strong>${productName}</strong>. Click the button below to go directly to your download — no account needed, just click and save.
              </p>
              <p style="margin:0 0 32px;font-family:Georgia,serif;font-size:16px;color:#3d2a1b;line-height:1.7;">
                Save it somewhere you'll remember — a folder called <em>slow work</em> has a nice ring to it.
              </p>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#2b3a2c;border-radius:2px;">
                    <a href="${receiptUrl}"
                       style="display:inline-block;padding:16px 36px;font-family:Georgia,serif;font-size:13px;color:#f2ead6;text-decoration:none;letter-spacing:3px;text-transform:uppercase;">
                      Download ${productName}
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:32px 0 0;font-family:Georgia,serif;font-size:14px;color:#768665;line-height:1.6;">
                If the button doesn't work, paste this link into your browser:<br/>
                <a href="${receiptUrl}" style="color:#495c3f;word-break:break-all;">${receiptUrl}</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f2ead6;padding:32px 48px;border-left:1px solid #e8dfc8;border-right:1px solid #e8dfc8;border-bottom:1px solid #e8dfc8;text-align:center;">
              <p style="margin:0 0 8px;font-family:Georgia,serif;font-size:13px;color:#768665;font-style:italic;">
                made slowly, in a quiet room.
              </p>
              <p style="margin:0;font-family:Georgia,serif;font-size:12px;color:#a09070;">
                essynotes.com &nbsp;·&nbsp;
                <a href="https://tiktok.com/@essynotes" style="color:#a09070;">TikTok</a> &nbsp;·&nbsp;
                <a href="https://instagram.com/essynotes" style="color:#a09070;">Instagram</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
