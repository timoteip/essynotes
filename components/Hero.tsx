import Link from "next/link";

type HeroProps = {
  followerCounts?: {
    tiktok?: string;
    instagram?: string;
    youtube?: string;
  };
};

export default function Hero({ followerCounts }: HeroProps) {
  const tiktok = followerCounts?.tiktok ?? "243K";
  const instagram = followerCounts?.instagram ?? "52K";
  const youtube = followerCounts?.youtube ?? "22K";
  return (
    <header
      id="top"
      className="relative overflow-hidden py-28 md:py-32"
      style={{
        background: `
          radial-gradient(ellipse at 20% 30%, rgba(43, 58, 44, 0.08) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 70%, rgba(176, 138, 80, 0.1) 0%, transparent 50%),
          #f2ead6
        `,
      }}
    >
      <div className="container-site grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Copy */}
        <div>
          <span className="block font-script text-brass text-[clamp(3rem,7vw,5.2rem)] -mb-4 -translate-x-2 -rotate-3 opacity-0 animate-rise-in [animation-delay:0.2s]">
            welcome to —
          </span>
          <h1 className="display text-[clamp(3.8rem,9vw,7rem)] font-light text-ink opacity-0 animate-rise-in [animation-delay:0.45s]">
            essy<em className="italic text-forest font-normal">notes</em>
          </h1>
          <p className="mt-7 max-w-[30rem] text-[1.12rem] text-cocoa leading-[1.7] opacity-0 animate-rise-in [animation-delay:0.7s]">
            Handwriting, slow journaling, and the gentle art of keeping pages
            worth returning to. A quiet corner of the internet for people who
            still love the weight of a pen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-rise-in [animation-delay:0.9s]">
            <Link href="/#shop" className="btn btn-primary">
              Browse the Shop
            </Link>
            <Link href="/#tools" className="btn btn-ghost">
              My Links
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-10 font-display text-cocoa opacity-0 animate-fade-in [animation-delay:1.1s]">
            <Stat value={tiktok} label="on TikTok" />
            <Stat value={instagram} label="on Instagram" />
            <Stat value={youtube} label="on YouTube" />
          </div>
        </div>

        {/* Page stack visual — only shown when hero is 2-column (lg+) */}
        <div className="hidden lg:block">
          <PageStack />
        </div>
      </div>
    </header>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong className="block text-[1.8rem] font-medium text-forest -tracking-tight">
        {value}
      </strong>
      <span className="italic text-[0.85rem] tracking-wider uppercase opacity-70">
        {label}
      </span>
    </div>
  );
}

function PageStack() {
  return (
    <div className="relative h-[560px] opacity-0 animate-fade-in [animation-delay:0.3s] group max-lg:h-[440px]">
      {/* Page 1 — ruled handwriting */}
      <div
        className="absolute w-[280px] h-[360px] top-5 left-2.5 -rotate-[7deg] p-8 rounded-sm shadow-[0_2px_4px_rgba(61,42,27,0.12),0_20px_50px_rgba(20,17,13,0.25)] transition-transform duration-700 group-hover:-rotate-[9deg] group-hover:-translate-x-2 group-hover:-translate-y-1 paper-grain"
        style={{
          background: `
            repeating-linear-gradient(transparent, transparent 26px, rgba(75, 92, 63, 0.22) 26px, rgba(75, 92, 63, 0.22) 27px),
            #ebe2c9
          `,
        }}
      >
        <div className="eyebrow">N°. I</div>
        <div className="font-script text-forest text-[2.6rem] leading-[0.95] mt-2">
          the <span className="text-brass">art</span>
          <br />
          of writing
          <br />
          <em className="italic">slowly</em>
        </div>
        <div className="font-body text-cocoa text-[0.95rem] leading-[1.95] mt-4">
          Some days I write to remember.
          <br />
          Other days, I write to forget.
          <br />
          Mostly, I write to be still.
        </div>
        <div className="font-display italic text-[0.82rem] text-cocoa mt-5 tracking-wide opacity-70">
          — from the margin, march
        </div>
      </div>

      {/* Page 2 — journal entry */}
      <div
        className="absolute w-[290px] h-[380px] top-14 right-8 rotate-[5deg] p-8 z-[2] rounded-sm shadow-[0_2px_4px_rgba(61,42,27,0.12),0_20px_50px_rgba(20,17,13,0.25)] transition-transform duration-700 group-hover:rotate-[7deg] group-hover:translate-x-2 group-hover:-translate-y-2 paper-grain"
        style={{
          background: `
            repeating-linear-gradient(transparent, transparent 28px, rgba(75, 92, 63, 0.18) 28px, rgba(75, 92, 63, 0.18) 29px),
            #ebe2c9
          `,
        }}
      >
        <div className="font-display italic text-[1.05rem] text-moss uppercase tracking-[0.2em]">
          Journal entry
        </div>
        <div className="font-script text-[2.3rem] text-ink mt-4 leading-[1.1]">
          today the
          <br />
          light was <em className="italic text-brass">gold</em>
          <br />
          and everything
          <br />
          felt like a <em className="italic text-brass">poem</em>.
        </div>
        <div className="absolute bottom-5 right-6 font-script text-brass text-[2rem]">
          e.
        </div>
      </div>

      {/* Page 3 — dark card */}
      <div className="absolute w-[180px] h-[180px] bottom-7 left-20 -rotate-[3deg] bg-forest text-ivory p-6 z-[3] rounded-sm shadow-[0_2px_4px_rgba(61,42,27,0.12),0_20px_50px_rgba(20,17,13,0.25)] transition-transform duration-700 group-hover:-rotate-[1deg] group-hover:-translate-x-0.5 group-hover:-translate-y-1.5 paper-grain">
        <div className="eyebrow !text-brass-light">Now writing with</div>
        <div className="font-display italic text-[2.2rem] mt-1.5 leading-[1.1]">
          Pilot
          <br />
          Kakuno
        </div>
      </div>
    </div>
  );
}
