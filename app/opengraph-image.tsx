import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "essy notes — handwriting, slow living, intentional pages";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2b3a2c",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "1px solid rgba(176, 138, 80, 0.3)",
            borderRadius: "4px",
          }}
        />

        <div
          style={{
            color: "#b08a50",
            fontSize: "28px",
            letterSpacing: "0.6em",
            marginBottom: "40px",
          }}
        >
          ✦ · ✦
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
            color: "#f2ead6",
            fontSize: "100px",
            fontWeight: 300,
            fontFamily: "serif",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          <span>essy</span>
          <span style={{ fontStyle: "italic", color: "#e6dbc1" }}>notes</span>
        </div>

        <div
          style={{
            color: "#c9a66b",
            fontSize: "22px",
            fontFamily: "serif",
            fontStyle: "italic",
            marginTop: "36px",
            letterSpacing: "0.08em",
          }}
        >
          handwriting · slow living · intentional pages
        </div>
      </div>
    ),
    { ...size }
  );
}
