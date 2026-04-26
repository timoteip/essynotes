import Link from "next/link";
import Reveal from "./Reveal";
import type { Tool } from "@/lib/types";

export default function Tools({ tools }: { tools: Tool[] }) {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((t) => (
              <ToolCard key={t._id} tool={t} />
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

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="group bg-ivory p-8 rounded-sm border border-cocoa/10 hover:border-brass hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(20,17,13,0.12)] transition-all duration-400 flex flex-col">
      <div className="w-[60px] h-[60px] rounded-full bg-forest text-brass-light flex items-center justify-center font-display italic text-[1.6rem] mb-6">
        {tool.symbol ?? "✦"}
      </div>
      <span className="font-display italic text-[0.75rem] tracking-widest uppercase text-brass">
        {tool.category}
      </span>
      <h4 className="mt-1 font-display font-medium text-[1.35rem] -tracking-tight">
        {tool.name}
      </h4>
      <p className="mt-3 text-[0.92rem] text-cocoa font-body italic flex-grow">
        {tool.description}
      </p>
      <Link
        href={tool.url}
        target="_blank"
        rel="noopener sponsored"
        className="mt-6 font-display uppercase tracking-widest text-[0.82rem] text-forest inline-flex items-center gap-2"
      >
        {tool.ctaLabel ?? "Shop on Amazon"}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}
