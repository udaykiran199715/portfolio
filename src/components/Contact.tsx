import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Code2, Link, Mail, Phone, Send } from 'lucide-react'
import { profile } from '../data/resume'
import { isMobileDevice } from '../lib/device'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const mobile = isMobileDevice()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const formEl = e.currentTarget
    const form = new FormData(formEl)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(form)),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      formEl.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-accent-soft"
        >
          Contact
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-3xl font-semibold sm:text-4xl"
        >
          Let's build something worth shipping
        </motion.h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-2xl border border-panel-border bg-panel/50 p-5 text-sm text-mist transition hover:border-accent/50 hover:text-white"
            >
              <Mail size={18} className="text-accent-soft" /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 rounded-2xl border border-panel-border bg-panel/50 p-5 text-sm text-mist transition hover:border-accent/50 hover:text-white"
            >
              <Phone size={18} className="text-accent-soft" /> {profile.phone}
            </a>
            <a
              href={profile.github}
              {...(!mobile && { target: '_blank', rel: 'noreferrer' })}
              className="flex items-center gap-3 rounded-2xl border border-panel-border bg-panel/50 p-5 text-sm text-mist transition hover:border-accent/50 hover:text-white"
            >
              <Code2 size={18} className="text-accent-soft" /> github.com/udaykiran199715
            </a>
            <a
              href={profile.linkedin}
              {...(!mobile && { target: '_blank', rel: 'noreferrer' })}
              className="flex items-center gap-3 rounded-2xl border border-panel-border bg-panel/50 p-5 text-sm text-mist transition hover:border-accent/50 hover:text-white"
            >
              <Link size={18} className="text-accent-soft" /> linkedin.com/in/udaykiranakula
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-panel-border bg-panel/50 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Your name"
                className="rounded-xl border border-panel-border bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-mist focus:border-accent focus:outline-none"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your email"
                className="rounded-xl border border-panel-border bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-mist focus:border-accent focus:outline-none"
              />
            </div>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="What are you building?"
              className="w-full resize-none rounded-xl border border-panel-border bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-mist focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white transition hover:bg-accent-soft disabled:opacity-60"
            >
              <Send size={16} />
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'sent' && <p className="text-sm text-mint">Thanks — I'll get back to you soon.</p>}
            {status === 'error' && (
              <p className="text-sm text-red-400">
                Something went wrong — email me directly at {profile.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
