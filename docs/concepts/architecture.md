---
category: Concepts
title: Architecture
---

Limette is a full-stack framework, built on **Deno** for server side and **Lit** for client side. It is designed around the [islands architecture](https://www.patterns.dev/vanilla/islands-architecture) pattern. This pattern gives a lot of flexibility for many types of apps:

- Server Side Rendered (SSR) apps
- Hybrid apps (SSR + CSR)
- Single Page Apps (SPA)

Apps built with Limette should be fast. Only HTML is sent to the browser by default and JavaScript code for the interactive parts (islands).
