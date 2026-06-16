function WhyChoose({ sellingPoints }) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid w-[calc(100%_-_2rem)] max-w-[1120px] gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Why choose Waliworks</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#071f45] sm:text-5xl">
            Small workshop attention for serious motorcycle care
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Waliworks focuses on clear inspections, practical fixes, and tidy workshop execution so
            riders know what their motorcycle needs and why.
          </p>
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            {[
              ['Owner-led', 'Every job is handled by the people accountable for the shop.'],
              ['Road-minded', 'Recommendations favor reliability, safety, and daily usability.'],
            ].map(([title, text]) => (
              <div className="rounded-lg border border-blue-100 bg-[#f8fbff] p-5" key={title}>
                <p className="text-lg font-black text-[#071f45]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {sellingPoints.map((point, index) => (
            <div
              className="flex items-center gap-4 rounded-lg border border-blue-100 bg-[#f8fbff] p-5 transition hover:border-blue-300 hover:bg-white"
              key={point}
            >
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-black text-white ${
                  index % 3 === 1 ? 'bg-amber-500' : index % 3 === 2 ? 'bg-emerald-500' : 'bg-blue-600'
                }`}
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <p className="m-0 font-black text-[#071f45]">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
