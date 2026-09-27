import type { ProjectContent } from '../../types'
import Section from '../layout/Section'
import FlowDiagram from '../project/FlowDiagram'
import TradeoffCard from '../project/TradeoffCard'
import styles from './Project.module.css'

interface ProjectProps {
  project: ProjectContent
}

// 가장 비중 큰 섹션: 소개 → 사용 흐름 → 설계 질문 → 안내 문구
function Project({ project }: ProjectProps) {
  return (
    <Section id="project" eyebrow={project.eyebrow} title={project.title}>
      <p className={styles.intro}>{project.intro}</p>

      <h3 className={styles.subtitle}>{project.flowTitle}</h3>
      <FlowDiagram steps={project.steps} />

      <h3 className={styles.subtitle}>{project.tradeoffsTitle}</h3>
      <div className={styles.tradeoffs}>
        {project.tradeoffs.map((tradeoff) => (
          <TradeoffCard
            key={tradeoff.id}
            tradeoff={tradeoff}
            prosLabel={project.prosLabel}
            consLabel={project.consLabel}
          />
        ))}
      </div>

      <p className={styles.disclaimer}>
        <InfoIcon />
        {project.disclaimer}
      </p>
    </Section>
  )
}

function InfoIcon() {
  return (
    <svg className={styles.infoIcon} width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16v-5M12 8h.01" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default Project
