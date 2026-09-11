import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-500/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
          LET'S BUILD SOMETHING
          <br />
          <span className="text-gradient italic">THAT CONVERTS.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-ink-400 leading-relaxed max-w-2xl mx-auto">
          Have a project, funnel, website, or creative system in mind? Let's talk.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-base font-semibold text-ink-950 bg-accent-400 hover:bg-accent-300 px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:gap-3"
          >
            LET'S TALK
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
