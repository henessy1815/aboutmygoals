import { Briefcase, Check } from 'lucide-react'
import type { GoalContent, TechStack } from '../../types'
import BrandIcon from '../common/BrandIcon'
import { STACK_LOGOS } from '../common/brandLogos'
import Card from '../common/Card'
import Icon from '../common/Icon'
import IconTile from '../common/IconTile'
import Section from '../layout/Section'
import styles from './Goal.module.css'

interface GoalProps {
  goal: GoalContent
  stacks: TechStack[]
}

function Goal({ goal, stacks }: GoalProps) {
  return (
    <Section id="goal" eyebrow={goal.eyebrow} eyebrowIcon={goal.icon} title={goal.title}>
      <p className={styles.highlight}>
        <IconTile size="lg">
          <Briefcase size={26} aria-hidden="true" />
        </IconTile>
        {goal.highlight}
      </p>

      <h3 className={styles.subtitle}>{goal.stacksTitle}</h3>
      <ul className={styles.stacks}>
        {stacks.map((stack) => (
          <li key={stack.id} data-reveal-item>
            <Card className={styles.stackCard}>
              <span className={styles.logoTile}>
                <BrandIcon icon={STACK_LOGOS[stack.id]} size={26} />
              </span>
              <p className={styles.stackName}>{stack.name}</p>
              <p className={styles.role}>{stack.role}</p>
            </Card>
          </li>
        ))}
      </ul>

      <h3 className={styles.subtitle}>{goal.deliverablesTitle}</h3>
      <ul className={styles.checklist}>
        {goal.deliverables.map((item) => (
          <li key={item.label} className={styles.checkItem} data-reveal-item>
            {/* 결과물 아이콘 + 오른쪽 아래 작은 체크 표시 (체크리스트 형태) */}
            <span className={styles.checkIcon}>
              <IconTile size="sm">
                <Icon name={item.icon} size={18} />
              </IconTile>
              <span className={styles.checkBadge}>
                <Check size={10} strokeWidth={3.5} aria-hidden="true" />
              </span>
            </span>
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

export default Goal
