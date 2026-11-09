export const dynamic = "force-static";

import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview card (Open Graph / Twitter), rendered once at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 15% 10%, rgba(139,92,246,0.45), transparent 45%), radial-gradient(circle at 90% 85%, rgba(34,211,238,0.30), transparent 45%), #0a0a0f",
          color: "#ececf3",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "10px 22px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.06)",
            fontSize: 26,
            color: "#c4b5fd",
          }}
        >
          Portfolio · Europass CV (EN / IT)
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -2 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 40, marginTop: 12, color: "#a6a6bb" }}>{siteConfig.role}</div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 26, color: "#d4d4e0" }}>
          {["React", "Next.js", "WordPress", "WooCommerce", "Cybersecurity"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
