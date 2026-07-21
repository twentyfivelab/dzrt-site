import { ImageResponse } from "next/og";
import { SITE_TAGLINE } from "@/lib/constants";

export const alt = "DZRT. — Studio digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #ffe3ea 0%, #ffe9d6 45%, #ece5ff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 140, fontWeight: 700, color: "#211a24" }}>
          DZRT
          <span style={{ color: "#ec5c82" }}>.</span>
        </div>
        <div
          style={{
            marginTop: 24,
            maxWidth: 860,
            fontSize: 30,
            color: "#6b5f70",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...size },
  );
}
