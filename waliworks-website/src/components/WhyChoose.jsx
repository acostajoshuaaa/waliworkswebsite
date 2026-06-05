function WhyChoose({ sellingPoints }) {
  return (
    <section className="bg-[linear-gradient(90deg,rgba(220,38,38,0.12),transparent_45%)] bg-neutral-950 py-16 sm:py-20">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">Why choose Waliworks</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
            Small workshop attention for serious motorcycle care
          </h2>
          <p className="mt-4 text-zinc-300">
            Waliworks focuses on clear inspections, practical fixes, and tidy workshop execution so
            riders know what their motorcycle needs and why.
          </p>
        </div>

        <div className="grid gap-4">
          {sellingPoints.map((point) => (
            <div
              className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-orange-400/70 hover:bg-white/[0.07]"
              key={point}
            >
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-500 font-black text-neutral-950"
                aria-hidden="true"
              >
                OK
              </span>
              <p className="m-0 font-black text-white">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
