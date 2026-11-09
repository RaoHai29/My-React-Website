import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

/**
 * Design tokens + glassmorphism utilities.
 * Loaded from app/globals.css via `@config "../tailwind.config.ts";` (Tailwind v4).
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#0a0a0f",
          raised: "#11111a",
        },
        // Text never goes to pure white — softened for comfortable contrast.
        ink: {
          100: "#ececf3",
          200: "#d4d4e0",
          300: "#a6a6bb",
          400: "#7d7d93",
        },
        accent: {
          violet: "#8b5cf6",
          indigo: "#6366f1",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "glass": "0 8px 32px -12px rgba(0, 0, 0, 0.6)",
        "glow-violet": "0 0 0 1px rgba(139, 92, 246, 0.35), 0 12px 48px -12px rgba(139, 92, 246, 0.55)",
        "glow-cyan": "0 0 0 1px rgba(34, 211, 238, 0.35), 0 12px 48px -12px rgba(34, 211, 238, 0.45)",
        "lift": "0 24px 64px -24px rgba(0, 0, 0, 0.85), 0 0 48px -16px rgba(99, 102, 241, 0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        // ── Glass surfaces ──────────────────────────────────────────
        ".glass-subtle": {
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px) saturate(130%)",
        },
        ".glass": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(16px) saturate(140%)",
          boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.06), 0 8px 32px -12px rgba(0, 0, 0, 0.6)",
        },
        ".glass-strong": {
          backgroundColor: "rgba(17, 17, 26, 0.72)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(24px) saturate(160%)",
        },

        // ── Gradient rim border (use with `group-hover:[--edge-opacity:1]`) ──
        ".glass-edge": {
          position: "relative",
          isolation: "isolate",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            borderRadius: "inherit",
            padding: "1px",
            background:
              "linear-gradient(135deg, rgba(167,139,250,0.7), rgba(34,211,238,0.35) 35%, rgba(255,255,255,0.04) 60%, rgba(99,102,241,0.6))",
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
            opacity: "var(--edge-opacity, 0.45)",
            transition: "opacity 400ms ease",
            zIndex: "1",
          },
        },

        // ── Typography helpers ─────────────────────────────────────
        ".text-gradient": {
          backgroundImage: "linear-gradient(110deg, #c4b5fd 0%, #818cf8 40%, #67e8f9 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        },
      });
    }),
  ],
};

export default config;
