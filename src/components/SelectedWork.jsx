import { ArrowUpRight } from 'lucide-react'
import { selectedWork, projects } from '../data'
import FunnelBrandVisual from './FunnelBrandVisual'
import StrategyVisual from './StrategyVisual'

function getProjectImage(projectRef) {
  if (!projectRef) return null
  const found = projects.find((p) => p.id === projectRef)
  return found ? found.image : null
}

function PlaceholderCard({ title, subtitle, category }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#0a0b0c] overflow-hidden px-6 text-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-accent-500/15 rounded-full blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(252,211,77,0.07),transparent_60%)]" />
      </div>
      <div className="absolute inset-4 md:inset-6 border border-accent-400/15 rounded-xl" />
      <div className="absolute top-0 left-0 px-4 py-3">
        <span className="text-[9px] font-semibold tracking-[0.3em] text-accent-300/80 uppercase">
          Bespoke Build
        </span>
      </div>
      <div className="relative flex flex-col items-center">
        <span className="font-display text-4xl md:text-5xl font-bold tracking-[0.18em] text-white/95">
          {title}
        </span>
        <div className="mt-3 h-px w-16 bg-accent-400/40" />
        <span className="mt-3 text-[11px] md:text-xs font-medium tracking-[0.35em] uppercase text-accent-300/90">
          {subtitle}
        </span>
        <span className="mt-4 text-[9px] md:text-[10px] font-semibold tracking-[0.3em] uppercase text-ink-400">
          {category}
        </span>
      </div>
    </div>
  )
}

function CardVisual({ project }) {
  if (project.isPlaceholder) {
    return (
      <PlaceholderCard
        title={project.placeholderTitle}
        subtitle={project.placeholderSubtitle}
        category={project.placeholderCategory}
      />
    )
  }

  if (project.visual === 'funnel') {
    return <FunnelBrandVisual />
  }

  if (project.visual === 'strategy') {
    return <StrategyVisual />
  }

  const image = getProjectImage(project.projectRef)
  if (image) {
    return (
      <img
        src={image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    )
  }

  return null
}

function Cta({ cta }) {
  const external = !!cta.external

  return external ? (
    <a
      href={cta.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-accent-300 hover:text-accent-400 transition-colors duration-300"
    >
      {cta.label}
      <ArrowUpRight className="w-4 h-4" />
    </a>
  ) : (
    <a
      href={cta.href}
      className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-accent-300 hover:text-accent-400 transition-colors duration-300"
    >
      {cta.label}
      <ArrowUpRight className="w-4 h-4" />
    </a>
  )
}

function ProjectCard({ project, index }) {
  const hasSingleCta = project.cta && !project.ctas

  return (
    <div
      className="group h-full animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-ink-900 border border-white/5 hover:border-white/10 transition-all duration-500">
        <div className="relative aspect-[16/10] overflow-hidden">
          <CardVisual project={project} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent opacity-60" />
        </div>

        <div className="flex flex-col flex-1 p-6 md:p-7">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-semibold text-accent-300 tracking-widest uppercase px-2.5 py-1 rounded-full bg-accent-400/10 border border-accent-400/20">
              {project.category}
            </span>
            <span className="text-[11px] font-medium text-ink-400 tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              PROJECT {project.number}
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-[1.7rem] font-bold text-white mb-3 leading-snug text-balance">
            {project.title}
          </h3>

          <p className="text-base text-ink-300 leading-relaxed mb-5 max-w-lg">
            {project.description}
          </p>

          <div className="mt-auto flex items-center gap-3">
            {hasSingleCta && <Cta cta={project.cta} />}
            {project.ctas &&
              project.ctas.map((cta) => <Cta key={cta.label} cta={cta} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SelectedWork() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-white text-balance">
            Selected Work
          </h2>
          <p className="mt-6 text-lg text-ink-400 leading-relaxed">
            A selection of digital experiences, funnel systems, performance creative, and
            marketing work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedWork.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}