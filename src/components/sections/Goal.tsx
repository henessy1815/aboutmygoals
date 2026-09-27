import type { GoalContent, TechStack } from '../../types'
import Badge from '../common/Badge'
import Card from '../common/Card'
import Section from '../layout/Section'
import styles from './Goal.module.css'

interface GoalProps {
  goal: GoalContent
  stacks: TechStack[]
}

function Goal({ goal, stacks }: GoalProps) {
  return (
    <Section id="goal" eyebrow={goal.eyebrow} title={goal.title}>
      <p className={styles.highlight}>{goal.highlight}</p>

      <h3 className={styles.subtitle}>{goal.stacksTitle}</h3>
      <ul className={styles.stacks}>
        {stacks.map((stack) => (
          <li key={stack.id}>
            <Card className={styles.stackCard}>
              <Badge label={stack.name} />
              <p className={styles.role}>{stack.role}</p>
            </Card>
          </li>
        ))}
      </ul>

      <h3 className={styles.subtitle}>{goal.deliverablesTitle}</h3>
      <ul className={styles.checklist}>
        {goal.deliverables.map((item) => (
          <li key={item.label} className={styles.checkItem}>
            <CheckIcon />
            <span>
              {item.label}
              {item.note && <span className={styles.note}> ({item.note})</span>}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function CheckIcon() {
  return (
    <svg className={styles.checkIcon} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="m8 12 3 3 5-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Goal
