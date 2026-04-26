import Link from "next/link";
import Reveal from "./Reveal";
import type { Video } from "@/lib/types";

const gradients = [
  "linear-gradient(160deg, #3d2a1b 0%, #1a1510 100%)",
  "linear-gradient(135deg, #2b3a2c 0%, #1e2a1e 100%)",
  "linear-gradient(150deg, #4a2a22 0%, #2b1814 100%)",
  "linear-gradient(170deg, #495c3f 0%, #2b3a2c 100%)",
  "linear-gradient(140deg, #b08a50 0%, #7a5d35 100%)",
  "linear-gradient(155deg, #14110d 0%, #2b3a2c 100%)",
  "linear-gradient(145deg, #3d2a1b 0%, #4a2a22 100%)",
  "linear-gradient(165deg, #1e2a1e 0%, #495c3f 100%)",
  "linear-gradient(135deg, #768665 0%, #2b3a2c 100%)",
];

export default function Portfolio({ videos }: { videos: Video[] }) {
  return (
    <section id="journal" className="py-24 md:py-36 bg-ivory">
      <div className="container-site">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <div>
              <span className="eyebrow">
                <span className="rule-line" />
                The Journal
              </span>
              <h2 className="mt-3 font-display font-light text-[clamp(2.8rem,5vw,4.2rem)] leading-none -tracking-tight">
                Recent <em className="italic text-forest">entries</em>
              </h2>
            </div>
            <p className="max-w-[30rem] font-display italic text-[1.05rem] text-cocoa">
              A selection of videos from across the desks of TikTok, Instagram,
              and YouTube. Watch, borrow, trace.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.slice(0, 9).map((v, i) => (
              <VideoCard
                key={v._id ?? i}
                video={v}
                gradient={gradients[i % gradients.length]}
              />
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="font-display italic text-[1.05rem] text-cocoa mb-6">
              All the slow, quiet, handwritten things — continue on your
              favorite platform.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <PlatformLink
                href="https://tiktok.com/@essynotes"
                label="TikTok"
              />
              <PlatformLink
                href="https://instagram.com/essynotes"
                label="Instagram"
              />
              <PlatformLink
                href="https://youtube.com/@essynotes"
                label="YouTube"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VideoCard({ video, gradient }: { video: Video; gradient: string }) {
  return (
    <Link
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[9/14] rounded-sm overflow-hidden shadow-[0_12px_30px_rgba(20,17,13,0.15)] hover:shadow-[0_24px_50px_rgba(20,17,13,0.3)] transition-all duration-500 hover:-translate-y-1.5"
    >
      <div
        className="absolute inset-0 paper-grain"
        style={{ background: gradient }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />

      {video.pinned && (
        <div className="absolute top-4 left-4 z-[2] bg-brass text-ink font-display italic text-[0.7rem] tracking-widest uppercase px-3 py-1 rounded-sm">
          Pinned
        </div>
      )}

      {/* Play button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.85] opacity-0 group-hover:opacity-100 group-hover:scale-100 w-16 h-16 rounded-full bg-ivory/10 border border-ivory/50 backdrop-blur-md flex items-center justify-center transition-all duration-400 z-[2]">
        <span className="w-0 h-0 ml-1 border-l-[14px] border-l-ivory border-y-[9px] border-y-transparent" />
      </div>

      <div className="absolute bottom-5 left-5 right-5 z-[2] text-ivory">
        <span className="block font-script text-brass-light text-[1.6rem] mb-0.5">
          n°. {video.index}
        </span>
        <h4 className="font-display font-normal text-[1.15rem] leading-snug -tracking-tight">
          {video.title}
        </h4>
        <div className="mt-2.5 font-display italic text-[0.82rem] opacity-80 flex gap-3 items-center">
          ✦ {video.plays} · {video.timeAgo}
        </div>
      </div>
    </Link>
  );
}

function PlatformLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-display uppercase tracking-widest text-[0.85rem] text-forest px-6 py-3.5 border border-forest/30 rounded-sm transition-all hover:bg-forest hover:text-ivory hover:border-forest"
    >
      {label} →
    </Link>
  );
}
