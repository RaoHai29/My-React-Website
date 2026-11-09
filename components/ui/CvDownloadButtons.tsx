"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { siteConfig } from "@/lib/site";

type Variant = "hero" | "compact" | "stacked";

type CvDownloadButtonsProps = {
  /** hero: large buttons · compact: navbar size · stacked: full-width (mobile drawer) */
  variant?: Variant;
  className?: string;
  onDownload?: () => void;
};

const cvs = [
  { ...siteConfig.cv.it, flag: "IT", tone: "violet" as const },
  { ...siteConfig.cv.en, flag: "EN", tone: "cyan" as const },
];

const tones = {
  violet: {
    glow: "hover:shadow-glow-violet",
    badge: "bg-accent-violet/20 text-violet-200 ring-violet-300/30",
    icon: "text-violet-300",
    wash: "from-accent-violet/25",
  },
  cyan: {
    glow: "hover:shadow-glow-cyan",
    badge: "bg-accent-cyan/15 text-cyan-200 ring-cyan-300/30",
    icon: "text-cyan-300",
    wash: "from-accent-cyan/20",
  },
};

const sizes: Record<Variant, string> = {
  hero: "h-12 gap-3 rounded-2xl pl-3 pr-5 text-[0.95rem]",
  compact: "h-9 gap-2 rounded-xl pl-1.5 pr-3 text-sm",
  stacked: "h-12 w-full gap-3 rounded-2xl pl-3 pr-5 text-base",
};

/**
 * Glassmorphic Europass CV download group (Italian + English).
 * Renders native <a download> links so it works without JS; Framer Motion only adds hover/tap feedback.
 */
export function CvDownloadButtons({ variant = "hero", className = "", onDownload }: CvDownloadButtonsProps) {
  const isCompact = variant === "compact";

  return (
    <div
      role="group"
      aria-label="Download CV / Scarica CV"
      className={`flex ${variant === "stacked" ? "flex-col" : "flex-wrap"} gap-3 ${className}`}
    >
      {cvs.map((cv) => {
        const t = tones[cv.tone];
        return (
          <motion.a
            key={cv.flag}
            href={cv.href}
            download
            target="_blank"
            rel="noopener noreferrer"
            hrefLang={cv.lang}
            type="application/pdf"
            aria-label={cv.ariaLabel}
            onClick={onDownload}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className={`glass group relative inline-flex items-center overflow-hidden font-medium text-ink-100 transition-[box-shadow,border-color,background-color] duration-300 hover:border-white/25 hover:bg-white/[0.08] ${t.glow} ${sizes[variant]}`}
          >
            {/* soft colour wash that brightens on hover */}
            <span
              aria-hidden
              className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${t.wash} to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
            />
            <span
              aria-hidden
              className={`relative grid place-items-center rounded-lg font-mono font-semibold ring-1 ring-inset ${t.badge} ${
                isCompact ? "h-6 w-7 text-[0.65rem]" : "h-8 w-9 text-xs"
              }`}
            >
              {cv.flag}
            </span>
            <span className="relative" lang={cv.lang}>
              {isCompact ? (
                <>
                  <span className="xl:hidden">{cv.shortLabel}</span>
                  <span className="hidden xl:inline">{cv.label}</span>
                </>
              ) : (
                cv.label
              )}
            </span>
            <Download
              aria-hidden
              className={`relative transition-transform duration-300 group-hover:translate-y-0.5 ${t.icon} ${
                isCompact ? "h-3.5 w-3.5" : "h-4 w-4"
              }`}
            />
          </motion.a>
        );
      })}
    </div>
  );
}
