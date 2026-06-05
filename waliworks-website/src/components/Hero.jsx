function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-neutral-950 py-20 sm:py-24 lg:min-h-[calc(100vh-80px)] lg:py-28"
      id="home"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.22),transparent_28rem),linear-gradient(90deg,rgba(10,10,10,0.96),rgba(10,10,10,0.72)),repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_88px)]"></div>
      <div className="absolute inset-x-[-10%] bottom-0 -z-10 h-44 -skew-y-3 bg-[linear-gradient(transparent,rgba(0,0,0,0.92)),repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0_2px,transparent_2px_16px)]"></div>

      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">Micro motorcycle workshop</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-none text-white sm:text-6xl lg:text-7xl">
            Motorcycle Repair, Restoration, and Custom Workshop Service
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300">
            Waliworks, led by Joshua Acosta and Lian Reyes, helps motorcycle owners repair,
            maintain, restore, and improve their bikes through reliable workshop service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-amber-300 px-6 font-black uppercase text-neutral-950 transition hover:-translate-y-1 hover:from-orange-400 hover:to-amber-200"
              href="#work"
            >
              View Our Work
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 font-black uppercase text-white transition hover:-translate-y-1 hover:border-orange-400 hover:text-amber-300"
              href="#contact"
            >
              Book a Service
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/40">
          <div className="overflow-hidden rounded-md border border-orange-400/30 bg-black">
            <img
              className="aspect-[16/10] h-full w-full object-cover"
              src="/logo.svg"
              alt="Waliworkz premium basic maintenance logo"
            />
          </div>
          <p className="mt-5 text-center text-sm font-bold uppercase tracking-[0.18em] text-zinc-300">
            Repair / Restore / Customize / Detail
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
