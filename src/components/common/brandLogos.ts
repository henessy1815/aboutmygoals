// 기술 스택·체인·GitHub의 공식 로고 연결표 (Simple Icons, CC0 라이선스)
import {
  siEthereum,
  siGithub,
  siNextdotjs,
  siReact,
  siSolana,
  siSupabase,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons'
import type { StackId } from '../../types'

export const STACK_LOGOS: Record<StackId, SimpleIcon> = {
  ts: siTypescript,
  react: siReact,
  next: siNextdotjs,
  supabase: siSupabase,
}

// 체인 이름(content.ts의 chains) → 로고. Simple Icons에 없는 체인(Cosmos)은 빠져 있고,
// 그 경우 화면에서는 일반 아이콘으로 대신 표시
export const CHAIN_LOGOS: Partial<Record<string, SimpleIcon>> = {
  Ethereum: siEthereum,
  Solana: siSolana,
}

export const GITHUB_LOGO = siGithub
