function BeforeAfter({ transformations }) {
  return (
    <section className="bg-neutral-900 py-16 sm:py-20" id="before-after">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">Before and after</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
            Motorcycle transformations
          </h2>
          <p className="mt-4 text-zinc-300">
            Show customers the condition the bike arrived in and the workshop result after service.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {transformations.map((item, index) => (
            <article
              className="rounded-lg border border-white/10 bg-neutral-950/70 p-4 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/70"
              key={item.title}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="relative">
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-black/75 px-3 py-1 text-xs font-black uppercase text-white">
                    Before
                  </span>
                  <div className="relative grid min-h-60 place-items-center overflow-hidden rounded-md bg-[linear-gradient(135deg,rgba(82,82,82,0.8),rgba(24,24,27,0.95)),repeating-linear-gradient(135deg,rgba(255,255,255,0.07)_0_2px,transparent_2px_16px)] after:absolute after:inset-5 after:rounded-md after:border after:border-dashed after:border-white/25">
                    <span className="relative z-10 rounded-md bg-black/55 px-4 py-2 text-sm font-black uppercase text-zinc-200">
                      Before Photo {index + 1}
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-amber-300 px-3 py-1 text-xs font-black uppercase text-neutral-950">
                    After
                  </span>
                  <div className="relative grid min-h-60 place-items-center overflow-hidden rounded-md bg-[linear-gradient(135deg,rgba(251,191,36,0.42),rgba(249,115,22,0.22)),repeating-linear-gradient(135deg,rgba(255,255,255,0.1)_0_2px,transparent_2px_16px)] after:absolute after:inset-5 after:rounded-md after:border after:border-dashed after:border-white/30">
                    <span className="relative z-10 rounded-md bg-black/55 px-4 py-2 text-sm font-black uppercase text-amber-100">
                      After Photo {index + 1}
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-2 text-zinc-300">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
