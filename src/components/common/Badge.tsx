import styles from './Badge.module.css'

interface BadgeProps {
  label: string
}

// 기술 스택·체인 이름 등을 고정폭 글꼴 알약 모양으로 표시
function Badge({ label }: BadgeProps) {
  return <span className={styles.badge}>{label}</span>
}

export default Badge
