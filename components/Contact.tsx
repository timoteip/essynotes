"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-ivory">
      <div className="container-site">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-16">
            <BrandInquiry />
            <Newsletter />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BrandInquiry() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [msg, setMsg] = useState("");

  useEffect(() => setMounted(true), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          turnstileToken: data["cf-turnstile-response"],
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setMsg("Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="relative p-10 md:p-14 rounded-sm overflow-hidden bg-forest text-parchment flex flex-col items-center justify-center text-center min-h-[480px] animate-fade-in">
        <span className="text-brass-light text-5xl mb-6 animate-scale-in">✦</span>
        <h3 className="font-display font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.1] -tracking-tight text-ivory">
          Your note is <em className="italic text-brass-light">on its way.</em>
        </h3>
        <p className="mt-5 font-display italic text-parchment/80 max-w-xs">
          Thank you for reaching out. Estera reads every message personally and will be in touch soon.
        </p>
        <a
          href="/#shop"
          className="mt-8 font-display uppercase tracking-widest text-[0.8rem] text-brass-light border border-brass-light/40 px-6 py-3 rounded-sm hover:bg-brass-light hover:text-ink transition-all"
        >
          Browse the shop →
        </a>
      </div>
    );
  }

  return (
    <div className="relative p-10 md:p-14 rounded-sm overflow-hidden bg-forest text-parchment">
      <span className="eyebrow !text-brass-light">
        <span className="rule-line" />
        For brands
      </span>
      <h3 className="mt-3 font-display font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.1] -tracking-tight text-ivory">
        Let's make <em className="italic text-brass-light">something</em> quiet
        together.
      </h3>
      <p className="mt-4 font-display italic text-parchment/85">
        I partner with a small number of brands each season whose values align
        with slow, intentional living. If that sounds like you, I'd love to hear
        about it.
      </p>

      <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field name="name" label="Name" required />
          <Field name="brand" label="Brand" />
        </div>
        <Field name="email" label="Email" type="email" required />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="collab-type" className="font-display italic text-[0.85rem] tracking-wider uppercase opacity-80">
            Collaboration type
          </label>
          <select
            id="collab-type"
            name="type"
            className="font-body text-[1rem] py-3.5 bg-transparent border-0 border-b border-current outline-none focus:border-brass transition-colors"
          >
            <option className="bg-forest">
              Sponsored video (TikTok / IG / YT)
            </option>
            <option className="bg-forest">Product gifting &amp; review</option>
            <option className="bg-forest">Long-term brand partnership</option>
            <option className="bg-forest">Something else</option>
          </select>
        </div>
        <Field
          name="message"
          label="Tell me about it"
          textarea
          placeholder="The more detail, the better."
        />

        {mounted && (
          <div
            className="cf-turnstile"
            data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            data-theme="dark"
          />
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-4 self-start font-display text-[0.9rem] tracking-widest uppercase px-8 py-4 rounded-sm bg-brass text-ink hover:bg-brass-light hover:-translate-y-0.5 transition-all disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send Inquiry"}
        </button>
        {status === "error" && (
          <p className="text-brass-light italic text-sm">{msg}</p>
        )}
      </form>
    </div>
  );
}

function Newsletter() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        id="newsletter"
        className="p-10 md:p-14 rounded-sm bg-cream text-ink border border-cocoa/15 flex flex-col items-center justify-center text-center min-h-[480px] animate-fade-in"
      >
        <span className="text-brass text-5xl mb-6 animate-scale-in">✦</span>
        <h3 className="font-display font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.1] -tracking-tight">
          Welcome <em className="italic">home.</em>
        </h3>
        <p className="mt-5 font-display italic text-ink/75 max-w-xs">
          Check your inbox — a quiet letter from Estera will be waiting for you, twice a month.
        </p>
      </div>
    );
  }

  return (
    <div
      id="newsletter"
      className="p-10 md:p-14 rounded-sm bg-cream text-ink border border-cocoa/15"
    >
      <span className="eyebrow !text-moss">
        <span className="rule-line" />
        The Letter
      </span>
      <h3 className="mt-3 font-display font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.1] -tracking-tight">
        A quiet <em className="italic">letter,</em> twice a month.
      </h3>
      <p className="mt-4 font-display italic">
        No algorithm. No noise. Just a slow, handwritten-feeling letter with
        what I've been reading, writing, and sitting with — delivered straight
        to your inbox.
      </p>

      <ul className="mt-8 flex flex-col gap-3 list-none">
        {[
          "Updates on latest tools used (worth buying)",
          "DIY projects + links",
          "Journal prompts / ideas",
          "Handwriting advice + tips",
          "Templates",
          "Motivation",
        ].map((p) => (
          <li key={p} className="font-body italic flex gap-3 items-baseline">
            <span className="text-brass not-italic">✦</span>
            {p}
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
        <Field
          name="name"
          label="Your name"
          placeholder="— so I can address the letter"
          required
          variant="light"
        />
        <Field
          name="email"
          label="Email"
          type="email"
          placeholder="where to send the letter"
          required
          variant="light"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-4 self-start font-display text-[0.9rem] tracking-widest uppercase px-8 py-4 rounded-sm bg-forest text-ivory hover:bg-ink hover:-translate-y-0.5 transition-all disabled:opacity-50"
        >
          {status === "sending" ? "Subscribing…" : "Join the Letter"}
        </button>
      </form>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea = false,
  required = false,
  placeholder,
  variant = "dark",
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  placeholder?: string;
  variant?: "dark" | "light";
}) {
  const cls = `font-body text-[1rem] py-3.5 bg-transparent border-0 border-b outline-none transition-colors ${
    variant === "light"
      ? "border-cocoa/30 focus:border-forest"
      : "border-current focus:border-brass"
  }`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-display italic text-[0.85rem] tracking-wider uppercase opacity-80">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          className={`${cls} resize-y min-h-[110px]`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={cls}
        />
      )}
    </div>
  );
}
