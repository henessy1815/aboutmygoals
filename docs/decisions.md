# 기술 선택 기록

선택지가 있었던 결정과 그 이유를 짧게 남깁니다.

## 2026.09.28

### 빌드 도구: Vite + React + TypeScript
- 선택지: Vite / Next.js
- 결정: Vite
- 이유: 서버 기능이 없는 정적 원페이지라 Next.js의 라우팅·서버 렌더링이 필요 없고, Vite가 설정이 가볍고 개발 서버가 빠르다.

### 스타일: CSS Modules + CSS 변수
- 선택지: CSS Modules / Tailwind / styled-components
- 결정: CSS Modules, 공통 값은 `global.css`의 CSS 변수
- 이유: 표준 CSS 문법 그대로 배우면서 클래스 이름 충돌을 막을 수 있다. 테마는 `data-theme` 속성에 따라 변수 값만 바꾼다.

### 문구 관리: `content.ts` 한 곳에 모으기
- 결정: 모든 문구는 `content.ts`, 모양은 `types.ts`에서 정의하고 컴포넌트는 렌더링만 한다.
- 이유: 문구 수정 시 컴포넌트를 건드리지 않아도 되고, 타입이 빠진 항목이나 오타를 잡아준다.

### 섹션 목록 단일 관리
- 결정: `content.ts`의 `nav` 배열 하나를 Header 링크, `useActiveSection` 감시 대상, 섹션 `id`가 함께 참조한다.
- 이유: 앵커 이름이 여러 곳에 흩어지면 하나만 바꾸고 나머지를 놓치기 쉽다.

### Section 컴포넌트의 제목은 선택값
- 결정: `Section`의 `title`을 optional로 둔다.
- 이유: 제목이 없는 Hero도 같은 틀(앵커, 등장 애니메이션)을 쓰기 위해.

### Project 전용 컴포넌트 위치
- 선택지: A `components/project/` 별도 폴더 / B `sections/project/`로 묶기
- 결정: A
- 이유: 파일 수가 적어 묶는 이점이 작고, 구조가 평평해 찾기 쉽다.

### 트레이드오프 카드 펼치기 방식
- 선택지: A HTML `<details>/<summary>` / B `useState` + `button[aria-expanded]`
- 결정: A
- 이유: 키보드·스크린리더 지원과 "여러 개 동시에 펼치기"가 기본 동작으로 제공된다. 펼침 애니메이션은 후순위.

### 배포 시점
- 결정: 뼈대가 잡힌 직후(작업 4단계) Vercel에 먼저 연결한다.
- 이유: 배포 설정 문제를 초기에 발견하고, 이후 push마다 자동 반영된다.

### 본문 글꼴 불러오기: Pretendard CDN
- 선택지: A CDN 링크 / B npm 패키지로 직접 포함
- 결정: A (jsDelivr, dynamic-subset 버전)
- 이유: `<link>` 한 줄로 끝나고, 페이지에 쓰인 글자 묶음만 받아 가볍다. 외부 서버 의존은 감수한다.

### 처음 테마: OS 설정 따르기
- 선택지: A OS 설정(prefers-color-scheme) / B 항상 라이트
- 결정: A. 사용자가 버튼으로 바꾸면 그 선택을 localStorage에 저장해 다음 방문에도 유지한다.
- 깜빡임 방지: React보다 먼저 실행되는 인라인 스크립트를 `index.html`에 두어 `data-theme`을 미리 정한다.

### 고정폭 글꼴: 시스템 기본 글꼴
- 선택지: A 시스템 기본 / B 웹 글꼴(JetBrains Mono)
- 결정: A
- 이유: 추가 다운로드가 없다. 뱃지처럼 짧은 글자에서는 기기별 차이가 크지 않다.

### 현재 섹션 감지: 스크롤 이벤트 방식
- 선택지: A 스크롤 이벤트 + requestAnimationFrame / B IntersectionObserver
- 결정: A
- 이유: "헤더 아래 선을 지나간 마지막 섹션"이라는 규칙이 단순하고, 페이지 맨 아래에서는 마지막 섹션을 강조해 짧은 마지막 섹션도 처리된다. B는 감지 띠 조정과 끝 섹션 보완 코드가 필요하다.
- 참고: 0단계 검토 때는 B를 전제했으나 끝 섹션 문제로 변경. 등장 애니메이션(useInView)은 여전히 B가 적합하다.

### 데이터 전달: App에서만 content를 불러오고 props로 전달
- 결정: `content.ts`는 `App.tsx`만 import하고, 각 컴포넌트는 필요한 데이터를 props로 받는다.
- 이유: 기획안의 "컴포넌트는 데이터를 받아 렌더링만 한다" 원칙. 컴포넌트가 특정 파일에 묶이지 않고, 무엇을 받는지 props 타입만 봐도 알 수 있다.

### 헤더 고정: position sticky
- 선택지: A sticky / B fixed
- 결정: A
- 이유: 헤더가 본문 흐름 안에서 자리를 차지해, 본문에 헤더 높이만큼 여백을 따로 주지 않아도 된다.
