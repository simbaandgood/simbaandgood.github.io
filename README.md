# Simba & Good — website (Astro)

Marketing site + blog for Simba & Good, built with [Astro](https://astro.build).
Shared layout and components, a Markdown-powered blog (content collection), and
a GitHub Actions workflow that builds and deploys to GitHub Pages.

## Run locally
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
```
Requires Node 18+.

## Project structure
```
src/
  components/   Navbar.astro, Footer.astro
  layouts/      Base.astro (shell + nav/footer), BlogPost.astro
  styles/       global.css (design tokens + shared styles)
  content/
    config.ts   blog collection schema
    blog/       one .md file per post
  pages/
    index.astro, welfare-plan.astro, shop.astro, for-brands.astro,
    contact.astro, privacy.astro, terms.astro, 404.astro
    stories/    index.astro (list) + [...slug].astro (post route)
public/
  CNAME, .nojekyll, images/   (put Simba.jpg here)
```

## Add a blog post
Create `src/content/blog/my-post.md`:
```
---
title: "My post title"
description: "One-line summary."
pubDate: 2026-09-01
tags: ["care"]
---

Your **Markdown** here.
```
It appears automatically at `/stories/my-post`.

## Deploy to GitHub Pages
1. Push to a fresh repo's `main` branch.
2. Settings -> Pages -> Build and deployment -> Source: **GitHub Actions**.
3. The included workflow (.github/workflows/deploy.yml) builds and deploys on every push.
4. Custom domain: `public/CNAME` already targets simbaandgood.com — set that domain
   under Settings -> Pages and keep DNS pointed at GitHub Pages.

## Fill these in before launch
- public/images/Simba.jpg  — add your Simba photo
- src/pages/shop.astro      — replace every buy.stripe.com/REPLACE_ME with real Stripe Payment Links
- src/pages/contact.astro   — replace formspree.io/f/REPLACE_ME with your form endpoint
- email                     — replace hello@simbaandgood.com if different
- src/pages/privacy.astro & terms.astro — fill every [BRACKETED] field, then have a
  lawyer review (Thai PDPA, GDPR, Apple App Store). These are templates, not final documents.

## Design tokens (src/styles/global.css)
paper #FAF8F3 · ink #1A1A1A · forest #234B3E · gold #C99242 · Fonts: Fraunces + Inter
