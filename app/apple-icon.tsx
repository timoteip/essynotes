import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: "40px",
          gap: "4px",
        }}
      >
        <span
          style={{
            color: "#b08a50",
            fontSize: "100px",
            fontFamily: "serif",
            fontStyle: "italic",
            lineHeight: 1,
          }}
        >
          e
        </span>
        <span
          style={{
            color: "#c9a66b",
            fontSize: "18px",
            fontFamily: "serif",
            letterSpacing: "0.25em",
          }}
        >
          notes
        </span>
      </div>
    ),
    { ...size }
  );
}
