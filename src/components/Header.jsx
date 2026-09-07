import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { headerLinks } from '../data'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl font-display font-bold tracking-tight text-white">
            STUDIO<span className="text-accent-400">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {headerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-300 hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-sm font-semibold text-ink-950 bg-accent-400 hover:bg-accent-300 px-5 py-2.5 rounded-full transition-all duration-300 hover:gap-2.5"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ink-950/95 backdrop-blur-xl border-b border-white/5 animate-fade-in">
          <div className="flex flex-col px-6 py-6 gap-4">
            {headerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-ink-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 text-sm font-semibold text-ink-950 bg-accent-400 px-5 py-3 rounded-full mt-2"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}