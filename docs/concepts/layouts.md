---
category: Concepts
title: Layouts
---

A layout is a regular component that acts like a wrapper shared between the routes in the same folder. An example of a layout would be the app shell of an app. A layout is a `_layout.ts|js` file.

```js
// routes/_layout.ts
import { LitElement, html, type TemplateResult } from "lit";

export default class Layout extends LitElement {
  render(component: TemplateResult) {
    return html` <div class="layout">${component}</div> `;
  }
}
```

## Inheritence

Layouts are nested. If you need to disable the inheritance of a layout, you can do it like this:

```js
// routes/_layout.ts
import { LitElement, html, type TemplateResult } from "lit";

export const config = {
  skipInheritedLayouts: true,
};

export default class Layout extends LitElement {
  render(component: TemplateResult) {
    return html` <div class="layout">${component}</div> `;
  }
}
```

If you need to disable the layout at all for a route, you can do it through the route's config.

```js
// routes/contact.js
import { LitElement, html, type TemplateResult } from "lit";

export const config = {
  skipInheritedLayouts: true,
};

export default class Special extends LitElement {
  render() {
    return html` <div>Special page</div> `;
  }
}
```
