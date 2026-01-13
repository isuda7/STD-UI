# STD-UI Library

This library is a standalone distribution of the Standard UI Framework components, derived from `STD_LIB`.

## Directory Structure

- **css/**: Contains core stylesheets including `import.css` (main bundle), `animate.css`, etc.
- **js/**: Contains JavaScript libraries and utilities.
  - `libs/`: Third-party dependencies (jQuery, etc.)
  - `addon/`: Additional plugins (GreenSock, etc.)
  - `pub/`: Core UI logic (`pub_ui.js`, `pub_utility.js`, etc.)
- **img/**: Assets used by the components (icons, etc.)

## Usage

Include the followings in your HTML `<head>`:

```html
<!-- CSS -->
<link href="lib/css/import.css" rel="stylesheet" />

<!-- JS Dependencies -->
<script src="lib/js/libs/jquery-3.3.1.min.js"></script>
<script src="lib/js/addon/greensock/TweenMax.min.js"></script> <!-- If animations needed -->

<!-- Core JS -->
<script src="lib/js/pub/pub_utility.js"></script>
<script src="lib/js/pub/pub_device.js"></script>
<script src="lib/js/pub/pub_ui.js"></script>
```

Ensure the path to `img` folder is correct relative to the CSS file (default `../img/`).
