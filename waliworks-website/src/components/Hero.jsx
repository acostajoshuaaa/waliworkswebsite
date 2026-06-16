function Hero() {
  const metrics = [
    ['12+', 'service checkpoints'],
    ['2', 'hands-on owners'],
    ['6', 'core workshop tracks'],
  ];

  return (
    <section
      className="relative isolate flex min-h-[calc(100vh-64px)] overflow-hidden bg-[#f4f8ff]"
      id="home"
    >
      <img
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        src="/assets/waliworks-hero-workshop.png"
        alt=""
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(247,251,255,0.97)_0%,rgba(247,251,255,0.91)_36%,rgba(247,251,255,0.26)_70%,rgba(247,251,255,0.04)_100%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(11,39,79,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(11,39,79,0.06)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-44 bg-gradient-to-t from-[#eef6ff] to-transparent"></div>

      <div className="mx-auto grid w-[calc(100%_-_2rem)] max-w-[1120px] gap-10 py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-md border border-blue-200 bg-white/80 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-600 shadow-sm">
            Micro motorcycle workshop
          </p>
          <h1 className="mt-5 max-w-[11ch] text-5xl font-black leading-none text-[#071f45] sm:text-7xl lg:text-8xl">
            Service Every Ride. Sharpen Every Route.
          </h1>
          <p className="mt-6 max-w-[32ch] text-base font-medium leading-8 text-slate-600 sm:max-w-xl sm:text-lg">
            Waliworks, led by Joshua Acosta and Lian Reyes, helps motorcycle owners repair,
            maintain, restore, and improve their bikes through reliable workshop service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-600 px-6 font-black text-white shadow-[0_14px_32px_rgba(37,99,235,0.28)] transition hover:-translate-y-1 hover:bg-blue-500"
              href="#work"
            >
              View Workflow
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-blue-200 bg-white/78 px-6 font-black text-[#071f45] shadow-sm transition hover:-translate-y-1 hover:border-blue-400"
              href="#contact"
            >
              Book a Service
            </a>
          </div>

          <div className="mt-9 grid max-w-xl gap-3 sm:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div
                className="rounded-lg border border-blue-100 bg-white/78 p-4 shadow-[0_18px_40px_rgba(20,54,105,0.08)] backdrop-blur"
                key={label}
              >
                <p className="text-2xl font-black text-[#071f45]">{value}</p>
                <p className="mt-1 text-[0.68rem] font-extrabold uppercase leading-4 tracking-[0.12em] text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[560px] lg:block" aria-hidden="true">
          <div className="absolute bottom-10 right-0 w-[72%] rounded-lg border border-blue-100 bg-white/90 p-4 shadow-[0_28px_70px_rgba(15,43,86,0.18)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-blue-50 pb-3">
              <div>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-blue-500">Live job board</p>
                <p className="mt-1 text-lg font-black text-[#071f45]">NMAX maintenance queue</p>
              </div>
              <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">On track</span>
            </div>
            <div className="mt-4 grid gap-3">
              {['Intake complete', 'Parts verified', 'Bench work active', 'Final quality check'].map((item, index) => (
                <div className="grid grid-cols-[2rem_1fr_auto] items-center gap-3" key={item}>
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-blue-50 text-xs font-black text-blue-600">
                    {index + 1}
                  </span>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${88 - index * 14}%` }}
                    ></div>
                  </div>
                  <p className="text-xs font-black text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-7 top-8 w-64 rounded-lg border border-amber-100 bg-white/92 p-5 shadow-[0_24px_60px_rgba(120,74,10,0.12)] backdrop-blur">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-amber-600">Workshop note</p>
            <p className="mt-2 text-2xl font-black leading-tight text-[#071f45]">Clean routing before wrenching.</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Every request becomes a practical service path with repair, restoration, custom, and
              maintenance checkpoints.
            </p>
          </div>

          <div className="absolute bottom-32 left-4 w-56 rounded-lg border border-indigo-100 bg-white/88 p-4 shadow-[0_24px_60px_rgba(67,56,202,0.13)] backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500"></span>
              <span className="h-3 w-3 rounded-full bg-amber-400"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
            </div>
            <p className="mt-4 text-sm font-black uppercase tracking-[0.12em] text-slate-500">Service tracks</p>
            <p className="mt-2 text-lg font-black text-[#071f45]">Repair / Restore / Customize</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
