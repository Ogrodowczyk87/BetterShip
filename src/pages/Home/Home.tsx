export default function Home() {
  return (
    <section className="relative grid gap-8 py-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-14">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          We build modern web applications.
        </h1>
        <p className="mt-4 max-w-xl text-zinc-400">
          Get a quote, communicate clearly, and launch with confidence.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-2xl bg-white/5  hover:bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition ">
            Get a quote
          </button>
          <button className="rounded-2xl bg-white/5  hover:bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition ">
            View portfolio
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <div className="mb-3 flex items-center gap-2 text-xs text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
              <span>App.ux</span>
              <span className="ml-auto">24/100</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/15">
                Learn more
              </button>
              <button className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/15">
                Less: more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
