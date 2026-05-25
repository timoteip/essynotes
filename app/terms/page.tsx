import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <article className="container-site max-w-[44rem] py-24 md:py-32 prose-styling">
      <span className="eyebrow">
        <span className="rule-line" />
        The Fine Print
      </span>
      <h1 className="mt-4 font-display font-light text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05] -tracking-tight">
        Terms of <em className="italic text-forest">Service</em>
      </h1>
      <p className="mt-2 font-display italic text-cocoa/70">
        Last updated: May 2026
      </p>

      <div className="mt-12 space-y-6 text-[1.05rem] leading-[1.7] text-cocoa">
        <p>
          These Terms of Service govern your use of essynotes.com, operated by
          Estera Perju (&ldquo;essynotes&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;). By accessing the site or purchasing a product, you
          agree to these terms. Please read them — they&rsquo;re short and
          written in plain English.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          1. Use of the site
        </h2>
        <p>
          You may use essynotes.com for personal, non-commercial purposes. You
          agree not to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Copy, scrape, or reproduce site content without permission.</li>
          <li>Use the site in any way that could harm, disrupt, or overload it.</li>
          <li>Attempt to gain unauthorized access to any part of the site.</li>
        </ul>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          2. Digital products
        </h2>
        <p>
          All products sold through this site are digital files (templates,
          printables, and similar). By purchasing, you agree to the following:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="font-medium text-ink">Personal use only.</strong> Files are licensed to you, the purchaser, for personal use. You may print as many copies as you like for your own use.
          </li>
          <li>
            <strong className="font-medium text-ink">No redistribution.</strong> You may not resell, share, redistribute, or republish the files — in whole or in part — whether for free or for profit.
          </li>
          <li>
            <strong className="font-medium text-ink">No commercial use.</strong> You may not use purchased templates as part of a product or service you sell to others without a separate commercial licence. Contact us at{" "}
            <a href="/#contact" className="underline text-forest hover:text-brass transition-colors">
              our contact form
            </a>{" "}
            to discuss commercial licensing.
          </li>
          <li>
            <strong className="font-medium text-ink">Instant delivery.</strong> Files are delivered digitally immediately after purchase. It is your responsibility to download and save them.
          </li>
        </ul>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          3. Payments
        </h2>
        <p>
          All transactions are processed by{" "}
          <strong className="font-medium text-ink">Lemon Squeezy</strong>, who
          acts as the merchant of record. This means Lemon Squeezy is
          responsible for collecting and remitting applicable sales tax and
          VAT. Your payment details are handled entirely by Lemon Squeezy —
          we never see or store your card information.
        </p>
        <p>
          Prices are listed in USD and may vary by region due to local tax
          rules applied by Lemon Squeezy at checkout.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          4. Refunds
        </h2>
        <p>
          Because all products are digital and delivered immediately, we
          generally do not offer refunds once a file has been downloaded.
          However, we want you to be happy — if you experience a technical
          issue with a file, contact us within 14 days of purchase at{" "}
          <a href="/#contact" className="underline text-forest hover:text-brass transition-colors">
            our contact form
          </a>{" "}
          and we will make it right. See our full{" "}
          <a href="/refunds" className="underline text-forest hover:text-brass transition-colors">
            Refund Policy
          </a>
          .
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          5. Intellectual property
        </h2>
        <p>
          All content on this site — writing, photography, video, illustrations,
          templates, and design — is the intellectual property of Estera /
          essynotes unless otherwise credited. Unauthorized reproduction,
          distribution, or use of any content is prohibited.
        </p>
        <p>
          You may share links to this site and quote brief excerpts with proper
          credit. For anything beyond that, please ask first.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          6. Affiliate links &amp; sponsored content
        </h2>
        <p>
          Some links on this site — particularly in the My Tools section — are
          affiliate links. If you click through and make a purchase, we may
          earn a small commission at no extra cost to you. We only recommend
          products we genuinely use and believe in.
        </p>
        <p>
          Sponsored content, where it appears, will be clearly labelled. Our
          editorial opinions remain our own regardless of any commercial
          relationship.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          7. Newsletter
        </h2>
        <p>
          By subscribing to the essynotes letter, you agree to receive
          occasional emails (typically twice a month). You can unsubscribe at
          any time via the link in any email. We will never sell or share your
          email address.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          8. Disclaimer &amp; limitation of liability
        </h2>
        <p>
          This site and its content are provided &ldquo;as is&rdquo; without
          warranties of any kind. We do our best to keep everything accurate
          and up to date, but we cannot guarantee that all information is
          complete or error-free.
        </p>
        <p>
          To the fullest extent permitted by law, essynotes shall not be liable
          for any indirect, incidental, or consequential damages arising from
          your use of the site or any products purchased here. In any case,
          our total liability to you shall not exceed the amount you paid for
          the product or service giving rise to the claim, or $10.00 if no
          purchase was involved.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          9. Governing law
        </h2>
        <p>
          These terms are governed by the laws of the Commonwealth of Pennsylvania,
          United States, without regard to its conflict of law provisions. Any
          disputes will be subject to the exclusive jurisdiction of the state
          or federal courts located in Pennsylvania.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          10. Changes to these terms
        </h2>
        <p>
          We may update these terms from time to time. Changes will be
          reflected by the updated date at the top of this page. Continued use
          of the site after changes constitutes your acceptance.
        </p>

        <h2 className="font-display font-light text-[1.7rem] text-ink mt-10 -tracking-tight">
          11. Contact
        </h2>
        <p>
          Questions about these terms? We&rsquo;re at{" "}
          <a href="/#contact" className="underline text-forest hover:text-brass transition-colors">
            our contact form
          </a>
          .
        </p>
      </div>
    </article>
  );
}
