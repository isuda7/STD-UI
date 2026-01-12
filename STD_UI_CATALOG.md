# Standard UI Catalog (STD_LIB)

이 문서는 `STD_LIB`에서 제공하는 모든 UI 컴포넌트의 스타일 및 유형(Type)을 정리한 카탈로그입니다.

---

## 1. 기본 요소 (Basic Elements)

### 버튼 (Buttons)
*   `.btn.style-1`: **Flat Contained** (사각형, 배경색)
*   `.btn.style-2`: **Flat Outlined** (사각형, 테두리)
*   `.btn.style-3`: **Round Contained** (둥근모서리 4px, 배경색)
*   `.btn.style-4`: **Round Outlined** (둥근모서리 4px, 테두리)
*   `.btn.style-5`: **Pill Contained** (반원모서리 30px, 배경색)
*   `.btn.style-6`: **Pill Outlined** (반원모서리 30px, 테두리)
*   `.btn.text`: 텍스트 버튼

### 라벨 (Labels)
*   `.label.style-1`: **Fixed Contained** (직각, 고정너비 60~120px)
*   `.label.style-2`: **Outlined** (직각)
*   `.label.style-3`: **Round Contained** (둥근모서리 4px)
*   `.label.style-4`: **Round Outlined** (둥근모서리 4px)
*   `.label.style-5`: **Pill Contained** (반원모서리 30px)
*   `.label.style-6`: **Pill Outlined** (반원모서리 30px)

### 배지 (Badges)
*   `.badge.style-1`: **Dot** (점 형태)
*   `.badge.style-2`: **Pill** (캡슐 형태 텍스트)

### 구분선 (Dividers)
*   `.divider.style-1`: **Thin** (높이 4px, #eee)
*   `.divider.style-2`: **Medium** (높이 6px, #eee)
*   `.divider.style-3`: **Thick** (높이 8px, Border 포함)

---

## 2. 목록 및 컨테이너 (Lists & Containers)

### 리스트 (Lists)
*   `.list.style-1`: **Boxed** (상하 테두리, 내부 Item 테두리)
*   `.list.style-2`: **Top Clear** (상단 테두리 투명)
*   `.list.style-3`: **Underlined** (하단 테두리만)

### 아이템 (Items)
*   `.item-demo`: 썸네일/아바타, 제목, 내용, 화살표가 조합된 복합 리스트 아이템

### 카드 (Cards)
*   `.card-basic`: 기본 카드 (Border, Padding 10-20px)

### 아코디언 (Accordions)
*   `.acco-basic`: **Boxed** (테두리 있음, 토글 시 배경색 변경)
*   `.acco-basic2`: **Simple** (테두리 있음, 토글 시 배경색 변경 안함)
*   `.acco-basic3`: **Minimal** (Basic2와 유사하나 미세 조정)

### 테이블 (Tables)
*   `.tbl-style1`: **Basic** (Th 배경색, 테두리 강조)
*   `.tbl-form`: **Form Layout** (입력 폼용, Th/Td 좌우 배치)
*   `.tbl-list`: **List View** (목록용, 상하 굵은 라인)
*   `.tbl-view`: **Detail View** (상세보기용, Th 회색 배경)
*   `.tbl-pager`: **Pager Layout** (페이지네이션 레이아웃용)

---

## 3. 네비게이션 및 안내 (Nav & Feedback)

### 탭 (Tabs) - `tab-basic`
*   `.tab-float`: Float 레이아웃
*   `.tab-flex`: Flex 레이아웃
*   `.tab-table`: Table-cell 레이아웃 (고정 너비)

### 스텝 (Steps)
*   `.step.style-1`: **Circle Number** (원형 숫자)
*   `.step.style-2`: **Bar Type** (채워지는 바 형태, 텍스트 포함)
*   `.step.style-3`: **Check Icon** (체크 아이콘 + 원형 배경)
*   `.step.style-4`: **Small Bar** (작은 막대 인디케이터)
*   `.step.style-5`: **Range Slider** (슬라이더 형태)

### 빵부스러기 (Breadcrumb)
*   기본 스타일: 화살표 구분자, `.is-current`로 현재 위치 표시

### 불릿 목록 (Bullets)
*   `.bullets.hyphen`: 하이픈(-)
*   `.bullets.star`: 별표(*)
*   `.bullets.bill`: 당구장표시(※)
*   `.bullets.num[1-4]`: 숫자 목록 (1., (1), 1), ①)
*   `.bullets.kor[1-3]`: 한글 목록 (가., (가), 가))
*   `.bullets.eng[1-4]`: 영문 목록 (A., (a), a), ⓐ)

### 페이징 (Paging)
*   기본 스타일: 숫자 버튼 그룹 + 이전/다음 컨트롤 버튼

---

## 4. 오버레이 (Overlays)

### 모달 (Modals)
*   `data-popup="content"`: 일반 컨텐츠 팝업
*   `data-popup="alert"`: 알림/경고 팝업
*   `data-popup="select"`: 하단 시트 (모바일 Select UI)
*   `data-popup="full"`: 전체 화면
*   `data-popup="responsive"`: 모바일에서만 전체화면

### 드롭메뉴 (Dropmenus)
*   `.drop-down`: 아래로 펼쳐짐
*   `.drop-top`: 위로 펼쳐짐
*   `.drop-basic`: 기본 드롭다운 스타일

### 툴팁 (Tooltips)
*   `.tooltip-top`, `.tooltip-right`, `.tooltip-bottom`, `.tooltip-left`: 4방향 지원

---

## 5. 미디어 및 기타 (Media & Others)

### 이미지 (Images)
*   `.img-cover`: `object-fit: cover` 적용
*   `.thumb`: 썸네일 컨테이너
*   `.avata`: 원형 아바타
*   `.banner`: 배너 컨테이너

### 아이콘 (Icons)
*   `.icon-badge1`, `.icon-close1`, `.icon-del1`, `.icon-more1/2`, `.icon-file1`
*   `.icon-slide2-pause/play`, `.icon-search1`, `.icon-youtube-play`
*   옵션 클래스: `.primary`, `.dark`, `.white`, `.gray`
