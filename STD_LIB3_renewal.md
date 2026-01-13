# STD_LIB3 Renewal Guide

**STD_LIB3**는 기존 라이브러리의 구조(HTML/Content)는 그대로 유지하되, 디자인 시스템을 **Zero-base**에서 완전히 새롭게 설계한 **Start-up / Tech Dashboard** 스타일의 리뉴얼 버전입니다.

> **"True Renewal"**: 기존 스타일(`import.css`)을 전혀 참조하지 않고, 오직 `renewal.css` 하나로 새로운 룩앤필을 구현했습니다.

## 1. 디자인 컨셉: Clean & Minimalist
실리콘밸리 테크 기업들의 최신 대시보드 트렌드를 반영했습니다.

*   **Color Theme**: **Slate & Sky**
    *   **Primary**: `#0F172A` (Deep Slate) - 무게감 있고 전문적인 느낌.
    *   **Accent**: `#0EA5E9` (Sky Blue) - 선명하고 산뜻한 인터랙션 컬러.
    *   **Background**: `#F1F5F9` - 눈이 편안한 쿨톤의 밝은 회색.
*   **Surface**:
    *   완전한 **White Surface**에 부드러운 **Large Diffused Shadow**를 적용하여 깊이감을 부여했습니다.
    *   **Radius**: `12px` ~ `20px`의 넉넉한 라운딩으로 부드러운 인상.
*   **Typography**:
    *   **Pretendard** 폰트를 적용하여 모바일과 웹 어디서든 최상의 가독성을 제공합니다.
    *   불필요한 장식을 배제하고 타이포그래피의 위계(Hierarchy)만으로 정보를 구분합니다.

## 2. 기술적 변경사항
*   **CSS Architecture**:
    *   기존: 분절된 CSS 파일들 (`common`, `layout`, `text` 등) + 복잡한 `import` 구조.
    *   **변경**: 단일 `renewal.css` 파일에서 Reset부터 Layout, Component까지 통합 관리.
*   **Legacy Free**:
    *   `wsg_include.js`에서 기존 `import.css` 연결을 끊고 `renewal.css`만 로드하도록 변경했습니다.
    *   기존 HTML 클래스(`g-wrapper`, `btn` 등)를 그대로 지원하되, 스타일링 로직은 완전히 새로 작성되었습니다.

## 3. 주요 컴포넌트 변화
*   **레이아웃**: 좌측 고정 사이드바(Sidebar) + 상단 고정 헤더(Sticky Header)의 전형적인 **Admin Console** 레이아웃.
*   **버튼 (`.btn`)**: 기존의 투박한 입체감을 없애고, 플랫(Flat)하지만 호버 시 부드럽게 떠오르는(Lift) 인터랙션 적용.
*   **테이블 (`.tbl-type1`)**: 굵은 선을 모두 제거하고, 얇은 디바이더와 넉넉한 패딩으로 가독성 극대화.
*   **카드 (`.box`)**: 배경과 구분되는 확실한 카드형 UI로 컨텐츠 집중도 향상.

## 4. 확인 방법
`c:\workspace\My\STD-UI\STD_LIB3\index.html`을 열어 완전히 달라진 디자인을 확인하세요.
