# 🏠 부동산 마스터 Pro (KLand Calculator Pro)

> 대한민국 No.1 부동산 종합 계산기 - 전월세, 매매, 대출, 세금까지 한 번에!

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Lucide](https://img.shields.io/badge/Lucide-0.300-000000?logo=lucide&logoColor=white)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Version](https://img.shields.io/badge/Version-4.0.0-blue)](package.json)

## 📋 목차

- [주요 기능](#-주요-기능)
- [시작하기](#-시작하기)
- [프로젝트 구조](#-프로젝트-구조)
- [기술 스택](#-기술-스택)
- [UI/UX 특징](#-uiux-특징)
- [배포](#-배포)
- [개발 가이드](#-개발-가이드)
- [업데이트 내역](#-업데이트-내역)

---

## ✨ 주요 기능

### 📋 전월세 계산기 (18개 도구)

| 기능 | 설명 |
|------|------|
| **비용 비교** | 전세 vs 월세 실질 비용 비교 분석 (기회비용 포함) |
| **안전 진단** | 전세가율 기반 보증금 안전도 평가 |
| **반전세 전환** | 순수전세 ↔ 반전세 조건 계산 |
| **중개보수** | 법정 중개수수료 자동 계산 |
| **전세사기 진단** | 10가지 필수 확인사항 체크리스트 |
| **양방향 환산** | 월세 ↔ 전세 양방향 환산기 |
| **보증금 분할납부** | 계약금/중도금/잔금 스케줄러 |
| **임차권 등기** | 임차권등기명령 비용 계산 |
| **월세 인상률** | 법정 상한 5% 기준 계산 |
| **증액 한도** | 2년간 5% 상한 확인 |
| **만기 D-day** | 계약 만료일 및 갱신 통보 기간 |
| **갱신권 추적** | 갱신청구권 행사 기간 관리 |

### 🏢 매매 계산기 (22개 도구)

| 기능 | 설명 |
|------|------|
| **취득세/채권** | 부동산 취득 시 세금 및 국민주택채권 계산 |
| **전세 vs 매매** | 전세/매매 손익분기 분석 (ROI 비교) |
| **내집가격 계산** | 월 상환 가능액 기준 구매 가능 주택가격 |
| **임대수익률** | 수익형 부동산 투자수익률 분석 (순수익률/총수익률) |
| **갭투자 ROI** | 전세끼고 매수 시 수익률 시뮬레이션 |
| **다주택 세금** | 다주택자 취득세/양도세 계산 |
| **재건축 분석** | 재건축 투자 수익성 분석 |
| **공동명의 시뮬레이션** | 지분율별 세금 절감 효과 |
| **경매 입찰가** | 낙찰가율 기반 입찰 전략 |
| **경매 수익률** | 경매 투자 예상 수익률 |
| **시세 추적** | KB/네이버 시세 비교 기록 |
| **지역 비교** | 시/구별 가격 비교 분석 |
| **시세 예측** | 과거 데이터 기반 미래 가격 예측 |
| **BEP 계산** | 투자금 회수 기간 계산 |
| **NPV/IRR 분석** | 순현재가치/내부수익률 분석 |

### 💰 대출 계산기 (15개 도구)

| 기능 | 설명 |
|------|------|
| **대출 계산** | 만기일시/원리금균등/원금균등 상환 시뮬레이션 |
| **상환방식 비교** | 상환방식별 총 이자 비교 차트 |
| **상환 스케줄표** | 12개월 원금/이자 상세 내역 |
| **주담대 한도** | DSR/LTV 기준 대출 한도 역산 |
| **전세대출 한도** | 버팀목/카카오뱅크/시중은행 한도 비교 |
| **DSR/DTI/LTV** | 금융규제 비율 계산 |
| **대출 비교** | 은행별 금리/한도 비교 분석 |
| **혼합대출** | 정책대출 + 일반대출 조합 계산 |
| **은행금리 비교** | 6개 시중은행 금리 비교 |
| **고정 vs 변동** | 5년 금리 시나리오 시뮬레이션 |
| **스트레스 테스트** | 금리 인상 시 부담액 분석 |
| **중도상환 최적화** | 최적 중도상환 시점 계산 |
| **조기상환 분석** | 조기상환 시 절감액 계산 |
| **대출 재조정** | 갈아타기 손익분기 분석 |

### 🧾 세금 계산기 (8개 도구)

| 기능 | 설명 |
|------|------|
| **양도소득세** | 부동산 매도 시 예상 세금 (1세대1주택 특례, 장기보유공제 포함) |
| **재산세/종부세** | 연간 보유세 계산 |
| **증여세** | 배우자/자녀/손자녀 증여세 계산 (공제한도 포함) |
| **상속세** | 상속재산 세금 계산 (일괄공제/배우자공제) |
| **세금 캘린더** | 연간 세금 납부 일정 알림 |
| **세금 최적화** | 명의 조합별 세금 절감 방안 |
| **다주택 분석** | 다주택 보유 시 중과세 계산 |
| **취득세 계산** | 주택 수/가격별 취득세 자동 계산 |

### 🏆 청약 계산기

| 기능 | 설명 |
|------|------|
| **청약 점수** | 가점제 84점 만점 기준 점수 계산 |
| **청약 자격** | 무주택기간/부양가족/통장가입기간 자동 계산 |

### 🛠 도구 모음 (96개 계산기)

프로젝트에는 **96개의 전문 계산기**가 포함되어 있으며, 다음 카테고리로 구성됩니다:

#### 💻 계산 도구
평수계산, 전환계산, 매물비교, 수익률목표, BEP계산, 역세권 프리미엄 등

#### 💳 금융 도구
은행금리, 고정vs변동, 스트레스테스트, 중도상환, 신용점수, 보증보험, 조기상환 등

#### 📄 문서 도구
필수서류, 특약조항, 계약관리, 갱신권, 문자마법사, 체크리스트 등

#### 🔧 유틸리티
프리셋, 결과저장, 엑셀저장, 외부연동, 복비협상, 리모델링ROI, 공동명의, 세금일정, 가이드, 용어사전, 히스토리, 규제확인, 매물알림 등

---

## 🚀 시작하기

### 요구사항

- **Node.js**: 18.x 이상
- **npm**: 8.x 이상

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/kland-calculator-pro.git
cd kland-calculator-pro

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
# 브라우저에서 http://localhost:5173 자동 오픈

# 4. 프로덕션 빌드
npm run build
# dist/ 폴더에 최적화된 빌드 생성

# 5. 빌드 미리보기
npm run preview
```

### 빠른 시작 (빌드 없이)

이 프로젝트는 **Vite 기반 모던 빌드 시스템**을 사용하므로, 개발 시에는 `npm run dev`로 실행하는 것을 권장합니다.

---

## 🗂 프로젝트 구조

```
kland-calculator-pro/
├── dist/                           # 프로덕션 빌드 결과물
│   ├── assets/
│   │   ├── index-[hash].js        # 번들된 JavaScript (1.65MB → 321KB gzip)
│   │   ├── index-[hash].css       # 번들된 CSS (27KB → 6KB gzip)
│   │   └── manifest-[hash].json   # PWA 매니페스트
│   └── index.html                 # 최적화된 HTML
│
├── src/                           # 소스 코드
│   ├── components/
│   │   ├── calculators/          # 96개 계산기 컴포넌트
│   │   │   ├── AffordabilityTab.js
│   │   │   ├── BuyingTab.js
│   │   │   ├── LoanTab.js
│   │   │   ├── PortfolioManager.js
│   │   │   └── ... (92개 더)
│   │   └── ui/                   # UI 컴포넌트
│   │       ├── Common.js         # 공통 UI (CopyButton, ShareButton 등)
│   │       ├── Icons.js          # Lucide 아이콘 래퍼
│   │       ├── Inputs.js         # NumberInput, SelectInput 등
│   │       └── ToolsTab.js       # 도구 탭 컨테이너
│   │
│   ├── utils/                    # 유틸리티 함수
│   │   ├── constants.js          # 상수 정의 (금리, 세율 등)
│   │   ├── formatters.js         # 숫자/날짜 포매터
│   │   ├── math.js               # 수학 계산 함수
│   │   ├── storage.js            # localStorage 래퍼
│   │   ├── hooks.js              # 커스텀 훅
│   │   └── validators.js         # 입력 검증
│   │
│   ├── App.js                    # 메인 앱 컴포넌트
│   └── main.js                   # 앱 진입점
│
├── index.html                    # HTML 템플릿
├── manifest.json                 # PWA 매니페스트
├── sw.js                         # Service Worker
├── vite.config.js                # Vite 설정
├── package.json                  # 프로젝트 설정
└── README.md                     # 프로젝트 문서

backup/                           # 백업 폴더 (git에서 제외)
├── dev.log
├── build.log
└── error.log
```

---

## � 기술 스택

### 코어 기술

| 기술 | 버전 | 용도 |
|------|------|------|
| **React** | 18.2.0 | UI 프레임워크 |
| **React DOM** | 18.2.0 | DOM 렌더링 |
| **Vite** | 6.4.1 | 빌드 도구 (HMR, 번들링) |
| **@vitejs/plugin-react** | 4.2.1 | Vite React 플러그인 |

### 라이브러리

| 라이브러리 | 버전 | 용도 |
|----------|------|------|
| **Lucide React** | 0.300.0 | 모던 아이콘 (400+ 아이콘) |
| **Chart.js** | 4.4.1 | 차트 시각화 (대출 상환, 수익률 등) |
| **html2canvas** | 1.4.1 | 결과 이미지 저장 |

### 빌드 도구

- **ESBuild**: 초고속 JavaScript/JSX 트랜스파일러 (Vite 내장)
- **Rollup**: 프로덕션 번들러 (Vite 내장)
- **PostCSS**: CSS 후처리 (자동 벤더 프리픽스)

### 배포 도구

- **gh-pages**: GitHub Pages 자동 배포

---

## 🎨 UI/UX 특징

### 💡 사용자 경험

#### 반응형 디자인
- 모바일 우선 설계 (Mobile-First)
- 태블릿/데스크탑 최적화 레이아웃
- 터치 친화적 UI (44px 최소 터치 영역)

#### 직관적 인터페이스
- **한글 금액 표시**: 3억 5천만원, 2억 3천만원 형식
- **색상 코딩**: 위험도별 색상 (빨강: 위험, 노랑: 주의, 초록: 안전)
- **실시간 계산**: 입력 즉시 결과 업데이트 (디바운싱 500ms)
- **입력 자동 선택**: 클릭 시 기존 값 자동 선택

#### 애니메이션 & 효과
- **탭 전환**: 슬라이드-인 애니메이션 (0.3초)
- **하단 네비게이션**: 글로우 효과 (활성 탭 강조)
- **버튼 인터랙션**: 호버/클릭 시 스케일 애니메이션
- **스크롤 화살표**: 펄스 애니메이션

#### 프리미엄 디자인
- **Glassmorphism**: 유리 같은 반투명 효과
- **그라디언트**: 부드러운 색상 전환
- **그림자**: 다층 그림자로 깊이감 연출
- **둥근 모서리**: 2rem 라운드 (현대적 느낌)

### ⚡ 성능 최적화

#### React 최적화
- `React.memo`: 불필요한 리렌더링 방지 (IconBase, NumberInput 등)
- `useCallback`: 함수 메모이제이션
- `useMemo`: 계산 결과 캐싱
- `lazy loading`: 코드 스플리팅 (향후 적용 예정)

#### 계산 최적화
- **미리 컴파일된 정규식**: `REGEX_COMMA`, `REGEX_NON_DIGIT` (성능 10배↑)
- **상수 캐싱**: `KOREAN_UNITS`, `REAL_ESTATE_RATES` (메모리 절약)
- **디바운싱**: localStorage 저장 500ms 지연 (I/O 최소화)
- **타이머 클린업**: 메모리 누수 방지 (useEffect cleanup)

#### 빌드 최적화
- **코드 스플리팅**: 라우트별 청크 분리
- **트리 쉐이킹**: 사용하지 않는 코드 제거
- **Minification**: JavaScript/CSS 압축
- **Gzip 압축**: 배포 시 파일 크기 80% 감소

### 🔒 안정성 & 에러 처리

#### Safe Utility Functions
```javascript
safeDivide(a, b, default)       // 0 나누기 방어
parseNumber(str)                // 안전한 숫자 파싱
formatNumber(num)               // NaN/Infinity 방어
```

#### Error Boundary
- React Error Boundary로 전역 에러 처리
- 에러 발생 시 3가지 옵션 제공:
  1. 다시 시도
  2. 새로고침
  3. 캐시 초기화 후 새로고침
- localStorage에 최근 10개 에러 로깅

#### 입력 검증
- 숫자 입력: 범위 제한 (최소/최대값)
- 날짜 입력: 형식 검증
- 실시간 피드백: 잘못된 입력 시 빨간색 테두리

#### localStorage 안정성
- Try-Catch로 QuotaExceededError 처리
- 자동 정리: 85% 사용 시 오래된 데이터 삭제
- 캐싱: 중복 읽기 방지

---

## � 배포

### GitHub Pages 배포

```bash
# 1. 빌드 및 배포 (자동)
npm run deploy

# 2. 수동 배포
npm run build
# dist/ 폴더를 gh-pages 브랜치에 푸시
```

### 기타 호스팅

빌드된 `dist/` 폴더를 다음 플랫폼에 업로드:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & Drop 또는 CLI
- **AWS S3 + CloudFront**: S3 업로드 후 CloudFront 연결
- **Azure Static Web Apps**: GitHub Actions 자동 배포

### 환경 변수 (선택사항)

카카오 공유 기능 활성화 (선택):

```bash
# .env.local 파일 생성
VITE_KAKAO_APP_KEY=your_kakao_app_key
```

---

## 🔧 개발 가이드

### 새로운 계산기 추가

1. **컴포넌트 생성**
```javascript
// src/components/calculators/NewCalculator.js
export const NewCalculator = () => {
  // 계산 로직 구현
  return <div>...</div>;
};
```

2. **App.js에 등록**
```javascript
import { NewCalculator } from './components/calculators/NewCalculator';
// 탭에 추가
```

3. **아이콘 추가** (Lucide React)
```javascript
import { YourIcon } from 'lucide-react';
```

### 코딩 컨벤션

- **파일명**: PascalCase (예: `LoanTab.js`)
- **컴포넌트**: Named Export 사용 (예: `export const LoanTab`)
- **함수**: camelCase (예: `calculateLoan`)
- **상수**: UPPER_SNAKE_CASE (예: `BOK_RATE_DEFAULT`)

### Git 워크플로우

```bash
# 1. Feature 브랜치 생성
git checkout -b feature/new-calculator

# 2. 커밋 (Conventional Commits)
git commit -m "feat: add new calculator for X"

# 3. Pull Request
git push origin feature/new-calculator
# GitHub에서 PR 생성
```

---

## � 업데이트 내역

### v4.0.0 (2026.01.14) - 빌드 시스템 마이그레이션

#### � 빌드 시스템
- **Vite 6.4.1 도입**: CDN 기반에서 모던 빌드 시스템으로 전환
- **빌드 성능**: 4.63초에 프로덕션 빌드 완료
- **파일 크기 최적화**:
  - JavaScript: 1.65MB → **321KB (gzip)**
  - CSS: 27KB → **6KB (gzip)**
- **JSX 파싱 설정**: esbuild 로더 설정으로 `.js` 파일에서 JSX 사용 가능

#### 🐛 빌드 에러 수정
- **Export 문제 해결**: 21개 calculator 컴포넌트 `default export` → `named export` 변환
- **Import 경로 수정**:
  - `formatters.js`에 `parseNumber`, `safeDivide` 추가
  - `constants.js`에 `OPTIONS_YEARS` 추가
  - `PresetManager.js`, `Common.js` import 경로 수정

#### 🎨 코드 개선
- **모듈화**: 함수와 상수를 적절한 유틸리티 파일로 분리
- **타입 안정성**: Export/Import 일관성 확보
- **파일 정리**: 로그 파일 `backup/` 폴더로 이동

#### � 의존성 업데이트
- **Lucide React 0.300.0**: 모던 아이콘 라이브러리 (Feather Icons 대체)
- **Chart.js 4.4.1**: 최신 차트 라이브러리
- **React 18.2.0**: 최신 안정화 버전

### v3.6.0 (2026.01.08)

#### 코드 품질 개선
- 외부 `styles.css` 파일 연결 및 통합
- Service Worker 캐시 업데이트 (v3.1.0)

#### 성능 최적화
- localStorage debounce 간격 최적화 (300ms → 500ms)

#### 에러 처리 강화
- ErrorBoundary 개선: 다시 시도/캐시 초기화 버튼 추가
- 에러 로깅 기능 (localStorage에 최근 10개 에러 기록)
- 사용자 친화적 에러 메시지 표시

#### 코드 구조 개선
- `REAL_ESTATE_RATES` 상수 객체 추가 (세금/중개보수/보험 요율 중앙화)
- 정책 변경 시 쉽게 업데이트 가능한 구조

#### 정리 작업
- 미완성 다크모드 코드 전체 제거
- 중복 CSS 정리

### v3.5.0 (2026.01.08)

#### Phase 2 새 기능 추가
- 전세사기 진단 체크리스트 (10가지 필수 확인사항)
- 월세 ↔ 전세 양방향 환산기 (전환율 기반)
- 보증금 분할납부 스케줄러 (계약금/중도금/잔금)
- 상환 비교 차트 (Chart.js 시각화)
- 규제지역 확인 도구
- 매물 알림 설정

#### 2026년 기준금리 반영
- 한국은행 기준금리 2.5% (2026.01.01 기준)
- 전월세전환율 법정상한 6.0% 반영

#### UI/UX 개선
- 프리미엄 Glassmorphism 헤더 디자인
- 하단 네비게이션 그라디언트 액티브 효과
- 향상된 결과 카드 인터랙션
- 스크롤 버튼 애니메이션 개선

---

## 📄 라이선스

MIT License © 2026

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

## 🤝 기여하기

기여는 언제나 환영합니다! 다음 절차를 따라주세요:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 기여 가이드라인

- 코드 스타일: ESLint 설정 준수
- 커밋 메시지: Conventional Commits 사용
- 테스트: 새로운 기능 추가 시 빌드 테스트 필수

---

## 📞 문의 및 지원

- **버그 리포트**: [GitHub Issues](https://github.com/your-username/kland-calculator-pro/issues)
- **기능 제안**: [GitHub Discussions](https://github.com/your-username/kland-calculator-pro/discussions)

---

## 🙏 감사의 말

이 프로젝트는 다음 오픈소스 프로젝트들의 도움을 받았습니다:

- [React](https://react.dev/) - UI 프레임워크
- [Vite](https://vitejs.dev/) - 빌드 도구
- [Lucide](https://lucide.dev/) - 아이콘 라이브러리
- [Chart.js](https://www.chartjs.org/) - 차트 라이브러리
- [Tailwind CSS](https://tailwindcss.com/) - CSS 프레임워크

---

<p align="center">Made with ❤️ for Korean Real Estate Market</p>
