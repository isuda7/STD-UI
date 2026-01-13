# STD_LIB2 Usage Guide

**STD_LIB2**는 기존 `STD_LIB`의 견고한 기능을 유지하면서, 현대적인 디자인 트렌드(Modern Aesthetic)를 적용한 업그레이드 버전입니다.

## 1. 주요 변경 사항 (Modernization)

### 디자인 (Design)
*   **테마 컬러**: 기존의 단순한 파란색에서 **Indigo Gradient** (`#6366f1` ~ `#4338ca`)로 변경하여 세련된 느낌을 줍니다.
*   **타이포그래피**: **Pretendard** 폰트를 적용하여 가독성과 심미성을 높였습니다.
*   **상호작용**: 버튼, 카드, 폼 요소에 부드러운 **그림자(Shadow)**와 **호버(Hover)** 효과를 추가하여 생동감 있는 UI를 제공합니다.
*   **레이아웃**: 보더 반경(Radius)을 키우고(6px~16px), 여백을 확보하여 시원한 느낌을 줍니다.

### 기술 (Technical)
*   **Overriding 방식**: 기존 `css/import.css`를 수정하지 않고, `css/modern.css`를 추가하여 안전하게 스타일을 덮어씌웠습니다.
*   **유지보수 용이성**: `modern.css` 내에 CSS Variable(`:root`)을 정의하여 컬러 및 수치를 쉽게 변경할 수 있습니다.

## 2. 사용 방법

### 기존 `STD_LIB`에서 마이그레이션
`STD_LIB2`는 폴더 구조가 `STD_LIB`와 동일하므로, 기존 경로를 `STD_LIB` -> `STD_LIB2`로 변경하기만 하면 새로운 디자인이 적용됩니다.

```html
<!-- 예시: 스크립트 경로 변경 -->
<script src="/STD_LIB2/wsg/js/wsg_include.js"></script>
```

### 새로운 스타일 커스터마이징
`STD_LIB2/css/modern.css` 파일의 상단 `:root` 변수를 수정하여 브랜드 컬러를 쉽게 변경할 수 있습니다.

```css
:root {
    --primary-500: #6366f1; /* 메인 컬러 수정 */
    --radius-md: 10px;      /* 라운드 값 수정 */
}
```

## 3. 확인 방법
`c:\workspace\My\STD-UI\STD_LIB2\index.html` (또는 `html/components/*.html`)을 열어 새로워진 디자인을 확인하세요.
