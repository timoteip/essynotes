# essy notes

A custom Next.js website for a handwriting content creator.
Moody-academic aesthetic, digital template shop, affiliate page, newsletter.

---

## Stack

| Layer | Tool | Why |
|-------|------|-----|
| Framework | **Next.js 14** (App Router) | SEO, speed, free Vercel hosting |
| Styling | **Tailwind CSS** + custom tokens | Matches V1 demo exactly |
| CMS | **Sanity** | Estera edits content at `/studio` |
| Shop | **Lemon Squeezy** | Merchant of record — handles tax, Apple Pay, PayPal, cards globally |
| Contact email | **Resend** | Generous free tier, modern API |
| Newsletter | **Kit** (ConvertKit) | Free up to 10k subs |
| Anti-spam | **Cloudflare Turnstile** | Invisible, free |
| Hosting | **Vercel** | Free tier, auto-deploy on git push |

Total fixed cost: **~$12/year** (domain only). Variable: 5% + $0.50 per sale (Lemon Squeezy).

---

## Quick start

```bash
git clone <your-repo-url> essynotes
cd essynotes
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site runs with **mock data** out of the box, so you'll see everything working before setting up any external services.

---

## Pre-launch checklist
- [ ] Real photo of Estera in About section (replace the placeholder green card in `components/About.tsx`)
- [ ] Real thumbnails on video cards (upload via Sanity)
- [ ] Real product mockup images in Lemon Squeezy
- [ ] Legal pages reviewed — `/privacy`, `/terms`, `/refunds` have placeholders; generate real ones with [Termly](https://termly.io)
- [ ] Buy your own product end-to-end with Apple Pay on a real iPhone
- [ ] Test contact + newsletter forms
- [ ] Run Lighthouse in Chrome DevTools → aim for 90+ across all four categories
- [ ] Mobile test on Estera's actual phone
- [ ] Vercel Analytics enabled (free, one click)

---

## Architecture notes

### How data flows

```
                      ┌─────────────────┐
                      │   essynotes.com │
                      │   (Next.js)     │
                      └────────┬────────┘
                               │
                 ┌─────────────┼─────────────┐
                 │             │             │
          ┌──────▼─────┐ ┌────▼──────┐ ┌────▼─────┐
          │   Sanity   │ │Lemon Sqz. │ │  Resend  │
          │  (content) │ │  (shop)   │ │  (email) │
          └────────────┘ └───────────┘ └──────────┘
```

- **Sanity** stores videos, tools, about copy — Estera edits at `/studio`
- **Lemon Squeezy** stores products, handles payments, delivers files, handles tax
- **Resend** sends brand-inquiry emails
- **Kit** stores newsletter subscribers

The Next.js site pulls from all of these at build/request time, with **60-second ISR** revalidation so content updates appear within a minute.

### Why mock fallbacks?

`lib/data.ts` returns hardcoded demo content if env vars aren't set. This means:
- The site runs locally before you create any accounts
- If Sanity goes down, the site still renders (with old content)
- You can develop new features without touching production data

### Why merchant of record (not direct Stripe)?

Selling digital goods internationally means handling VAT in 27 EU countries, UK VAT from £0, various US state taxes, Canadian GST/HST/PST, Australian GST, etc. Lemon Squeezy handles all of this for 5% + $0.50 per sale. For a solo creator, this is dramatically cheaper than hiring an accountant to file in 30+ jurisdictions.

If Estera ever launches physical products, add **Shopify** alongside for physical; keep Lemon Squeezy for digital.

---

## Project structure

```
essynotes/
├── app/
│   ├── api/
│   │   ├── contact/route.ts           Brand inquiry → Resend
│   │   ├── newsletter/route.ts        Signup → Kit
│   │   └── webhooks/lemonsqueezy/     Order tracking
│   ├── studio/[[...tool]]/            Embedded Sanity Studio
│   ├── privacy/, terms/, refunds/     Legal pages
│   ├── globals.css                    Design tokens
│   ├── layout.tsx                     Root + fonts + nav/footer
│   ├── page.tsx                       Homepage
│   ├── sitemap.ts                     SEO
│   └── robots.ts                      SEO
├── components/                        All UI components
├── lib/
│   ├── sanity.ts                      Sanity client
│   ├── data.ts                        Data fetchers + mocks
│   └── types.ts                       Shared types
├── schemas/index.ts                   Sanity content models
├── sanity.config.ts
└── .env.local.example                 All required env vars
```

---

## Deployment

Every git push to `main` auto-deploys to Vercel. Preview deploys for every PR.

To deploy manually:
```bash
npm run build   # test the production build locally
```

Environment variables must be set in Vercel → Settings → Environment Variables for all three environments (Production, Preview, Development). Never commit `.env.local`.

---

## Costs at a glance

| Service | Free tier | When it costs |
|---------|-----------|---------------|
| Vercel | 100GB bandwidth, unlimited sites | ~$20/mo if Estera goes viral (>100k visits/mo) |
| Sanity | 100k docs, 10GB bandwidth | ~$15/mo past that |
| Lemon Squeezy | Free to join | 5% + $0.50 per sale |
| Resend | 3,000 emails/month | $20/mo for 50k |
| Kit | 10,000 subscribers | $25/mo past that |
| Cloudflare Turnstile | Unlimited | Free forever |
| Domain | — | ~$12/year |

**Day-one running cost: $12/year.**

---

## When you break something

- **Build fails on Vercel** → check the build logs, 99% of the time it's a missing env var
- **Sanity edits aren't appearing** → wait 60 seconds (ISR), then hard refresh
- **Form not sending** → check Resend/Kit dashboards for errors, verify API keys in Vercel
- **Checkout not opening** → check browser console, verify Lemon Squeezy script is loading
- **Everything broken** → `git revert` the last commit, push, Vercel auto-redeploys in 30 seconds

---

## Next features to consider

Once the core site is live, natural next builds:
- **Blog** (Sanity already has a `post` schema pattern — just add one)
- **Individual product pages** (`/shop/[slug]`) with more detail, reviews, related items
- **"Recent buyers" ticker** using Lemon Squeezy webhook data
- **Pinterest-style video gallery** with native embed players
- **Member area** for course buyers (Lemon Squeezy License Keys)
- **i18n** (Romanian/English toggle, since Estera is Romanian-speaking)

---

Made slowly, one component at a time.
