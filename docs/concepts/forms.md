---
category: Concepts
title: Forms
---

When it comes forms, you don't need to do anything special, Limette relies on native browser support for the HTML `<form>` element.

## POST request with `application/x-www-form-urlencoded`

By default, forms submit as a `GET` request with data encoded in the URL's search parameters, or as a `POST` request with either an `application/x-www-form-urlencoded` or `multipart/form-data` body.

```js
// routes/form.ts
import { LitElement, html } from "lit";
import type { Handlers } from "@limette/core";

export const handler: Handlers = {
  async POST(ctx) {
    const form = await ctx.request.formData();
    const email = form.get("email");

    // Add email to list.

    // Redirect user to thank you page.
    return ctx.redirect("/thanks-for-subscribing");
  },
};

export default class Form extends LitElement {
  override render() {
    return html`
      <form method="post">
        <input type="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    `;
  }
}
```
