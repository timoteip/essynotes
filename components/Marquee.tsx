const words = [
  "slow pages",
  "better handwriting",
  "honest stationery",
  "the art of sitting still",
  "one line at a time",
];

export default function Marquee() {
  // Duplicate so the scroll loops seamlessly
  const doubled = [...words, ...words];

  return (
    <div
      className="bg-forest text-parchment py-6 overflow-hidden border-y border-brass/30"
      aria-hidden="true"
    >
      <div className="flex gap-12 animate-scroll-x whitespace-nowrap">
        {doubled.map((w, i) => (
          <span
            key={i}
            className="font-display italic text-[1.3rem] tracking-wider inline-flex items-center gap-12"
          >
            {w}
            <span className="text-brass-light">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
