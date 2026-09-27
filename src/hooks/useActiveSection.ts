import { useEffect, useState } from 'react'
import type { SectionId } from '../types'

// 헤더 바로 아래에서 이만큼(px) 여유를 두고 "지나갔다"고 판단 (반올림 오차 대비)
const TOLERANCE = 16

/**
 * 지금 화면에서 보고 있는 섹션의 id를 돌려줍니다.
 * 규칙: 위쪽 끝이 헤더 아래 선을 지나간 섹션 중 가장 마지막 것.
 *       단, 페이지 맨 아래에 닿으면 마지막 섹션(짧아서 선까지 못 올라오는 경우 대비).
 */
export function useActiveSection(ids: SectionId[]): SectionId {
  const [activeId, setActiveId] = useState<SectionId>(ids[0])

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const headerHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--header-height'),
      )
      const line = headerHeight + TOLERANCE
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

      let current = ids[0]
      if (atBottom) {
        current = ids[ids.length - 1]
      } else {
        for (const id of ids) {
          const top = document.getElementById(id)?.getBoundingClientRect().top
          if (top !== undefined && top <= line) current = id
        }
      }
      setActiveId(current)
    }

    // 스크롤 이벤트는 1초에 수십 번 발생하므로, 화면을 다시 그릴 때 한 번만 계산
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    // 컴포넌트가 사라질 때 이벤트 연결 해제 (정리하지 않으면 계속 실행됨)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [ids])

  return activeId
}
