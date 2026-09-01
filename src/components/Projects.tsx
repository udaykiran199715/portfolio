import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { projects, type Project } from '../data/resume'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-accent-soft"
        >
          Projects
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-3xl font-semibold sm:text-4xl"
        >
          Selected work
        </motion.h2>
        <p className="mt-3 max-w-2xl text-mist">
          These are client-owned production systems, so I'm sharing case studies instead of live
          links — tap a card for the full story.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.button
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setActive(project)}
              className="group text-left rounded-2xl border border-panel-border bg-panel/50 p-6 transition hover:border-accent/50 hover:bg-panel"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-accent-soft">{project.domain}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{project.name}</h3>
                </div>
                <ArrowUpRight
                  size={20}
                  className="mt-1 shrink-0 text-mist transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mist">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full bg-ink/60 px-3 py-1 text-xs text-mist">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="rounded-full bg-ink/60 px-3 py-1 text-xs text-mist">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-panel-border bg-panel p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-accent-soft">{project.domain}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.name}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-full border border-panel-border p-2 text-mist transition hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mt-4 text-mist">{project.summary}</p>

        <div className="mt-6">
          <h4 className="text-sm font-medium uppercase tracking-wide text-white">My role</h4>
          <p className="mt-2 text-sm text-mist">{project.role}</p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium uppercase tracking-wide text-white">Impact</h4>
          <ul className="mt-3 space-y-2.5">
            {project.impact.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-mist">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium uppercase tracking-wide text-white">Tech stack</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full bg-ink/60 px-3 py-1.5 text-xs text-mist">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
