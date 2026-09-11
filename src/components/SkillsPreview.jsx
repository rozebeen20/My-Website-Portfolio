import { ArrowRight } from 'lucide-react'
import { skillsCategories } from '../data'

export default function SkillsPreview() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">
            Capabilities
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-white text-balance">
            Capabilities
          </h2>
          <p className="mt-6 text-lg text-ink-400 leading-relaxed">
            A comprehensive toolkit spanning development, design, creative, and marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, i) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-ink-900/40 border border-white/5 animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
            >
              <h3 className="text-base font-bold text-accent-400 tracking-widest uppercase mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[0.85rem] font-medium text-ink-300 px-2.5 py-1 rounded bg-ink-800/60 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
