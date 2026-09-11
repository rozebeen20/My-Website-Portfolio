import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 max-w-4xl">
            <div className="mb-6 animate-fade-in">
              <span className="text-xs font-semibold text-accent-400 tracking-[0.25em] uppercase">
                DTC Growth &bull; Funnels &bull; Web &bull; Creative
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-white text-balance animate-fade-up">
              I build digital experiences that
              <br />
              <span className="text-gradient italic">turn attention into action.</span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl leading-relaxed text-ink-200 max-w-2xl animate-fade-up"
              style={{ animationDelay: '0.15s', opacity: 0 }}
            >
              I combine DTC funnel strategy, conversion-focused web development, e-commerce UX, and
              performance creative to build digital experiences designed for growth.
            </p>

            <div
              className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <a
                href="#work"
                className="flex items-center justify-center gap-2 text-base font-semibold text-ink-950 bg-accent-400 hover:bg-accent-300 px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02]"
              >
                VIEW MY WORK
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 text-base font-semibold text-white border border-white/15 hover:border-white/30 px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                LET'S TALK
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent-500/20 via-transparent to-accent-400/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="/Screenshot 2026-08-21 153858.png"
                  alt="RB CATS — Digital Creative"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
