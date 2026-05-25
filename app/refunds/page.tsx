import type { Metadata } from "next";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundsPage() {
  return (
    <article className="container-site max-w-[44rem] py-24 md:py-32 prose-styling">
      <span className="eyebrow">
        <span className="rule-line" />
        The Fine Print
      </span>
      <h1 className="mt-4 font-display font-light text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05] -tracking-tight">
        Refund <em className="italic text-forest">Policy</em>
      </h1>
      <p className="mt-2 font-display italic text-cocoa/70">
        Last updated: May 2026
      </p>

      <div className="mt-12 space-y-6 text-[1.05rem] leading-[1.7] text-cocoa">
        <p>
          We want you to love what you buy. Because all products on essynotes.com
          are digital files delivered instantly, refunds are handled thoughtfully
          rather than automatically — but we will always do right by you.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          1. Digital products — general rule
        </h2>
        <p>
          Due to the nature of digital goods (instant delivery, no physical
          item to return), all sales are generally final once a file has been
          downloaded. This is standard practice for digital products across the
          industry.
        </p>
        <p>
          That said, we never want you to feel stuck. See the exceptions below.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          2. Technical issues — we make it right
        </h2>
        <p>
          If you experience any of the following, our first priority is to
          make sure you get your files — not to issue a refund:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You were charged but never received a download link.</li>
          <li>The download link expired before you could access the file.</li>
          <li>The file is corrupted, damaged, or will not open despite following the instructions.</li>
          <li>You were accidentally charged twice for the same order.</li>
          <li>The product was significantly different from what was described on the sales page.</li>
        </ul>
        <p>
          Email us at{" "}
          <a href="/#contact" className="underline text-forest hover:text-brass transition-colors">
            our contact form
          </a>{" "}
          with your order number and a brief description of the issue. We will
          resend your files or provide a fresh download link promptly — usually
          within 1–2 business days. If we are unable to deliver a working file
          after reasonable attempts, we will issue a full refund.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          3. Goodwill window — 14 days
        </h2>
        <p>
          If you purchased a template and it simply isn&rsquo;t working for
          you — wrong size, not what you expected, changed your mind — reach
          out within <strong className="font-medium text-ink">14 days of purchase</strong> and
          we will consider a refund on a case-by-case basis. We&rsquo;re a
          small, human-run shop and we&rsquo;d rather have you come back than
          feel like you wasted money.
        </p>
        <p>
          Please include your order number and what went wrong. We
          can&rsquo;t guarantee a refund under these circumstances, but
          we&rsquo;ll always listen.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          4. What we cannot refund
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Files that have been successfully downloaded and used.</li>
          <li>Purchases where the issue is incompatibility with software you own (please check file formats before buying — listed on every product page).</li>
          <li>Requests made more than 30 days after purchase with no prior contact.</li>
          <li>Dissatisfaction based on a change of personal preference after download.</li>
        </ul>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          5. How refunds are processed
        </h2>
        <p>
          All refunds are processed through{" "}
          <strong className="font-medium text-ink">Lemon Squeezy</strong>, our
          payment processor. Once approved, the refund typically appears on
          your original payment method within{" "}
          <strong className="font-medium text-ink">5–10 business days</strong>,
          depending on your bank. The amount will be refunded in the original
          currency at the original exchange rate.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          6. Chargebacks
        </h2>
        <p>
          We strongly encourage you to contact us before initiating a
          chargeback with your bank or credit card provider. We are a small,
          human-run shop and we will always work with you to resolve any
          issue. Chargebacks that are filed without prior contact, or that
          are not supported by the circumstances above, may result in your
          account being flagged by our payment processor Lemon Squeezy.
        </p>
        <p>
          If you have a legitimate issue, email us first —{" "}
          <a href="/#contact" className="underline text-forest hover:text-brass transition-colors">
            our contact form
          </a>{" "}
          — and we will resolve it faster than a bank dispute.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          7. Contact
        </h2>
        <p>
          For any refund request or purchase question, email{" "}
          <a href="/#contact" className="underline text-forest hover:text-brass transition-colors">
            our contact form
          </a>{" "}
          with your order number. We aim to reply within 1–2 business days.
        </p>
      </div>
    </article>
  );
}
