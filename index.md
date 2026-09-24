---
layout: home
title: Limette
titleTemplate: The full-stack framework for Web Components
description: Limette is a full-stack framework for Web Components (Lit) and Deno, with support for SSR, island based architecture, TypeScript and Tailwind out of the box.
hero:
  name: Limette
  text: The framework for Web Components and Deno
  tagline: A full-stack framework for Lit and Deno, with support for Tailwind.
  image:
    src: /assets/images/logo.svg
    alt: Limette logo
  actions:
    - theme: brand
      text: Get Started
      link: /docs/
    - theme: alt
      text: View on GitHub
      link: https://github.com/limettejs/limette
features:
  - title: Web Components
    details: Build your interface with Lit and browser-native Web Components.
  - title: Deno and TypeScript
    details: Work with TypeScript on the server and client.
  - title: Islands architecture
    details: Add interactivity where your page needs it.
  - title: Tailwind support
    details: Style your application with Tailwind.
---

## Install Limette

```sh
deno run -A jsr:@limette/init
cd limette-project
deno task dev
```
