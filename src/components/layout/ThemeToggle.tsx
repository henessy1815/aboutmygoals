import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import styles from './ThemeToggle.module.css'

interface ThemeToggleProps {
  toDarkLabel: string
  toLightLabel: string
}

function ThemeToggle({ toDarkLabel, toLightLabel }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  // 버튼이 "무엇을 하는지"를 알려주는 문구 (아이콘만 있어서 스크린리더용으로 필요)
  const label = isDark ? toLightLabel : toDarkLabel

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  )
}

export default ThemeToggle
