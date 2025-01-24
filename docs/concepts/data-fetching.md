---
category: Concepts
title: Data fetching
---

Data fetching on server side in Limette is done through async custom handlers. The custom handler can fetch any data and then can call the `ctx.render()` method with the data to be rendered as an argument. This data can then be accessed from `this.ctx.data.` property.

```js
// routes/post/[id].ts
import { LitElement, html } from "lit";
import { type Handlers, ContextMixin } from "@limette/core";

export const handler: Handlers = {
  async GET(ctx) {
    const post = await db.projects.findOne({ id: ctx.params.id });
    return ctx.render(post);
  },
};

export default class Post extends ContextMixin(LitElement) {
  override render() {
    return html`
      <div>
        <h1>${this.ctx.data.title}</h1>
      </div>
    `;
  }
}
```

Right now, this is the only method to fetch data on server side. In the future we might add **async server components** which will let you to fetch data right from your `render()` method.
