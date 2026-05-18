import { Fragment } from "react";

export default function Announce({ text }: { text?: string }) {
  if (!text) return null;
  const parts = text.split("✦").map((p) => p.trim()).filter(Boolean);
  return (
    <div className="bg-forest-dark text-parchment text-center py-2.5 px-4 border-b border-brass/25 text-[0.92rem] tracking-wider font-display italic">
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="text-brass-light mx-2.5">✦</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
