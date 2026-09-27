import type { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  className?: string // 카드마다 추가 스타일이 필요할 때
  children: ReactNode
}

// 윗변에 강조색 띠가 있는 공통 카드 틀. 안의 내용은 쓰는 쪽에서 정함
function Card({ className, children }: CardProps) {
  return <div className={className ? `${styles.card} ${className}` : styles.card}>{children}</div>
}

export default Card
