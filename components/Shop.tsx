"use client";

import { useEffect } from "react";
import Reveal from "./Reveal";
import type { Product } from "@/lib/types";

const gradients = [
  "linear-gradient(150deg, #2b3a2c, #14110d)",
  "linear-gradient(135deg, #3d2a1b, #2b1814)",
  "linear-gradient(160deg, #4a2a22, #1e2a1e)",
  "linear-gradient(140deg, #495c3f, #2b3a2c)",
  "linear-gradient(170deg, #b08a50, #7a5d35)",
  "linear-gradient(150deg, #768665, #3d2a1b)",
];

// Augment window for Lemon Squeezy's global
declare global {
  interface Window {
    createLemonSqueezy?: () => void;
    LemonSqueezy?: {
      Setup: (opts: { eventHandler?: (event: { event: string }) => void }) => void;
      Url: { Open: (url: string) => void; Close: () => void };
      Refresh: () => void;
    };
  }
}

export default function Shop({ products }: { products: Product[] }) {
  useEffect(() => {
    // Load Lemon Squeezy's overlay script once
    if (document.getElementById("ls-script")) return;
    const s = document.createElement("script");
    s.id = "ls-script";
    s.src = "https://assets.lemonsqueezy.com/lemon.js";
    s.defer = true;
    s.onload = () => window.createLemonSqueezy?.();
    document.body.appendChild(s);
  }, []);

  const openCheckout = (url: string) => {
    window.LemonSqueezy?.Url.Open(url);
  };

  return (
    <section
      id="shop"
      className="relative py-24 md:py-36 overflow-hidden bg-forest-dark text-parchment"
    >
      {/* Ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 80% 20%, rgba(176, 138, 80, 0.1), transparent 50%),
            radial-gradient(ellipse at 10% 90%, rgba(118, 134, 101, 0.1), transparent 55%)
          `,
        }}
      />

      <div className="container-site relative z-[1]">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <div>
              <span className="eyebrow !text-brass-light">
                <span className="rule-line" />
                The Stationery Desk
              </span>
              <h2 className="mt-3 font-display font-light text-[clamp(2.8rem,5vw,4.2rem)] leading-none -tracking-tight text-ivory">
                Digital{" "}
                <em className="italic text-brass-light">templates</em>, printed
                with love.
              </h2>
            </div>
            <p className="max-w-[30rem] font-display italic text-[1.05rem] text-parchment/80">
              Handwriting guides, journaling layouts, and study templates
              designed to be printed, used, and slightly stained with coffee.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                gradient={gradients[i % gradients.length]}
                onBuy={openCheckout}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  gradient,
  onBuy,
}: {
  product: Product;
  gradient: string;
  onBuy: (url: string) => void;
}) {
  return (
    <div className="bg-ivory text-ink rounded-sm overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 transition-transform duration-500 flex flex-col">
      <div
        className="relative aspect-[4/5] paper-grain"
        style={{ background: gradient }}
      >
        {product.badge && (
          <div className="absolute top-4 right-4 bg-ivory/15 backdrop-blur-md text-ivory font-display italic text-[0.78rem] tracking-widest px-3 py-1 rounded-sm uppercase">
            {product.badge}
          </div>
        )}
        <div className="absolute inset-6 flex flex-col justify-between text-ivory">
          <span className="font-script text-brass-light text-[2.5rem] leading-[0.9]">
            the
          </span>
          <h4 className="font-display italic text-[1.4rem] leading-snug -tracking-tight text-ivory">
            {product.name}
          </h4>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <span className="eyebrow">{product.category}</span>
        <h3 className="mt-2 font-display font-medium text-[1.5rem] -tracking-tight">
          {product.name}
        </h3>
        <p className="mt-2 text-[0.95rem] text-cocoa font-body italic flex-grow">
          {product.description}
        </p>

        <div className="mt-6 pt-5 border-t border-cocoa/15 flex justify-between items-center">
          <div className="font-display text-[1.8rem] text-forest -tracking-tight">
            ${product.priceDollars}
            <small className="ml-0.5 text-[0.85rem] italic text-cocoa opacity-70 not-italic">
              .{product.priceCents.toString().padStart(2, "0")}
            </small>
          </div>
          <button
            onClick={() => onBuy(product.checkoutUrl)}
            className="font-display text-ivory bg-forest text-[0.82rem] tracking-widest uppercase px-4 py-3 rounded-sm transition-colors hover:bg-ink"
          >
            Add to Desk
          </button>
        </div>
      </div>
    </div>
  );
}
