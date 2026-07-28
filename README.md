# Essynotes

A website for a handwriting creator. It shows off her work and sells digital downloads like templates and workbooks.

## What it does

- Homepage with her bio, follower counts, and an announcement bar at the top
- Shop page listing the digital products for sale
- Handles payments and delivers the files after someone buys
- Sends the buyer a confirmation email after an order
- Contact form that emails her directly
- Newsletter signup so visitors can get updates
- Blocks spam bots on both forms
- Text on the site (bio, announcement bar, follower counts) can be edited from a built-in editor at `/studio` — no code changes needed
- Privacy, terms, and refund pages

## Built with

- **Next.js** – Builds the website.
- **TypeScript** – Helps catch coding mistakes.
- **Tailwind CSS** – Styles the website.
- **Sanity** – Lets site text be edited without touching code. The editor is built into the site at `/studio`.
- **Lemon Squeezy** – Handles checkout, payments, and sales tax for the shop.
- **Resend** – Sends the emails (contact form and order confirmations).
- **Kit** – Manages the newsletter mailing list.
- **Cloudflare Turnstile** – Blocks spam bots from submitting the forms.
- **Vercel** – Hosts the site. New code goes live automatically once it's pushed.

## Getting started

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

The site runs on sample data right away. You only need to fill in the keys in `.env.local` when connecting the real accounts (Sanity, Lemon Squeezy, Resend, Kit, Turnstile).
