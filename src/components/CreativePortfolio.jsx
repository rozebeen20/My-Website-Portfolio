import { useCallback, useState } from 'react'
import { Play, Image as ImageIcon } from 'lucide-react'
import CreativeGallery from './CreativeGallery'
import CreativeGalleryCard from './CreativeGalleryCard'
import CreativeLightbox from './CreativeLightbox'
import { creativePortfolio } from '../data'

const VIDEO_SECTION = creativePortfolio.find((s) => s.id === 'video')
const STATIC_SECTION = creativePortfolio.find((s) => s.id === 'static-ads')
const GRAPHIC_SECTION = creativePortfolio.find((s) => s.id === 'graphic-design')
const EMAIL_SECTION = creativePortfolio.find((s) => s.id === 'email-marketing')

export default function CreativePortfolio() {
  const [lightbox, setLightbox] = useState(null)

  const videoItems = VIDEO_SECTION?.items || []
  const featuredVideos = videoItems.filter((v) => v.group === 'featured') || []
  const performanceVideos = videoItems.filter((v) => v.group === 'performance') || []

  const openLightbox = (section, item) => {
    setLightbox({ section, item, type: section.type, items: section.items })
  }

  const navigateLightbox = useCallback(
    (index) => {
      setLightbox((prev) => {
        if (!prev) return prev
        const next = prev.items[index]
        if (!next) return prev
        return { ...prev, item: next }
      })
    },
    []
  )

  const closeLightbox = useCallback(() => {
    setLightbox(null)
  }, [])

  const sectionHeader = (section) => (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-accent-400">
          {section.type === 'video' ? (
            <Play className="w-4 h-4" fill="currentColor" />
          ) : (
            <ImageIcon className="w-4 h-4" />
          )}
        </span>
        <span className="text-xs font-semibold text-accent-400 tracking-widest uppercase">
          {section.sublabel}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        <span className="text-xs text-ink-500 tracking-widest uppercase">
          {section.items.length > 0 ? `${section.items.length} PIECES` : ''}
        </span>
      </div>
      <h3 className="font-display text-3xl md:text-4xl font-bold text-white text-balance">
        {section.label}
      </h3>
    </div>
  )

  return (
    <section id="creative" className="py-32 px-6 bg-ink-950" aria-label="Creative Portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-sm font-medium text-accent-400 tracking-widest uppercase">
            RB CATS Creative Archive
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white text-balance">
            A unified premium creative portfolio.
          </h2>
          <p className="mt-4 text-lg text-ink-400 leading-relaxed max-w-2xl">
            Video &amp; motion, performance static ads, graphic design, and long-form
            email campaigns — one cinematic archive of conversion-focused creative.
          </p>
        </div>

        <div className="mb-20">
          {sectionHeader(VIDEO_SECTION)}
          {featuredVideos.length > 0 && (
            <div className="mb-4">
              <span className="text-[11px] font-semibold text-ink-400 tracking-widest uppercase mb-4 block">
                Featured / Long-Form
              </span>
              <CreativeGallery
                items={featuredVideos}
                onSelect={(item) => openLightbox(VIDEO_SECTION, item)}
                columns={{ mobile: 'grid-cols-1', tablet: 'sm:grid-cols-2', desktop: 'lg:grid-cols-2' }}
                aspectOverride="aspect-[16/9]"
                featured
              />
            </div>
          )}
          {performanceVideos.length > 0 && (
            <div className="mt-10">
              <span className="text-[11px] font-semibold text-ink-400 tracking-widest uppercase mb-4 block">
                Performance &amp; Social Creative
              </span>
              <CreativeGallery
                items={performanceVideos}
                onSelect={(item) => openLightbox(VIDEO_SECTION, item)}
                columns={{ mobile: 'grid-cols-1', tablet: 'sm:grid-cols-2', desktop: 'lg:grid-cols-4' }}
                aspectOverride="aspect-[9/14]"
              />
            </div>
          )}
        </div>

        <div className="mb-20">
          {sectionHeader(STATIC_SECTION)}
          <CreativeGallery
            items={STATIC_SECTION.items}
            onSelect={(item) => openLightbox(STATIC_SECTION, item)}
            columns={{ mobile: 'grid-cols-1', tablet: 'sm:grid-cols-2', desktop: 'lg:grid-cols-3' }}
          />
        </div>

        <div className="mb-20">
          {sectionHeader(GRAPHIC_SECTION)}
          <CreativeGallery
            items={GRAPHIC_SECTION.items}
            onSelect={(item) => openLightbox(GRAPHIC_SECTION, item)}
            columns={{ mobile: 'grid-cols-1', tablet: 'sm:grid-cols-2', desktop: 'lg:grid-cols-3' }}
          />
        </div>

        <div>
          {sectionHeader(EMAIL_SECTION)}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {EMAIL_SECTION.items.map((item) => (
              <div key={item.id} className="flex flex-col gap-3">
                <CreativeGalleryCard
                  item={item}
                  onClick={() => openLightbox(EMAIL_SECTION, item)}
                  aspectOverride="aspect-[3/7]"
                  contain
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <CreativeLightbox
          item={lightbox.item}
          items={lightbox.items}
          type={lightbox.type}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </section>
  )
}