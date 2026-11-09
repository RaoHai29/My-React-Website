import { BarChart3, Code2, ShieldCheck } from "lucide-react";
import { services, skills } from "@/lib/site";
import { Reveal } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = { code: Code2, chart: BarChart3, shield: ShieldCheck } as const;

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        id="services-title"
        eyebrow="What I do"
        title="Services built for performance & security"
        description="Comprehensive digital solutions — web development, data analysis and cybersecurity — delivered with modern tooling and industry best practice."
      />

      <ul className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <li key={s.title} className="h-full">
              <Reveal
                delay={i * 0.08}
                className="glass glass-edge group h-full rounded-3xl p-7 transition-[translate,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:[--edge-opacity:1]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent-violet/30 to-accent-cyan/20 ring-1 ring-inset ring-white/15">
                  <Icon aria-hidden className="h-5 w-5 text-ink-100" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink-100">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-300">{s.description}</p>
                <ul aria-label={`${s.title} technologies`} className="mt-6 flex flex-wrap gap-1.5">
                  {s.tech.map((t) => (
                    <li key={t} className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[0.7rem] text-ink-300">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <Reveal className="glass-subtle mt-10 rounded-3xl p-6 sm:p-8">
        <h3 className="text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-400">Technologies I work with</h3>
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-ink-200 transition-colors hover:border-violet-300/40 hover:text-ink-100"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
