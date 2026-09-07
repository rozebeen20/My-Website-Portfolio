import { ArrowDown, Sparkles } from 'lucide-react'
import { marqueeItems, portraitTags, px } from '../data'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 max-w-4xl">
            <div className="flex items-center gap-2 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium text-accent-300 tracking-widest uppercase">
                Creative Studio Portfolio
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-white text-balance animate-fade-up">
              Designing brands that
              <br />
              <span className="text-gradient italic">command attention.</span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl text-ink-300 max-w-2xl leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.15s', opacity: 0 }}
            >
              A full-service creative studio specializing in web design, e-commerce, advertising, email
              marketing, video, 3D, and digital strategy. Every project is crafted to look like it belongs
              at the top of the industry.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <a
                href="#portfolio"
                className="flex items-center justify-center gap-2 text-base font-semibold text-ink-950 bg-accent-400 hover:bg-accent-300 px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02]"
              >
                View Portfolio
                <ArrowDown className="w-5 h-5" />
              </a>
              <a
                href="#webdev"
                className="flex items-center justify-center gap-2 text-base font-semibold text-white border border-white/15 hover:border-white/30 px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                Web Development Skills
              </a>
            </div>

            <div
              className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 animate-fade-up"
              style={{ animationDelay: '0.45s', opacity: 0 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl font-display font-bold text-white">45+</span>
                <span className="text-sm text-ink-400 max-w-[80px] leading-tight">Sample Projects</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex items-center gap-3">
                <span className="text-4xl font-display font-bold text-white">9</span>
                <span className="text-sm text-ink-400 max-w-[80px] leading-tight">Service Categories</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex items-center gap-3">
                <span className="text-4xl font-display font-bold text-white">100%</span>
                <span className="text-sm text-ink-400 max-w-[80px] leading-tight">Custom Design</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent-500/20 via-transparent to-accent-400/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="/Screenshot 2026-08-21 153858.png"
                  alt="Portrait"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-2">
                    {portraitTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold text-white px-3 py-1.5 rounded-full bg-ink-950/70 backdrop-blur-md border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 border-t border-white/5 bg-ink-950/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-8 text-sm font-medium text-ink-400 tracking-widest uppercase">
              {item}
              <span className="ml-16 text-accent-400">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}