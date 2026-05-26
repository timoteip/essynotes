import { sanityClient } from "./sanity";
import type { Product, SiteSettings } from "./types";

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
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) throw new Error(`LS API ${res.status}`);
    const json = await res.json();

    const { default: extraImages } = await import("./product-images");

    return json.data.map((p: any): Product => {
      const attrs = p.attributes;
      const price = attrs.price ?? 0;
      const thumbnailUrl: string | undefined = attrs.large_thumb_url ?? attrs.thumb_url ?? undefined;
      const extra = extraImages[p.id] ?? [];
      const images = [...(thumbnailUrl ? [thumbnailUrl] : []), ...extra];
      return {
        id: p.id,
        name: attrs.name,
        category: "Template · PDF",
        description: attrs.description ? stripHtml(attrs.description) : "",
        priceDollars: Math.floor(price / 100),
        priceCents: price % 100,
        checkoutUrl: attrs.buy_now_url ?? "",
        badge: attrs.status === "published" ? undefined : "Draft",
        thumbnailUrl,
        images: images.length > 0 ? images : undefined,
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
