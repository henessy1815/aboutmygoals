import type { Profile } from '../../types'
import Section from '../layout/Section'
import styles from './Hero.module.css'

interface HeroProps {
  profile: Profile
}

// 3단계: 이름과 한 줄 소개만. 뱃지·GitHub 버튼은 5단계에서 추가
function Hero({ profile }: HeroProps) {
  return (
    <Section id="hero" className={styles.hero}>
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.tagline}>{profile.tagline}</p>
    </Section>
  )
}

export default Hero
