type ProjectCardProps = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
};

export function ProjectCard({ name, description, stack, github, live }: ProjectCardProps) {
  return (
    <article className="card-surface flex h-full flex-col">
      <div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{description}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
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
    </article>
  );
}