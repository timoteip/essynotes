import Reveal from "./Reveal";

type AboutProps = {
  bio?: string;
};

export default function About({ bio }: AboutProps) {
  return (
    <section
      id="about"
      className="py-24 md:py-36"
      style={{
        background: "linear-gradient(to bottom, #f2ead6, #e6dbc1)",
      }}
    >
      <div className="container-site">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-center">
            {/* Portrait card (hardcoded — edit styles here) */}
            <div className="relative aspect-[3/4] max-w-[420px] rounded-sm overflow-hidden shadow-[0_30px_80px_rgba(20,17,13,0.3)] mx-auto md:mx-0">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #495c3f 0%, #2b3a2c 60%, #1e2a1e 100%)",
                }}
              />
              <div className="absolute inset-2.5 border border-brass/50 pointer-events-none" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-ivory p-8">
                <span className="font-script text-brass-light text-[5rem] leading-[0.9]">
                  essy.
                </span>
                <p className="font-display italic opacity-80 mt-4 tracking-wider text-[0.95rem]">
                  — est. 2022 —
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brass text-ink px-5 py-4 font-display italic tracking-wide -rotate-3 shadow-[0_8px_20px_rgba(20,17,13,0.25)]">
                <span className="eyebrow !text-cocoa">since</span>
                <strong className="block text-[1.4rem] font-medium not-italic">
                  2022
                </strong>
              </div>
            </div>

            {/* Body */}
            <div>
              <span className="eyebrow">
                <span className="rule-line" />A few words
              </span>
              <h2 className="mt-3 font-display font-light text-[clamp(2.4rem,4.5vw,3.6rem)] leading-[1.1] -tracking-tight">
                Hi, I'm{" "}
                <em className="italic text-forest">Estera</em> — and I make
                things by hand.
              </h2>
              <p className="mt-5 text-cocoa whitespace-pre-line">
                {bio ??
                  "I started essynotes in a small room with a stack of lined paper and a pen that leaked just enough to be charming. What began as a quiet journal became a corner of the internet where hundreds of thousands of people now come to slow down, write better, and find some stillness between the screens."}
              </p>

              <div className="relative my-8 pl-8 py-6 border-l border-brass">
                <span className="absolute -left-1 -top-6 font-display text-[4rem] text-brass leading-none">
                  &ldquo;
                </span>
                <div className="font-display italic text-[1.5rem] text-forest leading-[1.4]">
                  Good handwriting isn't a talent. It's a slower way of paying
                  attention.
                </div>
              </div>

              <p className="text-cocoa">
                I share daily videos about penmanship, journaling, and the small
                tools that make writing feel like coming home. This is my desk —
                pull up a chair.
              </p>

              <div className="mt-8 font-script text-forest text-[3rem] leading-none">
                — essy
              </div>
              <span className="block eyebrow mt-1">
                with love, from a quiet desk
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
