import {
  BookOpen,
  Calculator,
  Camera,
  Database,
  Flag,
  Gauge,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Lightbulb,
  Merge,
  Pill,
  RefreshCw,
  Rocket,
  Scale,
  ScanSearch,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import type { IconName } from '../../types'

// content.ts의 아이콘 이름 → lucide 아이콘 연결표.
// Record<IconName, ...>이라서 이름 하나라도 빠지면 TypeScript가 알려줌
const ICONS: Record<IconName, LucideIcon> = {
  flag: Flag,
  pill: Pill,
  'graduation-cap': GraduationCap,
  sparkles: Sparkles,
  globe: Globe,
  'git-branch': GitBranch,
  'book-open': BookOpen,
  camera: Camera,
  'scan-search': ScanSearch,
  'refresh-cw': RefreshCw,
  layers: Layers,
  gauge: Gauge,
  database: Database,
  lightbulb: Lightbulb,
  rocket: Rocket,
  scale: Scale,
  merge: Merge,
  calculator: Calculator,
}

interface IconProps {
  name: IconName
  size?: number
  className?: string
}

// 장식용 아이콘이라 스크린리더에서는 읽지 않음 (옆의 글자가 뜻을 전달)
function Icon({ name, size = 20, className }: IconProps) {
  const Component = ICONS[name]
  return <Component size={size} className={className} aria-hidden="true" />
}

export default Icon
