type ProjectCardProps = {
  name: string;
  description: string;
  stack: string[];
  status: string;
  focus: string[];
  github: string;
  live: string;
  featured?: boolean;
};

export function ProjectCard({
  name,
  description,
  stack,
  status,
  focus,
  github,
  live,
  featured = false,
}: ProjectCardProps) {
  return (
    <article className={`card-surface flex h-full flex-col ${featured ? 'gap-6 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-8' : ''}`}>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            {status}
          </span>
          {featured ? (
            <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
              Featured
            </span>
          ) : null}
        </div>
        <h3 className={`${featured ? 'mt-4 text-2xl sm:text-3xl' : 'mt-4 text-xl'} font-semibold text-white`}>
          {name}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">{description}</p>
      </div>

      <div className={featured ? 'space-y-5' : 'mt-6'}>
        <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">What it shows</p>
          <ul className="space-y-2 text-sm leading-6 text-slate-200">
            {focus.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="focus-ring inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            href={live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}