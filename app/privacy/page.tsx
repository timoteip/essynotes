import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <article className="container-site max-w-[44rem] py-24 md:py-32 prose-styling">
      <span className="eyebrow">
        <span className="rule-line" />
        The Fine Print
      </span>
      <h1 className="mt-4 font-display font-light text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05] -tracking-tight">
        Privacy <em className="italic text-forest">Policy</em>
      </h1>
      <p className="mt-2 font-display italic text-cocoa/70">
        Last updated: May 2026
      </p>

      <div className="mt-12 space-y-6 text-[1.05rem] leading-[1.7] text-cocoa">
        <p>
          essynotes is operated by Estera Perju. This policy explains what
          information we collect when you visit essynotes.com, how we use it,
          and what rights you have over it. We keep things simple because we
          don&rsquo;t do anything complicated with your data.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          1. Information we collect
        </h2>
        <p>
          We only collect information you actively give us:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="font-medium text-ink">Newsletter sign-up:</strong> your name and email address, used to send you the essynotes letter (twice a month, no spam).
          </li>
          <li>
            <strong className="font-medium text-ink">Brand inquiry form:</strong> your name, brand name, email address, collaboration type, and message — used solely to respond to your inquiry.
          </li>
          <li>
            <strong className="font-medium text-ink">Purchases:</strong> when you buy a digital product, our payment processor Lemon Squeezy collects your billing details and email. We receive your email and order details to fulfill your purchase. We never see or store your card number.
          </li>
        </ul>
        <p>
          We do not use tracking cookies, run advertising pixels, or build
          behavioral profiles. We do not collect any information passively
          beyond what is standard in server logs (IP address, browser type,
          pages visited) which are retained briefly by our hosting provider
          Vercel for security purposes.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          2. How we use your information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To send the newsletter you signed up for and nothing else.</li>
          <li>To reply to brand collaboration inquiries.</li>
          <li>To process and fulfill your digital product orders.</li>
          <li>To protect the contact form from spam (via Cloudflare Turnstile — no cookies set).</li>
        </ul>
        <p>
          We will never sell, rent, or share your personal information with
          third parties for marketing purposes.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          3. Third-party services
        </h2>
        <p>
          We use a small number of trusted services to run the site. Each
          processes data according to their own privacy policy:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="font-medium text-ink">Vercel</strong> — website hosting (vercel.com/legal/privacy-policy)</li>
          <li><strong className="font-medium text-ink">Kit (formerly ConvertKit)</strong> — newsletter delivery; your name and email are stored on their platform (kit.com/privacy)</li>
          <li><strong className="font-medium text-ink">Resend</strong> — transactional email for contact form replies (resend.com/privacy)</li>
          <li><strong className="font-medium text-ink">Lemon Squeezy</strong> — payment processing and tax compliance (lemonsqueezy.com/privacy)</li>
          <li><strong className="font-medium text-ink">Cloudflare Turnstile</strong> — spam protection on the contact form; no cookies are set (cloudflare.com/privacypolicy)</li>
          <li><strong className="font-medium text-ink">Sanity</strong> — content management for site copy (sanity.io/legal/privacy)</li>
        </ul>
        <p>
          Some links in the My Tools section are affiliate links. Clicking them
          does not share any personal information with us; the affiliate
          tracking is handled entirely by the retailer.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          4. Cookies
        </h2>
        <p>
          This site does not use tracking or advertising cookies. Cloudflare
          Turnstile may use a short-lived technical token to verify form
          submissions — this is not used for tracking and expires immediately.
          No cookie consent banner is shown because no persistent cookies are
          set.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          5. Email communications (CAN-SPAM)
        </h2>
        <p>
          All commercial emails we send comply with the CAN-SPAM Act. Every
          newsletter or promotional email includes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>A clear identification of the sender (essynotes).</li>
          <li>An honest subject line.</li>
          <li>A one-click unsubscribe link that is honored within 10 business days.</li>
        </ul>
        <p>
          You may also unsubscribe at any time by emailing{" "}
          <a href="/#contact" className="underline text-forest hover:text-brass transition-colors">
            our contact form
          </a>
          .
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          6. Data retention
        </h2>
        <p>
          Newsletter subscriber data is held in Kit for as long as you remain
          subscribed. Contact form messages are kept only as long as needed to
          respond. Purchase records are retained for a minimum of 7 years as
          required by the IRS and applicable U.S. tax law.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          7. Your rights
        </h2>
        <p>
          Depending on where you live, you may have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access the personal data we hold about you.</li>
          <li>Ask us to correct or delete it.</li>
          <li>Withdraw consent at any time (e.g. unsubscribe from the newsletter via the link in any email).</li>
          <li>File a complaint with the Federal Trade Commission (FTC) at ftc.gov, or with your state attorney general.</li>
        </ul>
        <p>
          To exercise any of these rights, email{" "}
          <a href="/#contact" className="underline text-forest hover:text-brass transition-colors">
            our contact form
          </a>
          . We will respond within 30 days.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          8. California residents (CCPA)
        </h2>
        <p>
          If you are a California resident, you have the right under the
          California Consumer Privacy Act (CCPA) to request disclosure of the
          personal information we have collected about you, and to request its
          deletion. We do not sell personal information. To submit a request,
          email{" "}
          <a href="/#contact" className="underline text-forest hover:text-brass transition-colors">
            our contact form
          </a>
          .
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          9. Children&rsquo;s privacy (COPPA)
        </h2>
        <p>
          This site is not directed at children under 13. We do not knowingly
          collect personal information from children under 13 in compliance
          with the Children&rsquo;s Online Privacy Protection Act (COPPA). If
          you believe a child has provided us with personal information, please
          contact us immediately.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          10. Changes to this policy
        </h2>
        <p>
          If we make meaningful changes, we will update the date at the top of
          this page. Continued use of the site after changes constitutes
          acceptance of the updated policy.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          11. Contact
        </h2>
        <p>
          Questions about this policy? Write to us at{" "}
          <a href="/#contact" className="underline text-forest hover:text-brass transition-colors">
            our contact form
          </a>
          .
        </p>
      </div>
    </article>
  );
}
