import { sanityClient } from "./sanity";
import type { Product, SiteLink, SiteSettings } from "./types";

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
// LINKS (Sanity)
// ───────────────────────────────────────
export async function getLinks(): Promise<SiteLink[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return MOCK_LINKS;

  try {
    if (!sanityClient) return MOCK_LINKS;
    const query = `*[_type == "link"] | order(order asc) {
      _id,
      name,
      category,
      description,
      href,
      cta,
      "logoUrl": logo.asset->url
    }`;
    const result = await sanityClient.fetch<SiteLink[]>(query);
    return result?.length ? result : MOCK_LINKS;
  } catch (err) {
    console.error("Sanity getLinks error:", err);
    return MOCK_LINKS;
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
  followerCounts: { tiktok: "243K", instagram: "100K", youtube: "22K" },
};

const MOCK_LINKS: SiteLink[] = [
  {
    _id: "l1",
    logoUrl: "/icons/amazon.svg",
    category: "Shopping",
    name: "Amazon Storefront",
    description: "All my favourite pens, notebooks, and desk essentials in one place.",
    href: "https://www.amazon.com/shop/essynotes?ref_=cm_sw_r_cp_ud_aipsfshop_aipsfessynotes_PMVEWM85F80EMG5TPP35",
    cta: "Visit Storefront",
  },
  {
    _id: "l2",
    logoUrl: "/icons/etsy.svg",
    category: "Templates",
    name: "Etsy — Templates",
    description: "Printable and digital journaling templates designed for slow, intentional pages.",
    href: "https://www.etsy.com/shop/EssyNotes",
    cta: "Shop Templates",
  },
  {
    _id: "l3",
    logoUrl: "/icons/goldencoil.png",
    category: "Notebooks",
    name: "Golden Coil",
    description: "Fully customisable notebooks and planners — the ones I write in every single day.",
    href: "https://www.avantlink.com/click.php?tool_type=cl&merchant_id=c8f278e0-ea2a-4c50-a6c2-20684bc9eb36&website_id=c81bf3d2-ef25-45cf-bb14-c6f8d27d4fdd&url=https%3A%2F%2Fwww.goldencoil.com",
    cta: "Shop Golden Coil",
  },
  {
    _id: "l4",
    logoUrl: "/icons/ellington.webp",
    category: "Pens",
    name: "Ellington Pens",
    description: "Beautiful, well-crafted pens worth writing home about. My go-to for gifting.",
    href: "https://www.ellingtonpens.com/?sca_ref=9928678.XBz8aGz9tr",
    cta: "Shop Ellington",
  },
  {
    _id: "l5",
    logoUrl: "/icons/amazon.svg",
    category: "Pens",
    name: "Pilot Kakuno",
    description: "The pen I'm writing with right now. Affordable, smooth, and surprisingly lovely to hold.",
    href: "https://amzn.to/3PQAfoU",
    cta: "Shop on Amazon",
  },
];

const MOCK_PRODUCTS: Product[] = [
  { id: "1", name: "The Handwriting Starter", category: "Workbook · 48 pages", description: "From messy scrawl to steady lines in twenty-eight days. Printable, rewritable, made to be returned to.", priceDollars: 14, priceCents: 0, checkoutUrl: "#", badge: "Best Seller" },
  { id: "2", name: "Slow Morning Journal", category: "Journal · 30 pages", description: "A month of quiet journaling prompts, designed to be written with coffee, light, and no hurry.", priceDollars: 9, priceCents: 0, checkoutUrl: "#", badge: "New" },
  { id: "3", name: "Cornell, But Prettier", category: "Study · 12 templates", description: "The classic study template, softened at the edges. Ideal for lectures, books, and slow thinking.", priceDollars: 7, priceCents: 0, checkoutUrl: "#" },
  { id: "4", name: "Annotated Reading Kit", category: "Reader · 20 pages", description: "Margins, flags, and symbols for readers who still underline. Includes my personal annotation key.", priceDollars: 11, priceCents: 0, checkoutUrl: "#" },
  { id: "5", name: "The Everything Bundle", category: "Bundle · Everything", description: "Every template on the desk, quietly discounted, all delivered to your inbox in one tidy folder.", priceDollars: 32, priceCents: 0, checkoutUrl: "#", badge: "Bundle" },
  { id: "6", name: "Cursive Revival", category: "Practice · 36 pages", description: "Bring back the looping, joined hand of old letters — one stroke, one day at a time.", priceDollars: 12, priceCents: 0, checkoutUrl: "#" },
];
