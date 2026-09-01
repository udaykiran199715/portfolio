import { motion } from 'framer-motion'
import { profile } from '../data/resume'

const stats = [
  { value: '6+', label: 'Years shipping production software' },
  { value: '5', label: 'Domains: PM, logistics, community, insurance, e-commerce' },
  { value: '15+', label: 'Feature modules owned end-to-end on a single app' },
]

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-accent-soft"
        >
          About
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-3xl text-2xl leading-relaxed text-white sm:text-3xl"
        >
          {profile.summary}
        </motion.p>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-panel-border bg-panel/50 p-6"
            >
              <p className="font-display text-4xl font-semibold text-gradient">{stat.value}</p>
              <p className="mt-2 text-sm text-mist">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
