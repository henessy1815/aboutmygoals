import { CalendarDays, Mail } from 'lucide-react'
import type { FooterContent, Profile } from '../../types'
import BrandIcon from '../common/BrandIcon'
import { GITHUB_LOGO } from '../common/brandLogos'
import styles from './Footer.module.css'

interface FooterProps {
  profile: Profile
  footer: FooterContent
}

function Footer({ profile, footer }: FooterProps) {
  // 화면에는 "https://" 없이 짧게 표시
  const githubText = profile.githubUrl.replace(/^https?:\/\//, '')

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* dl: "항목 이름(dt) – 값(dd)" 짝을 나타내는 HTML 목록 */}
        <dl className={styles.list}>
          <div className={styles.item}>
            <dt>
              <Mail size={15} aria-hidden="true" />
              {footer.contactLabel}
            </dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
          <div className={styles.item}>
            <dt>
              <BrandIcon icon={GITHUB_LOGO} size={15} />
              {footer.githubLabel}
            </dt>
            <dd>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                {githubText}
              </a>
            </dd>
          </div>
          <div className={styles.item}>
            <dt>
              <CalendarDays size={15} aria-hidden="true" />
              {footer.writtenAtLabel}
            </dt>
            <dd>{profile.writtenAt}</dd>
          </div>
        </dl>
      </div>
    </footer>
  )
}

export default Footer
