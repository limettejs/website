---
category: Concepts
title: Routing
---

Limette supports file based routing. It's inspired from frameworks like Next.js or Fresh.

Here are the most common scenarios:

| **File name**               | **Route pattern**      | **Matching paths**                      |
| --------------------------- | ---------------------- | --------------------------------------- |
| `index.ts`                  | `/`                    | `/`                                     |
| `about.ts`                  | `/about`               | `/about`                                |
| `blog/index.ts`             | `/blog`                | `/blog`                                 |
| `blog/[slug].ts`            | `/blog/:slug`          | `/blog/foo`, `/blog/bar`                |
| `blog/[slug]/comments.ts`   | `/blog/:slug/comments` | `/blog/foo/comments`                    |
| `blog/[slug]/comments.ts`   | `/blog/:slug/comments` | `/blog/foo/comments`                    |
| `old/[...path].ts`          | `/old/:path*`          | `/old/foo`, `/old/bar/baz`              |
| `docs/[[version]]/index.ts` | `/docs{/:version}?`    | `/docs`, `/docs/latest`, `/docs/canary` |
