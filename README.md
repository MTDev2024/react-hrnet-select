# Select Component (React)

A lightweight, accessible, and reusable select component for React applications.

[![npm](https://img.shields.io/npm/v/select-mtdev2024)](https://www.npmjs.com/package/select-mtdev2024)
[![license](https://img.shields.io/npm/l/select-mtdev2024)](LICENSE)

---

## Features

- Controlled value (`value` + `onChange`)
- Optional placeholder support
- Optional disabled state
- Accessible via native `<select>` element (keyboard navigation, screen readers built-in)
- Customizable via `className` prop

---

## Installation

```bash
npm install select-mtdev2024
```

or

```bash
yarn add select-mtdev2024
```

---

## Usage

```jsx
import { useState } from "react";
import Select from "select-mtdev2024";
import "select-mtdev2024/style.css";

function App() {
  const [value, setValue] = useState("");

  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "engineering", label: "Engineering" },
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(val) => setValue(val)}
      placeholder="Select a department..."
    />
  );
}
```

---

## Props

| Prop          | Type        | Required | Description                              |
|---------------|-------------|----------|------------------------------------------|
| `options`     | `array`     | Yes      | Array of `{ value, label }` objects      |
| `value`       | `string`    | Yes      | Currently selected value                 |
| `onChange`    | `function`  | Yes      | Callback with selected value as string   |
| `placeholder` | `string`    | No       | Default text when no value is selected   |
| `className`   | `string`    | No       | Additional CSS classes                   |
| `id`          | `string`    | No       | For label association                    |
| `ariaLabel`   | `string`    | No       | `aria-label` if no visible label         |
| `disabled`    | `boolean`   | No       | Disables the select                      |

---

## Options Format

Options must follow this structure:

```js
{ value: "marketing", label: "Marketing" }
```

If your data has a different format, transform it first:

```js
const options = data.map(item => ({
  value: item.id,
  label: item.name
}))
```

---

## Behavior

- Selecting an option calls `onChange` with the selected value as a string
- If `placeholder` is provided, it appears as the first option and cannot be selected
- Component is not controlled internally — state must be managed by the parent

---

## Styling

Import the default stylesheet:

```jsx
import "select-mtdev2024/style.css";
```

Override default styles using these CSS classes:

```css
.select-container { }
.select-native { }
```

---

## Type Documentation

Props are documented using JSDoc comments directly in the source code.
No runtime type checking dependency required.

---

## Improvements to consider

- Add search/filter functionality
- Add multi-select support
- Add option groups support

---

## License

MIT © 2026 Michael Takbou

---

## Author

Michael Takbou · [LinkedIn](https://www.linkedin.com/in/michael-takbou/) · [Malt](https://www.malt.fr/profile/michaeltakbou)
