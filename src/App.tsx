import {
  aboutCopy,
  beyondEngineering,
  contact,
  experiences,
  heroStats,
  navigation,
  projects,
  skillGroups,
} from './data/site';
import { SectionHeading } from './components/SectionHeading';
import { SkillCard } from './components/SkillCard';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';

function App() {
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-hero-radial" />
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-[28rem] -z-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="focus-ring text-sm font-semibold uppercase tracking-[0.28em] text-white">
            Gerson Barrientos
          </a>
          <nav className="hidden gap-6 lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${contact.email}`}
            className="focus-ring rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:border-cyan-300/40 hover:bg-cyan-300/15"
          >
            Let&apos;s connect
          </a>
        </div>
      </header>

      <main id="top">
        <section className="section-shell grid items-center gap-12 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:pt-24">
          <div className="space-y-8 animate-fadeUp">
            <div className="space-y-5">
              <span className="eyebrow">Software Engineer | AI Systems Engineer | Cloud & Reliability</span>
              <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Building reliable systems that make hard problems feel tractable.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I build reliable software systems with experience in distributed systems, cloud platforms, QA automation, and AI-powered applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Projects
              </a>
              <a
                href={resumeHref}
                download
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                Download Resume
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                GitHub
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.value} className="glass-panel rounded-3xl p-4">
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.12),transparent_35%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  Available for opportunities
                </span>
                <span className="text-sm text-slate-400">Redmond, WA</span>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Focus</p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  Engineering systems that are calm, observable, and easy to trust.
                </p>
              </div>
              <div className="grid gap-3">
                {['Reliable production systems', 'AI-powered workflows', 'Cloud and QA discipline'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm leading-6 text-slate-300">
                Recruiters and hiring managers can scan this page quickly: background, skills, experience, projects, and contact options are all surfaced above the fold or within one scroll.
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="section-shell scroll-mt-24">
          <SectionHeading
            eyebrow="About Me"
            title="Warm, practical, and focused on reliable delivery."
            description={aboutCopy}
          />
        </section>

        <section id="skills" className="section-shell scroll-mt-24">
          <SectionHeading
            eyebrow="Skills"
            title="Technical depth across software, cloud, testing, and AI."
            description="The goal here is clarity: a recruiter should be able to see your strongest areas immediately, and a hiring manager should be able to map them to the role in seconds."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <SkillCard key={group.title} title={group.title} skills={group.skills} />
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell scroll-mt-24">
          <SectionHeading
            eyebrow="Experience"
            title="Impact focused roles across support, quality, and engineering."
            description="Each card is written to emphasize reliability, debugging, cloud systems, testing, and collaboration."
          />
          <div className="mt-10 grid gap-6">
            {experiences.map((item) => (
              <ExperienceCard key={item.company} {...item} />
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell scroll-mt-24">
          <SectionHeading
            eyebrow="Projects"
            title="Featured work you can tailor later."
            description="These cards are intentionally placeholder-friendly, so you can update the product names, descriptions, links, and stacks without restructuring the page."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </section>

        <section id="beyond" className="section-shell scroll-mt-24">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="card-surface flex items-start justify-between gap-4">
              <div>
                <span className="eyebrow">Beyond Engineering</span>
                <h2 className="section-title mt-4">Endurance mindset.</h2>
              </div>
              <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                Discipline
              </div>
            </div>
            <div className="card-surface">
              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                {beyondEngineering}
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell scroll-mt-24 pb-28">
          <div className="card-surface grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow">Contact</span>
              <h2 className="section-title mt-4">Let&apos;s connect.</h2>
              <p className="section-copy">
                If you are hiring for software engineering, AI systems, cloud, QA automation, or reliability work, I would be glad to talk.
              </p>
            </div>
            <div className="grid gap-4 text-sm sm:text-base">
              <a className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10" href={`mailto:${contact.email}`}>
                <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">Email</span>
                <span className="mt-1 block">{contact.email}</span>
              </a>
              <a className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10" href={contact.linkedin} target="_blank" rel="noreferrer">
                <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">LinkedIn</span>
                <span className="mt-1 block">linkedin.com/in/gersonbarrientos</span>
              </a>
              <a className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10" href={contact.github} target="_blank" rel="noreferrer">
                <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">GitHub</span>
                <span className="mt-1 block">github.com/your-github</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;