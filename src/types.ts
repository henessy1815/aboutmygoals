// content.ts에 들어갈 데이터의 "모양"을 정의하는 파일입니다.
// 여기 적힌 칸을 빠뜨리거나 오타를 내면 TypeScript가 바로 알려줍니다.

// ── 공통 ─────────────────────────────

/** 섹션 앵커 id. 여기 없는 값을 쓰면 오류가 납니다. */
export type SectionId = 'hero' | 'goal' | 'project' | 'learning' | 'idea'

/**
 * content.ts에서 아이콘을 이름으로 고릅니다. 여기 없는 이름을 쓰면 오류가 납니다.
 * 이름과 실제 그림의 연결은 components/common/Icon.tsx에 있습니다.
 */
export type IconName =
  | 'flag'
  | 'pill'
  | 'graduation-cap'
  | 'sparkles'
  | 'globe'
  | 'git-branch'
  | 'book-open'
  | 'camera'
  | 'scan-search'
  | 'refresh-cw'
  | 'layers'
  | 'gauge'
  | 'database'
  | 'lightbulb'
  | 'rocket'
  | 'scale'
  | 'merge'
  | 'calculator'

/** 헤더 링크 한 개 (hero는 이름 클릭으로 이동하므로 제외) */
export interface NavItem {
  id: Exclude<SectionId, 'hero'> // 'hero'를 뺀 나머지만 허용
  label: string
}

/** 화면에 보이지 않지만 스크린리더가 읽는 문구 등 */
export interface UiLabels {
  navLabel: string
  openMenu: string
  closeMenu: string
  switchToDark: string
  switchToLight: string
}

// ── 개인 정보 (Hero·Footer가 함께 사용) ──

export interface Profile {
  name: string
  tagline: string
  githubUrl: string
  email: string
  writtenAt: string // 화면 표시용 문자열 "2026.09.28"
}

// ── 기술 스택 (Hero 뱃지 + Goal 역할 카드) ──

export type StackId = 'ts' | 'react' | 'next' | 'supabase'

export interface TechStack {
  id: StackId
  name: string // 뱃지에 표시
  role: string // 역할 카드에 표시
}

// ── Header ──────────────────────────

export interface HeaderContent {
  logo: string // 왼쪽 위 로고 문구
}

// ── Hero ────────────────────────────

export interface HeroContent {
  githubLabel: string
}

// ── Goal ────────────────────────────

export interface Deliverable {
  label: string
  icon: IconName
  note?: string // 보충 설명 (없어도 됨)
}

export interface GoalContent {
  eyebrow: string // 제목 위 작은 영문 라벨 (화면에는 대문자로 표시)
  icon: IconName // 라벨 앞 아이콘
  title: string
  highlight: string
  stacksTitle: string
  deliverablesTitle: string
  deliverables: Deliverable[]
}

// ── Project ─────────────────────────

export interface FlowStep {
  id: string
  title: string // 다이어그램 칸에 표시
  icon: IconName
  description: string // 선택 시 아래에 표시
}

export interface TradeoffOption {
  label: string
  pros: string[]
  cons: string[]
}

export interface Tradeoff {
  id: string
  question: string
  icon: IconName
  summary: string // 접힌 상태의 한 줄
  options: [TradeoffOption, TradeoffOption] // 정확히 A, B 두 개
}

export interface ProjectContent {
  eyebrow: string // 제목 위 작은 영문 라벨 (화면에는 대문자로 표시)
  icon: IconName // 라벨 앞 아이콘
  title: string
  intro: string
  flowTitle: string
  steps: FlowStep[]
  tradeoffsTitle: string
  prosLabel: string
  consLabel: string
  tradeoffs: Tradeoff[]
  disclaimer: string
}

// ── Learning ────────────────────────

export interface LearningItem {
  title: string
  icon: IconName
  method: string
}

export interface LearningContent {
  eyebrow: string // 제목 위 작은 영문 라벨 (화면에는 대문자로 표시)
  icon: IconName // 라벨 앞 아이콘
  title: string
  items: LearningItem[]
}

// ── Future Idea ─────────────────────

export interface Challenge {
  label: string
  icon: IconName
}

export interface IdeaContent {
  eyebrow: string // 제목 위 작은 영문 라벨 (화면에는 대문자로 표시)
  icon: IconName // 라벨 앞 아이콘
  title: string
  description: string
  chains: string[] // 뱃지로 표시
  challengesTitle: string
  challenges: Challenge[]
  principleTitle: string
  principle: string
}

// ── Footer ──────────────────────────

export interface FooterContent {
  contactLabel: string
  githubLabel: string
  writtenAtLabel: string
}

// ── 전체 묶음 (content.ts가 이 모양을 따름) ──

export interface SiteContent {
  profile: Profile
  nav: NavItem[]
  ui: UiLabels
  header: HeaderContent
  stacks: TechStack[]
  hero: HeroContent
  goal: GoalContent
  project: ProjectContent
  learning: LearningContent
  idea: IdeaContent
  footer: FooterContent
}
