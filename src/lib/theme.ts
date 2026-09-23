export type Theme = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'theme'
const META_COLORS = { dark: '#0a0a0f', light: '#f6f6fb' }

export function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : 'system'
  } catch {
    return 'system'
  }
}

export function storeTheme(theme: Theme) {
  try {
    if (theme === 'system') localStorage.removeItem(STORAGE_KEY)
    else localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // storage can be blocked (private mode); the choice just won't persist
  }
}

// The inline script in index.html mirrors this so the first paint is already correct.
export function applyTheme(theme: Theme) {
  const dark = theme === 'dark' || (theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)
  const resolved = dark ? 'dark' : 'light'
  document.documentElement.dataset.theme = resolved
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLORS[resolved])
}
