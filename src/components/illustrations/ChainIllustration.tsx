import BrandIcon from '../common/BrandIcon'
import { CHAIN_LOGOS } from '../common/brandLogos'
import styles from './Illustration.module.css'

interface IllustrationProps {
  className?: string
}

// 자산 추적 일러스트: 여러 체인의 거래 → 공통 형식의 장부로 통합 → 그래프로 시각화
function ChainIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className ? `${styles.svg} ${className}` : styles.svg}
      viewBox="0 0 420 250"
      aria-hidden="true"
    >
      <defs>
        <filter id="chain-shadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
      </defs>

      <ellipse cx="210" cy="125" rx="200" ry="115" className={styles.soft} />

      {/* 체인 → 장부 연결선 */}
      <path d="M74 45c44 0 40 80 84 80" className={`${styles.accentStroke} ${styles.dashed}`} />
      <path d="M74 125h84" className={`${styles.accentStroke} ${styles.dashed}`} />
      <path d="M74 205c44 0 40-80 84-80" className={`${styles.accentStroke} ${styles.dashed}`} />

      {/* 체인 3개 (Ethereum, Solana, Cosmos) */}
      {[45, 125, 205].map((cy) => (
        <g key={cy}>
          <circle cx="48" cy={cy} r="26" className={styles.card} filter="url(#chain-shadow)" />
          <circle cx="48" cy={cy} r="26" className={styles.outline} />
        </g>
      ))}
      <g transform="translate(36 33)">
        {CHAIN_LOGOS.Ethereum && <BrandIcon icon={CHAIN_LOGOS.Ethereum} size={24} />}
      </g>
      <g transform="translate(36 113)">
        {CHAIN_LOGOS.Solana && <BrandIcon icon={CHAIN_LOGOS.Solana} size={24} />}
      </g>
      {/* Cosmos: 공식 로고가 없어 원자 모양으로 대신 */}
      <circle cx="48" cy="205" r="3.5" className={styles.textFill} />
      <ellipse cx="48" cy="205" rx="13" ry="5.5" className={styles.textStroke} />
      <ellipse cx="48" cy="205" rx="13" ry="5.5" transform="rotate(60 48 205)" className={styles.textStroke} />
      <ellipse cx="48" cy="205" rx="13" ry="5.5" transform="rotate(-60 48 205)" className={styles.textStroke} />

      {/* 공통 형식 장부 */}
      <rect x="158" y="60" width="120" height="130" rx="14" className={styles.card} filter="url(#chain-shadow)" />
      <rect x="158" y="60" width="120" height="130" rx="14" className={styles.outline} />
      <rect x="174" y="76" width="56" height="8" rx="4" className={styles.accent} />
      <circle cx="180" cy="106" r="5" fill="#627eea" />
      <rect x="192" y="102" width="70" height="8" rx="4" className={styles.line} />
      <circle cx="180" cy="130" r="5" fill="#9945ff" />
      <rect x="192" y="126" width="56" height="8" rx="4" className={styles.line} />
      <circle cx="180" cy="154" r="5" className={styles.mutedFill} />
      <rect x="192" y="150" width="64" height="8" rx="4" className={styles.line} />
      <rect x="174" y="170" width="88" height="4" rx="2" className={styles.accent} opacity="0.35" />

      {/* 장부 → 그래프 화살표 */}
      <path d="M284 125h22M300 119l6 6-6 6" className={styles.accentStroke} />

      {/* 시각화 그래프 */}
      <rect x="312" y="70" width="100" height="110" rx="14" className={styles.card} filter="url(#chain-shadow)" />
      <rect x="312" y="70" width="100" height="110" rx="14" className={styles.outline} />
      <rect x="326" y="84" width="40" height="6" rx="3" className={styles.line} />
      <path d="M326 160V140l18-12 18 6 18-26 18-12v64z" className={styles.soft} />
      <path d="M326 140l18-12 18 6 18-26 18-12" className={styles.accentStroke} style={{ strokeWidth: 2.5 }} />
      <circle cx="398" cy="96" r="4" className={styles.accent} />
      <path d="M326 160h72" className={styles.outline} />
    </svg>
  )
}

export default ChainIllustration
