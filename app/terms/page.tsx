import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <article className="container-site max-w-[44rem] py-24 md:py-32">
      <span className="eyebrow">
        <span className="rule-line" />
        The Fine Print
      </span>
      <h1 className="mt-4 font-display font-light text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05] -tracking-tight">
        Terms of <em className="italic text-forest">Service</em>
      </h1>
      <p className="mt-2 font-display italic text-cocoa/70">
        Last updated: April 2026
      </p>

      <div className="mt-12 space-y-6 text-[1.05rem] leading-[1.7] text-cocoa">
        <p>
          Placeholder terms. Replace with real terms before launch — generated
          by Termly, iubenda, or a lawyer familiar with your jurisdiction.
        </p>

        <h2 className="font-display text-2xl text-ink mt-10">
          Digital products
        </h2>
        <p>
          All templates sold through this site are digital PDF files, delivered
          instantly by email after purchase. They are licensed for personal use
          by the purchaser. You may not resell, redistribute, or republish them
          in whole or in part. You may print as many copies as you like for
          your own use.
        </p>

        <h2 className="font-display text-2xl text-ink mt-10">Payment</h2>
        <p>
          Payments are processed by Lemon Squeezy, who acts as the merchant of
          record for all transactions. Lemon Squeezy handles tax collection and
          remittance where applicable.
        </p>

        <h2 className="font-display text-2xl text-ink mt-10">
          Intellectual property
        </h2>
        <p>
          All content on this site — writing, videos, illustrations, and
          templates — is the intellectual property of Estera / essynotes
          unless otherwise credited. Please do not reupload or repost without
          permission.
        </p>

        <h2 className="font-display text-2xl text-ink mt-10">
          Affiliate disclosure
        </h2>
        <p>
          Some links on this site are affiliate links — if you buy through
          them, I may earn a small commission at no extra cost to you. I only
          link to products I actually use and believe in.
        </p>

        <h2 className="font-display text-2xl text-ink mt-10">Contact</h2>
        <p>
          For any questions:{" "}
          <a href="mailto:hello@essynotes.com" className="underline text-forest">
            hello@essynotes.com
          </a>
          .
        </p>
      </div>
    </article>
  );
}
