# 작업 로그: STD_LIB 기반 라이브러리 생성

## 작업 개요
**STD_LIB**에 존재하는 핵심 UI 자산(CSS, JS, 이미지)을 추출하여 **STD_KIT** 내에 독립적으로 사용할 수 있는 라이브러리 폴더(`lib`)를 구축했습니다.

## 상세 작업 내역

### 1. 분석 (Analysis)
- **STD_LIB 구조 파악**:
  - `css`, `js`, `img`, `html`, `scss` 등의 폴더로 구성됨.
  - 핵심 스타일: `css/import.css` (animate.css, plugins.css 등 포함).
  - 핵심 로직: `js/pub/` (`pub_ui.js`, `pub_utility.js` 등) 및 `js/libs/` (jQuery 등).
  - `wsg/js/wsg_include.js` 분석을 통해 실제 페이지에서 로드되는 필수 자원 의존성 확인.

### 2. 실행 (Execution)
- **대상 폴더 생성**: `c:\workspace\My\STD-UI\STD_KIT\lib` 생성.
- **자산 복사**:
  - `STD_LIB/css` -> `STD_KIT/lib/css`
  - `STD_LIB/js` -> `STD_KIT/lib/js`
  - `STD_LIB/img` -> `STD_KIT/lib/img`
- `STD_LIB`의 방대한 HTML/SCSS 소스 대신, 실행에 필수적인 정적 자산(Static Assets)만을 선별하여 경량화된 라이브러리 킷을 구성함.

### 3. 결과 (Result)
- **생성된 경로**: `c:\workspace\My\STD-UI\STD_KIT\lib`
- **구성 요소**:
  - `css/`: `import.css`를 메인으로 하는 스타일시트 모음.
  - `js/`: UI 인터랙션 및 유틸리티 스크립트.
  - `img/`: UI 컴포넌트에서 사용되는 이미지 리소스.
- **문서화**: 사용 방법을 설명하는 `README.md` 포함.

이 작업을 통해 `STD_KIT` 프로젝트 내에서 `STD_LIB`의 표준 UI 요소를 외부 의존성 없이 독립적으로 참조하여 개발할 수 있는 환경이 마련되었습니다.
