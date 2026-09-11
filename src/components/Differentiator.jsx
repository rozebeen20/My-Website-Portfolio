import { differentiatorFlow } from '../data'

export default function Differentiator() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">
              Approach
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white leading-tight text-balance">
              One creative mind.
              <br />
              <span className="text-gradient italic">Multiple points of impact.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-300 leading-relaxed">
              I connect creative, traffic, funnel strategy, web experience, and conversion into
              one cohesive digital system. Instead of treating design, development, marketing, and
              conversion as separate pieces, I bring them together into one connected digital
              experience.
            </p>
          </div>

          <div className="flex flex-col items-center gap-0">
            {differentiatorFlow.map((step, i) => (
              <div key={step} className="flex flex-col items-center">
                <div className="px-8 py-4 rounded-xl bg-ink-900/80 border border-white/10 min-w-[220px] text-center">
                  <span className="text-sm font-bold text-white tracking-[0.15em] uppercase">
                    {step}
                  </span>
                </div>
                {i < differentiatorFlow.length - 1 && (
                  <div className="flex flex-col items-center py-2">
                    <div className="w-px h-6 bg-accent-400/40" />
                    <svg
                      className="w-3 h-3 text-accent-400/60"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 16l-6-6h12z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
