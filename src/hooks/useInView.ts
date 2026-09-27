import { useEffect, useRef } from 'react'

// 같이 화면에 들어온 요소끼리 이 간격(ms)을 두고 하나씩 나타남
const STAGGER_MS = 80

/**
 * 섹션 등장 애니메이션용 화면 진입 감지.
 * 돌려준 ref를 붙인 요소와, 그 안의 data-reveal-item 요소들을 지켜보다가
 * 화면에 들어오면 data-shown 속성을 붙입니다. 실제 움직임은 global.css가 담당합니다.
 * 한 번 나타난 요소는 더 지켜보지 않습니다 (애니메이션은 한 번만).
 */
export function useInView<T extends HTMLElement>(enabled = true) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!enabled || !root) return

    const targets = [root, ...root.querySelectorAll<HTMLElement>('[data-reveal-item]')]

    // IntersectionObserver: 요소가 화면(뷰포트)에 들어오거나 나갈 때 브라우저가 알려줌
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, order) => {
            const element = entry.target as HTMLElement
            element.style.transitionDelay = `${order * STAGGER_MS}ms`
            element.dataset.shown = ''
            observer.unobserve(element)
          })
      },
      // 화면 아래쪽 10%는 빼고 판단 → 조금 더 올라왔을 때 나타남
      { rootMargin: '0px 0px -10% 0px' },
    )

    targets.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [enabled])

  return ref
}
