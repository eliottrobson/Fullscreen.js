# Fullscreen.js (1.0.0)

Fullscreen.js is a lightweight wrapper around the fullscreen API for fast and browser compliant development.

## Table of contents

- [Quick start](#quick-start)
- [Documentation](#documentation)

## Quick start

You'll be fullscreen in no time:

1. [Download the latest release.](https://github.com/eliottrobson/Fullscreen.js/archive/v1.0.0.zip)
2. (Optional) Build the source file (TypeScript)
3. Add the script to your Pages
4. Create a fullscreen element

### What's included

We provide the source files (`.ts`) along with the transpiled files (`.js`). This will allow you to get started quickly or embed it as part of your build process and customize the functionality.

```
Fullscreen.js/
├── fullscreen.js
└── fullscreen.ts
```

## Documentation

### API

#### Creating

In order to use the class create a new instance:

```
var fs = new Fullscreen(document.getElementById('my_element'));
```

The constructor accepts 1 parameter:

Parameter | Type          | Description                       | Example
--------- | ------------- | --------------------------------- | -------------------------------------
item      | `HTMLElement` | The HTML element to go fullscreen | document.getElementById('my_element')

#### Methods

The class has a few Methods

Method  | Parameters       | Description                                                 | Example
------- | ---------------- | ----------------------------------------------------------- | ----------------
toggle  | enable?: boolean | Toggles fullscreen (or sets according to boolean parameter) | fs.toggle(true);
enable  |                  | Enables fullscreen mode for this element                    | fs.enable();
disable |                  | Disables fullscreen mode for this element                   | fs.disable();
active  |                  | Returns the current enabled status                          | fs.active();
