function Services({ services }) {
  return (
    <section className="bg-[#f4f8ff] py-16 sm:py-24" id="services">
      <div className="mx-auto w-[calc(100%_-_2rem)] max-w-[1120px]">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Core service layers</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#071f45] sm:text-5xl">
            Advanced motorcycle care without the workshop guesswork
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            From quick inspections to complete transformations, every job is handled with a clear
            plan and a clean finish.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              className="group relative overflow-hidden rounded-lg border border-blue-100 bg-white p-6 shadow-[0_18px_48px_rgba(20,54,105,0.08)] transition hover:-translate-y-1 hover:border-blue-300"
              key={service.title}
            >
              <div className="absolute right-4 top-4 text-6xl font-black leading-none text-slate-100 transition group-hover:text-blue-50">
                0{index + 1}
              </div>
              <div
                className={`relative grid h-12 w-12 place-items-center rounded-md border font-black ${
                  index % 3 === 1
                    ? 'border-amber-100 bg-amber-50 text-amber-600'
                    : index % 3 === 2
                      ? 'border-emerald-100 bg-emerald-50 text-emerald-600'
                      : 'border-blue-100 bg-blue-50 text-blue-600'
                }`}
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-black text-[#071f45]">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              <div className="mt-5 h-1.5 rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${
                    index % 3 === 1 ? 'bg-amber-400' : index % 3 === 2 ? 'bg-emerald-400' : 'bg-blue-500'
                  }`}
                  style={{ width: `${62 + index * 5}%` }}
                ></div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-lg border border-blue-100 bg-white p-4 shadow-[0_18px_48px_rgba(20,54,105,0.07)] md:grid-cols-[0.9fr_1.1fr] md:p-6">
          <div className="rounded-md bg-[#071f45] p-6 text-white">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">Workshop workspace</p>
            <h3 className="mt-3 text-2xl font-black leading-tight">One simple board for repair decisions.</h3>
            <p className="mt-3 leading-7 text-blue-100">
              The goal is simple: riders should know what is happening, why it matters, and what the
              next best service step is.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {['Diagnosis notes', 'Parts status', 'Repair priority', 'Handover checklist'].map((item, index) => (
              <div className="rounded-md border border-slate-100 bg-slate-50 p-4" key={item}>
                <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-400">Module {index + 1}</p>
                <p className="mt-2 font-black text-[#071f45]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
