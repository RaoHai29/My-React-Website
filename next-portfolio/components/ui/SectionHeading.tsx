import { Reveal } from "./Motion";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
      <p className="glass-subtle mx-auto inline-flex rounded-full px-3.5 py-1 font-mono text-xs uppercase tracking-[0.18em] text-violet-200">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-pretty leading-relaxed text-ink-300 sm:text-lg">{description}</p>}
    </Reveal>
  );
}
