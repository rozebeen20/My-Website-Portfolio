import { ArrowUp } from 'lucide-react'
import { footerLinks } from '../data'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <span className="text-2xl font-display font-bold tracking-tight text-white">
              RB CATS
            </span>
            <p className="mt-4 text-sm text-ink-400 leading-relaxed max-w-sm">
              DTC Growth &bull; Funnels &bull; Web &bull; Creative
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-accent-400 tracking-widest uppercase mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-accent-400 tracking-widest uppercase mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="#contact"
                className="text-sm text-ink-400 hover:text-white transition-colors"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} RB CATS. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-xs font-medium text-ink-400 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
