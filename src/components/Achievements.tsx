import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { achievements } from '../data/resume'

export function Achievements() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 rounded-2xl border border-panel-border bg-panel/50 p-6"
            >
              <Award size={20} className="mt-0.5 shrink-0 text-mint" />
              <p className="text-sm leading-relaxed text-mist">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
