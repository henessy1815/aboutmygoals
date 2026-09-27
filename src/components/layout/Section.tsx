import type { ReactNode } from 'react'
import type { SectionId } from '../../types'
import styles from './Section.module.css'

interface SectionProps {
  id: SectionId
  title?: string // Hero처럼 제목이 없는 섹션도 있어서 선택값
  className?: string // 섹션마다 추가 스타일이 필요할 때
  children?: ReactNode
}

// 모든 섹션의 공통 틀: 앵커 id, 가운데 정렬된 본문 폭, 제목
function Section({ id, title, className, children }: SectionProps) {
  const titleId = `${id}-title`

  return (
    <section
      id={id}
      className={className ? `${styles.section} ${className}` : styles.section}
      aria-labelledby={title ? titleId : undefined}
    >
      <div className={styles.inner}>
        {title && (
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
