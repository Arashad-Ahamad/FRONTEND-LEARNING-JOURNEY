import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} | ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0c0c0f", color: "#ececf1" }}>
        <div style={{ fontSize: 28, color: "#a99cff" }}>{profile.role}</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 12 }}>{profile.name}</div>
        <div style={{ fontSize: 34, color: "#9a9aa8", marginTop: 24 }}>{profile.tagline}</div>
      </div>
    ),
    size,
  );
}
