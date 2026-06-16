function WorkGallery({ projects }) {
  return (
    <section className="bg-[#eef6ff] py-16 sm:py-24" id="work">
      <div className="mx-auto w-[calc(100%_-_2rem)] max-w-[1120px]">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Waliworks workspace</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#071f45] sm:text-5xl">
            A single service desk for every motorcycle request
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Inspired by the reference's product dashboard feel, this section frames Waliworks as a
            calm, trackable workshop service rather than a random repair counter.
          </p>
        </div>

        <div className="mt-10 rounded-lg border border-blue-100 bg-white p-4 shadow-[0_28px_70px_rgba(20,54,105,0.1)] sm:p-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-300"></span>
              <span className="h-3 w-3 rounded-full bg-amber-300"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-300"></span>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-500">Waliworks service board</p>
          </div>

          <div className="grid gap-4 pt-5 lg:grid-cols-[13rem_1fr]">
            <aside className="hidden rounded-md bg-slate-50 p-4 lg:block">
              {['Requests', 'Inspection', 'Parts', 'Bench work', 'Handover'].map((item, index) => (
                <div
                  className={`mb-2 rounded-md px-3 py-2 text-sm font-black ${
                    index === 0 ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500'
                  }`}
                  key={item}
                >
                  {item}
                </div>
              ))}
            </aside>

            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-4">
                {['New request', 'Diagnosing', 'In service', 'Ready'].map((item, index) => (
                  <div className="rounded-md border border-slate-100 bg-slate-50 p-4" key={item}>
                    <p className="text-2xl font-black text-[#071f45]">{index + 2}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-slate-500">{item}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1fr_16rem]">
                <div className="rounded-md border border-slate-100 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-black text-[#071f45]">Active service routing</p>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-600">
                      Today
                    </span>
                  </div>
                  <div className="grid gap-3">
                    {projects.slice(0, 4).map((project, index) => (
                      <div className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3" key={project.title}>
                        <span className="grid h-10 w-10 place-items-center rounded-md bg-blue-50 text-xs font-black text-blue-600">
                          {project.badge.replace('Step ', '')}
                        </span>
                        <div>
                          <p className="font-black text-[#071f45]">{project.title}</p>
                          <p className="mt-1 text-sm text-slate-500">{project.description}</p>
                        </div>
                        <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 sm:inline-flex">
                          {index === 3 ? 'Check' : 'Live'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-md bg-[#071f45] p-5 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Priority lane</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight">Brake service before style work.</h3>
                  <p className="mt-3 text-sm leading-6 text-blue-100">
                    Safety-critical repairs are surfaced first, then restoration and custom work can follow.
                  </p>
                  <div className="mt-5 grid gap-2">
                    {['Safety', 'Reliability', 'Finish'].map((item) => (
                      <div className="flex items-center justify-between rounded-md bg-white/8 px-3 py-2" key={item}>
                        <span className="text-sm font-bold text-blue-50">{item}</span>
                        <span className="h-2 w-16 rounded-full bg-blue-300"></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              className="rounded-lg border border-blue-100 bg-white p-5 shadow-[0_18px_48px_rgba(20,54,105,0.08)] transition hover:-translate-y-1 hover:border-blue-300"
              key={project.title}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`rounded-md px-3 py-2 text-xs font-black uppercase tracking-[0.14em] ${
                    index % 3 === 1
                      ? 'bg-amber-50 text-amber-700'
                      : index % 3 === 2
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  {project.badge}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#071f45] text-sm font-black text-white">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-black text-[#071f45]">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkGallery;
