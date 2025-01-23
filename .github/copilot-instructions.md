<instructions>

First, independently design a solution focusing on clean, maintainable, and efficient code by considering clarity, reusability, performance, testability, and security. Then, analyze and refine your solution step by step, ensuring it adheres to coding standards and is easy to collaborate on. Finally, review your solution in the context of real-world scenarios, assessing its scalability, maintainability, and adaptability over time.

Write all the code for a React project in a single file instead of splitting it into multiple files for maintainability. For each section of the code, add comments indicating where it would typically reside if the project were modularized (e.g., components, hooks, or styles). Only separate the code into multiple files if it is strictly necessary for functionality, such as when handling a server and client program that must be separated inherently.

</instructions>

<proposal>

# AutoEgo

## **1. 프로젝트 개요**

- **목적**:
  - 강사의 업무 효율성 향상과 수강생 맞춤형 학습 지원을 위한 AI 챗봇 솔루션 개발.
  - 강의 자료와 실시간 데이터를 결합해 **정확성**과 **맥락 이해**가 가능한 응답 시스템 구축.
- **타겟 사용자**:
  - 온라인 강의 플랫폼 강사 (프로그래밍, 디자인, 언어 교육 등).
  - 수강생 관리 및 콘텐츠 개선이 필요한 교육 기관.

## **2. 핵심 기능**

### **a. 강의 자료 기반 24시간 실시간 답변 시스템**

- **기능 설명**:
  - PDF, PPT, 문서 등을 벡터 데이터베이스에 임베딩하여 저장.
  - RAG 모델이 강의 자료를 실시간 검색 → LLM이 문맥 기반 답변 생성.
- **기술 스택**:
  - 벡터 DB: FAISS, Pinecone.
  - LLM: GPT-4 Turbo, Claude 3 (비용 효율적 대안: Mistral 7B).
- **장점**:
  - 할루시네이션 **50% 감소** (외부 지식 기반 응답).
  - 강의 자료 업데이트 시 **5분 내 DB 자동 재구성**.
  - 예시: _"3주차 강의의 상속 개념을 요약해 주세요"_ → 해당 주차 자료 참조 후 답변.

### **b. 수강생 데이터 분석 대시보드**

- **기능 설명**:
  - 질문 빈도수, 관심 주제, 오류 패턴을 시각화하여 강사에게 제공.
  - 실시간 데이터 추적 및 리포트 출력 기능 (CSV/Excel).
- **주요 메뉴**:
  1. **질문 트렌드 분석**: 주간 TOP 10 질문 키워드.
  2. **학습 효과 지표**: 난이도별 질문 비율 (예: 기초 40%, 중급 35%, 고급 25%).
  3. **맞춤 콘텐츠 제안**: _"수강생 60%가 '머신러닝 파이프라인' 질문 → 관련 보충 자료 추천"_.

## **3. 차별화된 장점**

### **시간 및 비용 효율성**

- 반복 질문 처리 시간 **80% 절감** (예: 과제 마감일, 기본 개념 문의).
- 개발 비용: 기존 LLM 활용으로 커스텀 모델 대비 **70% 절약**.

### **개인화 학습 지원**

- **초보자**: 단계별 설명 + 코드 예시 (예: _"변수 선언은 = 기호를 사용합니다: `x = 5`"_).
- **중급자**: 이론적 배경 + 실무 팁 (예: _"변수 스코프 관리 시 garbage collection 원리를 적용하세요"_).

### **확장성**

- **다국어 혼합 자료 지원**: 영어 강의 노트 + 한국어 Q&A 동시 처리.
- **도메인 확장**: 프로그래밍 → 디자인 강의 전환 시, **새 자료 추가만으로 즉시 적용**.

## **4. 기술 구현 로드맵**

1. **데이터 파이프라인 구축** (4주):
   - 강의 자료 임베딩 및 벡터 DB 연동.
2. **RAG 모델 최적화** (6주):
   - 검색 정확도 95% 이상 달성 (테스트 케이스 500개 기준).
3. **대시보드 개발** (5주):
   - 대화형 차트 및 사용자 친화적 UI 구현 (React + D3.js).
4. **폐쇄형 테스트** (3주):
   - 10개 교육 기관 협력 베타 테스트.

## **5. 기대 효과**

- **강사 측**:
  - 월 평균 40시간 업무 시간 절약.
  - 수강생 만족도 **30% 향상** (질문 응답 속도 개선).
- **수강생 측**:
  - 학습 이해도 **25% 증가** (맥락 기반 설명).
  - 24/7 지원으로 시간 제약 없는 학습 환경 제공.

</proposal>

<convention>

# Conventions

## NextJS Naming Convention

### File Naming Convention

- `kebab-case` 로 작성합니다.
- `not-found.js`, `date-picker.js` 처럼, 최대한 간결하게 하되, 단어 사이는 [하이픈으로 연결](https://nextjs.org/docs/app/api-reference/file-conventions)합니다.

### Function/Variable Naming Convention

- `camelCase` 로 작성합니다.

### Component Naming Convention

- `PascalCase` 로 작성합니다.

## Directory Convention

nextjs에서는 여러 디렉토리 구조를 사용할 수 있지만, [`app` 외부에 프로젝트 파일 저장](https://nextjs.org/docs/app/getting-started/project-structure#store-project-files-outside-of-app)하는 방법을 사용합니다.

### src/app

- 라우팅 용으로 사용한다 (라우팅과 관련된 파일만 넣어놓자)
- e.g., `page.tsx`, `layout.tsx`, `opengraph-image.tsx`

### src/containers

- `page.tsx` 안에서 보여줄 컨텐츠들을 넣어놓는다
- 전역 상태관리 남발하지 말자 (props drilling을 막기 위해서는 `Jotai`를 사용하자)
- states.ts => 작은 단위의 상태관리
- e.g., tsx, css, state, hooks ...

### src/components

- 여러 페이지에서 공통으로 사용할 컴포넌트
- Button, Loading...

### src/constants

- 공통으로 사용 할 상수

### src/hooks

- 페이지 곳곳에서 사용되는 공통 훅

### src/libs

- 외부 라이브러리를 모아둔다. package.json때문에 쓸 일이 많지 않지만 튜닝해서 사용할 경우 발생

### src/services

- 각종 API 요청
- GET, POST, PATCH...

### src/states

- 페이지 곳곳에서 사용되는 state를 모아두는 곳

### src/types

- 각종 타입 스크립트의 정의가 들어가는 곳

### References

- https://miriya.net/blog/cliz752zc000lwb86y5gtxstu
- https://medium.com/@mertenercan/nextjs-13-folder-structure-c3453d780366

## Code Style Convention

- [ESLint](https://eslint.org/)와 [Prettier](https://prettier.io/)를 사용하여 코드 스타일을 관리합니다.

## Design Convention

- [HeroUI](https://www.heroui.com/)를 컴포넌트 디자인 시스템으로 사용합니다.
- [Tailwind CSS](https://tailwindcss.com/)를 사용하여 디자인을 구현합니다.

</convention>
