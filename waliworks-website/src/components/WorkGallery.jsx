function WorkGallery({ projects }) {
  return (
    <section className="bg-neutral-950 py-16 sm:py-20" id="work">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">Our work</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
            Previous client projects
          </h2>
          <p className="mt-4 text-zinc-300">
            These placeholders are ready for real motorcycle photos, project shots, and customer
            transformation images.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              className="overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/70"
              key={project.title}
            >
              <div className="relative grid min-h-56 place-items-center overflow-hidden bg-[linear-gradient(135deg,rgba(249,115,22,0.35),rgba(220,38,38,0.12)),repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0_2px,transparent_2px_15px)] after:absolute after:inset-5 after:rounded-md after:border after:border-dashed after:border-white/30">
                <span className="relative z-10 rounded-md bg-black/55 px-4 py-2 text-sm font-black uppercase text-amber-100">
                  Project Photo {index + 1}
                </span>
              </div>
              <div className="p-5">
                <span className="inline-flex rounded-full bg-amber-300 px-3 py-1 text-xs font-black uppercase text-neutral-950">
                  {project.badge}
                </span>
                <h3 className="mt-4 text-xl font-black text-white">{project.title}</h3>
                <p className="mt-3 text-zinc-300">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkGallery;
