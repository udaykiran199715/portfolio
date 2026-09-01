import { motion } from 'framer-motion'
import { experience } from '../data/resume'

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-accent-soft"
        >
          Experience
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-3xl font-semibold sm:text-4xl"
        >
          Where the work happened
        </motion.h2>

        <div className="relative mt-14 border-l border-panel-border pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative mb-14 last:mb-0"
            >
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-accent sm:-left-[49px]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-white">{job.role}</h3>
                <span className="text-sm text-mist">{job.period}</span>
              </div>
              <p className="mt-1 text-accent-soft">{job.company}</p>
              <ul className="mt-4 space-y-2.5">
                {job.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-base">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mist" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
