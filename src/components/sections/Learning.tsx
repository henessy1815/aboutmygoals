import type { LearningContent } from '../../types'
import Card from '../common/Card'
import Section from '../layout/Section'
import styles from './Learning.module.css'

interface LearningProps {
  learning: LearningContent
}

function Learning({ learning }: LearningProps) {
  return (
    <Section id="learning" eyebrow={learning.eyebrow} title={learning.title}>
      <ul className={styles.list}>
        {learning.items.map((item) => (
          <li key={item.title} data-reveal-item>
            <Card className={styles.card}>
              <h3>{item.title}</h3>
              <p className={styles.method}>{item.method}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Learning
