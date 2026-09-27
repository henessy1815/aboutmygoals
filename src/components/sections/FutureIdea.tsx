import type { IdeaContent } from '../../types'
import Badge from '../common/Badge'
import Section from '../layout/Section'
import styles from './FutureIdea.module.css'

interface FutureIdeaProps {
  idea: IdeaContent
}

function FutureIdea({ idea }: FutureIdeaProps) {
  return (
    <Section id="idea" eyebrow={idea.eyebrow} title={idea.title}>
      <p className={styles.description}>{idea.description}</p>
      <ul className={styles.chains}>
        {idea.chains.map((chain) => (
          <li key={chain} data-reveal-item>
            <Badge label={chain} />
          </li>
        ))}
      </ul>

      <div className={styles.columns}>
        <div>
          <h3 className={styles.subtitle}>{idea.challengesTitle}</h3>
          <ol className={styles.challenges}>
            {idea.challenges.map((challenge, index) => (
              <li key={challenge} className={styles.challenge} data-reveal-item>
                {/* 01, 02처럼 두 자리 번호 */}
                <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                {challenge}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className={styles.subtitle}>{idea.principleTitle}</h3>
          <p className={styles.principle} data-reveal-item>
            <LockIcon />
            {idea.principle}
          </p>
        </div>
      </div>
    </Section>
  )
}

function LockIcon() {
  return (
    <svg className={styles.lockIcon} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default FutureIdea
