import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import clsx from 'clsx'
import { applyTheme, getStoredTheme, storeTheme, type Theme } from '../lib/theme'

const options = [
  { value: 'light', label: 'Light theme', Icon: Sun },
  { value: 'dark', label: 'Dark theme', Icon: Moon },
  { value: 'system', label: 'System theme', Icon: Monitor },
] as const

export function ThemeToggle() {
  // Starts as 'system' so the server-rendered HTML and first client render match.
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => {
    setTheme(getStoredTheme())
  }, [])

  useEffect(() => {
    if (theme !== 'system') return
    const query = matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyTheme('system')
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [theme])

  function choose(next: Theme) {
    setTheme(next)
    storeTheme(next)
    applyTheme(next)
  }

  return (
    <div role="group" aria-label="Color theme" className="inline-flex items-center rounded-full border border-panel-border bg-panel/60 p-0.5">
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          aria-label={label}
          aria-pressed={theme === value}
          onClick={() => choose(value)}
          className={clsx(
            'rounded-full p-1.5 transition-colors',
            theme === value ? 'bg-accent text-white' : 'text-mist hover:text-fg',
          )}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  )
}
