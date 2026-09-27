import { ArrowRight } from 'lucide-react'
import type { HeroContent, Profile, TechStack } from '../../types'
import Badge from '../common/Badge'
import BrandIcon from '../common/BrandIcon'
import { GITHUB_LOGO, STACK_LOGOS } from '../common/brandLogos'
import HeroIllustration from '../illustrations/HeroIllustration'
import Section from '../layout/Section'
import styles from './Hero.module.css'

interface HeroProps {
  profile: Profile
  stacks: TechStack[]
  hero: HeroContent
}

// 첫 화면: [이름 → 한 줄 소개 → 스택 뱃지 → GitHub 버튼] + 오른쪽 일러스트
function Hero({ profile, stacks, hero }: HeroProps) {
  return (
    // 첫 화면은 방문하자마자 보여야 하므로 등장 애니메이션 없음
    <Section id="hero" className={styles.hero} animate={false}>
      <div className={styles.background} aria-hidden="true" />

      <div className={styles.layout}>
        <div>
          <span className={styles.bar} aria-hidden="true" />
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.tagline}>{profile.tagline}</p>

          <ul className={styles.badges}>
            {stacks.map((stack) => (
              <li key={stack.id}>
                <Badge label={stack.name} icon={<BrandIcon icon={STACK_LOGOS[stack.id]} size={14} />} />
              </li>
            ))}
          </ul>

          {/* 새 탭에서 열어 이 페이지를 닫지 않고도 GitHub를 볼 수 있게 */}
          <a className={styles.github} href={profile.githubUrl} target="_blank" rel="noreferrer">
            <BrandIcon icon={GITHUB_LOGO} size={18} />
            {hero.githubLabel}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <HeroIllustration className={styles.illustration} />
      </div>
    </Section>
  )
}

export default Hero
