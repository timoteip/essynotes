import Link from "next/link";

const cols = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "#about" },
      { label: "The Journal", href: "#journal" },
      { label: "Shop", href: "#shop" },
      { label: "Tools", href: "#tools" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "TikTok", href: "https://tiktok.com/@essynotes" },
      { label: "Instagram", href: "https://instagram.com/essynotes" },
      { label: "YouTube", href: "https://youtube.com/@essynotes" },
    ],
  },
  {
    title: "The fine print",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Refunds", href: "/refunds" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment pt-24 pb-8 border-t border-brass/30">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 pb-12 border-b border-ivory/10">
          <div>
            <span className="font-script text-brass-light text-[3.4rem] leading-none">
              essy notes
            </span>
            <p className="mt-2 font-display italic opacity-70 max-w-[24rem]">
              A quiet corner of the internet for handwriting, journaling, and
              the gentle art of slowing down. Made with care, one page at a
              time.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h5 className="font-display italic text-[0.8rem] tracking-widest uppercase text-brass-light mb-5">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-3 list-none">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      {...(l.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                      className="font-display opacity-75 hover:opacity-100 hover:text-brass-light transition-all"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 flex justify-between items-center flex-wrap gap-4 font-display italic text-[0.85rem] opacity-60">
          <div>© 2026 essy notes · made slowly, in a quiet room.</div>
          <div className="flex gap-3">
            {[
              { l: "Tt", h: "https://tiktok.com/@essynotes" },
              { l: "Ig", h: "https://instagram.com/essynotes" },
              { l: "Yt", h: "https://youtube.com/@essynotes" },
              { l: "@", h: "#contact" },
            ].map((s) => (
              <Link
                key={s.l}
                href={s.h}
                {...(s.h.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                className="w-9 h-9 border border-brass/40 rounded-full flex items-center justify-center font-display font-medium text-[0.85rem] opacity-100 hover:bg-brass hover:text-ink hover:border-brass transition-all"
              >
                {s.l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
