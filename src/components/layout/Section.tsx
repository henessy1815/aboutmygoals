import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import type { SectionId } from '../../types'
import styles from './Section.module.css'

interface SectionProps {
  id: SectionId
  eyebrow?: string // 제목 위 작은 영문 라벨
  title?: string // Hero처럼 제목이 없는 섹션도 있어서 선택값
  className?: string // 섹션마다 추가 스타일이 필요할 때
  animate?: boolean // 등장 애니메이션 사용 여부 (기본: 사용)
  children?: ReactNode
}

// 모든 섹션의 공통 틀: 앵커 id, 가운데 정렬된 본문 폭, 라벨 + 제목, 등장 애니메이션
function Section({ id, eyebrow, title, className, animate = true, children }: SectionProps) {
  const titleId = `${id}-title`
  const innerRef = useInView<HTMLDivElement>(animate)

  return (
    <section
      id={id}
      className={className ? `${styles.section} ${className}` : styles.section}
      aria-labelledby={title ? titleId : undefined}
    >
      {/* 움직이는 건 안쪽 div. section 자체는 제자리라서 현재 섹션 감지 위치가 흔들리지 않음 */}
      <div ref={innerRef} className={styles.inner} data-reveal={animate ? '' : undefined}>
        {title && (
          <div className={styles.head}>
            {/* 제목과 뜻이 겹치는 장식용 라벨이라 스크린리더에서는 읽지 않음 */}
            {eyebrow && (
              <p className={styles.eyebrow} aria-hidden="true">
                {eyebrow}
              </p>
            )}
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
