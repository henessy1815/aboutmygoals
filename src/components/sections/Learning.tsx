import type { LearningContent } from '../../types'
import Card from '../common/Card'
import Icon from '../common/Icon'
import IconTile from '../common/IconTile'
import Section from '../layout/Section'
import styles from './Learning.module.css'

interface LearningProps {
  learning: LearningContent
}

function Learning({ learning }: LearningProps) {
  return (
    <Section id="learning" eyebrow={learning.eyebrow} eyebrowIcon={learning.icon} title={learning.title}>
      <ul className={styles.list}>
        {learning.items.map((item) => (
          <li key={item.title} data-reveal-item>
            <Card className={styles.card}>
              <IconTile size="lg">
                <Icon name={item.icon} size={26} />
              </IconTile>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.method}>{item.method}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Learning
