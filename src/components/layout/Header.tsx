import { useMemo } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import type { NavItem, SectionId, UiLabels } from '../../types'
import styles from './Header.module.css'
import ThemeToggle from './ThemeToggle'

interface HeaderProps {
  name: string
  nav: NavItem[]
  ui: UiLabels
}

function Header({ name, nav, ui }: HeaderProps) {
  // 감시할 섹션 목록: hero + 네비 항목들.
  // useMemo: nav가 바뀌지 않는 한 같은 배열을 재사용 → useActiveSection이 매번 다시 설정되지 않음
  const sectionIds = useMemo<SectionId[]>(() => ['hero', ...nav.map((item) => item.id)], [nav])
  const activeId = useActiveSection(sectionIds)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          {name}
        </a>

        <nav aria-label={ui.navLabel} className={styles.nav}>
          <ul className={styles.links}>
            {nav.map((item) => {
              const isActive = item.id === activeId
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={isActive ? `${styles.link} ${styles.active}` : styles.link}
                    // 스크린리더에 "현재 위치"라고 알려줌
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <ThemeToggle toDarkLabel={ui.switchToDark} toLightLabel={ui.switchToLight} />
      </div>
    </header>
  )
}

export default Header
