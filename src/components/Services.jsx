import { Box, CodeXml, LayoutDashboard, Mail, Megaphone, ShoppingBag, Terminal, TrendingUp, Video } from 'lucide-react'
import { services } from '../data'

const icons = {
  Box,
  CodeXml,
  LayoutDashboard,
  Mail,
  Megaphone,
  ShoppingBag,
  Terminal,
  TrendingUp,
  Video,
}

export default function Services({ onCategoryClick }) {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">What I Do</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-white text-balance">
            Nine disciplines. One creative standard.
          </h2>
          <p className="mt-6 text-lg text-ink-400 leading-relaxed">
            Every service is backed by a portfolio of sample projects that demonstrate the quality and
            range of work you can expect. Click any service to see its projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <button
                key={service.number}
                onClick={() => onCategoryClick(service.id)}
                className="group relative text-left p-8 rounded-2xl bg-ink-900/50 border border-white/5 hover:border-accent-400/30 hover:bg-ink-900 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-7xl font-display font-bold text-white/[0.03] group-hover:text-accent-400/10 transition-colors duration-500 p-4">
                  {service.number}
                </div>
                <div className="w-12 h-12 rounded-xl bg-ink-800 group-hover:bg-accent-400/10 flex items-center justify-center mb-6 transition-all duration-500">
                  <div className="text-ink-300 group-hover:text-accent-400 transition-colors duration-500">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-accent-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-ink-400 leading-relaxed">{service.description}</p>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}