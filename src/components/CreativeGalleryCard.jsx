import { Play, ArrowUpRight } from 'lucide-react'

export default function CreativeGalleryCard({ item, onClick, aspectOverride, featured = false, contain = false }) {
  const isVideo = item.type === 'video'

  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left overflow-hidden rounded-2xl bg-ink-900 border border-white/5 hover:border-white/15 transition-all duration-500 hover:shadow-xl hover:shadow-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/60"
      aria-label={isVideo ? `Watch ${item.title}` : `View ${item.title}`}
    >
      <div className={aspectOverride || 'aspect-[4/5] sm:aspect-[3/4]'}>
        {isVideo ? (
          <div className="absolute inset-0">
            <video
              src={item.src}
              className="w-full h-full object-cover"
              muted
              playsInline
              loop
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-ink-950/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-white/10 backdrop-blur border border-white/25 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
              </span>
            </div>
          </div>
        ) : (
          <>
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                contain ? 'object-contain bg-ink-950/60' : 'object-cover'
              }`}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${contain ? 'from-ink-950 via-ink-950/10 to-transparent' : 'from-ink-950 via-ink-950/20 to-transparent'} opacity-70 group-hover:opacity-95 transition-opacity duration-500`} />
          </>
        )}

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accent-500/5 pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="inline-block text-[10px] font-semibold text-accent-300 tracking-widest uppercase mb-2">
            {item.categoryLabel}
          </span>
          <div className="overflow-hidden">
            <span className="block text-lg font-display font-bold text-white -translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              {item.title}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-widest uppercase mt-1.5 text-white/0 group-hover:text-white transition-colors duration-500 delay-100">
              {isVideo ? 'WATCH VIDEO' : 'VIEW ARTWORK'}
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {featured && (
          <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[9px] font-semibold tracking-widest uppercase bg-ink-950/60 backdrop-blur border border-white/10 text-white/70">
            FEATURED
          </span>
        )}
      </div>
    </button>
  )
}