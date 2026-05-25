import { sanityClient } from "./sanity";
import type { Video, Tool, Product, SiteSettings } from "./types";

// ───────────────────────────────────────
// VIDEOS (Sanity)
// ───────────────────────────────────────
export async function getVideos(): Promise<Video[]> {
  // Graceful fallback if Sanity isn't configured yet
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return MOCK_VIDEOS;

  try {
    if (!sanityClient) return MOCK_VIDEOS;
    const query = `*[_type == "video"] | order(pinned desc, publishedAt desc) [0...12] {
      "_id": _id,
      "index": index,
      title,
      url,
      platform,
      plays,
      timeAgo,
      pinned,
      "thumbnailUrl": thumbnail.asset->url
    }`;
    const result = await sanityClient.fetch<Video[]>(query);
    return result.length ? result : MOCK_VIDEOS;
  } catch (err) {
    console.error("Sanity getVideos error:", err);
    return MOCK_VIDEOS;
  }
}

// ───────────────────────────────────────
// TOOLS (Sanity)
// ───────────────────────────────────────
export async function getTools(): Promise<Tool[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return MOCK_TOOLS;

  try {
    if (!sanityClient) return MOCK_TOOLS;
    const query = `*[_type == "tool"] | order(order asc) {
      "_id": _id,
      name,
      category,
      description,
      url,
      symbol,
      ctaLabel
    }`;
    const result = await sanityClient.fetch<Tool[]>(query);
    return result.length ? result : MOCK_TOOLS;
  } catch (err) {
    console.error("Sanity getTools error:", err);
    return MOCK_TOOLS;
  }
}

// ───────────────────────────────────────
// SITE SETTINGS (Sanity)
// ───────────────────────────────────────
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return MOCK_SITE_SETTINGS;

  try {
    if (!sanityClient) return MOCK_SITE_SETTINGS;
    const query = `*[_type == "siteSettings"][0]{
      announceBar,
      bioShort,
      followerCounts
    }`;
    const result = await sanityClient.fetch<SiteSettings | null>(query);
    return result ?? MOCK_SITE_SETTINGS;
  } catch (err) {
    console.error("Sanity getSiteSettings error:", err);
    return MOCK_SITE_SETTINGS;
  }
}

// ───────────────────────────────────────
// PRODUCTS (Lemon Squeezy)
// ───────────────────────────────────────
export async function getProducts(): Promise<Product[]> {
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  const storeId = process.env.LEMONSQUEEZY_STORE_ID;
  if (!apiKey || !storeId) return MOCK_PRODUCTS;

  try {
    const res = await fetch(
      `https://api.lemonsqueezy.com/v1/products?filter[store_id]=${storeId}`,
      {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          Authorization: `Bearer ${apiKey}`,
        },
        next: { revalidate: 300 }, // cache for 5 minutes
      }
    );
    if (!res.ok) throw new Error(`LS API ${res.status}`);
    const json = await res.json();

    return json.data.map((p: any): Product => {
      const attrs = p.attributes;
      const price = attrs.price ?? 0; // cents
      return {
        id: p.id,
        name: attrs.name,
        category: attrs.description ? stripHtml(attrs.description).slice(0, 40) : "Template · PDF",
        description: attrs.description ? stripHtml(attrs.description) : "",
        priceDollars: Math.floor(price / 100),
        priceCents: price % 100,
        checkoutUrl: attrs.buy_now_url ?? "",
        badge: attrs.status === "published" ? undefined : "Draft",
      };
    });
  } catch (err) {
    console.error("Lemon Squeezy getProducts error:", err);
    return MOCK_PRODUCTS;
  }
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

// ───────────────────────────────────────
// MOCK DATA — used until Sanity/LS are wired up
// ───────────────────────────────────────
const MOCK_VIDEOS: Video[] = [
  { _id: "1", index: 1, title: "POV: you're watching me take notes in class", url: "#", platform: "tiktok", plays: "5.9M plays", timeAgo: "3 days", pinned: true },
  { _id: "2", index: 2, title: "The pace people think I write at", url: "#", platform: "tiktok", plays: "17.9M plays", timeAgo: "1 wk", pinned: true },
  { _id: "3", index: 3, title: "My handwriting at the start of notes", url: "#", platform: "instagram", plays: "7.8M plays", timeAgo: "2 wks", pinned: true },
  { _id: "4", index: 4, title: "3 pens I can't stop writing with", url: "#", platform: "youtube", plays: "2.1K plays", timeAgo: "3 wks" },
  { _id: "5", index: 5, title: "Fixing your handwriting in 60 seconds", url: "#", platform: "tiktok", plays: "6.2K plays", timeAgo: "4 wks" },
  { _id: "6", index: 6, title: "How to take notes you'll actually re-read", url: "#", platform: "youtube", plays: "1.1K plays", timeAgo: "1 mo" },
  { _id: "7", index: 7, title: "A desk setup for slow mornings", url: "#", platform: "instagram", plays: "4.3K plays", timeAgo: "1 mo" },
  { _id: "8", index: 8, title: "Every pen I own, rated honestly", url: "#", platform: "tiktok", plays: "2.8K plays", timeAgo: "2 mo" },
  { _id: "9", index: 9, title: "A study morning, from 6am to noon", url: "#", platform: "youtube", plays: "950 plays", timeAgo: "2 mo" },
];

const MOCK_TOOLS: Tool[] = [
  { _id: "t1", name: "Pilot Kakuno", category: "Fountain Pen", description: "The pen I hand to anyone starting out. Light, smooth, forgiving — a little smiley face on the nib.", url: "#", symbol: "✍", ctaLabel: "Shop on Amazon" },
  { _id: "t2", name: "Writech Rolling Ball", category: "Gel Pen", description: "My everyday pens for color-coded notes. Thin, reliable, and the 36-pack is worth every cent.", url: "#", symbol: "✦" },
  { _id: "t3", name: "Golden Coil", category: "Planner", description: "Custom-made planners on heavy paper. I've used one every year since 2023 — and yes, it shows.", url: "#", symbol: "❦", ctaLabel: "Visit Golden Coil" },
  { _id: "t4", name: "Leuchtturm1917", category: "Notebook", description: "The workhorse. Numbered pages, dot grid, and a ribbon that still feels romantic after ten journals.", url: "#", symbol: "❧" },
  { _id: "t5", name: "The $0 TEMU Upgrade", category: "Desk", description: "My full under-$60 desk setup. Warm lights, quiet trays, a small plant. See the full video for links.", url: "#", symbol: "✧", ctaLabel: "Watch the video" },
  { _id: "t6", name: "Iroshizuku Tsuki-yo", category: "Ink", description: "A deep midnight-blue ink from Japan that dries a little shimmery and reads like a secret.", url: "#", symbol: "✒" },
  { _id: "t7", name: "Blackwing 602", category: "Pencil", description: "Firm, dark, and elegant. The pencil for long reading sessions and quiet margin notes.", url: "#", symbol: "✎" },
  { _id: "t8", name: "Written Word", category: "Calligraphy", description: "Where I learned modern calligraphy. Their free starter session is the single best hour I've spent.", url: "#", symbol: "❈", ctaLabel: "Claim Free Session" },
];

const MOCK_SITE_SETTINGS: SiteSettings = {
  announceBar:
    "New handwriting starter kit just dropped ✦ free shipping on orders over $40 ✦ welcome to the desk",
  bioShort:
    "I started essynotes in a small room with a stack of lined paper and a pen that leaked just enough to be charming. What began as a quiet journal became a corner of the internet where hundreds of thousands of people now come to slow down, write better, and find some stillness between the screens.",
  followerCounts: { tiktok: "243K", instagram: "52K", youtube: "22K" },
};

const MOCK_PRODUCTS: Product[] = [
  { id: "1", name: "The Handwriting Starter", category: "Workbook · 48 pages", description: "From messy scrawl to steady lines in twenty-eight days. Printable, rewritable, made to be returned to.", priceDollars: 14, priceCents: 0, checkoutUrl: "#", badge: "Best Seller" },
  { id: "2", name: "Slow Morning Journal", category: "Journal · 30 pages", description: "A month of quiet journaling prompts, designed to be written with coffee, light, and no hurry.", priceDollars: 9, priceCents: 0, checkoutUrl: "#", badge: "New" },
  { id: "3", name: "Cornell, But Prettier", category: "Study · 12 templates", description: "The classic study template, softened at the edges. Ideal for lectures, books, and slow thinking.", priceDollars: 7, priceCents: 0, checkoutUrl: "#" },
  { id: "4", name: "Annotated Reading Kit", category: "Reader · 20 pages", description: "Margins, flags, and symbols for readers who still underline. Includes my personal annotation key.", priceDollars: 11, priceCents: 0, checkoutUrl: "#" },
  { id: "5", name: "The Everything Bundle", category: "Bundle · Everything", description: "Every template on the desk, quietly discounted, all delivered to your inbox in one tidy folder.", priceDollars: 32, priceCents: 0, checkoutUrl: "#", badge: "Bundle" },
  { id: "6", name: "Cursive Revival", category: "Practice · 36 pages", description: "Bring back the looping, joined hand of old letters — one stroke, one day at a time.", priceDollars: 12, priceCents: 0, checkoutUrl: "#" },
];
