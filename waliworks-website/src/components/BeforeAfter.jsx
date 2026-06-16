function BeforeAfter({ transformations }) {
  const stages = ['Intake', 'Diagnosis', 'Bench work', 'Handover'];

  return (
    <section className="bg-[#f4f8ff] py-16 sm:py-24" id="before-after">
      <div className="mx-auto grid w-[calc(100%_-_2rem)] max-w-[1120px] gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Service routing flow</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#071f45] sm:text-5xl">
            Interactive routing from rider concern to road-ready handover
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            The page now explains how a request moves through the shop, echoing the reference's
            process-driven layout while staying grounded in motorcycle service.
          </p>

          <div className="mt-8 rounded-lg border border-blue-100 bg-white p-5 shadow-[0_24px_70px_rgba(20,54,105,0.1)]">
            <div className="flex items-center gap-3 border-b border-blue-50 pb-5">
              {stages.map((stage, index) => (
                <div className="flex flex-1 items-center gap-3" key={stage}>
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-black ${
                      index === 0 ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="hidden text-xs font-black uppercase tracking-[0.12em] text-slate-500 sm:block">
                    {stage}
                  </span>
                  {index < stages.length - 1 && <span className="h-1 flex-1 rounded-full bg-blue-100"></span>}
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_16rem]">
              <div className="rounded-md border border-blue-100 bg-[#f8fbff] p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-500">Step 01</p>
                <h3 className="mt-2 text-2xl font-black text-[#071f45]">Document the motorcycle issue</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Record rider concerns, photos, current condition, requested service, and any parts
                  already available for the job.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {['Photos', 'Bike model', 'Symptoms'].map((item, index) => (
                    <div className="rounded-md border border-blue-100 bg-white p-4" key={item}>
                      <p className="text-xs font-bold text-slate-500">{item}</p>
                      <div className="mt-3 h-2 rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${
                            index === 1 ? 'w-3/4 bg-amber-400' : index === 2 ? 'w-1/2 bg-emerald-400' : 'w-2/3 bg-blue-500'
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-md border border-slate-100 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Current queue</p>
                <div className="mt-4 space-y-3">
                  {[
                    ['Brake pads', 'High'],
                    ['Oil service', 'Ready'],
                    ['Body panel', 'Queued'],
                  ].map(([item, status]) => (
                    <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-3" key={item}>
                      <span className="text-sm font-black text-[#071f45]">{item}</span>
                      <span className="text-xs font-black text-blue-600">{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button
                className="min-h-11 rounded-md border border-blue-100 bg-white px-5 font-black text-slate-500"
                type="button"
              >
                Previous Step
              </button>
              <button className="min-h-11 rounded-md bg-blue-600 px-5 font-black text-white" type="button">
                Next Step
              </button>
            </div>
          </div>
        </div>

        <aside className="rounded-lg border border-blue-100 bg-white p-6 shadow-[0_18px_48px_rgba(20,54,105,0.08)]">
          <h3 className="text-2xl font-black text-[#071f45]">Key routing architecture</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            A workshop flow that helps the owners prioritize safety, parts readiness, finish quality,
            and customer communication.
          </p>
          <div className="mt-5 space-y-5">
            {transformations.map((item, index) => (
              <div className="border-l-2 border-blue-100 pl-4" key={item.title}>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-500">Route {index + 1}</p>
                <h4 className="mt-1 font-black text-[#071f45]">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.caption}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default BeforeAfter;
