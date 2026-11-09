"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { CvDownloadButtons } from "@/components/ui/CvDownloadButtons";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

type SectionId = (typeof navItems)[number]["id"];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Drawer: lock page scroll + close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(10, 10, 15, 0.62)" : "rgba(10, 10, 15, 0)",
          borderColor: scrolled ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0)",
          backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "blur(0px) saturate(100%)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b"
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:px-8 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <a
            href="#home"
            className="group flex items-center gap-2 text-lg font-semibold tracking-tight text-ink-100"
            aria-label={`${siteConfig.name} — back to top`}
          >
            <span className="glass grid h-9 w-9 place-items-center rounded-xl font-mono text-sm text-gradient">
              R
            </span>
            <span>
              {siteConfig.shortName}
              <span className="text-accent-violet">.</span>
            </span>
          </a>

          <ul className="glass-subtle hidden items-center gap-1 rounded-full p-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block rounded-full px-4 py-1.5 text-sm transition-colors ${
                      isActive ? "text-ink-100" : "text-ink-300 hover:text-ink-100"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.08]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <CvDownloadButtons variant="compact" className="hidden lg:flex" />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              className="glass grid h-10 w-10 place-items-center rounded-xl text-ink-100 transition hover:bg-white/10 md:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile drawer ─────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
              aria-hidden
            />
            <motion.div
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="glass-strong fixed inset-y-0 right-0 z-[70] flex w-[min(22rem,88vw)] flex-col rounded-l-3xl border-r-0 p-6 md:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-ink-100">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  autoFocus
                  className="glass grid h-10 w-10 place-items-center rounded-xl text-ink-100"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <ul className="mt-8 space-y-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === item.id ? "true" : undefined}
                      className={`block rounded-xl px-4 py-3 text-lg transition-colors ${
                        active === item.id ? "bg-white/[0.07] text-ink-100" : "text-ink-300 hover:bg-white/5 hover:text-ink-100"
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto space-y-6">
                <CvDownloadButtons variant="stacked" onDownload={() => setOpen(false)} />
                <div className="flex gap-3">
                  <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="glass grid h-10 w-10 place-items-center rounded-xl text-ink-300 hover:text-ink-100">
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="glass grid h-10 w-10 place-items-center rounded-xl text-ink-300 hover:text-ink-100">
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
