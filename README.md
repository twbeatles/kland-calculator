# 🏠 부동산 마스터 Pro v2.1

> 전월세 계산, 안전 진단, 중개보수, 대출 계산 등 부동산 임대차 필수 도구 모음

![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18-61DAFB.svg?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC.svg?logo=tailwind-css)

## 🌐 라이브 데모

👉 [GitHub Pages에서 바로 사용하기](https://twbeatles.github.io/kland-calculator/)

## ✨ 주요 기능

### 🏘️ 전월세
| 기능 | 설명 |
|------|------|
| **비용 비교** | 전세 vs 월세 월 비용 비교 및 추천 |
| **안전 진단** | 깡통전세 위험도 분석 |
| **중개보수 계산** | 주거/비주거용 중개보수 자동 계산 |

### 🏢 매매
| 기능 | 설명 |
|------|------|
| **취득세 계산** | 주택 취득 시 예상 세금 계산 |
| **채권 계산** | 국민주택채권 매입 금액 계산 |

### 💰 대출/세금
| 기능 | 설명 |
|------|------|
| **대출 계산기** | 원리금균등, 원금균등, 만기일시상환 |
| **DSR 계산기** | 총부채원리금상환비율 계산 |
| **LTV 계산기** | 주택담보대출비율 계산 |

### 🧰 도구 모음 (7종)
| 도구 | 설명 |
|------|------|
| **평수 계산기** | 평 ⟷ ㎡ 단위 변환 |
| **전월세 전환 계산기** | 보증금 ⟷ 월세 전환 (법정 전환율 6.0% 반영) |
| **보증보험료 계산기** | HUG/SGI 전세보증보험 예상 보험료 |
| **문자 마법사** | 수리 요청, 퇴거 통보 등 템플릿 |
| **이사 체크리스트** | 이사 준비 항목 체크 |
| **용어 사전** | 부동산 필수 용어 설명 |
| **계산 히스토리** | 최근 20건 계산 결과 저장 |

## 🆕 v2.1 신규 기능

### 🔢 한국어 금액 표시
- 모든 금액 입력필드에서 **"≈ 3억 5천만원"** 형식으로 즉시 표시
- 억, 천만, 만, 천 단위 자동 변환

### 🔄 만원 단위 입력
- 원/만원 단위 토글 버튼
- 사용자 설정이 localStorage에 저장됨
- 큰 금액 입력 시 편의성 향상

### 🏦 기준금리 확인
- 한국은행 기준금리 **2.50%** (2025.12.28)
- 새로고침 버튼으로 현재 금리 상태 확인
- 한국은행 공식 홈페이지 직접 연결

## 🚀 빠른 시작

### 방법 1: 직접 실행
```bash
# 다운로드 후 브라우저에서 열기
index.html → 더블클릭
```

### 방법 2: Live Server (개발용)
```bash
# VS Code Live Server 확장 사용
1. VS Code에서 폴더 열기
2. index.html 우클릭 → "Open with Live Server"
```

## 🌐 GitHub Pages 배포

### 1단계: 저장소 준비
```bash
git init
git add .
git commit -m "v2.1.0: 부동산 마스터 Pro"
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

### 2단계: Pages 활성화
1. GitHub 저장소 → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. **Save**

### 3단계: 배포 확인
```
https://username.github.io/repo-name
```

> 💡 **참고**: 단일 HTML 파일이므로 별도 빌드 과정 없이 바로 배포됩니다.

## 📁 프로젝트 구조

```
📦 real-estate-calculator/
├── 📄 index.html          # 메인 애플리케이션
├── 📄 README.md           # 프로젝트 문서
└── 📄 LICENSE             # MIT 라이선스
```

## 🛠️ 기술 스택

| 기술 | 버전 | 용도 |
|------|------|------|
| React | 18.x (CDN) | UI 라이브러리 |
| Tailwind CSS | 3.x (CDN) | 스타일링 |
| Babel | 7.x (CDN) | JSX 변환 |
| Pretendard | 1.3.8 | 한글 폰트 |

## ⚙️ 주요 설정값

| 항목 | 값 | 기준일 |
|------|------|---------|
| 한국은행 기준금리 | **2.50%** | 2025.12.28 |
| 법정 전환율 상한 | **6.00%** | 기준금리 + 3.5% |
| HUG 보증보험료율 | 0.128% | 2024년 평균 |
| SGI 보증보험료율 | 0.115% | 2024년 평균 |

## 🎨 주요 특징

| 특징 | 설명 |
|------|------|
| 🌙 **다크 모드** | 시스템 설정과 별개로 독립적인 테마 전환 |
| 🔢 **한국어 금액** | 3억 5천만원 형식으로 실시간 표시 |
| 📱 **모바일 최적화** | 반응형 디자인으로 모든 기기 지원 |
| 💾 **로컬 저장** | 입력값, 설정, 히스토리 자동 저장 |
| 📤 **결과 공유** | 계산 결과를 클립보드에 복사 |
| ♿ **접근성** | ARIA 레이블 및 키보드 내비게이션 |
| 🖨️ **인쇄 최적화** | 깔끔한 인쇄 레이아웃 |

## 📋 브라우저 지원

| 브라우저 | 지원 버전 |
|---------|----------|
| Chrome | 80+ |
| Firefox | 75+ |
| Safari | 13+ |
| Edge | 80+ |
| Samsung Internet | 13+ |

## 🔧 경량화 옵션 (선택)

더 빠른 로딩이 필요한 경우:

1. **Preact로 교체**: React → Preact (3KB)
2. **Tailwind JIT**: 사용하지 않는 CSS 제거
3. **CDN 지역화**: 국내 CDN 사용

```html
<!-- Preact CDN 예시 -->
<script src="https://unpkg.com/preact@10/dist/preact.min.js"></script>
<script src="https://unpkg.com/preact@10/hooks/dist/hooks.umd.js"></script>
```

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 📝 변경 이력

### v2.1.1 (2025-12-28)
- 🏦 기준금리 2.50% 업데이트
- 🔗 한국은행 공식 금리 페이지 링크 수정
- 법정 전환율 6.0% 동적 계산 적용

### v2.1.0 (2025-12-28)
- 🔢 한국어 금액 표시 (억/만원 형식)
- 🔄 만원 단위 입력 토글 (전 필드 적용)
- 🏦 기준금리 확인 버튼 추가
- ⚡ 코드 최적화 및 버그 수정

### v2.0.0 (2025-12-28)
- 🌙 다크 모드 지원
- 📊 전월세 전환 계산기
- 🛡️ 보증보험료 계산기
- 📜 계산 히스토리

### v1.0.0 (2025-12-27)
- 🎉 최초 릴리즈

## 🙏 감사의 글

- [React](https://react.dev) - Meta
- [Tailwind CSS](https://tailwindcss.com) - Tailwind Labs
- [Pretendard](https://github.com/orioncactus/pretendard) - 길형진
- [한국은행](https://www.bok.or.kr) - 기준금리 데이터

---

<p align="center">
  Made with ❤️ for Korean real estate<br>
  <sub>Copyright © 2024-2025</sub>
</p>

