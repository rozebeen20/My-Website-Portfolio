import { ArrowUpRight } from 'lucide-react'
import { px } from '../data'

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={px(6322366, 800)}
                alt="Creative professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">About</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white text-balance">
              A creative studio built for brands that refuse to blend in.
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink-300 leading-relaxed">
              I work across eight creative disciplines — from web design and e-commerce to advertising,
              video, 3D, and digital strategy. The goal is always the same: work that looks like it
              belongs at the top of the industry, not in the middle of the feed.
            </p>
            <p className="mt-4 text-base md:text-lg text-ink-300 leading-relaxed">
              The portfolio you see here contains sample and concept projects that demonstrate the
              quality and range of what I deliver. Every project is designed to be replaced with real
              client work — the structure is built for it.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Design-First', 'Conversion-Focused', 'Full-Service', 'Fast Turnaround'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-ink-200 px-4 py-2 rounded-full bg-ink-800/50 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-white border border-white/15 hover:border-accent-400/40 hover:bg-accent-400/5 px-6 py-3.5 rounded-full transition-all duration-300 hover:gap-3"
            >
              Let's work together
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}