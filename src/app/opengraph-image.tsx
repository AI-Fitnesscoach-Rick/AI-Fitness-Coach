import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Fitness Coach";
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
          justifyContent: "center",
          background: "radial-gradient(circle at 78% 30%, #2c7a16 0, #050805 42%, #010301 100%)",
          color: "#f4fff2",
          padding: 72,
          fontFamily: "Arial",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, color: "#8cff3f" }}>AI Fitness Coach</div>
        <div style={{ maxWidth: 860, marginTop: 34, fontSize: 78, fontWeight: 800, lineHeight: 0.98 }}>
          Sport consistenter met een AI coach die met je meebeweegt
        </div>
        <div style={{ marginTop: 34, fontSize: 30, color: "#cfe8c8" }}>
          Workouts, voeding en herstel afgestemd op jouw leven.
        </div>
      </div>
    ),
    size,
  );
}
