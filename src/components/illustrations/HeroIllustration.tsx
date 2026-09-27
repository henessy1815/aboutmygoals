import styles from './Illustration.module.css'

interface IllustrationProps {
  className?: string
}

// 첫 화면 일러스트: 코드 편집기 창 + 성장 그래프 카드 + 알약 캡슐 + 체크 배지
// (개발자 · 목표 · 알약맵을 한 장면에). 장식용이라 스크린리더에서는 읽지 않음
function HeroIllustration({ className }: IllustrationProps) {
  return (
    <svg
      className={className ? `${styles.svg} ${className}` : styles.svg}
      viewBox="0 0 440 380"
      aria-hidden="true"
    >
      <defs>
        <filter id="hero-shadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* 배경 원 */}
      <circle cx="225" cy="195" r="165" className={styles.soft} />

      {/* 코드 편집기 창 */}
      <rect x="30" y="80" width="290" height="210" rx="16" className={styles.card} filter="url(#hero-shadow)" />
      <path d="M30 96a16 16 0 0 1 16-16h258a16 16 0 0 1 16 16v20H30z" className={styles.cardAlt} />
      <rect x="30" y="80" width="290" height="210" rx="16" className={styles.outline} />
      <circle cx="54" cy="98" r="5" fill="#ff5f57" />
      <circle cx="72" cy="98" r="5" fill="#febc2e" />
      <circle cx="90" cy="98" r="5" fill="#28c840" />
      {/* 코드 줄 */}
      <rect x="54" y="138" width="40" height="10" rx="5" className={styles.accent} />
      <rect x="102" y="138" width="70" height="10" rx="5" className={styles.line} />
      <rect x="180" y="138" width="50" height="10" rx="5" className={styles.accent} opacity="0.45" />
      <rect x="74" y="162" width="90" height="10" rx="5" className={styles.line} />
      <rect x="172" y="162" width="60" height="10" rx="5" className={styles.accent} opacity="0.45" />
      <rect x="74" y="186" width="50" height="10" rx="5" className={styles.accent} />
      <rect x="132" y="186" width="110" height="10" rx="5" className={styles.line} />
      <rect x="94" y="210" width="120" height="10" rx="5" className={styles.line} />
      <rect x="74" y="234" width="70" height="10" rx="5" className={styles.line} />
      <rect x="152" y="234" width="40" height="10" rx="5" className={styles.accent} />
      <rect x="54" y="258" width="30" height="10" rx="5" className={styles.accent} opacity="0.45" />
      <rect x="92" y="255" width="3" height="16" rx="1.5" className={styles.accent} />

      {/* 성장 그래프 카드 */}
      <rect x="268" y="34" width="148" height="112" rx="14" className={styles.card} filter="url(#hero-shadow)" />
      <rect x="268" y="34" width="148" height="112" rx="14" className={styles.outline} />
      <rect x="286" y="54" width="56" height="8" rx="4" className={styles.line} />
      <rect x="290" y="102" width="16" height="24" rx="4" className={styles.accent} opacity="0.35" />
      <rect x="314" y="88" width="16" height="38" rx="4" className={styles.accent} opacity="0.55" />
      <rect x="338" y="74" width="16" height="52" rx="4" className={styles.accent} opacity="0.75" />
      <rect x="362" y="56" width="16" height="70" rx="4" className={styles.accent} />
      <path d="M388 70l8-10 8 10" className={styles.accentStroke} />

      {/* 알약 캡슐 (기울임) */}
      <g transform="rotate(-28 352 300)">
        <rect x="300" y="280" width="104" height="40" rx="20" className={styles.card} filter="url(#hero-shadow)" />
        <path d="M352 280H320a20 20 0 0 0 0 40h32z" className={styles.accent} />
        <rect x="300" y="280" width="104" height="40" rx="20" className={styles.outline} />
        <rect x="312" y="288" width="22" height="5" rx="2.5" fill="#ffffff" opacity="0.45" />
      </g>

      {/* 체크 배지 */}
      <circle cx="62" cy="318" r="30" className={styles.card} filter="url(#hero-shadow)" />
      <circle cx="62" cy="318" r="30" className={styles.outline} />
      <circle cx="62" cy="318" r="19" className={styles.accent} />
      <path d="M53 318l6 6 12-13" className={styles.onAccentStroke} />

      {/* 반짝임 */}
      <path d="M414 196l2.5 7.5 7.5 2.5-7.5 2.5-2.5 7.5-2.5-7.5-7.5-2.5 7.5-2.5z" className={styles.accent} />
      <path d="M22 52l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" className={styles.accent} opacity="0.6" />
      <circle cx="248" cy="344" r="4" className={styles.accent} opacity="0.5" />
      <circle cx="232" cy="24" r="3" className={styles.accent} opacity="0.5" />
    </svg>
  )
}

export default HeroIllustration
