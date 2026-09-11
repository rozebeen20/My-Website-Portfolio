import { ArrowRight } from 'lucide-react'
import { capabilityCards } from '../data'

export default function CapabilityCards() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">
            Services
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-white text-balance">
            What I Build
          </h2>
          <p className="mt-6 text-lg text-ink-400 leading-relaxed">
            From first click to final conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilityCards.map((card, i) => (
            <div
              key={card.id}
              className="group p-8 rounded-2xl bg-ink-900/50 border border-white/5 hover:border-accent-400/20 hover:bg-ink-900 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <h3 className="text-2xl font-display font-bold text-white mb-5 group-hover:text-accent-300 transition-colors duration-300">
                {card.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {card.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium text-ink-300 px-3 py-1.5 rounded-full bg-ink-800/60 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={card.cta.href}
                className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-accent-400 hover:text-accent-300 transition-colors duration-300"
              >
                {card.cta.label}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
