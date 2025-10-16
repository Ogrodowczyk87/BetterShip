export default function Home() {
  return (
    <section className="py-8">
      <p className="inline-flex items-center gap-2 text-xs rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1">
        🚀 React 18 • TS • Vite • Router • Tailwind
      </p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
        Witaj w <span className="underline decoration-4 decoration-slate-900 dark:decoration-white">BetterShip</span>
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-prose">
        Starter ze stronami i routingiem — gotowy do rozbudowy.
      </p>
    </section>
  );
}
