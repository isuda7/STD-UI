# 레파지토리 분석 보고서 (STD-UI)

`STD-UI` 레파지토리는 다양한 UI 프레임워크와 스탠다드 가이드를 모아놓은 통합 프로젝트(또는 학습용 모음집)로 보입니다. 루트의 `index.html`을 통해 각기 다른 기술 스택의 프로젝트나 가이드 문서로 연결되는 포털 구조를 가지고 있습니다.

## 1. 프로젝트 구조 및 목적
*   **메인 진입점**: 루트의 `index.html`은 즉시 `Home/index.html`로 리다이렉트됩니다.
*   **Home 포털**: `Home/index.html`은 다음과 같은 하위 모듈로 연결되는 링크를 제공합니다.
    *   `STD_PR`: Project Base (프로젝트 베이스)
    *   `STD_GD`: Conventions (퍼블리싱/코드 컨벤션 추정)
    *   `STD_LIB`: Components (UI 컴포넌트 라이브러리)
    *   `STD_JS`: Vanilla JS (순수 자바스크립트 예제)
    *   `STD_CV`: Canvas (캔버스/그래픽스 관련)

## 2. 주요 모듈 및 기술 스택

### ⚛️ STD_React
*   **폴더**: `react-ui`
*   **기술 스택**: React v18.2.0
*   **빌드 도구**: Create React App (react-scripts 5.0.1)
*   **특징**: 최신 버전의 React(18)을 사용하는 모던 리액트 애플리케이션 구조입니다.

### 💚 STD_VUE
*   **폴더**: `vue-default`, `vue-demo`, `vue-samples`, `vue-vuetify`
*   **기술 스택**: Vue v2.6.10 (`vue-default` 기준)
*   **빌드 도구**: Vue CLI 3
*   **특징**: Vue 2 기반의 다양한 예제 및 Vuetify 연동 프로젝트들이 포함되어 있습니다.

### 💛 STD_JS
*   **특징**: 별도의 빌드 도구 없이 HTML, CSS, JS로 구성된 Vanilla JS 예제 또는 라이브러리 모음으로 보입니다.

### 🎨 기타 디렉토리
*   `STD_CV`, `STD_GD`, `STD_LIB`, `STD_PR` 등은 각 주제별(Computer Vision/Canvas, Design Guide, Library, Project) 표준 가이드나 베이스 코드를 담고 있는 것으로 보입니다.

## 요약
이 레파지토리는 **"Standard UI Kit inspired by Standard Design"**이라는 설명대로, 개발자가 참고할 수 있는 **UI 표준, 프레임워크별 템플릿(React, Vue), 그리고 코딩 컨벤션**을 집대성한 가이드 프로젝트입니다.
