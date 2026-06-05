function Services({ services }) {
  return (
    <section className="bg-neutral-900 py-16 sm:py-20" id="services">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">Workshop services</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
            Service for everyday riders and custom builds
          </h2>
          <p className="mt-4 text-zinc-300">
            From quick inspections to complete transformations, every job is handled with a clear
            plan and a clean finish.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              className="rounded-lg border border-white/10 bg-neutral-950/70 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/70 hover:bg-neutral-950"
              key={service.title}
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-md border border-orange-400/50 bg-orange-500/15 font-black text-amber-300"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-black text-white">{service.title}</h3>
              <p className="mt-3 text-zinc-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
