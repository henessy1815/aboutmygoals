import styles from './Illustration.module.css'

interface IllustrationProps {
  className?: string
}

// 알약맵 일러스트: 휴대폰 화면 속 여러 알약을 각각 인식(청록 상자)하고,
// 확신이 낮은 알약 하나(주황 점선)만 재촬영을 요청하는 장면
function PillMapIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className ? `${styles.svg} ${className}` : styles.svg}
      viewBox="0 0 360 300"
      aria-hidden="true"
    >
      <defs>
        <filter id="pillmap-shadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
      </defs>

      <circle cx="180" cy="150" r="138" className={styles.soft} />

      {/* 휴대폰 */}
      <rect x="110" y="12" width="140" height="276" rx="24" className={styles.card} filter="url(#pillmap-shadow)" />
      <rect x="110" y="12" width="140" height="276" rx="24" className={styles.outline} />
      <rect x="160" y="22" width="40" height="6" rx="3" className={styles.line} />
      <rect x="120" y="38" width="120" height="198" rx="10" className={styles.cardAlt} />
      <circle cx="180" cy="262" r="13" className={styles.outline} style={{ strokeWidth: 3 }} />
      <circle cx="180" cy="262" r="8" className={styles.line} />

      {/* 알약들 (실제 알약처럼 고정색) */}
      <circle cx="150" cy="80" r="13" fill="#f5f2eb" className={styles.pillEdge} />
      <line x1="141" y1="80" x2="159" y2="80" stroke="#d9d3c7" strokeWidth="1.5" />
      <g transform="rotate(25 206 90)">
        <rect x="190" y="83" width="32" height="14" rx="7" fill="#fde68a" className={styles.pillEdge} />
        <path d="M206 83h-9a7 7 0 0 0 0 14h9z" fill="#f87171" />
      </g>
      <ellipse cx="160" cy="140" rx="16" ry="10" fill="#93c5fd" className={styles.pillEdge} />
      <circle cx="212" cy="150" r="11" fill="#fdba74" className={styles.pillEdge} />
      <circle cx="150" cy="195" r="9" fill="#f9a8d4" className={styles.pillEdge} />
      <ellipse cx="208" cy="200" rx="14" ry="9" fill="#d1d5db" className={styles.pillEdge} />

      {/* 인식 상자 + 이름표 */}
      <rect x="133" y="63" width="34" height="34" rx="4" className={styles.accentStroke} />
      <rect x="133" y="55" width="18" height="6" rx="2" className={styles.accent} />
      <rect x="186" y="72" width="40" height="36" rx="4" className={styles.accentStroke} />
      <rect x="186" y="64" width="18" height="6" rx="2" className={styles.accent} />
      <rect x="140" y="126" width="40" height="28" rx="4" className={styles.accentStroke} />
      <rect x="140" y="118" width="18" height="6" rx="2" className={styles.accent} />
      <rect x="197" y="135" width="30" height="30" rx="4" className={styles.accentStroke} />
      <rect x="197" y="127" width="18" height="6" rx="2" className={styles.accent} />
      <rect x="137" y="182" width="26" height="26" rx="4" className={styles.accentStroke} />
      <rect x="137" y="174" width="18" height="6" rx="2" className={styles.accent} />
      {/* 확신 낮은 알약: 주황 점선 */}
      <rect x="190" y="187" width="36" height="26" rx="4" className={`${styles.warnStroke} ${styles.dashed}`} />
      <rect x="190" y="179" width="18" height="6" rx="2" className={styles.warn} />

      {/* 왼쪽: 후보 의약품 결과 카드 */}
      <path d="M104 88c14 0 18-8 29-8" className={`${styles.accentStroke} ${styles.dashed}`} />
      <rect x="8" y="58" width="96" height="62" rx="12" className={styles.card} filter="url(#pillmap-shadow)" />
      <rect x="8" y="58" width="96" height="62" rx="12" className={styles.outline} />
      <circle cx="28" cy="78" r="8" fill="#f5f2eb" className={styles.pillEdge} />
      <rect x="42" y="72" width="48" height="6" rx="3" className={styles.line} />
      <rect x="42" y="82" width="30" height="5" rx="2.5" className={styles.accent} />
      <circle cx="28" cy="102" r="8" fill="#93c5fd" className={styles.pillEdge} />
      <rect x="42" y="96" width="40" height="6" rx="3" className={styles.line} />
      <rect x="42" y="106" width="36" height="5" rx="2.5" className={styles.accent} />

      {/* 오른쪽: 재촬영 요청 카드 */}
      <path d="M226 200c12 0 18 6 32 6" className={`${styles.warnStroke} ${styles.dashed}`} />
      <rect x="258" y="178" width="94" height="56" rx="12" className={styles.card} filter="url(#pillmap-shadow)" />
      <rect x="258" y="178" width="94" height="56" rx="12" className={styles.outline} />
      <circle cx="281" cy="206" r="13" className={styles.warnSoft} />
      <rect x="274" y="201" width="14" height="10" rx="2" className={styles.warnStroke} style={{ strokeWidth: 1.5 }} />
      <circle cx="281" cy="206" r="2.5" className={styles.warnStroke} style={{ strokeWidth: 1.5 }} />
      <rect x="300" y="198" width="40" height="6" rx="3" className={styles.line} />
      <rect x="300" y="210" width="28" height="5" rx="2.5" className={styles.warn} />
    </svg>
  )
}

export default PillMapIllustration
