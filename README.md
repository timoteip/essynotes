# essynotes

A custom Next.js website for a handwriting content creator.
Moody-academic aesthetic, digital template shop, affiliate page, newsletter.

---

## Stack

| Layer | Tool | Why |
|-------|------|-----|
| Framework | **Next.js 14** (App Router) | SEO, speed, free Vercel hosting |
| Styling | **Tailwind CSS** + custom tokens | Matches the design exactly |
| CMS | **Sanity** | Edits announce bar, bio, follower counts at `/studio` |
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

Open [http://localhost:3000](http://localhost:3000) — the site runs with mock data out of the box before setting up any external services.

---

## Pre-launch checklist
- [ ] Real photo of Estera in About section (replace the placeholder card in `components/About.tsx`)
- [ ] Product images uploaded in Lemon Squeezy (used automatically via the API)
- [ ] Legal pages reviewed — `/privacy`, `/terms`, `/refunds`
- [ ] Buy your own product end-to-end on a real device
- [ ] Test contact + newsletter forms
- [ ] Run Lighthouse → aim for 90+ across all categories
- [ ] Mobile test on a real phone
- [ ] Vercel Analytics enabled (free, one click in Vercel dashboard)

---

## Architecture

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
          │ (settings) │ │  (shop)   │ │  (email) │
          └────────────┘ └───────────┘ └──────────┘
```

- **Sanity** stores site settings (announce bar, bio, follower counts) — edited at `/studio`
- **Lemon Squeezy** stores products, handles payments, delivers files, handles tax
- **Resend** sends brand-inquiry emails
- **Kit** stores newsletter subscribers

The Next.js site pulls from all of these at build/request time with **5-minute ISR** revalidation.

### Why merchant of record (not direct Stripe)?

Selling digital goods internationally means handling VAT in 27 EU countries, UK VAT from £0, US state taxes, Canadian GST/HST/PST, and more. Lemon Squeezy handles all of this for 5% + $0.50 per sale — dramatically cheaper than filing in 30+ jurisdictions.

---

## Project structure

```
essynotes/
├── app/
│   ├── api/
│   │   ├── contact/route.ts           Brand inquiry → Resend
│   │   └── newsletter/route.ts        Signup → Kit
│   ├── studio/[[...tool]]/            Embedded Sanity Studio
│   ├── privacy/, terms/, refunds/     Legal pages
│   ├── globals.css                    Design tokens + animations
│   ├── layout.tsx                     Root layout + JSON-LD + fonts
│   ├── page.tsx                       Homepage
│   ├── sitemap.ts                     SEO
│   └── robots.ts                      SEO
├── components/                        All UI components
├── lib/
│   ├── sanity.ts                      Sanity client
│   ├── data.ts                        Data fetchers (Sanity + Lemon Squeezy)
│   ├── product-images.ts              Extra product image URLs
│   └── types.ts                       Shared types
├── schemas/index.ts                   Sanity schema (siteSettings)
├── public/icons/                      Tool/brand logos
├── sanity.config.ts
└── .env.local.example                 All required env vars
```

---

## Deployment

Every git push to `main` auto-deploys to Vercel.

```bash
npm run build   # test the production build locally
```

All env vars must be set in Vercel → Settings → Environment Variables for Production, Preview, and Development. Never commit `.env.local`.

---

## Costs at a glance

| Service | Free tier | When it costs |
|---------|-----------|---------------|
| Vercel | 100GB bandwidth, unlimited sites | ~$20/mo past 100k visits/mo |
| Sanity | 100k docs, 10GB bandwidth | ~$15/mo past that |
| Lemon Squeezy | Free to join | 5% + $0.50 per sale |
| Resend | 3,000 emails/month | $20/mo for 50k |
| Kit | 10,000 subscribers | $25/mo past that |
| Cloudflare Turnstile | Unlimited | Free forever |
| Domain | — | ~$12/year |

**Day-one running cost: $12/year.**

---

## Troubleshooting

- **Build fails on Vercel** → check build logs, usually a missing env var
- **Sanity edits not appearing** → wait 5 minutes (ISR), then hard refresh
- **Form not sending** → check Resend/Kit dashboards, verify API keys in Vercel
- **Checkout not opening** → check browser console, verify Lemon Squeezy script is loading
- **Everything broken** → `git revert HEAD`, push — Vercel redeploys in 30 seconds
