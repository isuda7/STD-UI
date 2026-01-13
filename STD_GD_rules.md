# STD_GD 표준 규칙 (Standard Conventions)

## 1. 기본 환경 (Basic Environment)

*   **문서 및 버전**: HTML5, CSS3, jQuery 1.12+ (or 3.x)
*   **인코딩**: UTF-8
*   **유형**: 반응형 웹 (Responsive Web)
*   **해상도 정책**:
    *   **Mobile UI**: ~ 1023px
    *   **PC UI**: 1024px ~
*   **접근성**: 기본 준수 (Level A). `user-scalable=yes` 권장.

## 2. 네이밍 규칙 (Naming Convention)

### 표기법
| 종류 | 표기법 | 예시 |
| :--- | :--- | :--- |
| **ID Selector** | camelCase (카멜 표기) | `errorMsg`, `mainVisual` |
| **Class Selector** | hyphen-case (스네이크/하이픈 표기) | `tab-page`, `tbl-type1` |
| **Image**| underbar_case (스네이크 표기) | `btn_cancel01_off.gif` |
| **File/Folder** | underbar_case (스네이크 표기) | `board_list.html` |

### 예약어 (Reserved Words)
*   **레이아웃**: `wrapper`, `header`, `container`, `content`, `footer`, `skipnav`
*   **컴포넌트**:
    *   `[컴포넌트]`: 기본 형태 (e.g., `btn`)
    *   `type-[유형]`: 상세 유형 (e.g., `type-row`)
    *   `is-[상태]`: 상태 표시 (e.g., `is-active`, `is-selected`)
    *   `has-[요소]`: 포함 여부 (e.g., `has-icon`)

### 이미지 네이밍
*   `icn_[크기]_[이름]_[번호]_[상태]`: 아이콘 (e.g., `icn_24_search_01_on`)
*   `bg_[이름]`: 배경 (e.g., `bg_main_visual`)
*   `img_[이름]`: 일반 이미지
*   `@[이름]`: 임시 이미지 (e.g., `@thumb_01`)

## 3. 코드 규칙 (Code Convention)

### HTML
*   **들여쓰기**: 1 Tab (공백 4칸 equivalent).
*   **속성 순서**: `기능`(`href`) > `이름`(`id`) > `정보`(`title`) > `옵션`(`target`) > `역할`(`role`) > `속성`(`aria-*`) > `꾸미기`(`class`) > `상태`(`disabled`)
*   **주석**:
    *   영역 주석: `<!-- 영역명 --> ... <!-- //영역명 -->`
    *   조건 주석: `<!-- Case 상황 --> ... <!-- //Case 상황 -->`
*   **시맨틱 태그 사용**: `header`, `footer`, `main`, `section`, `article`, `nav` 등 적극 활용.
*   **WAI-ARIA**: `role`, `aria-label`, `aria-hidden` 등 접근성 속성 명시.

### CSS
*   **들여쓰기**: 선택자 내부 들여쓰기 허용 안 함 (한 줄 작성 권장 - `STD_LIB` 스타일).
    *   *Note: `STD_LIB` 소스는 압축형(한 줄)으로 되어 있으나, 가독성을 위해 일반적인 들여쓰기를 사용할 수도 있음. 단, 프로젝트 규칙은 `rule_code.html`에 명시된 스타일을 따름.*
*   **속성 순서**: `표시/위치` (`display`, `position`) > `크기/간격` (`width`, `margin`) > `박스모양` (`border`, `background`) > `폰트/정렬` (`font`, `color`)
*   **선택자**: ID 선택자 지양, Class 선택자 위주 사용. `*` 선택자 사용 금지.
*   **단위**: 불필요한 단위 생략 (`0px` -> `0`).

## 4. 파일 구조 (File Structure)
*   `/css`: `import.css`(메인), `animate.css`
*   `/js`: `libs/`(라이브러리), `pub/`(공통 UI 로직)
*   `/img`: `common/`, `content/`
*   `/html`: `components/`, `generals/` 등 물리적 폴더 분리
