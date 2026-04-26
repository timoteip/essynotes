"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#journal", label: "The Journal" },
  { href: "#shop", label: "Shop" },
  { href: "#tools", label: "My Tools" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-cocoa/10">
      <div
        className={`container-site flex items-center justify-between transition-all ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="#top" className="flex items-baseline gap-1.5">
          <span className="font-script text-forest text-[2.3rem] leading-none translate-y-1">
            essy
          </span>
          <span className="font-display italic text-cocoa/70 text-[0.82rem] tracking-[0.3em] uppercase">
            notes
          </span>
        </Link>

        <ul className="hidden md:flex gap-10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative font-display uppercase text-ink text-[0.95rem] tracking-[0.14em] transition-colors hover:text-forest"
              >
                {l.label}
                <span className="absolute left-0 right-0 -bottom-1.5 h-px bg-brass scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#newsletter"
          className="hidden md:inline-block font-display text-ivory bg-forest px-5 py-3 text-[0.85rem] tracking-[0.18em] uppercase rounded-sm transition-all hover:bg-ink hover:-translate-y-0.5"
        >
          Join the Letter
        </Link>

        <button className="md:hidden text-forest text-2xl" aria-label="Menu">
          ≡
        </button>
      </div>
    </nav>
  );
}
