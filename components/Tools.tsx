import Link from "next/link";
import Reveal from "./Reveal";

const tools = [
  {
    symbol: "☆",
    category: "Shopping",
    name: "Amazon Storefront",
    description: "All my favourite pens, notebooks, and desk essentials in one place.",
    href: "https://www.amazon.com/shop/essynotes?ref_=cm_sw_r_cp_ud_aipsfshop_aipsfessynotes_PMVEWM85F80EMG5TPP35",
    cta: "Visit Storefront",
  },
  {
    symbol: "✉",
    category: "Templates",
    name: "Etsy — Templates",
    description: "Printable and digital journaling templates designed for slow, intentional pages.",
    href: "https://www.etsy.com/shop/EssyNotes",
    cta: "Shop Templates",
  },
  {
    symbol: "◎",
    category: "Notebooks",
    name: "Golden Coil",
    description: "Fully customisable notebooks and planners — the ones I write in every single day.",
    href: "https://www.avantlink.com/click.php?tool_type=cl&merchant_id=c8f278e0-ea2a-4c50-a6c2-20684bc9eb36&website_id=c81bf3d2-ef25-45cf-bb14-c6f8d27d4fdd&url=https%3A%2F%2Fwww.goldencoil.com",
    cta: "Shop Golden Coil",
  },
  {
    symbol: "✦",
    category: "Social",
    name: "Lemon8",
    description: "Follow along on Lemon8 for daily handwriting inspiration and journaling ideas.",
    href: "https://www.lemon8-app.com/essynotes",
    cta: "Follow on Lemon8",
  },
  {
    symbol: "✍",
    category: "Writing Tools",
    name: "Paperpal",
    description: "An AI writing companion that helps you write more clearly, one sentence at a time.",
    href: "https://paperpal.com/?utm_source=1stcollab&utm_campaign=essynotes",
    cta: "Try Paperpal",
  },
  {
    symbol: "∞",
    category: "Pens",
    name: "Ellington Pens",
    description: "Beautiful, well-crafted pens worth writing home about. My go-to for gifting.",
    href: "https://www.ellingtonpens.com/?sca_ref=9928678.XBz8aGz9tr",
    cta: "Shop Ellington",
  },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 md:py-36 bg-parchment">
      <div className="container-site">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <div>
              <span className="eyebrow">
                <span className="rule-line" />
                Tools I swear by
              </span>
              <h2 className="mt-3 font-display font-light text-[clamp(2.8rem,5vw,4.2rem)] leading-none -tracking-tight">
                What's <em className="italic text-forest">on the desk</em>.
              </h2>
            </div>
            <p className="max-w-[30rem] font-display italic text-[1.05rem] text-cocoa">
              The pens, notebooks, and small objects I reach for daily. Links
              below are affiliate — I only recommend what I actually use.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t) => (
              <div
                key={t.name}
                className="group bg-ivory p-8 rounded-sm border border-cocoa/10 hover:border-brass hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(20,17,13,0.12)] transition-all duration-400 flex flex-col"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-forest text-brass-light flex items-center justify-center font-display italic text-[1.6rem] mb-6">
                  {t.symbol}
                </div>
                <span className="font-display italic text-[0.75rem] tracking-widest uppercase text-brass">
                  {t.category}
                </span>
                <h4 className="mt-1 font-display font-medium text-[1.35rem] -tracking-tight">
                  {t.name}
                </h4>
                <p className="mt-3 text-[0.92rem] text-cocoa font-body italic flex-grow">
                  {t.description}
                </p>
                <Link
                  href={t.href}
                  target="_blank"
                  rel="noopener sponsored"
                  className="mt-6 font-display uppercase tracking-widest text-[0.82rem] text-forest inline-flex items-center gap-2"
                >
                  {t.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-16 text-center font-display italic text-cocoa/65 text-[0.88rem]">
            — Some links above are affiliate. It helps keep the desk lit. Thank
            you for reading. —
          </p>
        </Reveal>
      </div>
    </section>
  );
}
