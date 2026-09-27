import type { GoalContent } from '../../types'
import Section from '../layout/Section'

interface GoalProps {
  goal: GoalContent
}

// 3단계: 빈 틀. 내용은 5단계에서 추가
function Goal({ goal }: GoalProps) {
  return <Section id="goal" title={goal.title} />
}

export default Goal
