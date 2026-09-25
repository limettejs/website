---
title: Project structure
---

# Project structure

A generated project starts with these files (with `tailwind.css` only when
Tailwind is selected):

```text
my-app/
├── .gitignore
├── app.ts
├── islands/
│   └── counter.ts
├── main.js or main.ts
├── package.json
├── public/
├── routes/
│   ├── _app.ts
│   ├── foo.ts
│   └── index.ts
├── tailwind.css            # optional
└── vite.config.ts
```

| Path                               | Purpose                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------- |
| `app.ts`                           | Creates an `App` and enables filesystem routes.                            |
| `routes/_app.ts`                   | Defines the HTML document and places route content and Vite assets.        |
| `routes/index.ts`, `routes/foo.ts` | Define pages and optional HTTP handlers.                                   |
| `islands/counter.ts`               | Defines an interactive Lit component used by a route.                      |
| `public/`                          | Holds files Vite copies to the client output.                              |
| `vite.config.ts`                   | Installs the `limette/vite` plugin, and optionally Tailwind's Vite plugin. |
| `main.js` or `main.ts`             | Serves the built handler with the Node or Deno adapter.                    |

Both variants use the same `package.json` scripts: `dev` runs `vite`, `build`
runs `vite build`, and `start` runs the runtime-specific launcher. The Node
starter writes `main.js`; the Deno starter writes `main.ts`. A production build
creates `dist/client` and `dist/server/entry.js`.
