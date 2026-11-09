"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Wrapper = project.url ? "a" : "div";
  const linkProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 24, delay: (index % 3) * 0.06 }}
      className="h-full"
    >
      <Wrapper
        {...linkProps}
        className="glass glass-edge group flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-500 hover:shadow-lift hover:[--edge-opacity:0.9]"
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-canvas-raised">
          {project.image && (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              placeholder="blur"
              sizes="(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}
          <span className="glass-strong absolute left-3 top-3 rounded-full px-2.5 py-1 text-[0.7rem] font-medium text-ink-200">
            {project.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-ink-100">{project.title}</h3>
            {project.url ? (
              <ArrowUpRight
                aria-hidden
                className="mt-1 h-4 w-4 shrink-0 text-ink-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
              />
            ) : (
              <Lock aria-hidden className="mt-1 h-3.5 w-3.5 shrink-0 text-ink-400" />
            )}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-300">{project.description}</p>
          <ul aria-label="Technologies" className="mt-auto flex flex-wrap gap-1.5 pt-4">
            {project.tech.map((t) => (
              <li key={t} className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[0.7rem] text-ink-300">
                {t}
              </li>
            ))}
          </ul>
          {project.url ? (
            <span className="sr-only">(opens in a new tab)</span>
          ) : (
            <span className="sr-only">(not publicly deployed)</span>
          )}
        </div>
      </Wrapper>
    </motion.li>
  );
}
