import { navItems, siteConfig } from "@/lib/site";
import { FacebookIcon, GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/BrandIcons";

const socialLinks = [
  { href: siteConfig.socials.github, label: "GitHub", Icon: GithubIcon },
  { href: siteConfig.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: siteConfig.socials.x, label: "X (Twitter)", Icon: XIcon },
  { href: siteConfig.socials.facebook, label: "Facebook", Icon: FacebookIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-ink-100">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-violet-200/90">{siteConfig.role}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
            Crafting fast, secure and accessible digital experiences with modern web technology.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-400">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-ink-300 transition-colors hover:text-ink-100">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-400">Connect</p>
          <ul className="mt-4 flex gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} profile (opens in a new tab)`}
                  className="glass grid h-10 w-10 place-items-center rounded-xl text-ink-300 transition hover:-translate-y-0.5 hover:text-ink-100 hover:shadow-glow-violet"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-ink-400 sm:px-6 lg:px-8">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
