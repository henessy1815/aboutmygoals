import type { SimpleIcon } from 'simple-icons'

interface BrandIconProps {
  icon: SimpleIcon // simple-icons의 로고 데이터 (모양 path + 브랜드 색)
  size?: number
  className?: string
}

// 브랜드 색이 검정에 가까우면(Next.js, GitHub 등) 다크 모드에서 안 보이므로 글자색을 따라가게 함
function isNearBlack(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16))
  return 0.299 * r + 0.587 * g + 0.114 * b < 70
}

// 공식 로고를 원래 색으로 표시. 옆에 이름이 함께 나오므로 스크린리더에서는 읽지 않음
function BrandIcon({ icon, size = 16, className }: BrandIconProps) {
  const color = isNearBlack(icon.hex) ? 'currentColor' : `#${icon.hex}`

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  )
}

export default BrandIcon
