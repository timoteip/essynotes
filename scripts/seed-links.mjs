import { createClient } from "next-sanity";
import { readFileSync } from "fs";
import { resolve } from "path";

// Load .env.local manually
const envPath = resolve(process.cwd(), ".env.local");
const env = Object.fromEntries(
  readFileSync(envPath, "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => l.split("=").map((s) => s.trim()))
    .filter(([k]) => k)
    .map(([k, ...v]) => [k, v.join("=").replace(/^["']|["']$/g, "")])
);

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
  useCdn: false,
  token: env.SANITY_API_WRITE_TOKEN,
});

const links = [
  {
    _type: "link",
    _id: "link-amazon-storefront",
    order: 1,
    name: "Amazon Storefront",
    category: "Shopping",
    description: "All my favourite pens, notebooks, and desk essentials in one place.",
    href: "https://www.amazon.com/shop/essynotes?ref_=cm_sw_r_cp_ud_aipsfshop_aipsfessynotes_PMVEWM85F80EMG5TPP35",
    cta: "Visit Storefront",
  },
  {
    _type: "link",
    _id: "link-etsy",
    order: 2,
    name: "Etsy — Templates",
    category: "Templates",
    description: "Printable and digital journaling templates designed for slow, intentional pages.",
    href: "https://essynotes.etsy.com",
    cta: "Shop Templates",
  },
  {
    _type: "link",
    _id: "link-golden-coil",
    order: 3,
    name: "Golden Coil",
    category: "Notebooks",
    description: "Fully customisable notebooks and planners — the ones I write in every single day.",
    href: "https://www.avantlink.com/click.php?tool_type=cl&merchant_id=c8f278e0-ea2a-4c50-a6c2-20684bc9eb36&website_id=c81bf3d2-ef25-45cf-bb14-c6f8d27d4fdd&url=https%3A%2F%2Fwww.goldencoil.com",
    cta: "Shop Golden Coil",
  },
  {
    _type: "link",
    _id: "link-ellington",
    order: 4,
    name: "Ellington Pens",
    category: "Pens",
    description: "Beautiful, well-crafted pens worth writing home about. My go-to for gifting.",
    href: "https://www.ellingtonpens.com/?sca_ref=9928678.XBz8aGz9tr",
    cta: "Shop Ellington",
  },
  {
    _type: "link",
    _id: "link-pilot-kakuno",
    order: 5,
    name: "Pilot Kakuno",
    category: "Pens",
    description: "The pen I'm writing with right now. Affordable, smooth, and surprisingly lovely to hold.",
    href: "https://amzn.to/3PQAfoU",
    cta: "Shop on Amazon",
  },
];

console.log(`Seeding ${links.length} links to Sanity (${env.NEXT_PUBLIC_SANITY_PROJECT_ID})...`);

for (const link of links) {
  try {
    await client.createOrReplace(link);
    console.log(`  ✓ ${link.name}`);
  } catch (err) {
    console.error(`  ✗ ${link.name}: ${err.message}`);
  }
}

console.log("Done.");
