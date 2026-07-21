import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#120e17",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            width: 15,
            height: 15,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #f77e9c 0%, #f2793e 55%, #a586f2 100%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
