import type { FooterContent, Profile } from '../../types'
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
            <dt>{footer.contactLabel}</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
          <div className={styles.item}>
            <dt>{footer.githubLabel}</dt>
            <dd>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                {githubText}
              </a>
            </dd>
          </div>
          <div className={styles.item}>
            <dt>{footer.writtenAtLabel}</dt>
            <dd>{profile.writtenAt}</dd>
          </div>
        </dl>
      </div>
    </footer>
  )
}

export default Footer
