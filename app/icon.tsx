import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2b3a2c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        <span
          style={{
            color: "#b08a50",
            fontSize: "22px",
            fontFamily: "serif",
            fontStyle: "italic",
            lineHeight: 1,
          }}
        >
          e
        </span>
      </div>
    ),
    { ...size }
  );
}
