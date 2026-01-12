# STD_JS: Full Source Context for AI
> **Role**: You are an AI developer working with the `STD_LIB` UI library's JavaScript.
> **Goal**: Implement or debug UI interactions that match the existing logic.
> **Instruction**: This document contains the **FULL SOURCE CODE** of the core JavaScript files. Use this logic to understand how components are initialized and interact.

---

# 1. UI Component Logic (`pub_ui.js`)

### Initialization
```javascript
var ui = {
    init: function(){
        if ($('.button').length) {this.waveEffect.init();}
        if ($('.gnb-dropdown').length) {this.gnb_dropdown.init();}
        if ($('.tab-nav').length) {this.tab.init();}
        if ($('.acco').length) {this.acco.init();}
        if ($('.tooltip').length) {this.tooltip.init();}
        if ($('.drop').length) {this.drop.init();}
        if ($('.popup-wrap').length) {this.popup.init();}
        // ... many others
    },
    // ...
}
```

### Accordions (`ui.acco`)
*   **Selectors**: `.acco` (Module), `.acco-item` (Item), `.acco-toggle` (Button), `.acco-cont` (Content)
*   **Logic**:
    *   `data-sync="true"`: One open at a time (Accordion behavior).
    *   `data-sync="false"`: Multiple open allowed (Toggle behavior).
    *   `data-toggle="true"` (on Module): Allows collapsing the active item.

### Tabs (`ui.tab`)
*   **Selectors**: `.tab-nav a` (Button), `.tab-content` (Content)
*   **Logic**:
    *   Uses `aria-controls` on button to match `id` of content.
    *   Adds `.is-selected` to active tab item and `hidden` attribute to inactive content.

### Tooltips (`ui.tooltip`)
*   **Selectors**: `.tooltip-wrap`, `.tooltip-open`, `.tooltip-close`
*   **Logic**:
    *   Hover/Click events to toggle visibility.
    *   Uses `aria-expanded` and `hidden` attributes for accessibility state.

### Modals (`ui.popup`)
*   **Selectors**: `.popup-wrap`, `.popup-open`, `.popup-close`
*   **Logic**:
    *   `ui.popup.open(id)`: Opens popup, sets `data-popup` on opener, locks scroll, adds dimmer.
    *   `ui.popup.close(id)`: Closes popup, restores focus, removes dimmer.

### Dropdowns (`ui.drop`)
*   **Selectors**: `.drop` (Wrap), `.drop-toggle` (Button)
*   **Logic**:
    *   Toggles `.is-active` on the wrapper.
    *   Handles focus-out closing automatically.

---

# 2. Utility Functions (`pub_utility.js`)

### Dimmer (`dimmer`)
*   `dimmer.open($module)` / `dimmer.close($module)`
*   Manages a global `.dimmer` element in `body`.
*   Handles reference counting (`lens`) to support stacked modals.

### Scroll Lock (`setScroll`)
*   `setScroll.disable()`: Adds `.is-scroll-lock` to body, fixes position to prevent background scroll.
*   `setScroll.enable()`: Removes lock and restores scroll position.

### Focus Management (`setFocus`)
*   `setFocus.disable($module)`: Sets `tabindex="-1"` and `aria-hidden="true"` on background siblings.
*   `setFocus.enable()`: Restores original attribute states.

---

# 3. Usage & Events

### Initialization
The script automatically initializes on document ready:
```javascript
$(document).ready(function(){
    dv.init();   // Utilities
    ui.init();   // UI Components
});
```

### Event Binding Rules
1.  **Avoid Duplicate Binding**: Most events use `.not('.is-clicked')` or `.not('.is-active')` to prevent double binding.
2.  **Accessibility**: Logic heavily relies on WAI-ARIA attributes (`aria-expanded`, `aria-hidden`, `aria-controls`).
3.  **Classes**: State changes are primarily managed via `.is-active`, `.is-current`, `.is-selected` classes.
