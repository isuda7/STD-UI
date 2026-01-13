# STD_KIT 코드 표준 검토 보고서

`STD_KIT` 프로젝트를 `STD_GD`(표준 규칙) 및 일반적인 웹 표준 관점에서 검토한 결과입니다.

## 1. HTML 표준 및 접근성 (Accessibility) 이슈

### `user-scalable=no` 사용 (접근성 위반)
- **위치**: `STD_KIT/index.html` (Line 7)
- **코드**: `<meta name="viewport" content="... user-scalable=no"/>`
- **문제점**: 사용자가 화면을 확대/축소하는 것을 강제로 막고 있습니다. 이는 저시력자 등 시각 장애가 있는 사용자에게 치명적인 접근성 위반입니다 (WCAG 지침 위반). 모바일 환경에서도 사용자가 텍스트를 크게 볼 수 있도록 허용해야 합니다.
- **권장**: `user-scalable=yes`로 변경하거나 해당 속성을 제거하십시오.

### 언어 선언 불일치 가능성
- **위치**: `STD_KIT/index.html` (Line 2)
- **코드**: `<html lang="ko">`
- **검토**: 문서 내의 내용이 주된 언어(한국어)와 일치하는지 확인하십시오. 현재는 영문 콘텐츠("Start the Development...")가 혼재되어 있습니다.

## 2. 네이밍 및 오타 (Naming & Typo)

### 파일명 오타 의심
- **위치**: `STD_KIT/js/libs/librurys.min.js`
- **문제점**: `librurys.min.js`는 `libraries` 또는 `library`의 오타로 보입니다. 코드 내에서도 `<script src="js/libs/librurys.min.js"></script>`로 참조되고 있습니다. 이는 유지보수 시 혼란을 야기할 수 있습니다.

## 3. 코드 컨벤션 (Project Conventions)

### 주석 처리된 코드
- **위치**: `STD_KIT/index.html` (Line 38, 50, 56)
- **문제점**: 불필요하게 주석 처리된 코드가 남아있습니다 (e.g., `<header>`, 데모 링크 등). 릴리즈 버전에서는 삭제하거나 정리하는 것이 좋습니다.

### 인라인 스크립트 (Inline Script)
- **위치**: `STD_KIT/index.html` (Line 21-27)
- **문제점**: HTML 내에 `$(function()...)` 로직이 직접 포함되어 있습니다. 이는 CSP(Content Security Policy) 위반 가능성이 있으며, 로직과 구조의 분리 원칙에도 어긋납니다. 별도의 JS 파일(`ui.common.js` 등)로 이동시키는 것이 좋습니다.

## 4. 라이브러리 구조 (Library Structure)

### 중복된 자원 참조
- **검토**: `STD_KIT` 루트에 이미 `css`, `js` 폴더가 존재하는데, 이번에 생성한 `lib` 폴더(`STD_KIT/lib`)와 역할이 중복될 수 있습니다. `index.html`이 기존 `js/ui` 등을 참조하고 있어, 새로 만든 `lib`를 사용하도록 마이그레이션이 필요할 수 있습니다.
