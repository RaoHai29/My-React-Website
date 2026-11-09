"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, ShoppingBag, Sparkles } from "lucide-react";
import type { Project } from "@/lib/projects";

type FeaturedProjectCardProps = {
  project: Project;
};

/** High-priority featured client project card (glass panel, gradient rim, hover elevation). */
export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const host = project.url ? new URL(project.url).host : undefined;

  return (
    <motion.article
      aria-labelledby={`${project.slug}-title`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      className="glass glass-edge group rounded-3xl p-3 transition-shadow duration-500 hover:shadow-lift hover:[--edge-opacity:1] sm:p-4"
    >
      <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        {/* ── Preview thumbnail ─────────────────────────────── */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open the live ${project.title} website in a new tab`}
          tabIndex={-1}
          className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-canvas-raised"
        >
          {/* browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 truncate rounded-md bg-white/[0.06] px-3 py-1 font-mono text-[0.7rem] text-ink-300">
              {host}
            </span>
          </div>

          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[22rem] lg:flex-1">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} website homepage`}
                fill
                placeholder="blur"
                sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            ) : (
              <BrandPreview title={project.title} />
            )}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span
              aria-hidden
              className="glass absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-ink-100 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            >
              Visit site <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </a>

        {/* ── Content ───────────────────────────────────────── */}
        <div className="flex flex-col justify-center px-2 pb-4 sm:px-3 lg:py-6 lg:pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-violet/25 to-accent-cyan/20 px-3 py-1 text-xs font-semibold text-violet-100 ring-1 ring-inset ring-violet-300/30">
              <Sparkles aria-hidden className="h-3.5 w-3.5" />
              Featured client project
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-300">
              <ShoppingBag aria-hidden className="h-3.5 w-3.5" />
              {project.category}
            </span>
          </div>

          <h3
            id={`${project.slug}-title`}
            className="mt-4 text-2xl font-semibold tracking-tight text-ink-100 sm:text-3xl lg:text-4xl"
          >
            {project.title}
          </h3>

          <p className="mt-4 text-pretty leading-relaxed text-ink-300 sm:text-[1.05rem]">{project.description}</p>

          <ul aria-label="Technology stack" className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="glass-subtle rounded-lg px-3 py-1.5 font-mono text-xs text-ink-200 transition-colors duration-300 group-hover:border-white/15"
              >
                {tech}
              </li>
            ))}
          </ul>

          {project.url && (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-indigo px-5 py-3 text-sm font-semibold text-white shadow-glow-violet transition-[filter] hover:brightness-110"
            >
              View live site
              <ExternalLink aria-hidden className="h-4 w-4" />
              <span className="sr-only">(opens {host} in a new tab)</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/** Styled fallback preview used until a real screenshot is provided. */
function BrandPreview({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(120%_90%_at_20%_10%,#3b2a4f_0%,#1a1424_45%,#0f0d16_100%)]">
      <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-amber-200/10 blur-3xl" />

      {/* mock storefront */}
      <div className="relative flex h-full flex-col p-5 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg italic tracking-wide text-rose-100/90 sm:text-xl">{title}</span>
          <div aria-hidden className="hidden gap-3 sm:flex">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-1.5 w-8 rounded-full bg-white/15" />
            ))}
          </div>
        </div>
        <div aria-hidden className="mt-auto grid grid-cols-3 gap-3 sm:gap-4">
          {["from-rose-300/40", "from-amber-200/30", "from-violet-300/35"].map((c, i) => (
            <div
              key={i}
              className="glass-subtle rounded-xl p-2 transition-transform duration-700 group-hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`aspect-[3/4] rounded-lg bg-gradient-to-b ${c} to-transparent`} />
              <div className="mt-2 h-1.5 w-3/4 rounded-full bg-white/20" />
              <div className="mt-1.5 h-1.5 w-1/3 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
