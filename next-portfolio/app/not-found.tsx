import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-xl flex-col items-center justify-center px-4 pt-24 text-center">
      <p className="font-mono text-sm text-violet-200">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-ink-100 sm:text-4xl">Page not found</h1>
      <p className="mt-3 text-ink-300">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="glass mt-8 rounded-xl px-5 py-3 text-sm font-medium text-ink-100 hover:bg-white/10">
        Back to home
      </Link>
    </section>
  );
}
