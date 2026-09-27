import type { ReactNode } from 'react'
import styles from './Badge.module.css'

interface BadgeProps {
  label: string
  icon?: ReactNode // 글자 앞에 붙일 로고·아이콘 (없어도 됨)
}

// 기술 스택·체인 이름 등을 고정폭 글꼴 알약 모양으로 표시
function Badge({ label, icon }: BadgeProps) {
  return (
    <span className={styles.badge}>
      {icon}
      {label}
    </span>
  )
}

export default Badge
