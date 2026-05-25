"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#shop", label: "Shop" },
  { href: "#tools", label: "My Tools" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        <Link href="#top" className="flex items-baseline gap-1.5" onClick={() => setIsOpen(false)}>
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

        <button
          className="md:hidden text-forest text-[1.8rem] leading-none px-1"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? "×" : "≡"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-cocoa/10 bg-ivory/95 backdrop-blur-md px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="font-display uppercase text-ink text-[0.95rem] tracking-[0.14em] py-3 border-b border-cocoa/10 last:border-0 hover:text-forest transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#newsletter"
            onClick={() => setIsOpen(false)}
            className="mt-4 font-display text-ivory bg-forest px-5 py-3 text-[0.85rem] tracking-[0.18em] uppercase rounded-sm text-center transition-all hover:bg-ink"
          >
            Join the Letter
          </Link>
        </div>
      )}
    </nav>
  );
}
