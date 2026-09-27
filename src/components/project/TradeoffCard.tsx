import type { Tradeoff } from '../../types'
import styles from './TradeoffCard.module.css'

interface TradeoffCardProps {
  tradeoff: Tradeoff
  prosLabel: string
  consLabel: string
}

// 선택지 순서를 나타내는 기호 (문구가 아니라 번호 역할)
const OPTION_KEYS = ['A', 'B']

// <details>: 브라우저 기본 접기/펼치기. <summary>를 누르면 열리고 닫힘.
// 카드마다 따로 동작하므로 여러 개를 동시에 펼칠 수 있음
function TradeoffCard({ tradeoff, prosLabel, consLabel }: TradeoffCardProps) {
  return (
    <details className={styles.card}>
      <summary className={styles.summary}>
        <span className={styles.question}>{tradeoff.question}</span>
        <span className={styles.oneLine}>{tradeoff.summary}</span>
        <ChevronIcon />
      </summary>

      <div className={styles.options}>
        {tradeoff.options.map((option, index) => (
          <div key={option.label} className={styles.option}>
            <p className={styles.optionLabel}>
              <span className={styles.key}>{OPTION_KEYS[index]}</span>
              {option.label}
            </p>
            {/* 장점/단점은 색만으로 구분하지 않고 글자 라벨도 함께 표시 */}
            <ul className={styles.points}>
              {option.pros.map((pro) => (
                <li key={pro} className={styles.point}>
                  <span className={`${styles.tag} ${styles.pro}`}>{prosLabel}</span>
                  {pro}
                </li>
              ))}
              {option.cons.map((con) => (
                <li key={con} className={styles.point}>
                  <span className={`${styles.tag} ${styles.con}`}>{consLabel}</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  )
}

function ChevronIcon() {
  return (
    <svg className={styles.chevron} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TradeoffCard
