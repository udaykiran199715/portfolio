import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { Download, X } from 'lucide-react'
import { profile } from '../data/resume'

export function ResumeModal({ onClose }: { onClose: () => void }) {
  return createPortal(
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
        className="flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-panel-border bg-panel"
      >
        <div className="flex items-center justify-between gap-4 border-b border-panel-border p-4">
          <h3 className="font-display text-lg font-semibold text-white">Resume Preview</h3>
          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-soft"
            >
              <Download size={14} /> Download
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-full border border-panel-border p-2 text-mist transition hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <iframe src={profile.resumeUrl} title="Resume preview" className="flex-1 bg-white" />
      </motion.div>
    </motion.div>,
    document.body,
  )
}
