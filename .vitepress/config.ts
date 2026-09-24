import { defineConfig } from "vitepress";
import sidebar from "../_data/sidebar.json" with { type: "json" };

const site = "https://limette.dev";
const homeDescription =
  "Limette is a full-stack framework for Web Components (Lit) and Deno, with support for SSR, island based architecture, TypeScript and Tailwind out of the box.";
const docsDescription =
  "Docs for Limette. Learn more about how you can get started, concepts and examples.";

export default defineConfig({
  title: "Limette",
  description: docsDescription,
  lang: "en-US",
  srcExclude: ["README.md"],
  sitemap: { hostname: site },
  head: [
    ["link", { rel: "icon", href: "/assets/images/favicon.ico" }],
    ["meta", { property: "og:site_name", content: "Limette" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@limettejs" }],
    ["meta", { name: "twitter:creator", content: "@limettejs" }],
    ["script", {
      async: "",
      src: "https://www.googletagmanager.com/gtag/js?id=G-6EEESS2P5F",
    }],
    [
      "script",
      {},
      "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-6EEESS2P5F');",
    ],
  ],
  transformHead({ page, title }) {
    const home = page === "index.md";
    const path = home
      ? "/"
      : `/${page.replace(/(?:\/index)?\.md$/, "/").replace(/\/$/, "")}/`;
    const url = `${site}${path}`;
    const description = home ? homeDescription : docsDescription;
    const image = `${site}/assets/images/${home ? "og.png" : "og-docs.png"}`;
    return [
      ["link", { rel: "canonical", href: url }],
      ["meta", { name: "description", content: description }],
      ["meta", { property: "og:title", content: title }],
      ["meta", { property: "og:description", content: description }],
      ["meta", { property: "og:url", content: url }],
      ["meta", { property: "og:image", content: image }],
      ["meta", { property: "og:image:type", content: "image/png" }],
      ["meta", { property: "og:image:width", content: "1200" }],
      ["meta", { property: "og:image:height", content: "630" }],
      ["meta", { name: "twitter:title", content: title }],
      ["meta", { name: "twitter:description", content: description }],
      ["meta", { name: "twitter:image", content: image }],
    ];
  },
  themeConfig: {
    logo: "/assets/images/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/" },
      { text: "GitHub", link: "https://github.com/limettejs/limette" },
    ],
    sidebar: {
      "/docs/": sidebar.links.map(({ title, items }) => ({
        text: title,
        items: items.map(({ title: text, url: link }) => ({ text, link })),
      })),
    },
    outline: "deep",
    docFooter: { prev: "Previous", next: "Next" },
    search: { provider: "local" },
    socialLinks: [{
      icon: "github",
      link: "https://github.com/limettejs/limette",
    }],
  },
});
