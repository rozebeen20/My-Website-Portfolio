import { capabilityStripItems } from '../data'

export default function CapabilityStrip() {
  return (
    <section className="relative py-8 px-6 border-y border-white/5 bg-ink-950/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
          {capabilityStripItems.map((item, i) => (
            <span
              key={item}
              className="text-xs font-semibold text-ink-400 tracking-[0.2em] uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
