import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-[52px] h-[28px] rounded-full border border-[rgba(255,255,255,0.15)] transition-colors duration-200 hover:border-brand-purple"
      style={{ background: 'rgba(255,255,255,0.05)' }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div
        className="absolute left-[3px] flex items-center justify-center w-[22px] h-[22px] rounded-full transition-all duration-300"
        style={{
          background: theme === 'dark' ? '#854CE6' : '#F2F3F4',
          transform: theme === 'dark' ? 'translateX(0)' : 'translateX(22px)',
        }}
      >
        {theme === 'dark' ? (
          <Moon size={12} color="#F2F3F4" />
        ) : (
          <Sun size={12} color="#090917" />
        )}
      </div>
    </button>
  )
}
