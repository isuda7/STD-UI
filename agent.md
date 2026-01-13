# STD-UI (표준 UI 프레임워크)

## 프로젝트 개요
**STD-UI**는 표준 UI 프레임워크를 위한 중앙 저장소이자 가이드입니다. 웹 개발을 위한 개인 또는 조직의 표준 역할을 하며, Vanilla JS, React, Vue, HTML5 Canvas 등 다양한 기술에 걸쳐 프로젝트 베이스, 코딩 컨벤션, 컴포넌트 라이브러리 및 예제를 제공합니다.

## 디렉토리 구조 및 목적

이 프로젝트는 특정 기술이나 도메인에 초점을 맞춘 여러 `STD_*` 디렉토리로 구성되어 있습니다:

- **Home**: 다른 섹션으로 이동하는 포털/대시보드 역할을 하는 메인 진입점(`index.html`)입니다.
- **STD_CV (Canvas)**: HTML5 Canvas 구현 및 실험 전용 공간입니다.
- **STD_GD (Conventions)**: 가이드라인, 코딩 컨벤션, 디자인 표준(가이드/문서)을 포함합니다.
- **STD_JS (Vanilla JS)**: Vanilla JavaScript를 사용한 표준 구현 및 예제입니다.
- **STD_LIB (Components)**: 재사용 가능한 UI 컴포넌트 및 에셋 라이브러리입니다.
- **STD_PR (Project Base)**: 새로운 프로젝트 시작을 위한 기본 프로젝트 구조 및 프로토타입을 포함합니다.
- **STD_React**: `react-ui` 프로젝트를 포함한 React.js 구현체들입니다.
- **STD_VUE**: `vue-default`, `vue-demo`, `vue-vuetify` 등 다양한 예제를 포함한 Vue.js 구현체들입니다.
- **STD_KIT**: 툴킷 및 유틸리티입니다.
- **STD_STUDY**: 학습 자료 및 실험적인 코드입니다.

## 기술 스택

- **Core**: HTML5, CSS3, JavaScript (ES6+)
- **Frameworks**:
  - **React**: (`std_react/react-ui`)
  - **Vue.js**: (`std_vue/vue-*`)
- **Graphics**: HTML5 Canvas (`std_cv`)

## 사용법

이 저장소는 프레임워크가 아닌 부분(`Home`, `STD_JS`, `STD_CV` 등)은 정적 파일 서버를 통해 실행하고, 프레임워크 관련 디렉토리(`STD_React`, `STD_VUE`)는 각각의 빌드 설정(주로 npm/node 기반)을 따르도록 설계된 것으로 보입니다.

### 진입점 (Entry Point)
`Home/index.html` (또는 이곳으로 리다이렉트되는 루트 `index.html`)을 열어 "Presentation | Standard Frameworks" 대시보드를 확인할 수 있습니다.
