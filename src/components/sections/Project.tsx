import type { ProjectContent } from '../../types'
import Section from '../layout/Section'

interface ProjectProps {
  project: ProjectContent
}

// 3단계: 빈 틀. 내용은 6단계에서 추가
function Project({ project }: ProjectProps) {
  return <Section id="project" title={project.title} />
}

export default Project
