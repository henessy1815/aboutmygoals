import type { HeroContent, Profile, TechStack } from '../../types'
import Badge from '../common/Badge'
import Section from '../layout/Section'
import styles from './Hero.module.css'

interface HeroProps {
  profile: Profile
  stacks: TechStack[]
  hero: HeroContent
}

// 첫 화면: 이름 → 한 줄 소개 → 스택 뱃지 → GitHub 버튼
function Hero({ profile, stacks, hero }: HeroProps) {
  return (
    <Section id="hero" className={styles.hero}>
      <div className={styles.background} aria-hidden="true" />
      <span className={styles.bar} aria-hidden="true" />
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.tagline}>{profile.tagline}</p>

      <ul className={styles.badges}>
        {stacks.map((stack) => (
          <li key={stack.id}>
            <Badge label={stack.name} />
          </li>
        ))}
      </ul>

      {/* 새 탭에서 열어 이 페이지를 닫지 않고도 GitHub를 볼 수 있게 */}
      <a className={styles.github} href={profile.githubUrl} target="_blank" rel="noreferrer">
        {hero.githubLabel}
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </Section>
  )
}

export default Hero
