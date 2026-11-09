import Image from "next/image";
import { ShieldCheck, Code2 } from "lucide-react";
import profile from "@/assets/images/profile.webp";
import { siteConfig, stats } from "@/lib/site";
import { FadeIn } from "@/components/ui/Motion";
import { CvDownloadButtons } from "@/components/ui/CvDownloadButtons";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/BrandIcons";

const heroSocials = [
  { href: siteConfig.socials.github, label: "GitHub", Icon: GithubIcon },
  { href: siteConfig.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: siteConfig.socials.facebook, label: "Facebook", Icon: FacebookIcon },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:pt-32"
    >
      {/* ── Copy ─────────────────────────────────────────────── */}
      <div className="order-2 lg:order-1">
        <FadeIn>
          <p className="glass-subtle inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-ink-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Assalam O Alaikum 👋
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1
            id="hero-title"
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink-100 sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            I&apos;m <span className="text-gradient">{siteConfig.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-violet-200/90 sm:text-xl">{siteConfig.role}</p>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-ink-300 sm:text-lg">{siteConfig.bio}</p>
        </FadeIn>

        <FadeIn delay={0.24} className="mt-8">
          <CvDownloadButtons variant="hero" />
        </FadeIn>

        <FadeIn delay={0.3} className="mt-6 flex items-center gap-4">
          <a href="#contact" className="text-sm font-medium text-ink-200 underline-offset-4 transition hover:text-ink-100 hover:underline">
            Let&apos;s work together →
          </a>
          <span aria-hidden className="h-4 w-px bg-white/15" />
          <ul className="flex gap-2">
            {heroSocials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} profile (opens in a new tab)`}
                  className="glass grid h-9 w-9 place-items-center rounded-lg text-ink-300 transition hover:-translate-y-0.5 hover:text-ink-100"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.38}>
          <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass-subtle flex flex-col rounded-2xl px-4 py-4">
                <dt className="text-xs text-ink-400">{s.label}</dt>
                <dd className="order-first text-2xl font-semibold tracking-tight text-ink-100">{s.value}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>

      {/* ── Portrait ─────────────────────────────────────────── */}
      <FadeIn delay={0.1} y={24} className="order-1 mx-auto w-full max-w-[18rem] sm:max-w-sm lg:order-2 lg:max-w-none">
        <div className="relative">
          <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent-violet/40 via-accent-indigo/20 to-accent-cyan/30 blur-3xl" />
          <div className="glass glass-edge relative rounded-[2rem] p-2.5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src={profile}
                alt={`Illustrated portrait of ${siteConfig.name}`}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 384px, 288px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="glass-strong absolute -left-4 bottom-10 hidden animate-float-slow items-center gap-2 rounded-2xl px-4 py-3 text-sm text-ink-100 sm:flex">
            <Code2 aria-hidden className="h-4 w-4 text-cyan-300" /> React · Next.js · WordPress
          </div>
          <div className="glass-strong absolute -right-3 top-8 hidden animate-float-slow items-center gap-2 rounded-2xl px-4 py-3 text-sm text-ink-100 [animation-delay:-3s] sm:flex">
            <ShieldCheck aria-hidden className="h-4 w-4 text-violet-300" /> Security-first
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
