---
category: Examples
title: Modifying the &lt;head&gt;
---

To modify the the `<head>` content, you can use the app wrapper `/routes/_app.ts`.

By default, it looks someting like this:

```js
import { LitElement, html } from "lit";
import type { AppWrapperOptions } from "@limette/core";

export default class App extends LitElement {
  render(app: AppWrapperOptions) {
    return html` <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Limette</title>
        ${app.css}
      </head>
      <body>
        ${app.component} ${app.js}
      </body>
    </html>`;
  }
}
```

You can add whatever you need in the `<head>` section.

## Modify the head per page

When you need to change the `<head>` section per page, you can use the `<lmt-head>` component like this.

```js
// routes/foo.ts
export default class Foo extends LitElement {
  render() {
    return html`
      <lmt-head>
        <title>Foo</title>
        <meta name="description" content="Your description for the foo page." />
      </lmt-head>
      <div>Your content</div>
    `;
  }
}
```

All the `<lmt-head>`'s tags are injected to the `<head>` section.

To avoid duplicate tags, you can use the `key` attribute.

```js
// routes/foo.ts
export default class Foo extends LitElement {
  render() {
    return html`
      <lmt-head>
        <meta name="description" content="This is a description." key="description">
      </lmt-head>
      <div>Your page</div>
    `;
  }
}

// components/title.ts
export default class Title extends LitElement {
  render() {
    return html`
      <lmt-head>
        <meta name="description" content="Other description" key="description">
      </lmt-head>
      <div>Your component</div>
    `;
  }
}
```

The rendered page will only include `<meta>`-tag with "Other description".

When merging tags with the same key, the last one found in the DOM will be the one injected in the `<head>`.

The `<title>`-tag is automatically deduplicated, even without a key prop.
