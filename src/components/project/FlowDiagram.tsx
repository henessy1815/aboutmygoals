import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import type { FlowStep } from '../../types'
import Icon from '../common/Icon'
import styles from './FlowDiagram.module.css'

interface FlowDiagramProps {
  steps: FlowStep[]
}

// 사용 흐름 3단계. 단계를 클릭(모바일은 탭)하거나 마우스를 올리면 아래에 설명이 바뀜
function FlowDiagram({ steps }: FlowDiagramProps) {
  // 지금 선택된 단계의 순서(0부터 시작). 처음에는 첫 단계
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div>
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.id} className={styles.item} data-reveal-item>
            {index > 0 && <ArrowRight className={styles.arrow} size={20} aria-hidden="true" />}
            <button
              type="button"
              className={styles.step}
              // 선택 상태를 스크린리더에 알려주고, CSS도 이 값으로 강조 스타일을 정함
              aria-pressed={index === selectedIndex}
              onClick={() => setSelectedIndex(index)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              {/* 단계 아이콘 + 오른쪽 위 번호 */}
              <span className={styles.circle}>
                <Icon name={step.icon} size={24} />
                <span className={styles.number}>{index + 1}</span>
              </span>
              <span className={styles.title}>{step.title}</span>
            </button>
          </li>
        ))}
      </ol>

      {/* aria-live: 내용이 바뀌면 스크린리더가 새 설명을 읽어줌 */}
      <p className={styles.description} aria-live="polite">
        {steps[selectedIndex].description}
      </p>
    </div>
  )
}

export default FlowDiagram
