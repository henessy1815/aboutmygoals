import type { LearningContent } from '../../types'
import Section from '../layout/Section'

interface LearningProps {
  learning: LearningContent
}

// 3단계: 빈 틀. 내용은 5단계에서 추가
function Learning({ learning }: LearningProps) {
  return <Section id="learning" title={learning.title} />
}

export default Learning
