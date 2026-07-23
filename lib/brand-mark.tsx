// The essynotes icon mark, used by app/apple-icon.tsx and rendered at larger
// sizes for profile pictures. Every dimension is derived from `size` so the
// proportions hold at 180px and at 2048px.
type MarkOptions = {
  // Social platforms crop profile pictures to a circle, which eats the corners
  // and leaves the mark looking bottom-heavy. The circle-safe variant drops the
  // rounded corners and keeps everything inside the inscribed circle.
  circleSafe?: boolean;
  // Scales the mark within the frame without moving it. Only applies to the
  // circle-safe variant, where the crop otherwise leaves a lot of dead margin.
  // Past roughly 1.45 the tightened gap closes entirely and the "e" lands on
  // top of the word, so treat that as the ceiling.
  zoom?: number;
  // Space between the "e" and the label, as a fraction of `size`. The two line
  // boxes already carry empty space of their own — the "e" has no descender,
  // the label no ascenders — so the visible gap runs wider than this number.
  labelGap?: number;
};

export function brandMark(
  size: number,
  { circleSafe = false, zoom = 1, labelGap = 0.06 }: MarkOptions = {}
) {
  const letterSpacing = 0.14;
  // Every circle-safe offset scales together, so zooming enlarges the mark
  // without disturbing the composition.
  const z = circleSafe ? zoom : 1;
  const eSize = size * (circleSafe ? 0.5 * z : 0.556);
  const labelSize = size * (circleSafe ? 0.085 * z : 0.089);

  return (
    <div
      style={{
        background: "#2b3a2c",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // No radius on the circle-safe variant — the platform's own circular
        // crop supplies the shape, and rounded corners would be cut off anyway.
        borderRadius: circleSafe ? 0 : size * 0.222,
        gap: circleSafe ? 0 : size * 0.022,
        // A lowercase "e" leaves empty space above it inside its line box, so a
        // geometrically centred stack reads as sitting too low. Nudge it back up.
        paddingBottom: circleSafe ? size * 0.05 * z : 0,
      }}
    >
      <span
        style={{
          color: "#b08a50",
          fontSize: eSize,
          fontFamily: "serif",
          fontStyle: "italic",
          // A line box at lineHeight 1 is far taller than the "e" drawn inside
          // it. Cropping it close means the stack can simply be centred, rather
          // than corrected afterwards with padding that overflows the box.
          lineHeight: circleSafe ? 0.62 : 1,
        }}
      >
        e
      </span>
      <span
        style={{
          color: "#c9a66b",
          fontSize: labelSize,
          fontFamily: "serif",
          letterSpacing: `${letterSpacing}em`,
          // letter-spacing trails the final character, which pulls the word
          // off-centre; pad the same amount back on the left.
          paddingLeft: labelSize * letterSpacing,
          // satori ignores negative margins on flex children, so the gap has to
          // be opened with padding rather than pulled closed with a margin.
          paddingTop: circleSafe ? size * labelGap * z : 0,
        }}
      >
        essynotes
      </span>
    </div>
  );
}
