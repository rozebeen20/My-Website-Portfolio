import { useEffect } from 'react'
import { ArrowUpRight, Play, X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  const isAds = project.category === 'ads'
  const isVideo = project.category === 'video'
  const galleryTitle = isAds ? 'Campaign Gallery' : 'Final Design'

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto">
      <div className="fixed inset-0 bg-ink-950/90 backdrop-blur-md animate-fade-in" onClick={onClose} />

      <div className="relative w-full max-w-5xl mx-auto my-8 px-4 sm:px-6 animate-scale-in">
        <div className="relative bg-ink-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-ink-800/80 backdrop-blur-md flex items-center justify-center text-ink-300 hover:text-white hover:bg-ink-700 transition-all duration-300"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
            {isVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent-400/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-ink-950 ml-1" fill="currentColor" />
                </div>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[10px] font-semibold text-accent-300 tracking-widest uppercase px-3 py-1 rounded-full bg-accent-400/10 border border-accent-400/20">
                  {project.categoryLabel}
                </span>
                <span className="text-[10px] font-medium text-ink-300 tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  Sample / Concept Project
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 border-b border-white/5">
              <div>
                <p className="text-[10px] font-semibold text-accent-400 tracking-widest uppercase mb-2">
                  My Role
                </p>
                <p className="text-sm text-ink-200">{project.role}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-accent-400 tracking-widest uppercase mb-2">
                  Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium text-ink-200 px-2.5 py-1 rounded-full bg-ink-800 border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-accent-400 tracking-widest uppercase mb-2">
                  Category
                </p>
                <p className="text-sm text-ink-200">{project.categoryLabel}</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Overview</h3>
              <p className="text-base text-ink-300 leading-relaxed">{project.overview}</p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Creative Direction</h3>
              <p className="text-base text-ink-300 leading-relaxed">{project.creativeDirection}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">The Challenge</h3>
                <p className="text-base text-ink-300 leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">The Approach</h3>
                <p className="text-base text-ink-300 leading-relaxed">{project.approach}</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">{galleryTitle}</h3>
              <div
                className={`grid gap-4 ${
                  isAds ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'
                }`}
              >
                {project.gallery.map((galleryImage, i) => {
                  const isFirst = i === 0
                  return (
                    <div
                      key={i}
                      className={
                        'group relative rounded-xl overflow-hidden ' +
                        (isAds
                          ? 'aspect-[4/5]'
                          : isFirst
                            ? 'md:col-span-2 aspect-[16/9]'
                            : 'aspect-[4/3]')
                      }
                    >
                      <img
                        src={galleryImage}
                        alt={`${project.title} visual ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {isAds && (
                        <span className="absolute top-3 left-3 text-[10px] font-bold text-white px-2 py-1 rounded-full bg-ink-950/80 backdrop-blur-md">
                          AD {String.fromCharCode(65 + i)}
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
                Interested in creating something like this?
              </p>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-base font-semibold text-ink-950 bg-accent-400 hover:bg-accent-300 px-8 py-4 rounded-full transition-all duration-300 hover:gap-3"
              >
                Start a Project
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}