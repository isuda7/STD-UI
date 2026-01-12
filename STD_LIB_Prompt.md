# STD_LIB: Full Source Context for AI
> **Role**: You are an AI developer working with the `STD_LIB` UI library.
> **Goal**: Create or modify UI components that EXACTLY match the existing design system.
> **Instruction**: This document contains the **FULL SOURCE CODE** of the library. You do not need external files. Use the SCSS definitions below to understand class names, mixins, and variables.

---

# 1. Core Configuration (Global)

### `scss_common/_variables.scss`
```scss
@charset "utf-8";
// 레이아웃
$layout-width: 1200px;
$layout-side: 20px;

// 컬러 의미
$color-basic: #333;
$color-success: #47a104;
$color-warning: #e9b500;
$color-danger: #d45704;
$color-error: #ff0000;
$color-info: #949494;
$color-primary: #ff5400;
$color-primary-dark: #ea1b00;
$color-primary-light: #ff935d;
$color-secondary: #54873c;

// 말줄임 Mixins
@mixin ellipsis-1 {overflow:hidden; white-space:nowrap; -o-text-overflow:ellipsis; text-overflow:ellipsis;}
@mixin ellipsis-2 {overflow:hidden; -o-text-overflow:ellipsis; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;}

// Position Mixins
@mixin centered-t {position:absolute; left:50%; top:0; transform:translateX(-50%);}
@mixin centered-r {position:absolute; right:0; top:50%; transform:translateY(-50%);}
@mixin centered-b {position:absolute; left:50%; bottom:0; transform:translateX(-50%);}
@mixin centered-l {position:absolute; left:0; top:50%; transform:translateY(-50%);}
@mixin centered-c {position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);}

// Animation Mixins (Dropdown/Up)
@mixin dropdown {left:0; top:100%; opacity:0; animation:dropdown 0.3s ease both; transform:translateY(-50%) scaleY(0); transition:opacity 0.2s ease;}
@mixin dropdown-active {opacity:1; animation:dropdown-active 0.3s ease both;}
@mixin dropup {left:0; bottom:100%; opacity:0; animation:dropup 0.3s ease both; transform:translateY(-50%) scaleY(0); transition:opacity 0.2s ease;}
@mixin dropup-active {opacity:1; animation:dropup-active 0.3s ease both;}
@mixin wideScale {transform:scaleX(0); transition:transform 0.25s ease;}
@mixin wideScale-active {transform:scaleX(1);}

@keyframes dropdown { from {transform:translateY(0) scaleY(1);} to {transform:translateY(-50%) scaleY(0);} }
@keyframes dropdown-active { from {transform:translateY(-50%) scaleY(0);} to {transform:translateY(0) scaleY(1);} }
```

### `scss_common/_base.scss`
```scss
// Fonts & Reset
html, body {height: 100%; text-size-adjust:none; -webkit-text-size-adjust: none;}
* {margin:0; padding:0; border:0; box-sizing:inherit;}
body {font-family:"Noto Sans KR", sans-serif; color:#000000; font-size:14rem; line-height:1; letter-spacing:-0.2rem; box-sizing:border-box;}
img {vertical-align:middle; max-width:100%;}
button {background-color:transparent; cursor:pointer;}
a {text-decoration:none; color:inherit;}
input, textarea {caret-color:$color-primary;}
input:focus, textarea:focus, select:focus {outline:0;}
```

### `scss_common/_common.scss` (Utilities)
```scss
// Scroll Lock, Blind
.is-scroll-lock {position:fixed; left:0; top:0; width:100%; height:100%; overflow:hidden;}
.blind {position:absolute; top:-999em; left:-999em; z-index:0; width:1px; height:1px; overflow:hidden;}
// Margins/Paddings (mar-t0, pad-t0 etc...)
.mar-t0 {margin-top:0 !important;}
// Alignment
.align-c {text-align:center !important;}
.flex {display:flex;}
.flex-column {flex-direction:column;}
.flex-center {justify-content:center;}
.cross-center {align-items:center;}
// Grid System
.grid {display:flex; flex-wrap:wrap;}
.col {flex:none;}
.col.col-6 {width:50%;}
.col.col-12 {width:100%;}
.gut-guide {margin:-5px;}
.gut-guide > .col {padding:5px;}
```

---

# 2. UI Components (Source Code)

### `_buttons.scss`
```scss
@mixin ui-btn-contained {
    padding:8px 16px; background-color:#eee; border:1px solid #eee; color: #222; font-size: 14px; line-height: 22px; transition:all 0.3s;
    &:hover, &:focus {background-color:#ddd; border-color: #eee; color: #000;}
    &:disabled {opacity: 0.5;}
    &.primary {background:$color-primary; border-color: $color-primary; color:#fff;}
    &.primary:hover, &.primary:focus {background:$color-primary-dark; border-color: $color-primary-dark}
}
@mixin ui-btn-outlined {
    padding:8px 16px; background-color:#fff; border:1px solid #ddd; color: #222; font-size: 14px; line-height: 22px; transition:all 0.3s;
    &:hover, &:focus {border-color: #222; color: #000;}
    &.primary {border-color: $color-primary; color: $color-primary;}
}
.btn {flex:none; display:inline-flex; position:relative; overflow:hidden; justify-content:center; align-items: center; vertical-align:middle;}
.btn.style-1 {@include ui-btn-contained;}
.btn.style-2 {@include ui-btn-outlined;}
.btn.style-3 {@include ui-btn-contained; border-radius:4px;}
.btn.style-4 {@include ui-btn-outlined; border-radius:4px;}
.btn.style-5 {@include ui-btn-contained; border-radius:30px;}
.btn.style-6 {@include ui-btn-outlined; border-radius:30px;}
```

### `_formElements.scss` (Inputs, Radios, Checks)
```scss
@mixin ui-input-outlined {
    display: flex; align-items: center; gap: 12px; height:45px; padding: 0 15px; border:1px solid #ddd; border-radius:4px;
    &:focus-visible {border-color: $color-primary; color: $color-primary;}
}
.form-input {
    @include ui-input-outlined;
    input {height: 100%; width:100%;}
    .btn-clear {display: none;} //Shown via CSS logic
}
.form-select {@include ui-input-outlined; padding-right:45px; background:url('../img/cmn/arw_select01.png') no-repeat calc(100% - 15px) center;}

// Radio
.form-radio {display:inline-block; position:relative; margin:5px 0;}
.form-radio label {display:inline-block; position:relative; min-width:20px; min-height:20px; font-size:13px; padding-left:28px;}
.form-radio label:before {content:''; position:absolute; left:0; top:0; width:20px; height:20px; border:1px solid #ddd; background:#fff; border-radius:50%;}
.form-radio > input:checked + label:before {background-color:#fff; border-color:$color-primary;}
.form-radio > input:checked + label:after {content:''; position:absolute; top:5px; left:5px; width:10px; height:10px; border-radius:50%; background:$color-primary;}

// Checkbox
.form-checkbox label:before {width:20px; height:20px; border:1px solid #ddd; background:#fff;}
.form-checkbox > input:checked + label:before {border-color:$color-primary;}
.form-checkbox > input:checked + label:after {content:''; position:absolute; left:5px; top:5px; width:10px; height:7px; border-left:2px solid $color-primary; border-bottom:2px solid $color-primary; transform:rotate(-45deg);}
```

### `_accordions.scss`
```scss
.acco-basic {overflow:hidden; border:1px solid #ddd; border-radius:5px;}
.acco-basic .acco-toggle {display:block; width:100%; padding:10px 20px; color:#222; text-align:left;}
.acco-basic .acco-toggle .arw {position:absolute; top:50%; right:20px; transform:translateY(-50%) rotate(0);}
.acco-basic .acco-item.is-active .acco-toggle .arw {transform:translateY(-50%) rotate(180deg);}
.acco-basic .acco-cont {padding:10px 20px; background-color:#ffffff;}
```

### `_tabs.scss`
```scss
.tab-basic ul {background:#eee; border-bottom:1px solid $color-primary;}
.tab-basic .is-selected a {background:$color-primary; color:#fff;}
.tab-nav.tab-float li {float:left;}
.tab-nav.tab-flex ul {display:flex;}
.tab-nav.tab-table ul {display:table; width:100%;}
```

### `_tables.scss`
```scss
.tbl-style1 th, .tbl-style1 td {padding:6px 15px; text-align:left; border:1px solid #ddd;}
.tbl-style1 thead th {background-color:#e4e8f3; text-align:center;}
.tbl-form th {background-color:#f1f3f9; text-align:left; padding:10px;}
.tbl-list th {height:40px; border-bottom:1px solid #444; font-family:'NSB'; text-align:center;}
.tbl-list td {height:40px; border-top:1px solid #ddd; text-align:center;}
```

### `_modals.scss`
```scss
.popup-wrap {display:flex; position:fixed; z-index:1002; left:0; top:0; width:100%; height:100%; opacity:0; transition:opacity 0.3s ease; justify-content:center; align-items:center;}
.popup-wrap.is-active {opacity:1;}
.popup-basic {width:480px; max-width:90%; border:1px solid #ddd; background-color:#fff; border-radius:5px;}
```

### `_steps.scss`
```scss
.step .step-list {display:flex; justify-content: center; align-items: center;}
.step.style-1 .step-item .step-label {width:50px; height:50px; border-radius:50%; background-color:#eee; display:flex; justify-content:center; align-items:center;}
.step.style-1 .step-item.is-on .step-label {border:1px solid $color-primary; background-color:#fff; color:$color-primary;}
```

### `_tooltips.scss`
```scss
.tooltip-wrap {display:inline-block; position:relative;}
.tooltip {display:none; position:absolute; z-index:11;}
.tooltip.is-active {display:block;}
.tooltip-top {left:50%; bottom:100%; margin-bottom:10px; transform:translateX(-50%);}
.tooltip-inner {position:relative; padding:10px 15px; background-color:#fff; border:1px solid #ddd; border-radius:6px;}
```

### `_badges.scss`
```scss
.badge.style-1 {width:6px; height:6px; background-color: $color-primary; border-radius: 50%;}
.badge.style-2 {padding:3px 6px; background-color: $color-primary; border-radius: 10px; color:#fff; font-size: 12px;}
```

### `_lists.scss`
```scss
.list.style-1 {border:1px solid #ddd; border-width:1px 0;}
.list.style-1 .item {padding:12px 10px; min-height:40px; line-height:22px; border-top:1px solid #ddd;}
```

### `_icons.scss`
```scss
.icon {display:inline-block; background:no-repeat 0 0; vertical-align:middle; overflow:hidden; color:transparent; text-indent:-999px;}
.icon-search1 {width:20px; height:20px; background-image:url(../img/cmn/ico_search01.png);}
.icon-search1.primary {background-position:0 0;}
.icon-search1.dark {background-position:-20px 0;}
```

### `_breadcrumb.scss`
```scss
.breadcrumb {position:relative; display:flex; margin:0 -10px;}
.breadcrumb .item {position:relative; padding:0 10px 0 16px;}
.breadcrumb .item.is-current {color:$color-primary;}
```

### `_cards.scss`
```scss
.card-basic {width:300px; border:1px solid #ddd; border-radius:3px;}
.card-basic .card-head {padding:10px 20px;}
```

---

# 3. Patterns

### `_boards.scss`
```scss
.board-view .view-header .subject-wrap {padding:10px 50px; border-top:2px solid #444; border-bottom:1px solid #444;}
.board-view .view-header .subject-wrap .subject {font-size:23px; font-family:'NSB'; text-align:center;}
```

---

# 4. Usage Rules
1.  **Exact Matching**: Use the class names exactly as defined above (e.g., `style-1`, `type-row`, `acco-basic`).
2.  **Wrappers**: Always wrap components in their defined parents (e.g., `.step-list` inside `.step`).
3.  **Icons**: Use `span.icon-xx` classes, not `img` tags.
4.  **Layout**: Use `.grid`, `.col`, `.form.type-row` for structural layout.
