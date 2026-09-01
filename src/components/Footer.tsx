import { profile } from '../data/resume'

export function Footer() {
  return (
    <footer className="border-t border-panel-border/60 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-mist sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React, TypeScript & Tailwind — deployed on Cloudflare Pages.</p>
      </div>
    </footer>
  )
}
