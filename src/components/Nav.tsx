import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Eye, FileText, Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { useActiveSection } from '../hooks/useActiveSection'
import { ResumeModal } from './ResumeModal'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const active = useActiveSection(links.map((l) => l.id))
  const [open, setOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b border-panel-border/60 bg-ink/70 backdrop-blur-lg"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-lg font-semibold tracking-tight">
          UA<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={clsx(
                  'relative rounded-full px-4 py-2 text-sm transition-colors',
                  active === link.id ? 'text-fg' : 'text-mist hover:text-fg',
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-panel border border-panel-border"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <button
            onClick={() => setResumeOpen(true)}
            className="flex items-center gap-1.5 rounded-full border border-panel-border px-4 py-2 text-sm text-mist transition hover:border-mist hover:text-fg"
          >
            <Eye size={14} /> Resume
          </button>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-soft"
          >
            Let's talk
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setResumeOpen(true)}
            aria-label="Preview resume"
            className="rounded-full border border-panel-border p-2 text-mist transition hover:text-fg"
          >
            <FileText size={16} />
          </button>
          <button className="p-1 text-mist" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col gap-1 border-t border-panel-border/60 px-6 py-3 md:hidden"
        >
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={clsx('block rounded-lg px-3 py-2 text-sm', active === link.id ? 'bg-panel text-fg' : 'text-mist')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}

      <AnimatePresence>
        {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
      </AnimatePresence>
    </motion.header>
  )
}
