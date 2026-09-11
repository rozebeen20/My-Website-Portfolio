export default function FunnelBrandVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#0a0b0c] overflow-hidden px-6 text-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-accent-500/15 rounded-full blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(252,211,77,0.07),transparent_60%)]" />
      </div>

      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[430px] h-auto opacity-[0.09]"
        viewBox="0 0 400 260"
        fill="none"
        aria-hidden="true"
      >
        <path d="M40 20H360L210 240Z" stroke="#fcd34d" strokeWidth="1.5" />
        <path d="M95 60H305L232 185" stroke="#fcd34d" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M150 100H250L210 140" stroke="#fcd34d" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <div className="absolute inset-4 md:inset-6 border border-accent-400/15 rounded-xl" />
      <div className="absolute top-0 left-0 px-4 py-3">
        <span className="text-[9px] font-semibold tracking-[0.3em] text-accent-300/80 uppercase">
          Live Portfolio
        </span>
      </div>

      <div className="relative flex flex-col items-center">
        <span className="font-display text-4xl md:text-5xl font-bold tracking-[0.12em] text-white/95">
          RBCATS
        </span>
        <div className="mt-3 h-px w-16 bg-accent-400/40" />
        <span className="mt-3 text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-accent-300/90">
          DTC Funnel Builder
        </span>
        <span className="mt-4 text-[9px] md:text-[10px] font-semibold tracking-[0.3em] uppercase text-ink-400">
          DTC FUNNELS • CRO
        </span>
      </div>
    </div>
  )
}