import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, Code2, Eye, Link, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/resume'
import { isMobileDevice } from '../lib/device'
import { ResumeModal } from './ResumeModal'

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false)
  const mobile = isMobileDevice()

  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center px-6 pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex flex-wrap items-center gap-3"
        >
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-panel-border bg-panel/60 px-4 py-1.5 text-sm text-mist">
            <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
            Open to full-time opportunities
          </p>
          <p className="inline-flex w-fit items-center gap-1.5 rounded-full border border-panel-border bg-panel/60 px-4 py-1.5 text-sm text-mist">
            <MapPin size={14} /> {profile.location}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.name.split(' ')[0]} <span className="text-gradient">{profile.name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-mist sm:text-xl"
        >
          {profile.title} building performance-tuned web & mobile products with{' '}
          <span className="text-white">{profile.tagline}</span>. 6+ years turning ambiguous
          requirements into scalable, production-grade software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_var(--color-accent)] transition hover:bg-accent-soft"
          >
            View my work
          </a>
          <button
            onClick={() => setResumeOpen(true)}
            className="flex items-center gap-2 rounded-full border border-panel-border px-6 py-3 text-sm font-medium text-white transition hover:border-mist"
          >
            <Eye size={16} /> Preview resume
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-sm text-mist transition hover:text-white"
          >
            <Mail size={16} /> Get in touch
          </a>
          <a
            href={profile.github}
            {...(!mobile && { target: '_blank', rel: 'noreferrer' })}
            className="flex items-center gap-2 text-sm text-mist transition hover:text-white"
          >
            <Code2 size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            {...(!mobile && { target: '_blank', rel: 'noreferrer' })}
            className="flex items-center gap-2 text-sm text-mist transition hover:text-white"
          >
            <Link size={16} /> LinkedIn
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
      </AnimatePresence>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 0.8 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-mist"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
