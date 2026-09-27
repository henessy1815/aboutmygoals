// 페이지의 모든 문구를 모아 둔 파일입니다.
// 문구를 고칠 때는 컴포넌트가 아니라 이 파일만 수정하면 됩니다.
import type { SiteContent } from './types'

export const content: SiteContent = {
  profile: {
    name: '김남일',
    tagline: '사용자에게 필요한 것을 만들고, 그 방식을 고른 이유까지 설명할 수 있는 개발자',
    githubUrl: 'https://github.com/henessy1815',
    email: 'nikim3957@gmail.com',
    writtenAt: '2026.09.28',
  },

  nav: [
    { id: 'goal', label: '목표' },
    { id: 'project', label: '프로젝트' },
    { id: 'learning', label: '배우고 싶은 것' },
    { id: 'idea', label: '아이디어' },
  ],

  ui: {
    navLabel: '섹션 바로가기',
    openMenu: '메뉴 열기',
    closeMenu: '메뉴 닫기',
    switchToDark: '다크 모드로 전환',
    switchToLight: '라이트 모드로 전환',
  },

  stacks: [
    { id: 'ts', name: 'TS', role: '안전한 코드' },
    { id: 'react', name: 'React', role: 'UI' },
    { id: 'next', name: 'Next', role: '서비스 구조·배포' },
    { id: 'supabase', name: 'Supabase', role: '데이터·인증' },
  ],

  hero: {
    githubLabel: 'GitHub',
  },

  goal: {
    title: '이루고 싶은 목표',
    highlight: '개발자로서의 취업',
    stacksTitle: '기술 스택별 역할',
    deliverablesTitle: '과정이 끝날 때 남길 결과물',
    deliverables: [
      { label: '배포된 서비스 1개' },
      { label: '설계 결정 기록이 담긴 저장소' },
      { label: 'CS 및 Java 지식', note: '추가 스터디' },
    ],
  },

  project: {
    title: '알약맵(PillMap)',
    intro:
      '여러 알약을 한 장에 펼쳐 촬영하면 각 알약의 후보 의약품을 한 번에 식별하는 다중 알약 식별 앱. 식별이 어려운 알약만 추가 촬영을 요청해 하나씩 검색하는 번거로움을 줄입니다.',
    flowTitle: '사용 흐름',
    steps: [
      {
        id: 'capture',
        title: '촬영',
        description: '여러 알약을 한 장에 펼쳐 촬영',
      },
      {
        id: 'identify',
        title: '알약별 후보 식별',
        description: '사진 속 알약을 하나씩 찾아 모양·색·각인으로 후보 의약품 식별',
      },
      {
        id: 'retake',
        title: '불확실한 알약만 재촬영 요청',
        description: '확신이 낮은 알약만 골라 추가 촬영 요청',
      },
    ],
    tradeoffsTitle: '고민 중인 설계 질문',
    prosLabel: '장점',
    consLabel: '단점',
    tradeoffs: [
      {
        id: 'separation',
        question: '다중 알약 분리 인식',
        summary: '여러 알약을 한 번에 처리할까, 하나씩 떼어 처리할까?',
        options: [
          { label: '일괄 처리', pros: ['빠름'], cons: ['알약이 붙어 있으면 헷갈림'] },
          { label: '개별 분리 처리', pros: ['정확'], cons: ['느림'] },
        ],
      },
      {
        id: 'threshold',
        question: '결과 노출 기준',
        summary: '얼마나 확신할 때 결과를 보여줄까?',
        options: [
          { label: '높은 확신도 기준', pros: ['안전'], cons: ['재촬영 증가'] },
          { label: '낮은 기준', pros: ['재촬영 감소'], cons: ['오식별 위험'] },
        ],
      },
      {
        id: 'method',
        question: '식별 방식',
        summary: 'AI에게 바로 물을까, 공식 데이터에서 찾을까?',
        options: [
          {
            label: 'AI 직접 답변',
            pros: ['구현 용이'],
            cons: ['없는 약을 지어낼 위험'],
          },
          {
            label: '특징 추출 후 식약처 데이터 검색',
            pros: ['실존 약 안에서만 답해 신뢰성 높음'],
            cons: ['구현 부담 큼'],
          },
        ],
      },
    ],
    disclaimer: '식별 결과는 참고용이며, 복용 판단은 약사·의사와 상의하세요.',
  },

  learning: {
    title: '배우고 싶은 것',
    items: [
      {
        title: '러닝커브 낮추기',
        method: '개념 설명 → 작은 예제로 확인 → 적용',
      },
      {
        title: '기획~배포 빌드 경험',
        method: '알약맵을 요구사항부터 배포까지 완주',
      },
      {
        title: '기술 선택의 안목',
        method: '두 방식을 구현·비교하고 선택 이유를 기록',
      },
    ],
  },

  idea: {
    title: '개인별 디지털 자산 추적 앱',
    description:
      '국내 가상자산 과세에 대비해 여러 체인의 트랜잭션을 추적하고 시각화합니다.',
    chains: ['Ethereum', 'Solana', 'Cosmos'],
    challengesTitle: '핵심 과제',
    challenges: [
      '체인별로 다른 거래 구조를 공통 형식으로 통합',
      '취득시점 및 취득가액 계산',
    ],
    principleTitle: '원칙',
    principle: '지갑 주소만 입력받는 읽기 전용 방식 (개인키 미수집)',
  },

  footer: {
    contactLabel: '연락처',
    githubLabel: 'GitHub',
    writtenAtLabel: '작성일',
  },
}
