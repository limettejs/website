---
category: Getting started
title: Create a route
---

To create a route you can create a new file in the **routes/**.

## Example

Let's create a `/contact` page.

```js
// routes/contact.ts
import { LitElement, html } from "lit";

export default class Contact extends LitElement {
  override render() {
    return html` <div>Contact page</div> `;
  }
}
```

Now, you can open the `http://localhost:8000/contact` and your page is ready.
