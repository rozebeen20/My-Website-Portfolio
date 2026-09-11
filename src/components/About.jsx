import { ArrowUpRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-500/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="/Screenshot 2026-08-21 153858.png"
                alt="RB CATS — Digital Creative"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">
              About
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white text-balance">
              ABOUT RB CATS
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink-300 leading-relaxed">
              I'm a multidisciplinary digital creative focused on DTC growth, conversion-focused
              experiences, e-commerce, web development, and performance creative.
            </p>
            <p className="mt-4 text-base md:text-lg text-ink-300 leading-relaxed">
              I work across strategy, development, and creative — connecting funnel thinking,
              web experience, and performance creative into one cohesive system designed to convert.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'DTC Funnels',
                'Web Development',
                'E-Commerce',
                'Performance Creative',
                'Video & Motion',
              ].map((tag) => (
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
