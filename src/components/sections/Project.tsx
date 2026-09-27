import { Info } from 'lucide-react'
import type { ProjectContent } from '../../types'
import PillMapIllustration from '../illustrations/PillMapIllustration'
import Section from '../layout/Section'
import FlowDiagram from '../project/FlowDiagram'
import TradeoffCard from '../project/TradeoffCard'
import styles from './Project.module.css'

interface ProjectProps {
  project: ProjectContent
}

// 가장 비중 큰 섹션: 소개(+일러스트) → 사용 흐름 → 설계 질문 → 안내 문구
function Project({ project }: ProjectProps) {
  return (
    <Section id="project" eyebrow={project.eyebrow} eyebrowIcon={project.icon} title={project.title}>
      <div className={styles.introRow}>
        <p className={styles.intro}>{project.intro}</p>
        <PillMapIllustration className={styles.illustration} />
      </div>

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
        <Info className={styles.infoIcon} size={18} aria-hidden="true" />
        {project.disclaimer}
      </p>
    </Section>
  )
}

export default Project
