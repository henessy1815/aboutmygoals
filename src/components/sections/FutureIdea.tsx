import type { IdeaContent } from '../../types'
import Section from '../layout/Section'

interface FutureIdeaProps {
  idea: IdeaContent
}

// 3단계: 빈 틀. 내용은 5단계에서 추가
function FutureIdea({ idea }: FutureIdeaProps) {
  return <Section id="idea" title={idea.title} />
}

export default FutureIdea
