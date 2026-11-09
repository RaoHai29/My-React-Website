/** Fixed ambient glow layer (violet / indigo / cyan). Pure CSS — no JS, no layout shift. */
export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-[10%] -top-[15%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.22),transparent)]" />
      <div className="absolute -right-[15%] top-[20%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.12),transparent)]" />
      <div className="absolute -bottom-[25%] left-[20%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.16),transparent)]" />
      {/* faint grid for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
    </div>
  );
}
