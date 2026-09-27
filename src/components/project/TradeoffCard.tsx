import { ChevronDown, Minus, Plus } from 'lucide-react'
import type { Tradeoff } from '../../types'
import Icon from '../common/Icon'
import IconTile from '../common/IconTile'
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
    <details className={styles.card} data-reveal-item>
      <summary className={styles.summary}>
        <IconTile className={styles.icon}>
          <Icon name={tradeoff.icon} size={22} />
        </IconTile>
        <span className={styles.question}>{tradeoff.question}</span>
        <span className={styles.oneLine}>{tradeoff.summary}</span>
        <ChevronDown className={styles.chevron} size={20} aria-hidden="true" />
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
                  <span className={`${styles.tag} ${styles.pro}`}>
                    <Plus size={11} strokeWidth={3} aria-hidden="true" />
                    {prosLabel}
                  </span>
                  {pro}
                </li>
              ))}
              {option.cons.map((con) => (
                <li key={con} className={styles.point}>
                  <span className={`${styles.tag} ${styles.con}`}>
                    <Minus size={11} strokeWidth={3} aria-hidden="true" />
                    {consLabel}
                  </span>
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

export default TradeoffCard
