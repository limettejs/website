---
title: Tailwind CSS
---

# Tailwind CSS

The initializer can create a Tailwind CSS v4 project. Run
`npm create limette@latest` and choose **Tailwind CSS: Yes**. This adds
`tailwindcss`, `@tailwindcss/vite`, `tailwind.css`, and the Vite plugin
configuration.

The generated CSS entry contains:

```css
@import "tailwindcss";
```

The generated Vite configuration includes both plugins:

```ts
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { limette } from "limette/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    limette({ app: "./app.ts", tailwind: "./tailwind.css" }),
  ],
});
```

The Tailwind setup considers classes used by the route, its app document and
layouts, and imported islands and components. Limette produces route-specific
styles in development and production. Ordinary CSS imports and Lit component
styles still work alongside Tailwind.

To add Tailwind to a project created without it, install `tailwindcss` and
`@tailwindcss/vite`, add the CSS entry above, and configure both Vite plugins as
shown. To remove it, remove the Tailwind plugin, `tailwind` option, CSS entry,
and dependencies.
