# Standard Guide (STD_GD) Full Reference Context

이 문서는 `STD_GD` (Standard Design/Guide) 디렉토리의 모든 컨벤션 및 표준 규칙을 상세하게 정리한 것입니다. AI는 이 규칙을 **엄격하게** 준수하여 코드를 작성해야 합니다.

---

## 1. 기본 환경 (Project Environment)
*Source: `rule_intro.html`*

### 1.1 프로젝트 환경 정의
*   **문서 및 버전**: HTML5, CSS3
*   **인코딩**: UTF-8
*   **웹 유형**: 반응형 웹 (Responsive Web)
*   **브라우저 호환성**:
    *   **PC**: Edge, Chrome, Firefox, Safari
    *   **Mobile**: Safari, Chrome, Samsung Internet
*   **해상도 정책**:
    *   **PC UI**: 1024px 이상
    *   **Mobile UI**: 1023px 이하
    *   각 디바이스별 구간에서 반응형 처리 (Media Query 활용)

### 1.2 파일/폴더 구조
**Root**: `/assets/`

| 분류 폴더 | 서브 폴더 | 내용 | 비고 |
| :--- | :--- | :--- | :--- |
| **fonts** | | 웹폰트 파일 | |
| **css** | | 스타일 시트 | `librarys.min.css` (라이브러리)<br>`base.css` (초기화)<br>`utilities.css` (유틸리티)<br>`layout.css` (레이아웃)<br>`components.css` (컴포넌트)<br>`content.css` (컨텐츠) |
| **js** | `libs` | 라이브러리 스크립트 | `jquery.min.js`, `librurys.min.js` |
| | `ui` | UI 스크립트 | `ui.common.js` (공통)<br>`ui.components.js` (컴포넌트)<br>`ui.contents.js` (컨텐츠)<br>`ui.init.js` (초기화) |
| **img** | `common` | 공통 이미지 | |
| | `content` | 서브 컨텐츠 이미지 | |
| | `main` | 메인 이미지 | |
| | `temp` | 샘플/임시 이미지 | |
| **html** | `_layout` | 공통 레이아웃 | |
| | `[menus]` | 메뉴별 페이지 | |

---

## 2. 표준 규칙 (Standard Rules)
*Source: `rule_standard.html`*

### 2.1 기본 문서 구조 (HTML Boilerplate)
모든 HTML 문서는 다음 구조를 기본으로 시작합니다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<meta name="title" content="Project Name" />
<meta name="keywords" content="Project Name" />
<meta name="description" content="Project Name" />
<title>분류명 - 페이지명 | Project Name</title>
</head>
<body>
    <div class="wrapper">
        <!-- Header -->
        <header class="header"></header>
        
        <!-- Container -->
        <main role="main" class="container">
            <div id="content" class="content">
                 <!-- Content Body -->
            </div>
        </main>
        
        <!-- Footer -->
        <footer class="footer"></footer>
    </div>
</body>
</html>
```

### 2.2 특수기호 (Entity Codes)
특수기호는 반드시 Entity Name을 사용합니다.
*   `"` -> `&quot;`
*   `&` -> `&amp;`
*   `<` -> `&lt;`
*   `>` -> `&gt;`
*   (공백) -> `&nbsp;`

### 2.3 시맨틱 마크업 (Semantic Markup)
의미에 맞는 태그를 사용해야 합니다.
*   **구조**: `header`, `footer`, `section`, `article`, `aside`, `nav`, `main`
*   **제목**: `h1` (페이지 최상위), `h2` ~ `h6` (계층 구조 준수)
*   **텍스트**: `p` (단락), `strong` (중요), `em` (강조), `i` (아이콘/장식)
*   **목록**: `ul`, `ol`, `dl`

### 2.4 WAI-ARIA (접근성)
필요한 경우 적절한 role 속성을 사용합니다.
*   **Form**: `role="form"`, `role="textbox"`, `role="checkbox"`, `role="radio"`, `role="search"`
*   **Tab**: `role="tablist"`, `role="tab"`, `role="tabpanel"`
*   **Popup**: `role="dialog"`, `aria-modal="true"`
*   **Etc**: `role="button"`, `role="img"`, `role="alert"`

---

## 3. 네이밍 규칙 (Naming Conventions)
*Source: `rule_name.html`*

### 3.1 표기법 (Case Styles)
*   **ID Selector**: CamelCase (`errorMessage`, `controlCenter`) - *한 자리 숫자 생략 가능*
*   **Class Selector**: kebab-case (`tab-page`, `tbl-type1`) - *한 자리 숫자 생략 가능*
*   **Image File**: snake_case (`btn_cancel01_off.gif`) - *두 자리 숫자 사용 (01, 02)*
*   **HTML File**: snake_case (`board_list.html`) - *두 자리 숫자 사용*

### 3.2 예약어 (Reserved Words)
*   **Layout**: `wrapper`, `skipnav`, `header`, `container`, `content`, `footer`
*   **Grouping**: `-wrap` (전체 영역), `-area` (지역 영역)
*   **Component**: `module-[order]`, `type-[meaning]`, `is-[state]`, `has-[element]`

### 3.3 이미지 네이밍 패턴
*   **Icon**: `icn_[Size]_[Name]_[Seq]_[Color/Detail]` (예: `icn_24_right_01_bk`)
*   **Background**: `bg_[Name]_[Seq]` (예: `bg_main_sec01_01`)
*   **Image**: `img_[Name]_[Seq]` (예: `img_company_01`)
*   **Temporary**: `@[Name]_[Seq]` (예: `@thumb_sec01_01`) - *개발용/임시*

---

## 4. 코드 규칙 (Coding Rules)
*Source: `rule_code.html`*

### 4.1 HTML Coding
*   **들여쓰기**: **1탭 (Space 4칸)**
*   **빈줄**: 가독성을 위해 1줄 허용 (연속 초과 금지)
*   **주석**:
    *   **영역 주석**: `<!-- 영역명 -->` ... `<!-- //영역명 -->`
    *   **조건 주석**: `<!-- Case 로그인 -->` ... `<!-- //Case 로그인 -->`
*   **속성 선언 순서**:
    1.  `href`, `src`, `type` (기능)
    2.  `name`, `id` (이름)
    3.  `placeholder`, `title`, `alt`, `value` (정보)
    4.  `target`, `tabindex` (옵션)
    5.  `role` (역할)
    6.  `aria-*` (접근성)
    7.  `class` (꾸미기)
    8.  `checked`, `disabled`, `required` (상태)

### 4.2 CSS Coding
*   **기본**: 파일 상단 `@charset "utf-8";` 필수.
*   **따옴표**: `font-family`, `content`, 경로 등에 **작은따옴표('')** 사용. (`url('img.png')`)
*   **세미콜론**: 마지막 속성에도 `;` 필수.
*   **공백**: 선택자 간, 중괄호(`{`) 앞에 1칸 공백. 중괄호 안쪽에는 공백 없음.
    *   `good`: `.class-name {margin:0;}`
    *   `bad`: `.class-name{ margin:0; }`
*   **들여쓰기**: **허용하지 않음** (한 줄 작성 원칙).
    *   예: `.class-name {font-size:1.0em; margin:0;}` 
    *   *단, 공통 속성 그룹핑 시 줄바꿈 등 가독성을 위한 예외 존재 가능성을 염두.*
*   **속성 선언 순서**:
    1.  **표시**: `display`, `visibility`
    2.  **위치**: `position`, `top/right/bottom/left`, `z-index`
    3.  **넘침/흐름**: `overflow`, `float`
    4.  **크기/간격**: `width`, `height`, `margin`, `padding`
    5.  **박스모양**: `border`, `background`
    6.  **폰트/정렬**: `font`, `color`, `text-align`, `vertical-align`
    7.  **기타**: 나머지 속성

---

## 5. 서식 명칭 및 접근성 (Titles & Accessibility)
*Source: `rule_title.html`*

### 5.1 Title 속성
*   **Rule**: 라벨이 없는 컨트롤에는 목적을 명확히 하는 `title`을 제공해야 합니다. '입력', '선택' 등 불필요한 서술어는 생략합니다.
    *   `title="검색 키워드"` (O)
    *   `title="검색 키워드 입력"` (X)
*   **분할된 필드**: 각 필드별 명확한 구분.
    *   전화번호: `[지역 번호]`, `[국 번호]`, `[가입자 번호]`
    *   카드번호: `[카드번호 첫번째 4자리]`, `...`

---

## 6. SASS/SCSS 설정 (참고용)
*Source: `rule_codeset.html`*

*   **Variables**:
    *   `$base-wid`: 1200px
    *   `$base-gut`: 20px
    *   `$color-primary`: `#0089b3`
    *   `$color-secondary`: `#54873c`
    *   `$color-success`: `#47a104`
    *   `$color-error`: `#ff0000`
