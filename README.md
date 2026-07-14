# essynotes

Marketing site and digital shop for a handwriting content creator. Next.js 14 App Router, statically generated with 5-minute ISR, deployed on Vercel.

## Stack

- **Next.js 14 (App Router)** + TypeScript, Tailwind for styling
- **Sanity** — headless CMS for site settings (announce bar, bio, follower counts), embedded studio at `/studio`
- **Lemon Squeezy** — merchant-of-record checkout for the digital product shop. Went with this over a raw Stripe integration because selling internationally means VAT/GST across dozens of jurisdictions, and Lemon Squeezy handles that as part of its cut instead of me filing taxes in 30+ countries.
- **Resend** — contact form email
- **Kit (ConvertKit)** — newsletter signups, on their v4 API
- **Cloudflare Turnstile** — spam protection on both forms
- **Vercel** — hosting, auto-deploys on push to `main`

## A few implementation details

- The Sanity Studio runs inside the same Next.js app at `/studio`, but marketing pages live under an `app/(site)` route group so the header, announce bar, and footer don't leak into the CMS — Studio renders full-screen on its own.
- Product listings pull from the Lemon Squeezy API at request time rather than being hardcoded, so adding a product in their dashboard is enough for it to show up on the shop page.
- Contact and newsletter routes verify the Turnstile token server-side before calling out to Resend/Kit, so spam never reaches either service.
- The Lemon Squeezy webhook verifies the HMAC signature with a timing-safe comparison before trusting the payload, then sends an order-confirmation email through Resend.

## Running locally

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Runs on mock data out of the box — the env vars in `.env.local.example` are only needed once you connect the real Sanity/Lemon Squeezy/Resend/Kit/Turnstile accounts.

## Structure

```
essynotes/
├── app/
│   ├── (site)/                 marketing pages: layout, header, footer, announce bar
│   │   ├── page.tsx             homepage
│   │   ├── privacy/, terms/, refunds/
│   ├── api/
│   │   ├── contact/route.ts             contact form -> Resend
│   │   ├── newsletter/route.ts          signup -> Kit
│   │   └── webhooks/lemonsqueezy/       order webhook -> confirmation email
│   ├── studio/[[...tool]]/      embedded Sanity Studio, own full-screen layout
│   ├── sitemap.ts, robots.ts
├── components/                  UI components
├── lib/
│   ├── sanity.ts                 Sanity client
│   ├── data.ts                   data fetchers (Sanity + Lemon Squeezy)
│   └── types.ts
├── schemas/index.ts              Sanity schema (siteSettings)
└── sanity.config.ts
```

## Deployment

Every push to `main` deploys to Vercel automatically. Env vars are set per environment (Production/Preview/Development) in the Vercel dashboard — nothing sensitive is in this repo.
