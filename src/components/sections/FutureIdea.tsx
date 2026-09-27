import { Lock, Orbit } from 'lucide-react'
import type { IdeaContent } from '../../types'
import Badge from '../common/Badge'
import BrandIcon from '../common/BrandIcon'
import { CHAIN_LOGOS } from '../common/brandLogos'
import Icon from '../common/Icon'
import IconTile from '../common/IconTile'
import ChainIllustration from '../illustrations/ChainIllustration'
import Section from '../layout/Section'
import styles from './FutureIdea.module.css'

interface FutureIdeaProps {
  idea: IdeaContent
}

function FutureIdea({ idea }: FutureIdeaProps) {
  return (
    <Section id="idea" eyebrow={idea.eyebrow} eyebrowIcon={idea.icon} title={idea.title}>
      <div className={styles.overview}>
        <div>
          <p className={styles.description}>{idea.description}</p>
          <ul className={styles.chains}>
            {idea.chains.map((chain) => {
              // 공식 로고가 없는 체인(Cosmos)은 궤도 모양 아이콘으로 대신
              const logo = CHAIN_LOGOS[chain]
              const icon = logo ? <BrandIcon icon={logo} size={14} /> : <Orbit size={14} aria-hidden="true" />
              return (
                <li key={chain} data-reveal-item>
                  <Badge label={chain} icon={icon} />
                </li>
              )
            })}
          </ul>
        </div>
        <ChainIllustration className={styles.illustration} />
      </div>

      <div className={styles.columns}>
        <div>
          <h3 className={styles.subtitle}>{idea.challengesTitle}</h3>
          <ol className={styles.challenges}>
            {idea.challenges.map((challenge) => (
              <li key={challenge.label} className={styles.challenge} data-reveal-item>
                <IconTile size="sm">
                  <Icon name={challenge.icon} size={18} />
                </IconTile>
                {challenge.label}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className={styles.subtitle}>{idea.principleTitle}</h3>
          <p className={styles.principle} data-reveal-item>
            <IconTile size="sm">
              <Lock size={18} aria-hidden="true" />
            </IconTile>
            {idea.principle}
          </p>
        </div>
      </div>
    </Section>
  )
}

export default FutureIdea
