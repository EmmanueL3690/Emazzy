import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeContext'

export default function ThemeToggle({ compact = false }) {
  const { theme, toggleTheme } = useTheme()
  const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
  return (
    <button className={`theme-toggle ${compact ? 'theme-toggle--compact' : ''}`} onClick={toggleTheme} aria-label={label} title={label}>
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      {!compact && <span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>}
    </button>
  )
}
