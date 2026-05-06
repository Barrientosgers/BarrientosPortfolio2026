type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export function ExperienceCard({ company, role, period, bullets }: ExperienceCardProps) {
  return (
    <article className="card-surface">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{company}</h3>
          <p className="mt-1 text-base text-cyan-100">{role}</p>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
          {period}
        </span>
      </div>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300 sm:text-base">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}