---
title: Routing
---

# Routing

Limette supports filesystem routes and imperative route registration. Filesystem
routing is enabled by `app.fsRoutes()` and discovered by `limette/vite`. Route
files may use `.ts` or `.js`.

## Filesystem routes

| File under `routes/`        | Path                                      |
| --------------------------- | ----------------------------------------- |
| `index.ts`                  | `/`                                       |
| `about.ts`                  | `/about`                                  |
| `blog/index.ts`             | `/blog`                                   |
| `blog/[slug].ts`            | `/blog/:slug`                             |
| `blog/[slug]/comments.ts`   | `/blog/:slug/comments`                    |
| `docs/[[version]]/index.ts` | `/docs` or `/docs/:version`               |
| `files/[...path].ts`        | `/files` or a suffix such as `/files/a/b` |

A static segment is preferred over a required parameter, then an optional
parameter, then a catch-all. A more specific filesystem route wins among routes
that handle the same method. Equivalent filesystem matchers are rejected at
build time; for example, `blog.ts` and `blog/index.ts` cannot both define
`/blog`.

A route with a default page component handles GET automatically. Export
`handler` to handle other methods or customize GET. A `handler` can also define
a response-only route without a page. See
[Route handlers](/docs/getting-started/custom-handlers/).

## Imperative routes

```ts
import { App } from "limette";

export const app = new App()
  .get("/health", () => Response.json({ ok: true }))
  .post(
    "/messages",
    async (ctx) => new Response(await ctx.request.text(), { status: 201 }),
  );
```

`App` provides `get`, `post`, `put`, `patch`, `delete`, `head`, `options`, and
`all`. Paths can be strings or `URLPattern` values. Multiple handlers on one
route run in order through `ctx.next()`. Imperative registrations made before
filesystem routes take precedence for overlapping methods and paths; registering
the same method and matcher twice is an error. Filesystem and imperative routes
can handle different methods on the same path.

## Methods and path policy

The default `trailingSlash` policy is `never`: a non-root request ending in `/`
gets a 308 redirect to the path without it. Set `trailingSlash: 'always'` to
redirect the other way. Query strings are retained. `basePath` prefixes
registered string routes; see [Configuration](/docs/concepts/configs/).

An unmatched path returns 404. A path with handlers for other methods returns
405 and an `Allow` header. HEAD uses an explicit HEAD handler when present,
otherwise the matching GET handler, then sends no body. OPTIONS returns 204 with
`Allow` unless you register an explicit OPTIONS handler. Global and `all`
middleware still run around these responses.

[Dynamic routes](/docs/getting-started/dynamic-routes/) explains request-local
params and decoding.
