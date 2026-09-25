---
title: Forms
---

# Forms

Use ordinary HTML forms and the Web `Request` API. A route can render the form
on GET and process it on POST:

```ts
// routes/subscribe.ts
import { PageComponent, type RouteHandlers } from "limette";
import { html } from "lit";

export const handler: RouteHandlers = {
  async POST(ctx) {
    const form = await ctx.request.formData();
    const email = form.get("email");
    if (typeof email !== "string" || !email.includes("@")) {
      return new Response("Invalid email", { status: 400 });
    }
    // Save the address with your own application code.
    return ctx.redirect("/thanks", 303);
  },
};

export default class Subscribe extends PageComponent {
  override render() {
    return html`
      <form method="post">
        <label>Email <input type="email" name="email" required /></label>
        <button type="submit">Subscribe</button>
      </form>
    `;
  }
}
```

`request.formData()` handles form bodies using the platform API. Returning a 303
after a successful POST sends the browser to a GET page. Define the destination
route in your app.
