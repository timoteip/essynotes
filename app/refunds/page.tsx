import type { Metadata } from "next";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundsPage() {
  return (
    <article className="container-site max-w-[44rem] py-24 md:py-32">
      <span className="eyebrow">
        <span className="rule-line" />
        The Fine Print
      </span>
      <h1 className="mt-4 font-display font-light text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05] -tracking-tight">
        Refund <em className="italic text-forest">Policy</em>
      </h1>
      <p className="mt-2 font-display italic text-cocoa/70">
        Last updated: April 2026
      </p>

      <div className="mt-12 space-y-6 text-[1.05rem] leading-[1.7] text-cocoa">
        <p>
          Because all products on this site are digital downloads that can be
          accessed immediately after purchase, we have a considered refund
          policy. Please read carefully before buying.
        </p>

        <h2 className="font-display text-2xl text-ink mt-10">
          14-day refund window
        </h2>
        <p>
          If you purchased a template and it doesn&rsquo;t work for you, you
          can request a full refund within 14 days of purchase — no questions
          asked. Email{" "}
          <a href="mailto:hello@essynotes.com" className="underline text-forest">
            hello@essynotes.com
          </a>{" "}
          with your order number.
        </p>

        <h2 className="font-display text-2xl text-ink mt-10">
          After 14 days
        </h2>
        <p>
          Refunds after 14 days are considered case-by-case. If there&rsquo;s a
          genuine technical issue (you never received the file, the file
          won&rsquo;t open, the download link expired), we&rsquo;ll always help
          — just reach out.
        </p>

        <h2 className="font-display text-2xl text-ink mt-10">
          How refunds work
        </h2>
        <p>
          Refunds are processed through Lemon Squeezy and typically appear on
          your card within 5–10 business days. The charge will be reversed in
          the original currency.
        </p>
      </div>
    </article>
  );
}
