import { Menu, Target, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import type { NavItem, SectionId, UiLabels } from '../../types'
import styles from './Header.module.css'
import ThemeToggle from './ThemeToggle'

interface HeaderProps {
  logo: string
  nav: NavItem[]
  ui: UiLabels
}

const MENU_ID = 'site-menu'
// 이 너비 이상이면 링크가 헤더에 바로 보이므로 햄버거 메뉴가 필요 없음 (CSS와 같은 값)
const DESKTOP_QUERY = '(min-width: 768px)'

function Header({ logo, nav, ui }: HeaderProps) {
  // 감시할 섹션 목록: hero + 네비 항목들.
  // useMemo: nav가 바뀌지 않는 한 같은 배열을 재사용 → useActiveSection이 매번 다시 설정되지 않음
  const sectionIds = useMemo<SectionId[]>(() => ['hero', ...nav.map((item) => item.id)], [nav])
  const activeId = useActiveSection(sectionIds)

  // 모바일 메뉴가 열려 있는지
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // useRef: 햄버거 버튼 요소를 가리키는 "손잡이". Esc로 닫은 뒤 이 버튼으로 초점을 되돌릴 때 사용
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  // 메뉴가 열려 있는 동안만: Esc 키로 닫기, 화면이 데스크톱 너비가 되면 닫기
  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const handleWidthChange = () => {
      if (desktop.matches) setIsMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    desktop.addEventListener('change', handleWidthChange)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      desktop.removeEventListener('change', handleWidthChange)
    }
  }, [isMenuOpen])

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo} onClick={closeMenu}>
            <Target className={styles.logoMark} size={22} aria-hidden="true" />
            {logo}
          </a>

          {/* 모바일 전용 햄버거 버튼. 키보드 순서상 바로 다음이 메뉴 링크가 되도록 nav 앞에 둠 */}
          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={isMenuOpen}
            aria-controls={MENU_ID}
            aria-label={isMenuOpen ? ui.closeMenu : ui.openMenu}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>

          <nav aria-label={ui.navLabel} className={styles.nav}>
            <ul id={MENU_ID} className={isMenuOpen ? `${styles.links} ${styles.open}` : styles.links}>
              {nav.map((item) => {
                const isActive = item.id === activeId
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={isActive ? `${styles.link} ${styles.active}` : styles.link}
                      // 스크린리더에 "현재 위치"라고 알려줌
                      aria-current={isActive ? 'location' : undefined}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className={styles.theme}>
            <ThemeToggle toDarkLabel={ui.switchToDark} toLightLabel={ui.switchToLight} />
          </div>
        </div>
      </header>

      {/* 메뉴 뒤 어두운 막. 누르면 메뉴가 닫힘 (키보드 사용자는 Esc로 닫음) */}
      {isMenuOpen && <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />}
    </>
  )
}

export default Header
