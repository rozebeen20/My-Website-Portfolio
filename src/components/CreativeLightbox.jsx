import { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, X, Volume2, VolumeX, Maximize, Pause, Play, Loader2 } from 'lucide-react'

export default function CreativeLightbox({ item, items = [], type, onClose, onNavigate }) {
  const [videoReady, setVideoReady] = useState(false)
  const [videoLoading, setVideoLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)
  const frameRef = useRef(null)

  const index = items.findIndex((i) => i.id === item?.id)
  const hasPrev = index > 0
  const hasNext = index >= 0 && index < items.length - 1

  const stopVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.removeAttribute('src')
      videoRef.current.load()
    }
    setIsPlaying(false)
  }, [])

  const close = useCallback(() => {
    stopVideo()
    onClose()
  }, [stopVideo, onClose])

  useEffect(() => {
    if (!item) return
    setVideoReady(false)
    setVideoLoading(type === 'video')
    setIsPlaying(false)
    setMuted(true)
  }, [item, type])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft' && hasPrev) onNavigate(index - 1)
      if (e.key === 'ArrowRight' && hasNext) onNavigate(index + 1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      stopVideo()
    }
  }, [close, hasPrev, hasNext, index, onNavigate, stopVideo])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setIsPlaying(true)
    } else {
      v.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const goFullscreen = async () => {
    const v = videoRef.current
    if (!v) return
    if (document.fullscreenElement) {
      await document.exitFullscreen()
    } else {
      await v.requestFullscreen?.()
    }
  }

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink-950/95 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={close}
    >
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
        <button
          className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
          onClick={close}
          aria-label="Close viewer"
        >
          <X className="w-5 h-5" />
        </button>

        {index >= 0 && (hasPrev || hasNext) && (
          <>
            {hasPrev && (
              <button
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate(index - 1)
                }}
                aria-label="Previous item"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {hasNext && (
              <button
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate(index + 1)
                }}
                aria-label="Next item"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </>
        )}

        <div
          ref={frameRef}
          className="relative max-w-full max-h-full w-fit h-fit animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {type === 'image' ? (
            <figure className="max-w-full max-h-[85vh] mx-auto flex flex-col items-center">
              <img
                src={item.src}
                alt={item.title}
                className="max-w-full max-h-[78vh] w-auto h-auto object-contain rounded-lg shadow-2xl shadow-black/60 border border-white/10"
              />
              <figcaption className="mt-4 text-center">
                <span className="text-[10px] font-semibold text-accent-300 tracking-widest uppercase block">
                  {item.categoryLabel}
                </span>
                <span className="text-lg font-display text-white block mt-1">
                  {item.title}
                </span>
                {item.description && (
                  <span className="text-sm text-ink-400 block mt-1">
                    {item.description}
                  </span>
                )}
              </figcaption>
            </figure>
          ) : (
            <div className="relative flex flex-col items-center">
              <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-black">
                <video
                  ref={videoRef}
                  src={item.src}
                  className="max-w-full max-h-[70vh] w-auto h-auto"
                  controls
                  playsInline
                  preload="auto"
                  muted
                  autoPlay
                  onPlaying={() => {
                    setVideoLoading(false)
                    setVideoReady(true)
                    setIsPlaying(true)
                  }}
                  onWaiting={() => setVideoLoading(true)}
                  onCanPlay={() => setVideoLoading(false)}
                  onEnded={() => setIsPlaying(false)}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                />
                {videoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Loader2 className="w-8 h-8 text-accent-400 animate-spin" />
                  </div>
                )}
                {videoReady && !isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors duration-300"
                    aria-label="Play video"
                  >
                    <span className="p-4 rounded-full bg-white/10 backdrop-blur border border-white/20">
                      <Play className="w-8 h-8 text-white" fill="currentColor" />
                    </span>
                  </button>
                )}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" fill="currentColor" />
                  ) : (
                    <Play className="w-4 h-4" fill="currentColor" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={muted ? 'Unmute video' : 'Mute video'}
                >
                  {muted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={goFullscreen}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                  aria-label="Enter fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {index >= 0 && (
            <div className="mt-4 text-center text-xs text-ink-500 tracking-widest uppercase">
              {index + 1} / {items.length}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}