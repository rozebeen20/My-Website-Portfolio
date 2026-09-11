const NODES = [
  { label: 'AUDIENCE', left: 50, top: 15 },
  { label: 'COMPETITORS', left: 84, top: 27 },
  { label: 'OFFER', left: 84, top: 57 },
  { label: 'FUNNEL', left: 50, top: 72 },
  { label: 'ANALYSIS', left: 16, top: 57 },
  { label: 'CREATIVE', left: 16, top: 27 },
]

const toViewBox = (top) => (top / 100) * 62.5

export default function StrategyVisual() {
  return (
    <div className="relative w-full h-full bg-[#0a0b0c] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="absolute top-0 left-0 px-4 py-3">
        <span className="text-[9px] font-semibold tracking-[0.3em] text-accent-300/80 uppercase">
          Strategy Map
        </span>
      </div>
      <div className="absolute top-0 right-0 px-4 py-3">
        <span className="text-[9px] font-medium tracking-[0.2em] text-ink-400 uppercase">
          Concept Visual
        </span>
      </div>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 62.5"
        preserveAspectRatio="xMidYMid meet"
      >
        {NODES.map((node) => (
          <line
            key={node.label}
            x1="50"
            y1="28.125"
            x2={node.left}
            y2={toViewBox(node.top)}
            stroke="rgba(252,211,77,0.22)"
            strokeWidth="0.45"
            strokeDasharray="1.6 1.1"
          />
        ))}
        <circle
          cx="50"
          cy="28.125"
          r="7"
          fill="none"
          stroke="rgba(252,211,77,0.35)"
          strokeWidth="0.45"
        />
      </svg>

      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-accent-400/40 bg-accent-400/5 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.15)]">
        <span className="text-[9px] font-bold tracking-[0.25em] text-accent-300">CORE</span>
        <span className="mt-0.5 text-[8px] font-medium tracking-[0.2em] text-white/70 uppercase">
          Strategy
        </span>
      </div>

      {NODES.map((node) => (
        <div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.left}%`, top: `${node.top}%` }}
        >
          <span className="px-2.5 py-1 text-[8px] md:text-[9px] font-semibold tracking-[0.2em] uppercase text-ink-100 bg-ink-900/85 border border-white/10 rounded-full whitespace-nowrap">
            {node.label}
          </span>
        </div>
      ))}
    </div>
  )
}