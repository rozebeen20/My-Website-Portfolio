import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { categories, projects } from '../data'
import ProjectModal from './ProjectModal'

const aspectClasses = {
  wide: 'md:col-span-2',
  tall: 'md:row-span-2',
}

const mediaAspectClasses = {
  wide: 'aspect-[16/9]',
  tall: 'aspect-[3/4]',
}

export default function Portfolio({ activeCategory, setActiveCategory }) {
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory)
  const activeCategoryData = categories.find((c) => c.id === activeCategory)

  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">Portfolio</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-white text-balance">
            A curated showcase across every discipline.
          </h2>
          <p className="mt-6 text-lg text-ink-400 leading-relaxed">
            Browse 40 sample projects across 8 service categories. Each project opens into a full case
            study with creative direction, process, and visuals.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-accent-400 text-ink-950'
                : 'bg-ink-900/50 text-ink-300 hover:text-white border border-white/5 hover:border-white/15'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent-400 text-ink-950'
                  : 'bg-ink-900/50 text-ink-300 hover:text-white border border-white/5 hover:border-white/15'
              }`}
            >
              {category.short}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`animate-fade-up ${aspectClasses[project.aspect] || ''}`}
              style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedProject(project)}
                className="group relative w-full h-full overflow-hidden rounded-2xl bg-ink-900 text-left"
              >
                <div className={`relative w-full ${mediaAspectClasses[project.aspect] || 'aspect-square'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="absolute inset-0 bg-accent-400/0 group-hover:bg-accent-400/5 transition-colors duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-semibold text-accent-300 tracking-widest uppercase px-2.5 py-1 rounded-full bg-accent-400/10 border border-accent-400/20">
                        {project.categoryLabel}
                      </span>
                      <span className="text-[10px] font-medium text-ink-400 tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                        Sample
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-ink-300 leading-relaxed line-clamp-2 mb-4 max-w-lg">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span key={tool} className="text-[10px] font-medium text-ink-400 px-2 py-1 rounded bg-ink-800/80">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                        View Project
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-ink-400 text-sm">
            Showing {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            {activeCategoryData ? ` in ${activeCategoryData.label}` : ''}
          </p>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}