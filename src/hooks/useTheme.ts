import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

// index.html의 인라인 스크립트와 같은 키를 써야 합니다.
const STORAGE_KEY = 'theme'

// 처음 테마는 index.html 스크립트가 <html data-theme>에 이미 정해 두었으므로 그 값을 읽습니다.
function readInitialTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  // theme 값이 바뀔 때마다 <html data-theme="...">에 반영 → CSS 변수 값이 바뀜
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // 저장소를 막아 둔 브라우저에서도 전환 자체는 동작하도록 무시
    }
  }

  return { theme, toggleTheme }
}
